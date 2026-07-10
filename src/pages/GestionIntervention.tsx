import { useEffect, useMemo, useState } from "react";
import { Check } from "lucide-react";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/seo/SEO";
import { Eyebrow, Btn, BtnSubmit, ArrowRightIcon } from "@/components/home/atoms";
import { supabase } from "@/integrations/supabase/client";

const CALENDLY_URL = "https://calendly.com/elias-botami-agency/30min";
const ROUTE = "/gestion-intervention";

/* ---------- Questionnaire ---------- */
type Question = {
  id: string;
  label: string;
  multi?: boolean;
  options: string[];
  tip: string;
};

const QUESTIONS: Question[] = [
  {
    id: "activite",
    label: "Votre activité ?",
    options: ["Maintenance", "SAV", "Installation", "Dépannage", "Nettoyage", "Sécurité", "Autre"],
    tip: "Bon à savoir : un outil pensé pour votre métier précis évite les 40 % de champs inutiles des logiciels génériques. On part toujours de votre vocabulaire, pas de l'inverse.",
  },
  {
    id: "actuel",
    label: "Aujourd'hui, vous gérez vos interventions avec quoi ?",
    options: ["Excel", "Agenda partagé", "Plusieurs outils", "Un logiciel", "Papier + téléphone"],
    tip: "Conseil : listez vos 3 outils actuels et le temps de ressaisie entre chacun. C'est souvent là que se cachent 3 à 5 h perdues par semaine — le premier poste à digitaliser.",
  },
  {
    id: "fonctions",
    label: "L'outil doit faire quoi ?",
    multi: true,
    options: [
      "Planning des interventions",
      "Affectation des techniciens",
      "Fiche & rapport d'intervention",
      "Suivi terrain mobile",
      "Devis & factures",
      "Clients & contrats",
      "Stock de pièces",
      "Signature client",
      "Photos",
    ],
    tip: "Astuce : commencez par 2-3 fonctions vraiment critiques plutôt qu'une usine à gaz. Un périmètre resserré se livre plus vite et s'adopte mieux par les équipes.",
  },
  {
    id: "utilisateurs",
    label: "Qui l'utilise ?",
    options: [
      "Moi seul",
      "Mes techniciens sur le terrain",
      "Bureau + terrain avec droits différents",
      "+ un accès client",
    ],
    tip: "Repère : dès qu'il y a du terrain, prévoyez des droits différenciés. Un technicien ne doit voir que sa tournée du jour — ça simplifie l'usage et protège vos données clients.",
  },
  {
    id: "integrations",
    label: "Il doit se connecter à quoi ?",
    multi: true,
    options: ["Compta", "Facturation électronique", "Email / SMS", "Agenda", "Aucun"],
    tip: "À noter : la facturation électronique devient obligatoire pour les PME. Autant l'anticiper dès maintenant dans votre cahier des charges plutôt que de recâbler plus tard.",
  },
  {
    id: "reprise",
    label: "Des données à reprendre ?",
    options: ["Un Excel", "Un autre logiciel", "Non"],
    tip: "Conseil : gardez une copie propre de votre base actuelle (clients, contrats). Une reprise bien préparée, c'est un démarrage sans re-saisir des mois d'historique.",
  },
  {
    id: "usage",
    label: "Utilisé où ?",
    options: ["Bureau", "Mobile terrain", "Les deux"],
    tip: "Bon réflexe : si vos équipes sont sur le terrain, exigez un mode hors-ligne. Une intervention en zone sans réseau ne doit jamais bloquer un rapport.",
  },
  {
    id: "volume",
    label: "Combien d'interventions par mois environ ?",
    options: ["Moins de 50", "50 à 200", "Plus de 200"],
    tip: "Repère : au-delà de 200 interventions/mois, l'automatisation des relances et de la planification rapporte plus que n'importe quelle nouvelle recrue au planning.",
  },
];

type Answers = Record<string, string | string[]>;
type Phase = "intro" | "quiz" | "gate" | "result";

/* ---------- Résultat (généré côté serveur) ---------- */
type CdcResult = {
  cdc_markdown: string;
  fourchette_min: number;
  fourchette_max: number;
  delai: string;
  palier: string;
};

const fmtEur = (n: number) => n.toLocaleString("fr-FR");



const GestionIntervention = () => {
  const [phase, setPhase] = useState<Phase>("intro");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState<CdcResult | null>(null);
  const [error, setError] = useState("");

  // Capture UTM
  const utm = useMemo(() => {
    const p = new URLSearchParams(window.location.search);
    return {
      utm_source: p.get("utm_source") || "",
      utm_medium: p.get("utm_medium") || "",
      utm_campaign: p.get("utm_campaign") || "",
      utm_term: p.get("utm_term") || "",
    };
  }, []);

  useEffect(() => {
    document.body.classList.add("bo-grain");
    supabase.from("landing_page_events").insert({ route: ROUTE, event_type: "page_view" }).then();
    return () => document.body.classList.remove("bo-grain");
  }, []);

  const current = QUESTIONS[step];
  const progress = Math.round(((step + (phase === "gate" ? 1 : 0)) / QUESTIONS.length) * 100);

  const toggleAnswer = (q: Question, opt: string) => {
    setAnswers((prev) => {
      if (q.multi) {
        const arr = Array.isArray(prev[q.id]) ? (prev[q.id] as string[]) : [];
        const next = arr.includes(opt) ? arr.filter((o) => o !== opt) : [...arr, opt];
        return { ...prev, [q.id]: next };
      }
      return { ...prev, [q.id]: opt };
    });
  };

  const goNext = () => {
    setStep((s) => {
      if (s < QUESTIONS.length - 1) return s + 1;
      setPhase("gate");
      return s;
    });
  };

  const isSelected = (q: Question, opt: string) => {
    const v = answers[q.id];
    return Array.isArray(v) ? v.includes(opt) : v === opt;
  };

  const currentAnswered = current
    ? current.multi
      ? Array.isArray(answers[current.id]) && (answers[current.id] as string[]).length > 0
      : !!answers[current.id]
    : false;

  const handleGateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent || submitted) return;
    setSubmitted(true);
    setError("");
    (window as any).gtag_report_lead_form?.();
    trackEvent("lead_email");

    try {
      const { data, error: fnError } = await supabase.functions.invoke("generate-cdc", {
        body: { answers, email, phone: phone || null, consent, utm, sourceRoute: ROUTE },
      });
      if (fnError || !data?.cdc_markdown) {
        throw new Error(fnError?.message || "Génération impossible");
      }

      setResult(data as CdcResult);
      supabase.from("landing_page_events").insert({ route: ROUTE, event_type: "cta_click" }).then();

      // Notification interne
      const templateData = {
        firstName: "Lead cahier des charges",
        email,
        phone: phone || undefined,
        sourceRoute: ROUTE,
        message: JSON.stringify({ answers, utm, pricing: {
          palier: data.palier, fourchette_min: data.fourchette_min,
          fourchette_max: data.fourchette_max, delai: data.delai,
        } }, null, 2),
      };
      ["elias@botami-agency.com", "theo@botami-agency.com"].forEach((recipient) => {
        supabase.functions.invoke("send-transactional-email", {
          body: {
            templateName: "new-lead-notification",
            recipientEmail: recipient,
            idempotencyKey: `cdc-notif-${email}-${recipient}-${Date.now()}`,
            templateData,
          },
        });
      });

      setPhase("result");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError("Une erreur est survenue. Réessayez dans un instant.");
      setSubmitted(false);
    }
  };

  const handleDownloadPdf = () => {
    if (!result) return;
    const esc = (s: string) =>
      s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8" />
      <title>Cahier des charges - Logiciel de gestion d'intervention</title>
      <style>
        body{font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#1a1a1a;max-width:720px;margin:40px auto;padding:0 24px;line-height:1.6;white-space:pre-wrap}
        h1{font-size:24px}
      </style></head><body>${esc(result.cdc_markdown)}</body></html>`;
    const w = window.open("", "_blank");
    if (!w) return;
    w.document.write(html);
    w.document.close();
    w.focus();
    setTimeout(() => w.print(), 300);
  };


  return (
    <>
      <SEO
        title="Cahier des charges gratuit — Logiciel de gestion d'intervention"
        description="8 questions, des conseils concrets à chaque étape, et votre cahier des charges prêt à l'emploi — gratuit, à garder même si vous consultez ailleurs."
        canonical={ROUTE}
        keywords="cahier des charges gratuit, logiciel gestion intervention, application métier sur mesure, planning techniciens, rapport d'intervention"
      />
      <Navbar />
      <main className="bg-cream min-h-screen">
        <div className="bo-wrap py-14 sm:py-20">
          <div className="max-w-3xl mx-auto">
            {/* ===== 1. INTRO ===== */}
            {phase === "intro" && (
              <div className="text-center">
                <Eyebrow className="text-ambre-dark">Cadeau · gratuit · &lt; 2 min</Eyebrow>
                <h1 className="font-display font-semibold tracking-[-0.03em] text-ink text-[34px] sm:text-[48px] leading-[1.05] mt-4">
                  Le cahier des charges de votre logiciel de gestion d'intervention — gratuit, en 2 minutes.
                </h1>
                <p className="text-n-700 text-[17px] leading-[1.6] mt-6 max-w-2xl mx-auto">
                  Aucun outil du marché ne colle vraiment à votre façon de travailler. Répondez à
                  8 questions : on vous génère le cahier des charges de l'outil qu'il vous faudrait —
                  un document clair, à vous, prêt à l'emploi.
                </p>
                <div className="mt-9 flex justify-center">
                  <Btn href="#" onClick={(e) => { e.preventDefault(); setPhase("quiz"); }}>
                    Je génère mon cahier des charges
                  </Btn>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-n-500 mt-4">
                  Gratuit · sans engagement
                </p>
              </div>
            )}

            {/* ===== 2. QUIZ ===== */}
            {phase === "quiz" && current && (
              <div>
                {/* progress */}
                <div className="mb-8">
                  <div className="flex justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-n-500 mb-2">
                    <span>Question {step + 1} / {QUESTIONS.length}</span>
                    <span>{progress}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-n-300 overflow-hidden">
                    <div
                      className="h-full bg-ambre transition-all duration-500 ease-out"
                      style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                    />
                  </div>
                </div>

                <div key={current.id} className="animate-fade-up">
                  <h2 className="font-display font-semibold tracking-[-0.02em] text-ink text-[26px] sm:text-[30px] leading-[1.15]">
                    {current.label}
                  </h2>
                  {current.multi && (
                    <p className="text-n-500 text-sm mt-2">Plusieurs choix possibles.</p>
                  )}

                  <div className="grid sm:grid-cols-2 gap-3 mt-7">
                    {current.options.map((opt) => {
                      const sel = isSelected(current, opt);
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => toggleAnswer(current, opt)}
                          className={[
                            "flex items-center justify-between text-left rounded-xl border-[1.5px] px-5 py-4 text-[15px] transition-all bo-focus",
                            sel
                              ? "border-ambre bg-ambre-bg text-ink"
                              : "border-n-300 bg-white text-ink hover:border-ambre hover:-translate-y-0.5",
                          ].join(" ")}
                        >
                          <span>{opt}</span>
                          {sel && (
                            <span className="grid place-items-center w-5 h-5 rounded-full bg-ambre text-white flex-none">
                              <Check size={13} strokeWidth={3} />
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Conseil offert à chaque étape */}
                  {currentAnswered && (
                    <div className="mt-6 rounded-xl bg-ambre-bg border border-ambre/60 p-4 sm:p-5 animate-fade-up">
                      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ambre-dark mb-1.5">
                        Le conseil Botami
                      </p>
                      <p className="text-n-700 text-[15px] leading-[1.6]">{current.tip}</p>
                    </div>
                  )}

                  <div className="flex items-center justify-between mt-8">
                    <button
                      type="button"
                      onClick={() => (step === 0 ? setPhase("intro") : setStep((s) => s - 1))}
                      className="text-sm text-n-500 hover:text-ink transition-colors"
                    >
                      ← Retour
                    </button>
                    <button
                      type="button"
                      onClick={goNext}
                      disabled={!currentAnswered}
                      className="inline-flex items-center gap-2 px-[18px] py-3 rounded-[10px] text-sm font-medium bg-ambre text-white hover:bg-ambre-dark transition-colors bo-focus disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {step === QUESTIONS.length - 1 ? "Voir mon cahier des charges" : "Continuer"}{" "}
                      <ArrowRightIcon className="w-[14px] h-[14px]" />
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* ===== 3. GATE ===== */}
            {phase === "gate" && (
              <div className="max-w-xl mx-auto animate-fade-up">
                <div className="mb-6 h-1.5 rounded-full bg-n-300 overflow-hidden">
                  <div className="h-full bg-ambre" style={{ width: "100%" }} />
                </div>
                <Eyebrow className="text-ambre-dark">Dernière étape</Eyebrow>
                <h2 className="font-display font-semibold tracking-[-0.02em] text-ink text-[28px] sm:text-[32px] leading-[1.15] mt-3">
                  Où vous envoie-t-on votre cahier des charges ?
                </h2>
                <p className="text-n-700 mt-3">
                  On vous l'affiche tout de suite et on vous en envoie une copie propre par email —
                  à garder, réutiliser, ou transmettre à qui vous voulez.
                </p>

                <form
                  onSubmit={handleGateSubmit}
                  className="mt-7 rounded-2xl bg-white border border-n-300 p-6 sm:p-8 space-y-5 shadow-subtle"
                >
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5">
                      Email <span className="text-ambre">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="votre@email.com"
                      className="w-full rounded-lg border border-n-300 px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-ambre focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-ink mb-1.5">
                      Téléphone — je préfère être rappelé
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="06 12 34 56 78"
                      className="w-full rounded-lg border border-n-300 px-4 py-3 text-[15px] focus:outline-none focus:ring-2 focus:ring-ambre focus:border-transparent"
                    />
                  </div>
                  <label className="flex items-start gap-3 text-sm text-n-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="mt-1 w-4 h-4 accent-ambre flex-none"
                    />
                    <span>
                      J'accepte que Botami Software utilise ces informations pour me recontacter au
                      sujet de mon projet, conformément à la{" "}
                      <a href="/politique-de-confidentialite" className="underline hover:text-ink">
                        politique de confidentialité
                      </a>
                      .
                    </span>
                  </label>
                  {error && <p className="text-sm text-red-600">{error}</p>}
                  <BtnSubmit variant="primary" fullWidth disabled={!consent || submitted}>
                    {submitted ? "Génération en cours…" : "Recevoir mon cahier des charges"}
                  </BtnSubmit>
                </form>
              </div>
            )}

            {/* ===== 4. RÉSULTAT ===== */}
            {phase === "result" && (
              <div className="animate-fade-up">
                <Eyebrow className="text-ambre-dark">Votre cahier des charges</Eyebrow>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mt-3">
                  <h2 className="font-display font-semibold tracking-[-0.03em] text-ink text-[30px] sm:text-[40px] leading-[1.08]">
                    Votre cahier des charges
                  </h2>
                  <button
                    type="button"
                    onClick={handleDownloadPdf}
                    className="inline-flex items-center gap-2 px-[18px] py-3 rounded-[10px] text-sm font-medium bg-ambre text-white hover:bg-ambre-dark transition-colors bo-focus flex-none"
                  >
                    Télécharger en PDF
                    <ArrowRightIcon className="w-[14px] h-[14px]" />
                  </button>
                </div>
                <p className="text-n-700 leading-[1.6] mt-4 max-w-2xl">
                  Voici le document, à vous. Une copie vient de partir dans votre boîte mail. Vous
                  pouvez l'utiliser tel quel, l'affiner, ou le confier au prestataire de votre choix.
                </p>

                <div className="mt-8 rounded-2xl bg-white border border-n-300 p-6 sm:p-9 shadow-subtle">
                  <div className="bo-cdc max-w-none text-n-700 leading-[1.65]">
                    <ReactMarkdown>{result?.cdc_markdown ?? ""}</ReactMarkdown>
                  </div>
                </div>


                {/* ===== Bloc commercial — unique moment de vente, nettement séparé ===== */}
                <div className="mt-14 pt-2">
                  <div className="rounded-2xl bg-ink text-cream p-7 sm:p-10">
                    <h3 className="font-display font-semibold tracking-[-0.02em] text-[24px] sm:text-[28px] leading-[1.15]">
                      Envie de le concrétiser ?
                    </h3>
                    <p className="text-cream/80 leading-[1.6] mt-3 max-w-2xl">
                      Botami réalise ce type d'outil sur mesure. Pour un projet comme le vôtre :
                      à partir de {fmtEur(result?.fourchette_min ?? 5000)} €, fourchette indicative{" "}
                      {fmtEur(result?.fourchette_min ?? 5000)} – {fmtEur(result?.fourchette_max ?? 12000)} €,
                      ~{result?.delai ?? "4 à 6 semaines"}. Montant non contractuel, confirmé avec un expert.
                    </p>
                    <div className="mt-7">
                      <Btn href={CALENDLY_URL}>Réserver un échange avec Botami</Btn>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default GestionIntervention;
