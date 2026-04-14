import { useState, useEffect, useRef } from "react";
import LPFormCalendly from "@/components/lp/LPFormCalendly";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Banknote,
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
import ComparisonTable from "@/components/lp/ComparisonTable";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import eliasPhoto from "@/assets/elias.webp";
import theoPhoto from "@/assets/theo.webp";
import logo from "@/assets/logo-botami.svg";

import logoDesMurs from "@/assets/clients/des-murs-a-paris.png";
import logoErgosante from "@/assets/clients/ergosante.png";
import logoJD from "@/assets/clients/jd-group.png";
import logoKijiji from "@/assets/clients/kijiji.png";
import logoProvence from "@/assets/clients/mademoiselle-provence.png";
import logoNotaires from "@/assets/clients/notaires-de-france-new.png";
import logoPoupina from "@/assets/clients/poupina.png";
import logoProarti from "@/assets/clients/proarti.png";
import logoSkills from "@/assets/clients/skills-communication.png";
import logoTransitionsPro from "@/assets/clients/transitions-pro.png";

const clientLogos = [
  { src: logoDesMurs, alt: "Des Murs à Paris" },
  { src: logoErgosante, alt: "Ergo Santé" },
  { src: logoJD, alt: "JD Group" },
  { src: logoKijiji, alt: "Kijiji" },
  { src: logoProvence, alt: "Mademoiselle Provence" },
  { src: logoNotaires, alt: "Notaires de France", h: "h-14" },
  { src: logoPoupina, alt: "Poupina" },
  { src: logoProarti, alt: "Proarti" },
  { src: logoSkills, alt: "Skills Communication" },
  { src: logoTransitionsPro, alt: "Transitions Pro", h: "h-14" },
];

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

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${className}`} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(32px)", transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const heading = "font-heading font-bold";
const body = "font-body";
const ctaBtn = "inline-block font-body font-semibold text-white rounded-lg px-8 py-4 text-base md:text-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5";

const CTA = ({ id }: { id?: string }) => (
  <a href="#formulaire" id={id} className={ctaBtn} style={{ backgroundColor: C.amber }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.amberHover)} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.amber)}>
    Je réserve mon appel découverte gratuit
  </a>
);

const valueProps = [
  { icon: Banknote, title: "Prix forfaitaire", desc: "Entre 5 000€ et 15 000€ selon la complexité. Pas d'abonnement. Le prix qu'on annonce est le prix que vous payez." },
  { icon: Clock, title: "Livré en 4 à 8 semaines", desc: "Premiers écrans fonctionnels dès les premières semaines. Vous suivez l'avancement à chaque étape." },
  { icon: Code2, title: "Le code est à vous", desc: "Code source, données, hébergement — tout vous appartient. Zéro dépendance. Un autre développeur peut reprendre demain." },
  { icon: Settings2, title: "Conçu pour votre métier", desc: "Chaque fonctionnalité existe parce que vous en avez besoin. L'outil s'adapte à votre façon de travailler — pas l'inverse." },
];

const steps = [
  { num: "01", icon: FileText, title: "Cadrage & cahier des charges", time: "~1 semaine", desc: "On identifie votre besoin ensemble. Livrable : un document clair qui décrit exactement ce qu'on va construire." },
  { num: "02", icon: Layers, title: "Maquette & validation", time: "~1 semaine", desc: "Prototype cliquable, écrans réels. Vous validez avant qu'on écrive une seule ligne de code." },
  { num: "03", icon: Hammer, title: "Développement", time: "~1-2 semaines", desc: "On construit. Versions testables à chaque étape. Pas de tunnel de 3 mois sans nouvelles." },
  { num: "04", icon: PackageCheck, title: "Livraison + formation", time: "~2-3 jours", desc: "Application en production. Données migrées. Équipe formée. Code source entre vos mains." },
];

const faqs = [
  { q: "Combien ça coûte ?", a: "Entre 5 000€ et 15 000€ selon la complexité. Prix forfaitaire — pas de TJM, pas de compteur qui tourne. Pour comparaison : un SaaS à 200€/mois vous coûte 7 200€ sur 3 ans." },
  { q: "Et si ça ne marche plus dans un an ?", a: "Le code est documenté et transférable. Un autre développeur peut le reprendre demain. On propose une maintenance optionnelle avec des conditions claires." },
  { q: "J'ai pas le temps de gérer un projet IT.", a: "Vous n'avez rien à gérer. On absorbe la charge projet : on pose les questions, on propose les solutions, vous validez les étapes." },
  { q: "Comment je sais que c'est bien fait ?", a: "Maquette cliquable avant le développement. Versions fonctionnelles en cours de route. Recette finale sur vos cas réels." },
  { q: "Et si je veux changer de prestataire ?", a: "Aucun problème. Le code source vous appartient. L'hébergement est chez vous. Vos données sont à vous." },
];

const guarantees = [
  "Prix forfaitaire annoncé avant de commencer",
  "Code source remis à la livraison",
  "Maquette validée avant le développement",
  "Droit de changer de prestataire à tout moment",
];

const team = [
  { name: "Elias", role: "CEO", photo: eliasPhoto, desc: "Il cadre votre projet et pilote la relation client. 10 ans en publicité digitale, il connaît les outils métier et sait quand ils ne suffisent plus.", objectPosition: "center 20%" },
  { name: "Théo", role: "CTO", photo: theoPhoto, desc: "Il conçoit et développe votre application de A à Z. Parcours startup et marketing tech, il construit des outils qui servent le business, pas la technique.", objectPosition: "center 35%" },
];

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
      if (lineTop >= viewportCenter) setProgress(0);
      else if (lineTop + lineHeight <= viewportCenter) setProgress(100);
      else setProgress(((viewportCenter - lineTop) / lineHeight) * 100);
      setActiveSteps(stepRefs.current.map((ref) => { if (!ref) return false; const rect = ref.getBoundingClientRect(); return rect.top + rect.height / 2 <= viewportCenter; }));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative" ref={timelineRef}>
      <div className="absolute left-6 md:left-7 top-0 bottom-0 w-0.5 hidden md:block" style={{ backgroundColor: "#E5E7EB" }} />
      <div className="absolute left-6 md:left-7 top-0 w-0.5 hidden md:block transition-none" style={{ height: `${progress}%`, backgroundColor: C.amber }} />
      <div className="flex flex-col gap-12">
        {steps.map((s, i) => {
          const isActive = activeSteps[i];
          const Icon = s.icon;
          return (
            <div key={s.num} ref={(el) => { stepRefs.current[i] = el; }} className="flex gap-6 md:gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center relative z-10 transition-all duration-500 shadow-md" style={{ backgroundColor: isActive ? C.amber : C.text, color: isActive ? "#FFFFFF" : "#FAF7F2" }}>
                <Icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="pt-1 md:pt-2">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <h3 className={`${heading} text-lg md:text-xl transition-colors duration-500`} style={{ color: isActive ? C.amber : C.text }}>{s.title}</h3>
                  <span className="text-sm font-medium px-2.5 py-0.5 rounded-full" style={{ color: C.textSec, backgroundColor: C.amberLight }}>{s.time}</span>
                </div>
                <p className="leading-relaxed max-w-lg" style={{ color: C.textSec }}>{s.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const LandingGoogleDeveloppementLogiciel = () => {
  useEffect(() => {
    document.title = "Développement logiciel sur mesure | Botami Software";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Développement de logiciel sur mesure pour entreprises. Forfait 5 000–15 000€, livré en 4 à 8 semaines, code source à vous.");
  }, []);

  return (
    <div className={body} style={{ backgroundColor: C.bg, color: C.text }}>
      <header className="py-5 px-4 md:px-8 border-b" style={{ backgroundColor: C.bg, borderColor: "#E5E7EB" }}>
        <div className="max-w-5xl mx-auto flex items-center gap-2.5">
          <img src={logo} alt="Botami Software" className="h-8 w-8" />
          <span className={`${heading} text-xl md:text-2xl`} style={{ color: C.text }}>Botami Software</span>
        </div>
      </header>

      <section className="px-4 md:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal><p className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: C.amber }}>Développement logiciel sur mesure pour entreprises</p></Reveal>
          <Reveal delay={100}><h1 className={`${heading} text-3xl md:text-5xl lg:text-[3.5rem] leading-tight mb-6`}>Votre logiciel métier, développé sur mesure.</h1></Reveal>
          <Reveal delay={200}><p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: C.textSec }}>On remplace vos SaaS, vos fichiers Excel et vos outils bricolés par un logiciel qui fait exactement ce dont vous avez besoin. Code source livré. Prix forfaitaire.</p></Reveal>
          <Reveal delay={300}><CTA id="cta-hero" /></Reveal>
        </div>
      </section>

      <section className="px-4 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valueProps.map((c, i) => {
              const Icon = c.icon;
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="rounded-2xl p-6 md:p-8 border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden" style={{ backgroundColor: C.bg, borderColor: "#E5E7EB" }}>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: C.amberLight }}>
                        <Icon className="w-6 h-6" style={{ color: C.amber }} />
                      </div>
                      <span className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full" style={{ backgroundColor: "#ECFDF5", color: C.success }}>Inclus</span>
                    </div>
                    <h3 className={`${heading} text-lg md:text-xl mb-3`}>{c.title}</h3>
                    <p className="leading-relaxed" style={{ color: C.textSec }}>{c.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Trust bar ─── */}
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
                <img key={i} src={l.src} alt={l.alt} className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0" />
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

      <ComparisonTable
        h2="Logiciel standard vs Botami Software"
        subtitle="Pourquoi un SaaS du marché finit toujours par coûter plus cher qu'il n'y paraît."
        headers={["Critère", "Logiciel standard", "Botami Software"]}
        rows={[
          ["Modèle de prix", "Abonnement mensuel ou licence annuelle par utilisateur", "Forfait 5 000–15 000€, une seule fois"],
          ["Propriété du code", "Aucune — vous louez l'accès", "Oui, code source remis"],
          ["Adaptation métier", "Ce que l'éditeur a prévu, rien de plus", "Sur mesure dès la conception"],
          ["Évolutions", "Roadmap de l'éditeur, pas la vôtre", "Vous décidez, quand vous voulez"],
          ["Dépendance au fournisseur", "Forte (prix, support, fin de vie produit)", "Zéro — vous partez avec tout"],
          ["Coût sur 3 ans", "7 200€ à 36 000€ selon le SaaS", "5 000–15 000€ (payé une fois)"],
        ]}
      />

      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className={`${heading} text-2xl md:text-4xl mb-2 text-center`}>Comment ça se passe</h2>
            <div className="flex justify-center mb-4">

              <span className="inline-flex items-center gap-2 text-sm md:text-base font-bold px-5 py-2.5 rounded-full shadow-sm" style={{ backgroundColor: "#ECFDF5", color: C.success, border: "1.5px solid #A7F3D0" }}>
                <Clock className="w-4 h-4" /> ~4 semaines du brief à la livraison
              </span>
            </div>
          </Reveal>
          <Reveal delay={100}><p className="text-lg text-center mb-14 max-w-2xl mx-auto" style={{ color: C.textSec }}>Vous ne gérez pas un projet IT. On pose les questions, on propose, vous validez.</p></Reveal>
          <ProcessTimeline />
        </div>
      </section>

      <section className="px-4 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-4xl mx-auto">
          <Reveal><h2 className={`${heading} text-2xl md:text-4xl mb-4 text-center`}>Qui est derrière Botami</h2></Reveal>
          <Reveal delay={100}><p className="text-lg text-center mb-14 max-w-2xl mx-auto" style={{ color: C.textSec }}>On ne code pas à l'aveugle. On part de votre problème métier, pas d'un cahier des charges technique que personne ne comprend.</p></Reveal>
          <div className="grid md:grid-cols-2 gap-10 md:gap-14 max-w-3xl mx-auto mb-14">
            {team.map((t, i) => (
              <Reveal key={t.name} delay={i * 200}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative w-full max-w-xs aspect-[3/4] mb-6 overflow-hidden rounded-2xl group">
                    <img src={t.photo} alt={t.name} className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105" style={{ objectPosition: t.objectPosition }} />
                    <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                  </div>
                  <h3 className={`${heading} text-xl mb-1`}>{t.name}</h3>
                  <p className="text-sm font-semibold mb-3" style={{ color: C.amber }}>{t.role}</p>
                  <p className="text-sm leading-relaxed max-w-sm" style={{ color: C.textSec }}>{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="rounded-2xl p-6 md:p-8 border" style={{ backgroundColor: C.bg, borderColor: "#E5E7EB" }}>
              <h3 className={`${heading} text-lg mb-5 flex items-center gap-2`}><ShieldCheck className="w-5 h-5" style={{ color: C.amber }} /> Nos garanties</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {guarantees.map((g, i) => (<div key={i} className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: C.success }} /><span className="leading-relaxed text-sm">{g}</span></div>))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <Reveal><h2 className={`${heading} text-2xl md:text-4xl mb-4 text-center`}>Questions fréquentes</h2></Reveal>
          <Reveal delay={100}><p className="text-lg text-center mb-12" style={{ color: C.textSec }}>Les vraies questions que nos clients posent avant de se lancer.</p></Reveal>
          <Reveal delay={200}>
            <Accordion type="single" collapsible defaultValue="item-0">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b" style={{ borderColor: "#E5E7EB" }}>
                  <AccordionTrigger className="text-left font-heading font-semibold text-base py-5 hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="leading-relaxed pb-5" style={{ color: C.textSec }}>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <LPFormCalendly route="/lp/google/developpement-logiciel" title="Réservez votre appel découverte gratuit" subtitle="15-20 minutes pour comprendre votre situation. Sans engagement." />

      <section className="px-4 md:px-8 py-16 md:py-20 text-center" style={{ backgroundColor: C.amberLight }}>
        <div className="max-w-2xl mx-auto">
          <Reveal><p className="text-lg md:text-xl font-medium mb-8" style={{ color: C.text }}>🇫🇷 Entreprise française. Code source remis à chaque projet. Prix forfaitaire garanti.</p></Reveal>
          <Reveal delay={100}><CTA id="cta-bottom" /></Reveal>
        </div>
      </section>

      <footer className="px-4 md:px-8 py-10 md:py-14 text-sm" style={{ backgroundColor: C.footer, color: "#D1D5DB" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5 mb-1"><img src={logo} alt="Botami Software" className="h-7 w-7 brightness-0 invert" /><span className={`${heading} text-lg text-white`}>Botami Software</span></div>
            <p>🇫🇷 Entreprise française</p>
            <a href="mailto:contact@botami-agency.com" className="hover:text-white transition-colors block">contact@botami-agency.com</a>
          </div>
          <div className="flex flex-col md:items-end gap-4">
            <div className="flex gap-4"><a href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</a><span>|</span><a href="/politique-de-confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</a></div>
            <a href="https://linkedin.com/company/botami" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingGoogleDeveloppementLogiciel;
