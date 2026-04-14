import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

type Status = "loading" | "valid" | "already" | "invalid" | "done" | "error";

const Unsubscribe = () => {
  const [status, setStatus] = useState<Status>("loading");
  const token = new URLSearchParams(window.location.search).get("token");

  useEffect(() => {
    if (!token) { setStatus("invalid"); return; }
    fetch(`${SUPABASE_URL}/functions/v1/handle-email-unsubscribe?token=${token}`, {
      headers: { apikey: SUPABASE_ANON_KEY },
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.valid === false && d.reason === "already_unsubscribed") setStatus("already");
        else if (d.valid) setStatus("valid");
        else setStatus("invalid");
      })
      .catch(() => setStatus("error"));
  }, [token]);

  const handleUnsubscribe = async () => {
    const { data } = await supabase.functions.invoke("handle-email-unsubscribe", { body: { token } });
    if (data?.success) setStatus("done");
    else if (data?.reason === "already_unsubscribed") setStatus("already");
    else setStatus("error");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center space-y-6">
        {status === "loading" && <p className="text-muted-foreground">Vérification…</p>}
        {status === "valid" && (
          <>
            <h1 className="text-2xl font-heading font-bold">Se désinscrire</h1>
            <p className="text-muted-foreground">Vous ne recevrez plus d'emails de notre part.</p>
            <button
              onClick={handleUnsubscribe}
              className="inline-block bg-primary text-primary-foreground rounded-lg px-6 py-3 font-semibold hover:opacity-90 transition"
            >
              Confirmer la désinscription
            </button>
          </>
        )}
        {status === "done" && (
          <>
            <h1 className="text-2xl font-heading font-bold">Désinscription confirmée</h1>
            <p className="text-muted-foreground">Vous avez été désinscrit avec succès.</p>
          </>
        )}
        {status === "already" && (
          <>
            <h1 className="text-2xl font-heading font-bold">Déjà désinscrit</h1>
            <p className="text-muted-foreground">Vous êtes déjà désinscrit de nos emails.</p>
          </>
        )}
        {status === "invalid" && (
          <>
            <h1 className="text-2xl font-heading font-bold">Lien invalide</h1>
            <p className="text-muted-foreground">Ce lien de désinscription n'est pas valide ou a expiré.</p>
          </>
        )}
        {status === "error" && (
          <>
            <h1 className="text-2xl font-heading font-bold">Erreur</h1>
            <p className="text-muted-foreground">Une erreur est survenue. Veuillez réessayer plus tard.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Unsubscribe;
