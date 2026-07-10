import { useEffect, useMemo, useState } from "react";
import { Check } from "lucide-react";
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

/* ---------- Faux CDC / fourchette (branché plus tard) ---------- */
const FAKE_RESULT = {
  min: 8000,
  max: 14000,
  delai: "5 à 7 semaines",
  sections: [
    {
      title: "Contexte & objectif",
      body: "Remplacer les outils génériques actuels par une application métier centralisée, pensée autour de vos tournées, vos techniciens et vos rapports d'intervention.",
    },
    {
      title: "Périmètre fonctionnel",
      items: [
        "Planning des interventions avec vue calendrier et carte",
        "Affectation des techniciens selon disponibilités et compétences",
        "Fiche & rapport d'intervention (avec photos et signature client)",
        "Application mobile terrain synchronisée en temps réel",
        "Génération de devis & factures",
      ],
    },
    {
      title: "Utilisateurs & rôles",
      body: "Comptes bureau et terrain avec droits différenciés, plus un accès client optionnel pour le suivi des demandes.",
    },
    {
      title: "Intégrations",
      body: "Connexion à votre compta, à la facturation électronique et aux notifications email / SMS.",
    },
    {
      title: "Reprise de données",
      body: "Import de votre base existante (Excel ou logiciel actuel) au lancement.",
    },
    {
      title: "Livraison",
      body: "Application web + mobile, code source transmis, formation de vos équipes incluse.",
    },
  ],
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
    if (!consent) return;
    setSubmitted(true);
    (window as any).gtag_report_lead_form?.();

    const leadId = crypto.randomUUID();
    const messagePayload = {
      answers,
      utm,
    };

    supabase
      .from("leads")
      .insert({
        id: leadId,
        first_name: "Lead cahier des charges",
        email,
        phone: phone || null,
        source_route: ROUTE,
        message: JSON.stringify(messagePayload, null, 2),
      })
      .then();

    supabase.from("landing_page_events").insert({ route: ROUTE, event_type: "cta_click" }).then();

    const templateData = {
      firstName: "Lead cahier des charges",
      email,
      phone: phone || undefined,
      sourceRoute: ROUTE,
      message: JSON.stringify(messagePayload, null, 2),
    };
    ["elias@botami-agency.com", "theo@botami-agency.com"].forEach((recipient) => {
      supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "new-lead-notification",
          recipientEmail: recipient,
          idempotencyKey: `cdc-notif-${leadId}-${recipient}`,
          templateData,
        },
      });
    });

    setPhase("result");
    window.scrollTo({ top: 0, behavior: "smooth" });
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
                  On vous offre le cahier des charges de votre outil de gestion d'intervention.
                </h1>
                <p className="text-n-700 text-[17px] leading-[1.6] mt-6 max-w-2xl mx-auto">
                  8 questions, 2 minutes. À chaque étape on partage un conseil concret pour clarifier
                  votre projet. À la fin, on vous génère un cahier des charges propre et structuré —
                  le vôtre, à garder, même si vous décidez de le faire réaliser ailleurs.
                </p>
                <div className="mt-9 flex justify-center">
                  <Btn href="#" onClick={(e) => { e.preventDefault(); setPhase("quiz"); }}>
                    Recevoir mon cahier des charges gratuit
                  </Btn>
                </div>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-n-500 mt-4">
                  Sans engagement · aucun démarchage
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
                  Votre cahier des charges est prêt.
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
                  <BtnSubmit variant="primary" fullWidth disabled={!consent || submitted}>
                    Voir mon cahier des charges
                  </BtnSubmit>
                </form>
              </div>
            )}

            {/* ===== 4. RÉSULTAT ===== */}
            {phase === "result" && (
              <div className="animate-fade-up">
                <Eyebrow className="text-ambre-dark">Votre cahier des charges</Eyebrow>
                <h2 className="font-display font-semibold tracking-[-0.03em] text-ink text-[30px] sm:text-[40px] leading-[1.08] mt-3">
                  Logiciel de gestion d'intervention sur mesure
                </h2>

                <div className="mt-8 rounded-2xl bg-white border border-n-300 p-6 sm:p-9 shadow-subtle space-y-8">
                  {FAKE_RESULT.sections.map((sec, i) => (
                    <div key={sec.title}>
                      <h3 className="font-display font-semibold text-ink text-[19px] tracking-[-0.01em] flex items-center gap-3">
                        <span className="font-mono text-[12px] text-ambre-dark">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {sec.title}
                      </h3>
                      {sec.body && (
                        <p className="text-n-700 leading-[1.6] mt-2">{sec.body}</p>
                      )}
                      {sec.items && (
                        <ul className="mt-3 space-y-2">
                          {sec.items.map((it) => (
                            <li key={it} className="flex items-start gap-2.5 text-n-700">
                              <Check size={17} className="text-ambre mt-1 flex-none" strokeWidth={2.5} />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

                {/* Encart fourchette */}
                <div className="mt-8 rounded-2xl bg-ambre-bg border border-ambre p-6 sm:p-8">
                  <p className="font-display font-semibold text-ink text-[20px] tracking-[-0.01em]">
                    À partir de 5 000 €.
                  </p>
                  <p className="text-n-700 leading-[1.6] mt-2">
                    Pour un projet comme le vôtre : fourchette indicative{" "}
                    <b className="text-ink">
                      {fmtEur(FAKE_RESULT.min)} – {fmtEur(FAKE_RESULT.max)} €
                    </b>
                    , ~{FAKE_RESULT.delai}.
                  </p>
                  <p className="text-n-500 text-sm mt-2">
                    Montant non contractuel, confirmé avec un expert.
                  </p>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                  <Btn href={CALENDLY_URL}>Réserver un échange avec Botami</Btn>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-n-500">
                    Copie envoyée par email
                  </span>
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
