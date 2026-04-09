import { useState, useEffect, useRef } from "react";
import LPFormCalendly from "@/components/lp/LPFormCalendly";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Wrench, Banknote, Settings, Clock, FileText, Layers, Hammer, PackageCheck, ShieldCheck, CheckCircle2, Linkedin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import eliasPhoto from "@/assets/elias.png";
import theoPhoto from "@/assets/theo.png";
import logo from "@/assets/logo-botami.svg";

const C = { bg: "#FAF7F2", card: "#FFFFFF", amber: "#C4872C", amberHover: "#D4A04A", amberLight: "#FEF3E2", text: "#1A1A1A", textSec: "#6B7280", success: "#10B981", footer: "#1A1A1A" } as const;

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (<div ref={ref} className={`transition-all duration-700 ease-out ${className}`} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(32px)", transitionDelay: `${delay}ms` }}>{children}</div>);
};

const heading = "font-heading font-bold";
const body = "font-body";
const ctaBtn = "inline-block font-body font-semibold text-white rounded-lg px-8 py-4 text-base md:text-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5";
const CTA = ({ id }: { id?: string }) => (<a href="#formulaire" id={id} className={ctaBtn} style={{ backgroundColor: C.amber }} onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.amberHover)} onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.amber)}>Je réserve mon appel découverte gratuit</a>);

const valueProps = [
  { icon: Wrench, title: "Une vraie application, pas du bricolage", desc: "Pas de dépendance à des outils externes limités. Une architecture solide, scalable. Votre logique métier devient du code fiable." },
  { icon: Banknote, title: "Prix unique, livré une fois", desc: "Entre 5 000€ et 15 000€. Vous arrêtez de payer des abonnements pour des outils qui ne font que 30% de ce dont vous avez besoin." },
  { icon: Settings, title: "Maintenance simple", desc: "Plus de tunnels d'intégration à configurer à la main. Une application documentée, stabilisée, que vous ou quelqu'un d'autre peut maintenir." },
  { icon: Clock, title: "Livrée en 4 à 8 semaines", desc: "Vous passez du bricolage au professionnel rapidement. Les deux premières semaines : cahier des charges. La suite : développement en continu, tests inclus." },
];

const steps = [
  { num: "01", icon: FileText, title: "Cahier des charges", time: "~1 semaine", desc: "On démonte votre stack bricolée. On comprend ce qui fonctionne, ce qui casse régulièrement, ce que vous bricolez à la main. On propose une architecture solide." },
  { num: "02", icon: Layers, title: "Maquette", time: "~1 semaine", desc: "Prototype cliquable de votre nouvelle application. Vous voyez comment ça ressemble avant qu'on code. Vous validez l'interface et le workflow." },
  { num: "03", icon: Hammer, title: "Développement", time: "~1-2 semaines", desc: "On construit votre application. Versions testables à chaque étape — pas d'effet surprise. Vous testez en continu sur vos vrais cas." },
  { num: "04", icon: PackageCheck, title: "Livraison + formation", time: "~2-3 jours", desc: "L'application remplace votre stack. Données migrées de vos anciens outils. Équipe formée. Code documenté." },
];

const faqs = [
  { q: "Pourquoi pas rester sur Make / Zapier / Bubble ?", a: "Parce que vous passez du temps à maintenir des connexions cassées, à payer pour des fonctionnalités inutiles, et à contourner les limites. Une vraie app est plus rapide, plus fiable, et moins cher sur 3 ans." },
  { q: "Combien ça coûte ?", a: "Entre 5 000€ et 15 000€. Une seule fois. Vous arrêtez de payer Zapier à 30€/mois, Make, Airtable, Notion Pro, etc. Économie rapidement rentabilisée." },
  { q: "Combien de temps pour migrer ?", a: "4 à 8 semaines. Les données de vos anciens outils sont importées. L'application replace complètement votre stack." },
  { q: "Et si on doit la modifier ?", a: "Elle est documentée et vôtre. Vous pouvez embaucher un dev, nous proposer la maintenance, ou rester autonome. Aucun lock-in." },
  { q: "Qu'est-ce que vous développez mieux que le no-code ?", a: "Logique métier complexe, sécurité, performance, intégrations fiables, et une interface pensée pour votre workflow. Le no-code éclabousse sur du complexe." },
];

const guarantees = ["Prix forfaitaire annoncé avant de commencer", "Code source remis à la livraison", "Maquette validée avant le développement", "Droit de changer de prestataire à tout moment"];

const team = [
  { name: "Elias", role: "Co-fondateur", photo: eliasPhoto, desc: "10 ans dans la publicité digitale (Google Ads, Meta Ads). Il sait ce que c'est, les outils qui presque-marchent mais pas vraiment.", objectPosition: "center 20%" },
  { name: "Théo", role: "Co-fondateur", photo: theoPhoto, desc: "Créatif en startup, accro aux outils low-code. Il sait leurs limites.", objectPosition: "center 35%" },
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
      const r = timeline.getBoundingClientRect();
      const vc = window.innerHeight * 0.55;
      if (r.top >= vc) setProgress(0);
      else if (r.top + r.height <= vc) setProgress(100);
      else setProgress(((vc - r.top) / r.height) * 100);
      setActiveSteps(stepRefs.current.map((ref) => { if (!ref) return false; const rect = ref.getBoundingClientRect(); return rect.top + rect.height / 2 <= vc; }));
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
        {steps.map((s, i) => { const isActive = activeSteps[i]; const Icon = s.icon; return (
          <div key={s.num} ref={(el) => { stepRefs.current[i] = el; }} className="flex gap-6 md:gap-8 items-start">
            <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center relative z-10 transition-all duration-500 shadow-md" style={{ backgroundColor: isActive ? C.amber : C.text, color: isActive ? "#FFFFFF" : "#FAF7F2" }}><Icon className="w-5 h-5 md:w-6 md:h-6" /></div>
            <div className="pt-1 md:pt-2">
              <div className="flex flex-wrap items-baseline gap-3 mb-2">
                <h3 className={`${heading} text-lg md:text-xl transition-colors duration-500`} style={{ color: isActive ? C.amber : C.text }}>{s.title}</h3>
                <span className="text-sm font-medium px-2.5 py-0.5 rounded-full" style={{ color: C.textSec, backgroundColor: C.amberLight }}>{s.time}</span>
              </div>
              <p className="leading-relaxed max-w-lg" style={{ color: C.textSec }}>{s.desc}</p>
            </div>
          </div>
        ); })}
      </div>
    </div>
  );
};

const LandingGoogleStack = () => {

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
          <Reveal><p className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: C.amber }}>Remplacez votre stack bricolée</p></Reveal>
          <Reveal delay={100}><h1 className={`${heading} text-3xl md:text-5xl lg:text-[3.5rem] leading-tight mb-6`}>Vos outils bricolés ne suivent plus ? On crée l'application qu'il vous faut.</h1></Reveal>
          <Reveal delay={200}><p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: C.textSec }}>Make, Zapier, Notion, Airtable… ça marche presque, mais c'est fragile, limité, et ça vous coûte du temps à maintenir. On remplace ça par une application solide, sur mesure.</p></Reveal>
          <Reveal delay={300}><CTA id="cta-hero" /></Reveal>
        </div>
      </section>

      <section className="px-4 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valueProps.map((c, i) => { const Icon = c.icon; return (
              <Reveal key={i} delay={i * 100}>
                <div className="rounded-2xl p-6 md:p-8 border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden" style={{ backgroundColor: C.bg, borderColor: "#E5E7EB" }}>
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: C.amberLight }}><Icon className="w-6 h-6" style={{ color: C.amber }} /></div>
                    <span className="text-xs font-semibold uppercase tracking-wide px-2.5 py-1 rounded-full" style={{ backgroundColor: "#ECFDF5", color: C.success }}>Inclus</span>
                  </div>
                  <h3 className={`${heading} text-lg md:text-xl mb-3`}>{c.title}</h3>
                  <p className="leading-relaxed" style={{ color: C.textSec }}>{c.desc}</p>
                </div>
              </Reveal>
            ); })}
          </div>
        </div>
      </section>

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
          <Reveal delay={100}><p className="text-lg text-center mb-14 max-w-2xl mx-auto" style={{ color: C.textSec }}>On vient d'un monde où les bricolages existent. On code pour les remplacer.</p></Reveal>
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
              <h3 className={`${heading} text-lg mb-5 flex items-center gap-2`}><ShieldCheck className="w-5 h-5" style={{ color: C.amber }} />Nos garanties</h3>
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

      <LPFormCalendly
        title="Réservez votre appel découverte gratuit"
        subtitle="15-20 minutes pour démonter votre stack actuelle. Sans engagement."
      />

      <section className="px-4 md:px-8 py-16 md:py-20 text-center" style={{ backgroundColor: C.amberLight }}>
        <div className="max-w-2xl mx-auto">
          <Reveal><p className="text-lg md:text-xl font-medium mb-8" style={{ color: C.text }}>🇫🇷 Entreprise française. Code source remis à chaque projet. Prix forfaitaire. Application solide.</p></Reveal>
          <Reveal delay={100}><CTA id="cta-bottom" /></Reveal>
        </div>
      </section>

      <footer className="px-4 md:px-8 py-10 md:py-14 text-sm" style={{ backgroundColor: C.footer, color: "#D1D5DB" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5 mb-1"><img src={logo} alt="Botami Software" className="h-7 w-7 brightness-0 invert" /><span className={`${heading} text-lg text-white`}>Botami Software</span></div>
            <p>🇫🇷 Entreprise française</p>
            <a href="mailto:contact@botami.fr" className="hover:text-white transition-colors block">contact@botami.fr</a>
            <a href="tel:+33600000000" className="hover:text-white transition-colors block">06 00 00 00 00</a>
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

export default LandingGoogleStack;
