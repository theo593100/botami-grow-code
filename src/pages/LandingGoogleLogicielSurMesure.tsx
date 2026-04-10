import { useState, useEffect, useRef } from "react";
import LPFormCalendly from "@/components/lp/LPFormCalendly";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Target,
  Clock,
  Code2,
  Settings2,
  FileText,
  Layers,
  Hammer,
  PackageCheck,
  ShieldCheck,
  CheckCircle2,
  Linkedin,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import eliasPhoto from "@/assets/elias.png";
import theoPhoto from "@/assets/theo.png";
import logo from "@/assets/logo-botami.svg";

import logoBlackfox from "@/assets/clients/blackfox.png";
import logoDesMurs from "@/assets/clients/des-murs-a-paris.png";
import logoErgosante from "@/assets/clients/ergosante.png";
import logoJD from "@/assets/clients/jd-sports.png";
import logoKijiji from "@/assets/clients/kijiji.png";
import logoLibralerte from "@/assets/clients/libralerte.png";
import logoProvence from "@/assets/clients/mademoiselle-provence.png";
import logoNotaires from "@/assets/clients/notaires-de-france.png";
import logoPoupina from "@/assets/clients/poupina.png";
import logoProarti from "@/assets/clients/proarti.png";
import logoSkills from "@/assets/clients/skills-communication.png";
import logoSkinCafeine from "@/assets/clients/skin-cafeine.png";
import logoStAubin from "@/assets/clients/st-aubin-avocats.png";

/* ─── palette tokens ─── */
const C = {
  bg: "#FAF7F2",
  card: "#FFFFFF",
  amber: "#C4872C",
  amberHover: "#D4A04A",
  amberLight: "#FEF3E2",
  text: "#1A1A1A",
  textSec: "#6B7280",
  success: "#10B981",
  footer: "#1A1A1A",
} as const;

/* ─── Reusable scroll-reveal wrapper ─── */
const Reveal = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(32px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

const heading = "font-heading font-bold";
const body = "font-body";
const ctaBtn =
  "inline-block font-body font-semibold text-white rounded-lg px-8 py-4 text-base md:text-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5";

const CTA = ({ id }: { id?: string }) => (
  <a
    href="#formulaire"
    id={id}
    className={ctaBtn}
    style={{ backgroundColor: C.amber }}
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.amberHover)}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.amber)}
  >
    Je réserve mon appel découverte gratuit
  </a>
);

/* ─── Value prop cards ─── */
const valueProps = [
  {
    icon: Target,
    title: "Conçu pour votre métier exactement",
    desc: "Pas de compromis. Pas de fonctionnalités inutiles. Un logiciel qui fait votre métier, rien d'autre. Vos utilisateurs sont heureux.",
  },
  {
    icon: Settings2,
    title: "Plus d'abonnements mal adaptés",
    desc: "Logiciel standard à 500€/mois qui ne fait que 40% de vos besoins. Notre logiciel : 5 000–15 000€ une seule fois, et il fait 100%.",
  },
  {
    icon: Code2,
    title: "Vous êtes propriétaires",
    desc: "Code source, données, hébergement. Votre logiciel est à vous. Zéro dépendance d'un vendor.",
  },
  {
    icon: Clock,
    title: "Livré vite, fonctionnel immédiatement",
    desc: "4 à 8 semaines. Votre équipe l'utilise le jour de la livraison. Pas de long apprentissage — c'est taillé pour vous.",
  },
];

/* ─── Client logos ─── */
const clientLogos = [
  { src: logoBlackfox, alt: "Blackfox" },
  { src: logoDesMurs, alt: "Des Murs à Paris" },
  { src: logoErgosante, alt: "Ergo Santé" },
  { src: logoJD, alt: "JD Sports" },
  { src: logoKijiji, alt: "Kijiji" },
  { src: logoLibralerte, alt: "Libr'Alerte" },
  { src: logoProvence, alt: "Mademoiselle Provence" },
  { src: logoNotaires, alt: "Notaires de France" },
  { src: logoPoupina, alt: "Poupina" },
  { src: logoProarti, alt: "Proarti" },
  { src: logoSkills, alt: "Skills Communication" },
  { src: logoSkinCafeine, alt: "Skin Cafeine" },
  { src: logoStAubin, alt: "St-Aubin Avocats" },
];

/* ─── Comparatif data ─── */
const comparatifRows = [
  { critere: "Modèle de prix", erp: "Abonnement mensuel + coût de paramétrage", botami: "Forfait 5 000-15 000€, une seule fois" },
  { critere: "Propriété du code", erp: "Non, logiciel éditeur", botami: "Oui, code source remis à la livraison" },
  { critere: "Délai de livraison", erp: "3 à 9 mois (paramétrage, formation, migration)", botami: "4 à 8 semaines" },
  { critere: "Personnalisation", erp: "Contrainte par les possibilités de l'éditeur", botami: "Conçu sur mesure pour votre métier" },
  { critere: "Dépendance au fournisseur", erp: "Totale (lock-in vendor)", botami: "Zéro — vous pouvez partir avec tout" },
  { critere: "Coût sur 3 ans", erp: "15 000 à 60 000€ selon taille", botami: "5 000-15 000€ (payé une fois)" },
];

/* ─── Process steps ─── */
const steps = [
  {
    num: "01",
    icon: FileText,
    title: "Cahier des charges",
    time: "1-2 semaines",
    desc: "On comprend votre métier en détail. Vos processus, vos frustrations avec les outils actuels, vos vrais besoins. On documente tout précisément.",
  },
  {
    num: "02",
    icon: Layers,
    title: "Maquette",
    time: "1-2 semaines",
    desc: "Prototype cliquable. Votre équipe teste la navigation, les écrans. Elle valide avant le code. Vous voyez exactement ce que vous aurez.",
  },
  {
    num: "03",
    icon: Hammer,
    title: "Développement",
    time: "4-8 semaines",
    desc: "On construit. Vos données migrées progressivement. Tests en continu sur vos cas réels. Itérations rapides si besoin.",
  },
  {
    num: "04",
    icon: PackageCheck,
    title: "Livraison + formation",
    time: "1 semaine",
    desc: "Logiciel en production. Équipe formée en détail. Code source documenté. Vous êtes autonomes immédiatement.",
  },
];

/* ─── FAQ ─── */
const faqs = [
  {
    q: "Pourquoi un logiciel sur mesure plutôt qu'adapter un logiciel standard ?",
    a: "Parce que l'adaptation coûte cher et laisse des angles morts. Un logiciel sur mesure fait votre métier entièrement. Retour sur investissement plus rapide.",
  },
  {
    q: "Quel est votre délai type pour une PME ?",
    a: "4 à 8 semaines selon la complexité de votre métier. Les deux premières semaines : cahier des charges + maquette. Puis développement itératif, tests inclus.",
  },
  {
    q: "Et après la livraison, comment on le maintient ?",
    a: "Le code est documenté. Vous pouvez l'embaucher quelqu'un, nous proposer la maintenance, ou rester autonome. Pas obligatoire, c'est votre choix.",
  },
  {
    q: "On peut rajouter des fonctionnalités après la livraison ?",
    a: "Bien sûr. Le logiciel est le vôtre. Vous pouvez améliorer, ajouter des modules. Tarif à définir ensemble — nous ou autre dev, c'est vous qui décidez.",
  },
  {
    q: "Et si le logiciel ne match pas à 100% nos besoins après la livraison ?",
    a: "On ajuste pendant la période de test. Ajustements mineurs inclus avant livraison finale. Après, c'est du périmètre supplémentaire — à coter séparément.",
  },
];

/* ─── Guarantees ─── */
const guarantees = [
  "Prix forfaitaire annoncé avant de commencer",
  "Code source remis à la livraison",
  "Maquette validée avant le développement",
  "Droit de changer de prestataire à tout moment",
];

/* ─── Team ─── */
const team = [
  {
    name: "Elias",
    role: "CEO",
    photo: eliasPhoto,
    desc: "Il cadre votre projet et pilote la relation client. 10 ans en publicité digitale, il connaît les outils métier et sait quand ils ne suffisent plus.",
    objectPosition: "center 20%",
  },
  {
    name: "Théo",
    role: "CTO",
    photo: theoPhoto,
    desc: "Il conçoit et développe votre application de A à Z. Parcours startup et marketing tech, il construit des outils qui servent le business, pas la technique.",
    objectPosition: "center 35%",
  },
];

/* ─── Process timeline with scroll animation ─── */
const ProcessTimeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [activeSteps, setActiveSteps] = useState<boolean[]>(new Array(steps.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const timeline = timelineRef.current;
      if (!timeline) return;

      const timelineRect = timeline.getBoundingClientRect();
      const viewportCenter = window.innerHeight * 0.55;
      const lineTop = timelineRect.top;
      const lineHeight = timelineRect.height;

      if (lineTop >= viewportCenter) {
        setProgress(0);
      } else if (lineTop + lineHeight <= viewportCenter) {
        setProgress(100);
      } else {
        const traveled = viewportCenter - lineTop;
        setProgress((traveled / lineHeight) * 100);
      }

      const newActive = stepRefs.current.map((ref) => {
        if (!ref) return false;
        const rect = ref.getBoundingClientRect();
        return rect.top + rect.height / 2 <= viewportCenter;
      });
      setActiveSteps(newActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative" ref={timelineRef}>
      <div className="absolute left-6 md:left-7 top-0 bottom-0 w-0.5 hidden md:block" style={{ backgroundColor: "#E5E7EB" }} />
      <div
        className="absolute left-6 md:left-7 top-0 w-0.5 hidden md:block transition-none"
        style={{ height: `${progress}%`, backgroundColor: C.amber }}
      />

      <div className="flex flex-col gap-12">
        {steps.map((s, i) => {
          const isActive = activeSteps[i];
          const Icon = s.icon;
          return (
            <div
              key={s.num}
              ref={(el) => { stepRefs.current[i] = el; }}
              className="flex gap-6 md:gap-8 items-start"
            >
              <div
                className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center relative z-10 transition-all duration-500 shadow-md"
                style={{
                  backgroundColor: isActive ? C.amber : C.text,
                  color: isActive ? "#FFFFFF" : "#FAF7F2",
                }}
              >
                <Icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="pt-1 md:pt-2">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <h3
                    className={`${heading} text-lg md:text-xl transition-colors duration-500`}
                    style={{ color: isActive ? C.amber : C.text }}
                  >
                    {s.title}
                  </h3>
                  <span
                    className="text-sm font-medium px-2.5 py-0.5 rounded-full"
                    style={{ color: C.textSec, backgroundColor: C.amberLight }}
                  >
                    {s.time}
                  </span>
                </div>
                <p className="leading-relaxed max-w-lg" style={{ color: C.textSec }}>
                  {s.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ─── Page ─── */
const LandingGoogleLogicielSurMesure = () => {
  return (
    <div className={body} style={{ backgroundColor: C.bg, color: C.text }}>
      {/* ─── Header ─── */}
      <header className="py-5 px-4 md:px-8 border-b" style={{ backgroundColor: C.bg, borderColor: "#E5E7EB" }}>
        <div className="max-w-5xl mx-auto flex items-center gap-2.5">
          <img src={logo} alt="Botami Software" className="h-8 w-8" />
          <span className={`${heading} text-xl md:text-2xl`} style={{ color: C.text }}>
            Botami Software
          </span>
        </div>
      </header>

      {/* ─── Bloc 1 — Hero ─── */}
      <section className="px-4 md:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-5"
              style={{ color: C.amber }}
            >
              Développement logiciel sur mesure pour PME
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className={`${heading} text-3xl md:text-5xl lg:text-[3.5rem] leading-tight mb-6`}>
              Logiciel sur mesure pour votre PME. Fini les outils génériques.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: C.textSec }}>
              Vous faites un métier unique. Les logiciels standard ne couvrent que 60% de vos besoins. On crée votre logiciel qui fait 100% de votre métier — prix forfaitaire, livraison 4 à 8 semaines.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <CTA id="cta-hero" />
          </Reveal>
        </div>
      </section>

      {/* ─── Bloc 2 — Proposition de valeur ─── */}
      <section className="px-4 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valueProps.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="rounded-2xl p-6 md:p-8 border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden" style={{ backgroundColor: C.bg, borderColor: "#E5E7EB" }}>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className="flex items-center justify-center w-12 h-12 rounded-xl transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: C.amberLight }}
                      >
                        <Icon className="w-6 h-6" style={{ color: C.amber }} />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full" style={{ backgroundColor: "#ECFDF5", color: C.success }}>
                        Inclus
                      </span>
                    </div>
                    <h3 className={`${heading} text-lg md:text-xl mb-3`}>{c.title}</h3>
                    <p className="leading-relaxed" style={{ color: C.textSec }}>
                      {c.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Bloc 2B — Trust bar ─── */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className={`${heading} text-lg md:text-xl text-center mb-10`}>
              Notre équipe accompagne des entreprises en acquisition digitale depuis des années
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap items-center justify-center gap-8 mb-10">
              {clientLogos.map((l, i) => (
                <img
                  key={i}
                  src={l.src}
                  alt={l.alt}
                  className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="relative max-w-2xl mx-auto px-6 py-8">
              <span className="absolute top-0 left-2 text-6xl md:text-7xl leading-none font-heading select-none" style={{ color: C.amber, opacity: 0.25 }}>"</span>
              <span className="absolute bottom-0 right-2 text-6xl md:text-7xl leading-none font-heading select-none" style={{ color: C.amber, opacity: 0.25 }}>"</span>
              <p className="text-center text-lg md:text-xl leading-relaxed italic" style={{ color: C.textSec }}>
                On les a vues se battre avec des{" "}
                <span className="font-semibold" style={{ color: C.amber }}>SaaS trop chers</span>,
                des{" "}
                <span className="font-semibold" style={{ color: C.amber }}>Excel qui craquent</span>,
                des outils qui ne collent pas à leur métier.
                <br className="hidden md:block" />{" "}
                <span className="font-bold" style={{ color: C.text }}>Botami Software</span> est né de ce constat&nbsp;:{" "}
                <span className="font-semibold" style={{ color: C.amber }}>quand les outils du marché ne suffisent plus</span>,
                on construit celui qu'il vous faut.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Bloc 2C — Comparatif ─── */}
      <section className="px-4 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className={`${heading} text-2xl md:text-4xl mb-4 text-center`}>
              ERP/CRM standard vs Botami Software
            </h2>
            <p className="text-lg text-center mb-14 max-w-2xl mx-auto" style={{ color: C.textSec }}>
              Un logiciel qui fait votre métier, pas un outil générique qu'on configure pendant 6 mois.
            </p>
          </Reveal>

          {/* Desktop table */}
          <Reveal delay={100}>
            <div className="hidden md:block rounded-2xl border overflow-hidden" style={{ borderColor: "#E5E7EB" }}>
              <table className="w-full text-left">
                <thead>
                  <tr style={{ backgroundColor: C.bg }}>
                    <th className="px-6 py-4 text-sm font-semibold" style={{ color: C.text }}>Critère</th>
                    <th className="px-6 py-4 text-sm font-semibold" style={{ color: C.text }}>ERP ou CRM standard (type Odoo, Sage, Salesforce)</th>
                    <th className="px-6 py-4 text-sm font-semibold" style={{ color: C.amber }}>Botami Software</th>
                  </tr>
                </thead>
                <tbody>
                  {comparatifRows.map((r, i) => (
                    <tr key={i} className="border-t" style={{ borderColor: "#E5E7EB", backgroundColor: i % 2 === 0 ? C.card : C.bg }}>
                      <td className="px-6 py-4 text-sm font-medium" style={{ color: C.text }}>{r.critere}</td>
                      <td className="px-6 py-4 text-sm" style={{ color: C.textSec }}>{r.erp}</td>
                      <td className="px-6 py-4 text-sm font-semibold" style={{ color: C.amber }}>{r.botami}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>

          {/* Mobile cards */}
          <div className="md:hidden flex flex-col gap-4">
            {comparatifRows.map((r, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="rounded-xl border p-5" style={{ backgroundColor: C.card, borderColor: "#E5E7EB" }}>
                  <h4 className="text-sm font-semibold mb-3" style={{ color: C.text }}>{r.critere}</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-medium mb-1" style={{ color: C.textSec }}>ERP/CRM standard</p>
                      <p className="text-sm" style={{ color: C.textSec }}>{r.erp}</p>
                    </div>
                    <div className="pt-2 border-t" style={{ borderColor: "#E5E7EB" }}>
                      <p className="text-xs font-medium mb-1" style={{ color: C.amber }}>Botami Software</p>
                      <p className="text-sm font-semibold" style={{ color: C.amber }}>{r.botami}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bloc 3 — Process ─── */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className={`${heading} text-2xl md:text-4xl mb-2 text-center`}>
              Comment ça se passe
            </h2>
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center gap-2 text-sm md:text-base font-bold px-5 py-2.5 rounded-full shadow-sm" style={{ backgroundColor: "#ECFDF5", color: C.success, border: "1.5px solid #A7F3D0" }}>
                <Clock className="w-4 h-4" /> 4 à 8 semaines du brief à la livraison
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-center mb-14 max-w-2xl mx-auto" style={{ color: C.textSec }}>
              Vous ne gérez pas un projet IT. On pose les questions, on propose, vous validez.
            </p>
          </Reveal>
          <ProcessTimeline />
        </div>
      </section>

      {/* ─── Bloc 4 — Crédibilité ─── */}
      <section className="px-4 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className={`${heading} text-2xl md:text-4xl mb-4 text-center`}>
              Qui est derrière Botami
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-center mb-14 max-w-2xl mx-auto" style={{ color: C.textSec }}>
              On ne code pas à l'aveugle. On part de votre problème métier, pas d'un cahier des charges technique que personne ne comprend.
            </p>
          </Reveal>

          {/* Team cards with photos */}
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 max-w-3xl mx-auto mb-14">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={i * 200}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-full max-w-xs aspect-[3/4] mb-6 overflow-hidden rounded-2xl group">
                    <img
                      src={t.photo}
                      alt={t.name}
                      className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ objectPosition: t.objectPosition }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                  </div>
                  <h3 className={`${heading} text-xl mb-1`}>{t.name}</h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: C.amber }}>{t.role}</p>
                  <p className="text-sm leading-relaxed max-w-sm" style={{ color: C.textSec }}>
                    {t.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Guarantees */}
          <Reveal>
            <div className="rounded-2xl p-6 md:p-8 border" style={{ backgroundColor: C.bg, borderColor: "#E5E7EB" }}>
              <h3 className={`${heading} text-lg mb-5 flex items-center gap-2`}>
                <ShieldCheck className="w-5 h-5" style={{ color: C.amber }} />
                Nos garanties
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {guarantees.map((g, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: C.success }} />
                    <span className="leading-relaxed text-sm">{g}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Bloc 5 — FAQ ─── */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className={`${heading} text-2xl md:text-4xl mb-4 text-center`}>
              Questions fréquentes
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-center mb-12" style={{ color: C.textSec }}>
              Les vraies questions que nos clients posent avant de se lancer.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <Accordion type="single" collapsible defaultValue="item-0">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b" style={{ borderColor: "#E5E7EB" }}>
                  <AccordionTrigger className="text-left font-heading font-semibold text-base py-5 hover:no-underline" style={{ color: C.text }}>
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="leading-relaxed pb-5" style={{ color: C.textSec }}>
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* ─── Bloc 6 — Réservation ─── */}
      <section id="formulaire" className="px-4 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <div className="rounded-2xl p-8 md:p-12 border text-center" style={{ backgroundColor: C.card, borderColor: "#E5E7EB" }}>
              <h2 className={`${heading} text-2xl md:text-3xl mb-3`}>
                Réservez votre appel découverte gratuit
              </h2>
              <p className="mb-8" style={{ color: C.textSec }}>
                15-20 minutes pour parler de votre application web métier. Sans engagement.
              </p>
              <div className="text-left">
                <LPFormCalendly
                  context="Landing Google - Logiciel sur mesure"
                  btnColor={C.amber}
                  btnHoverColor={C.amberHover}
                />
              </div>
              <p className="mt-6 text-sm" style={{ color: C.textSec }}>
                Réponse sous 24h.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Bloc 7 — Dernier CTA ─── */}
      <section className="px-4 md:px-8 py-16 text-center">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className={`${heading} text-2xl md:text-3xl mb-6`}>
              Prêt à remplacer vos outils génériques ?
            </h2>
            <CTA id="cta-bottom" />
            <p className="mt-6 text-sm" style={{ color: C.textSec }}>
              Entreprise française. Code source remis. Prix transparent. Logiciel pensé pour votre métier.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Bloc 8 — Footer ─── */}
      <footer className="px-4 md:px-8 py-12 md:py-16" style={{ backgroundColor: C.footer, color: "#FFFFFF" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <img src={logo} alt="" className="h-8 w-8" />
                <span className="font-heading text-xl font-bold">Botami Software</span>
              </div>
              <p className="text-sm opacity-70">🇫🇷 Entreprise française</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <p className="text-sm opacity-70 mb-1">
                <a href="mailto:contact@botami.fr" className="hover:opacity-100 transition-opacity" style={{ color: "#FFFFFF" }}>contact@botami.fr</a>
              </p>
              <p className="text-sm opacity-70">Téléphone sur demande</p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Légal</h4>
              <div className="flex flex-wrap gap-3 text-sm opacity-70">
                <a href="#" className="hover:opacity-100 transition-opacity" style={{ color: "#FFFFFF" }}>Mentions légales</a>
                <span>|</span>
                <a href="#" className="hover:opacity-100 transition-opacity" style={{ color: "#FFFFFF" }}>Politique de confidentialité</a>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center pt-8 border-t border-white/20">
            <p className="text-sm opacity-50">© 2025 Botami Software. Tous droits réservés.</p>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity"
              style={{ color: "#FFFFFF" }}
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingGoogleLogicielSurMesure;
