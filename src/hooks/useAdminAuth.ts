import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User, Session } from "@supabase/supabase-js";

export function useAdminAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    let mounted = true;

    const checkAdmin = async (email: string) => {
      try {
        const { data } = await supabase.rpc("is_admin_email" as any, {
          check_email: email,
        });
        if (mounted) setIsAdmin(!!data);
      } catch {
        if (mounted) setIsAdmin(false);
      }
    };

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!mounted) return;
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user?.email) {
        checkAdmin(session.user.email).finally(() => {
          if (mounted) setLoading(false);
        });
      } else {
        setLoading(false);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return;
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user?.email) {
        checkAdmin(session.user.email);
      } else {
        setIsAdmin(false);
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const sendMagicLink = async (email: string) => {
    // Check allowlist first (security definer function, bypasses RLS)
    const { data: isAllowed } = await supabase.rpc("is_admin_email" as any, {
      check_email: email,
    });
    if (!isAllowed) {
      // Don't leak info — return success silently
      return { error: null };
    }
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/admin/leads`,
      },
    });
    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
  };

  return { user, session, loading, isAdmin, sendMagicLink, signOut };
}
