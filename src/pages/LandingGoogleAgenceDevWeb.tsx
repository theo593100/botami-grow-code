import { useState, useEffect, useRef } from "react";
import LPFormCalendly from "@/components/lp/LPFormCalendly";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Monitor,
  Globe,
  ShieldCheck,
  Rocket,
  FileText,
  Layers,
  Hammer,
  PackageCheck,
  CheckCircle2,
  Linkedin,
  Clock,
  X,
  Check,
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

/* ─── Value prop cards data ─── */
const valueProps = [
  {
    icon: Monitor,
    title: "Application métier, pas un site",
    desc: "On ne crée pas de sites vitrines. On développe des outils qui automatisent, centralisent, et simplifient votre workflow. Vos utilisateurs l'utiliseront tous les jours.",
  },
  {
    icon: Globe,
    title: "Accessible de partout",
    desc: "Web app = connexion depuis n'importe quel appareil, n'importe où. Pas d'installation, pas de maintenance client. Une URL, c'est tout.",
  },
  {
    icon: ShieldCheck,
    title: "Sécurisé et performant",
    desc: "Architecture solide, données chiffrées, hébergement français. Votre app supporte les pics de charge. Pas de ralentissements.",
  },
  {
    icon: Rocket,
    title: "Livraison rapide et prévisible",
    desc: "Entre 5 000€ et 15 000€, 4 à 8 semaines. Maquette validée avant le code. Versions testables régulièrement. Vous suivez le chemin.",
  },
];

/* ─── Process steps ─── */
const steps = [
  {
    num: "01",
    icon: FileText,
    title: "Cahier des charges",
    time: "1-2 semaines",
    desc: "On comprend votre processus métier en détail. On définit les modules, les rôles utilisateur, les intégrations. On propose une architecture claire.",
  },
  {
    num: "02",
    icon: Layers,
    title: "Maquette",
    time: "1-2 semaines",
    desc: "Prototype cliquable complet. Backoffice, front client, toutes les pages. Vous validez l'UX avant le développement.",
  },
  {
    num: "03",
    icon: Hammer,
    title: "Développement",
    time: "4-8 semaines",
    desc: "Backend + frontend simultanément. Versions testables sur un serveur de staging. Vous testez sur vos vrais cas. Bugs corrigés en continu.",
  },
  {
    num: "04",
    icon: PackageCheck,
    title: "Livraison + formation",
    time: "1 semaine",
    desc: "Migration des données. Lancement en production. Formation de l'équipe. Code source, accès, documentation remis.",
  },
];

/* ─── Comparatif data ─── */
const comparatifRows = [
  {
    critere: "Modèle de prix",
    agence: "TJM variable + abonnement CMS",
    botami: "Forfait 5 000-15 000€, une seule fois",
  },
  {
    critere: "Propriété du code",
    agence: "Partielle (thèmes, plugins liés à l'agence)",
    botami: "Oui, code source remis à la livraison",
  },
  {
    critere: "Délai de livraison",
    agence: "3 à 6 mois",
    botami: "4 à 8 semaines",
  },
  {
    critere: "Personnalisation",
    agence: "Limitée au framework choisi (WordPress, Webflow…)",
    botami: "Conçu sur mesure pour votre métier",
  },
  {
    critere: "Dépendance au fournisseur",
    agence: "Forte pour les évolutions",
    botami: "Zéro — vous pouvez partir avec tout",
  },
  {
    critere: "Coût sur 3 ans",
    agence: "15 000 à 40 000€",
    botami: "5 000-15 000€ (payé une fois)",
  },
];

/* ─── FAQ data ─── */
const faqs = [
  {
    q: "C'est quoi la différence entre une web app et un site web ?",
    a: "Un site web montre de l'info. Une web app vous laisse faire des choses — gérer des données, automatiser des processus, collaborer. C'est un outil, pas un catalogue.",
  },
  {
    q: "Mon app peut marcher sur mobile aussi ?",
    a: "Oui, la web app est responsive par défaut. Téléphone, tablette, desktop — mêmes fonctionnalités, interface adaptée à l'écran. Pas besoin d'app mobile séparée sauf cas très spécialisé.",
  },
  {
    q: "Combien d'utilisateurs simultanés peut gérer l'app ?",
    a: "Dépend de la complexité et du volume de données. On dimensionne l'infrastructure selon votre cas. Pour une PME : 100-1000 utilisateurs simultanés, aucun souci. Gros volume ? On en parle.",
  },
  {
    q: "Et si vous arrêtez demain ?",
    a: "Votre code est à vous. Vous pouvez embaucher quelqu'un ou nous proposer une maintenance. Aucune dépendance du vendor, aucun lock-in.",
  },
  {
    q: "Comment vous évitez les failles de sécurité ?",
    a: "Code reviewed, authentification sécurisée, chiffrement des données sensibles, hébergement certifié, mises à jour de sécurité régulières. Pas de raccourci.",
  },
];

/* ─── Guarantees ─── */
const guarantees = [
  "Prix forfaitaire annoncé avant de commencer",
  "Code source remis à la livraison",
  "Maquette validée avant le développement",
  "Droit de changer de prestataire à tout moment",
];

/* ─── Team data ─── */
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
const LandingGoogleAgenceDevWeb = () => {
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
              Développement web sur mesure
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className={`${heading} text-3xl md:text-5xl lg:text-[3.5rem] leading-tight mb-6`}>
              Application web sur mesure. Pas un site vitrine.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: C.textSec }}>
              Vous avez un besoin métier complexe. On crée une web app conçue pour vos utilisateurs — backoffice, front client, intégrations. Prix forfaitaire, 4 à 8 semaines, code source livré.
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
            <p className={`${heading} text-lg md:text-xl text-center mb-10`} style={{ color: C.text }}>
              Notre équipe accompagne des entreprises en acquisition digitale depuis des années
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
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
            <p className="text-center text-base md:text-lg leading-relaxed max-w-3xl mx-auto" style={{ color: C.textSec }}>
              On les a vues se battre avec des SaaS trop chers, des Excel qui craquent, des outils qui ne collent pas à leur métier. Botami Software est né de ce constat : quand les outils du marché ne suffisent plus, on construit celui qu'il vous faut.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Bloc 2C — Comparatif ─── */}
      <section className="px-4 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <h2 className={`${heading} text-2xl md:text-4xl mb-4 text-center`}>
              Agence web généraliste vs Botami Software
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-center mb-12" style={{ color: C.textSec }}>
              On ne fait pas de sites vitrine. On construit des applications web métier.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className={`${heading} text-sm uppercase tracking-wide py-4 px-4 border-b-2`} style={{ borderColor: "#E5E7EB", color: C.textSec }}>
                      Critère
                    </th>
                    <th className={`${heading} text-sm uppercase tracking-wide py-4 px-4 border-b-2`} style={{ borderColor: "#E5E7EB", color: C.textSec }}>
                      Agence généraliste
                    </th>
                    <th className={`${heading} text-sm uppercase tracking-wide py-4 px-4 border-b-2`} style={{ borderColor: C.amber, color: C.amber }}>
                      Botami Software
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparatifRows.map((row, i) => (
                    <tr key={i} className="border-b" style={{ borderColor: "#E5E7EB" }}>
                      <td className="py-4 px-4 font-semibold text-sm" style={{ color: C.text }}>
                        {row.critere}
                      </td>
                      <td className="py-4 px-4 text-sm" style={{ color: C.textSec }}>
                        <span className="flex items-start gap-2">
                          <X className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-400" />
                          {row.agence}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-sm font-medium" style={{ color: C.text }}>
                        <span className="flex items-start gap-2">
                          <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: C.success }} />
                          {row.botami}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
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

          <div className="grid md:grid-cols-2 gap-10 md:gap-14 max-w-3xl mx-auto mb-14 mt-14">
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
          <Reveal delay={200}>
            <Accordion type="single" collapsible defaultValue="item-0">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b" style={{ borderColor: "#E5E7EB" }}>
                  <AccordionTrigger className="text-left font-heading font-semibold text-base py-5 hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent
                    className="leading-relaxed pb-5"
                    style={{ color: C.textSec }}
                  >
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      {/* ─── Bloc 6 — Formulaire ─── */}
      <LPFormCalendly
        title="Réservez votre appel découverte gratuit"
        subtitle="15-20 minutes pour parler de votre application web métier. Sans engagement."
      />

      {/* ─── Bloc 7 — Dernier CTA ─── */}
      <section className="px-4 md:px-8 py-16 md:py-20 text-center" style={{ backgroundColor: C.amberLight }}>
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <p className="text-lg md:text-xl font-medium mb-8" style={{ color: C.text }}>
              🇫🇷 Entreprise française. Code source remis à chaque projet. Pas de site vitrine — des applications qui travaillent.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <CTA id="cta-bottom" />
          </Reveal>
        </div>
      </section>

      {/* ─── Bloc 8 — Footer ─── */}
      <footer className="px-4 md:px-8 py-10 md:py-14 text-sm" style={{ backgroundColor: C.footer, color: "#D1D5DB" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5 mb-1">
              <img src={logo} alt="Botami Software" className="h-7 w-7 brightness-0 invert" />
              <span className={`${heading} text-lg text-white`}>Botami Software</span>
            </div>
            <p>🇫🇷 Entreprise française</p>
            <a href="mailto:contact@botami.fr" className="hover:text-white transition-colors block">
              contact@botami.fr
            </a>
            <a href="tel:+33600000000" className="hover:text-white transition-colors block">
              06 00 00 00 00
            </a>
          </div>

          <div className="flex flex-col md:items-end gap-4">
            <div className="flex gap-4">
              <a href="/mentions-legales" className="hover:text-white transition-colors">
                Mentions légales
              </a>
              <span>|</span>
              <a href="/politique-de-confidentialite" className="hover:text-white transition-colors">
                Politique de confidentialité
              </a>
            </div>
            <a
              href="https://linkedin.com/company/botami"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingGoogleAgenceDevWeb;
