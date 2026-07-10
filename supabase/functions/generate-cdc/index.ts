import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { createClient } from "npm:@supabase/supabase-js@2";

const SYSTEM_PROMPT = `Tu es un consultant qui rédige un cahier des charges court et crédible (1 à 2 pages) pour une application métier sur mesure, en français. Tu ne fais pas un CDC parfait : tu fais un CDC de cadrage clair à partir de réponses brèves. Structure EXACTE, 6 sections :

1. Contexte client — secteur/activité, outil(s) actuel(s), problèmes que ça pose.

2. Objectifs — ce que l'outil doit accomplir, quels processus il remplace.

3. Utilisateurs — rôles, nombre approximatif, usage terrain/bureau.

4. Fonctionnalités — pour CHAQUE fonctionnalité demandée : une description en une phrase, un critère d'acceptation formulé "L'utilisateur peut…" ou "Le système affiche…", et une priorité P0 (indispensable) / P1 (important) / P2 (souhaitable). Les fonctionnalités explicitement demandées = P0 ; propose 2 à 4 P1/P2 crédibles pour ce métier.

5. Contraintes techniques — plateforme (web/mobile), intégrations demandées, hébergement chez le client, conformité si pertinent (ex. facturation électronique).

6. Périmètre & suite — ce qui est hors V1 mais possible ensuite, et la mention : "Diagnostic et cahier des charges affiné : gratuit avec un expert Botami."

Ton factuel, phrases courtes, pas de superlatifs, pas de promesse chiffrée de délai ou de performance. Rends du Markdown propre.`;

const asArray = (v: unknown): string[] =>
  Array.isArray(v) ? v.map(String) : v == null || v === "" ? [] : [String(v)];

// ── A) Calcul déterministe du prix (jamais l'IA) ──────────────────
function computePricing(answers: Record<string, unknown>) {
  let score = 0;

  // Q3 — modules cochés (fonctions)
  const modules = asArray(answers.fonctions).length;
  if (modules >= 5) score += 2;
  else if (modules >= 3) score += 1;

  // Q4 — rôles (utilisateurs)
  const roles = String(answers.utilisateurs ?? "");
  if (/accès client/i.test(roles)) score += 2;
  else if (/droits différents|plusieurs/i.test(roles)) score += 1;

  // Q5 — intégrations
  const integrations = asArray(answers.integrations).filter(
    (i) => !/aucun/i.test(i),
  );
  const hasCompta = integrations.some((i) =>
    /compta|facturation électronique/i.test(i),
  );
  if (integrations.length >= 3 || hasCompta) score += 2;
  else if (integrations.length >= 1) score += 1;

  // Q6 — migration (reprise)
  const reprise = String(answers.reprise ?? "");
  if (/excel|autre logiciel/i.test(reprise)) score += 1;

  // Q7 — plateforme (usage)
  const usage = String(answers.usage ?? "");
  if (/mobile|deux/i.test(usage)) score += 1;

  let palier: string, fourchette_min: number, fourchette_max: number, delai: string;
  if (score >= 6) {
    palier = "complexe";
    fourchette_min = 12000;
    fourchette_max = 15000;
    delai = "7 à 9 semaines";
  } else if (score >= 3) {
    palier = "standard";
    fourchette_min = 8000;
    fourchette_max = 12000;
    delai = "5 à 7 semaines";
  } else {
    palier = "simple";
    fourchette_min = 5000;
    fourchette_max = 8000;
    delai = "4 à 5 semaines";
  }

  return { score, palier, fourchette_min, fourchette_max, delai };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const answers: Record<string, unknown> = body?.answers ?? {};
    const email: string | undefined = body?.email;
    const phone: string | null = body?.phone ?? null;
    const consent: boolean = !!body?.consent;
    const utm = body?.utm ?? {};
    const sourceRoute: string = body?.sourceRoute ?? "/gestion-intervention";

    if (!email) {
      return new Response(JSON.stringify({ error: "email requis" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // A) Prix déterministe
    const pricing = computePricing(answers);

    // B) Génération du CDC via LLM
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "LOVABLE_API_KEY manquant" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const userMessage = `Réponses au questionnaire :\n${JSON.stringify(answers, null, 2)}`;

    const aiRes = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "openai/gpt-5.5",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userMessage },
        ],
      }),
    });

    if (!aiRes.ok) {
      const errText = await aiRes.text();
      const status = aiRes.status === 429 || aiRes.status === 402 ? aiRes.status : 500;
      return new Response(
        JSON.stringify({ error: "Génération du cahier des charges impossible", detail: errText }),
        { status, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const aiData = await aiRes.json();
    const cdc_markdown: string = aiData?.choices?.[0]?.message?.content ?? "";

    // Enregistrement du lead complet (service role, contourne RLS)
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    await supabase.from("leads").insert({
      first_name: "Lead cahier des charges",
      email,
      phone,
      source_route: sourceRoute,
      activite: String(answers.activite ?? ""),
      reponses: answers,
      score: pricing.score,
      palier: pricing.palier,
      fourchette_min: pricing.fourchette_min,
      fourchette_max: pricing.fourchette_max,
      delai: pricing.delai,
      cdc_markdown,
      utm_source: utm.utm_source || null,
      utm_medium: utm.utm_medium || null,
      utm_campaign: utm.utm_campaign || null,
      utm_term: utm.utm_term || null,
      consentement: consent,
    });

    return new Response(
      JSON.stringify({
        cdc_markdown,
        fourchette_min: pricing.fourchette_min,
        fourchette_max: pricing.fourchette_max,
        delai: pricing.delai,
        palier: pricing.palier,
      }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (e) {
    return new Response(
      JSON.stringify({ error: String(e) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
