import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";
const ALLOWED_DOMAIN = "botami-agency.com";

const BodySchema = z.object({
  email: z.string().email(),
  displayName: z.string().max(255).optional(),
});

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const parsed = BodySchema.safeParse(await req.json());
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const { email, displayName } = parsed.data;

    // Server-side domain validation
    const domain = email.split("@")[1]?.toLowerCase();
    if (domain !== ALLOWED_DOMAIN) {
      return new Response(
        JSON.stringify({ error: `Seules les adresses @${ALLOWED_DOMAIN} sont autorisées.` }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const name = displayName || email.split("@")[0];

    const response = await fetch(`${GATEWAY_URL}/emails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "X-Connection-Api-Key": RESEND_API_KEY,
      },
      body: JSON.stringify({
        from: "Botami Software <onboarding@resend.dev>",
        to: [email],
        subject: "Bienvenue sur Botami Software",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <h1 style="color: #1A1A1A; font-size: 24px; margin-bottom: 16px;">Bienvenue, ${name} 👋</h1>
            <p style="color: #555; font-size: 16px; line-height: 1.6;">
              Votre compte sur <strong>Botami Software</strong> a bien été créé.
            </p>
            <p style="color: #555; font-size: 16px; line-height: 1.6;">
              Vous pouvez maintenant vous connecter à l'espace d'administration pour gérer vos landing pages et suivre vos projets.
            </p>
            <div style="margin: 32px 0;">
              <a href="https://botami-grow-code.lovable.app/admin" 
                 style="background-color: #1A1A1A; color: #fff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-size: 16px;">
                Accéder au backoffice
              </a>
            </div>
            <p style="color: #999; font-size: 13px; margin-top: 40px;">
              Botami Software — Entreprise française
            </p>
          </div>
        `,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(`Resend API failed [${response.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Error sending signup email:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ error: errorMessage }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
