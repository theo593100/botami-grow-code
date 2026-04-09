import { useState, useEffect, useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Banknote,
  CalendarCheck,
  Code2,
  Users,
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

const C = {
  bg: "#FAF7F2", card: "#FFFFFF", amber: "#C4872C", amberHover: "#D4A04A",
  amberLight: "#FEF3E2", text: "#1A1A1A", textSec: "#6B7280",
  success: "#10B981", footer: "#1A1A1A",
} as const;

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${className}`}
      style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(32px)", transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const heading = "font-heading font-bold";
const body = "font-body";
const ctaBtn = "inline-block font-body font-semibold text-white rounded-lg px-8 py-4 text-base md:text-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5";

const CTA = ({ id }: { id?: string }) => (
  <a href="#formulaire" id={id} className={ctaBtn} style={{ backgroundColor: C.amber }}
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.amberHover)}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.amber)}>
    Je réserve mon appel découverte gratuit
  </a>
);

const valueProps = [
  { icon: Banknote, title: "Prix transparent", desc: "Entre 5 000€ et 15 000€ selon la complexité. Pas de TJM qui tourne, pas de variable. Le prix qu'on annonce est le prix que vous payez." },
  { icon: CalendarCheck, title: "Délai respecté", desc: "Premiers écrans cliquables dès les premières semaines. En production en 4 à 8 semaines. Pas de projet qui s'éternise." },
  { icon: Code2, title: "L'app est à vous", desc: "Code source, données, hébergement — tout vous appartient. Pas de lock-in. Un autre développeur peut le reprendre demain." },
  { icon: Users, title: "Conçu avec vous", desc: "Cahier des charges co-construit, maquette avant le code, tests sur vos cas réels. Vous validez à chaque étape." },
];

const steps = [
  { num: "01", icon: FileText, title: "Cahier des charges", time: "~1 semaine", desc: "On comprend votre besoin ensemble. On pose les bonnes questions. Livrable : un document précis qui décrit l'application qu'on va construire." },
  { num: "02", icon: Layers, title: "Maquette", time: "~1 semaine", desc: "Prototype cliquable avec les vrais écrans. Vous testez la navigation avant qu'on écrive du code. Vous validez avant de passer à la suite." },
  { num: "03", icon: Hammer, title: "Développement", time: "~1-2 semaines", desc: "On construit. Vous testez des versions à chaque étape. Pas d'effet surprise à la livraison — vous avez suivi le chemin." },
  { num: "04", icon: PackageCheck, title: "Livraison + formation", time: "~2-3 jours", desc: "L'application est live. Données migrées. Équipe formée. Code source, accès, documentation — vous avez tout." },
];

const faqs = [
  { q: "Combien ça coûte ?", a: "Entre 5 000€ et 15 000€ selon la complexité. Prix forfaitaire, pas de surprise. Pour comparaison : un SaaS à 200€/mois vous coûte 7 200€ sur 3 ans." },
  { q: "Combien de temps ça prend ?", a: "4 à 8 semaines selon la complexité. Les 2 premières sont dédiées au cahier des charges et à la maquette. Vous validez avant le développement." },
  { q: "Et après la livraison, qui la maintient ?", a: "C'est à vous de décider. Le code est documenté et transférable. Vous pouvez embaucher quelqu'un, nous proposer une maintenance, ou rester autonome." },
  { q: "Vous développez quoi comme technos ?", a: "On choisit les outils les plus adaptés à votre cas. Nos choix : backend solide, frontend moderne, base de données sécurisée, hébergement français de préférence." },
  { q: "Et si je veux changer de prestataire en cours ?", a: "Aucun problème. Le code est à vous, pas à nous. Vous pouvez partir quand vous voulez avec tout ce qu'on a construit." },
];

const guarantees = [
  "Prix forfaitaire annoncé avant de commencer",
  "Code source remis à la livraison",
  "Maquette validée avant le développement",
  "Droit de changer de prestataire à tout moment",
];

const team = [
  { name: "Elias", role: "Co-fondateur", photo: eliasPhoto, desc: "10 ans en publicité digitale (Google Ads, Meta Ads). Il capte les enjeux business avant le code.", objectPosition: "center 20%" },
  { name: "Théo", role: "Co-fondateur", photo: theoPhoto, desc: "Créatif en startup. Obsédé par les résultats, pas par la technologie.", objectPosition: "center 35%" },
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
      setActiveSteps(stepRefs.current.map((ref) => {
        if (!ref) return false;
        const rect = ref.getBoundingClientRect();
        return rect.top + rect.height / 2 <= viewportCenter;
      }));
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
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center relative z-10 transition-all duration-500 shadow-md"
                style={{ backgroundColor: isActive ? C.amber : C.text, color: isActive ? "#FFFFFF" : "#FAF7F2" }}>
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

const LandingGoogleDev = () => {
  const [form, setForm] = useState({ prenom: "", email: "", tel: "" });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <div className={body} style={{ backgroundColor: C.bg, color: C.text }}>
      <header className="py-5 px-4 md:px-8 border-b" style={{ backgroundColor: C.bg, borderColor: "#E5E7EB" }}>
        <div className="max-w-5xl mx-auto flex items-center gap-2.5">
          <img src={logo} alt="Botami Software" className="h-8 w-8" />
          <span className={`${heading} text-xl md:text-2xl`} style={{ color: C.text }}>Botami Software</span>
        </div>
      </header>

      {/* Hero */}
      <section className="px-4 md:px-8 pt-16 pb-20 md:pt-24 md:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal><p className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: C.amber }}>Développement d'application sur mesure</p></Reveal>
          <Reveal delay={100}><h1 className={`${heading} text-3xl md:text-5xl lg:text-[3.5rem] leading-tight mb-6`}>Développement d'application sur mesure. De l'idée à la production.</h1></Reveal>
          <Reveal delay={200}><p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: C.textSec }}>Vous avez un besoin métier. On crée l'application qu'il vous faut. Code source livré, prix forfaitaire, livraison en 4 à 8 semaines.</p></Reveal>
          <Reveal delay={300}><CTA id="cta-hero" /></Reveal>
        </div>
      </section>

      {/* Value props */}
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

      {/* Process */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className={`${heading} text-2xl md:text-4xl mb-2 text-center`}>Comment ça se passe</h2>
            <p className="text-center text-sm font-semibold uppercase tracking-wide mb-4" style={{ color: C.success }}>~4 semaines du brief à la livraison</p>
          </Reveal>
          <Reveal delay={100}><p className="text-lg text-center mb-14 max-w-2xl mx-auto" style={{ color: C.textSec }}>Vous ne gérez pas un projet IT. On pose les questions, on propose, vous validez.</p></Reveal>
          <ProcessTimeline />
        </div>
      </section>

      {/* Crédibilité */}
      <section className="px-4 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-4xl mx-auto">
          <Reveal><h2 className={`${heading} text-2xl md:text-4xl mb-4 text-center`}>Qui est derrière Botami</h2></Reveal>
          <Reveal delay={100}><p className="text-lg text-center mb-14 max-w-2xl mx-auto" style={{ color: C.textSec }}>On code pour votre métier, pas avec du jargon technique que vous ne comprenez pas.</p></Reveal>

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

      {/* FAQ */}
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

      {/* Formulaire */}
      <section id="formulaire" className="px-4 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-xl mx-auto">
          <Reveal><h2 className={`${heading} text-2xl md:text-3xl mb-3 text-center`}>Réservez votre appel découverte gratuit</h2></Reveal>
          <Reveal delay={100}><p className="text-center mb-10" style={{ color: C.textSec }}>15-20 minutes pour parler de votre projet. Sans engagement.</p></Reveal>
          <Reveal delay={200}>
            {submitted ? (
              <div className="rounded-2xl p-8 text-center border" style={{ backgroundColor: C.bg, borderColor: "#E5E7EB" }}>
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4" style={{ color: C.success }} />
                <h3 className={`${heading} text-xl mb-2`}>Demande envoyée !</h3>
                <p style={{ color: C.textSec }}>On vous recontacte sous 24h.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="rounded-2xl p-6 md:p-8 border space-y-5" style={{ backgroundColor: C.bg, borderColor: "#E5E7EB" }}>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Prénom <span style={{ color: C.amber }}>*</span></label>
                  <input required type="text" value={form.prenom} onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                    className="w-full rounded-lg border px-4 py-3 text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ borderColor: "#D1D5DB", "--tw-ring-color": C.amber } as React.CSSProperties} placeholder="Votre prénom" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email professionnel <span style={{ color: C.amber }}>*</span></label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border px-4 py-3 text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ borderColor: "#D1D5DB", "--tw-ring-color": C.amber } as React.CSSProperties} placeholder="prenom@entreprise.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Téléphone</label>
                  <input type="tel" value={form.tel} onChange={(e) => setForm({ ...form, tel: e.target.value })}
                    className="w-full rounded-lg border px-4 py-3 text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ borderColor: "#D1D5DB", "--tw-ring-color": C.amber } as React.CSSProperties} placeholder="06 12 34 56 78" />
                </div>
                <button type="submit" className={`${ctaBtn} w-full text-center`} style={{ backgroundColor: C.amber }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.amberHover)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.amber)}>
                  Je réserve mon appel découverte gratuit
                </button>
                <p className="text-center text-sm" style={{ color: C.textSec }}>Réponse sous 24h.</p>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* Dernier CTA */}
      <section className="px-4 md:px-8 py-16 md:py-20 text-center" style={{ backgroundColor: C.amberLight }}>
        <div className="max-w-2xl mx-auto">
          <Reveal><p className="text-lg md:text-xl font-medium mb-8" style={{ color: C.text }}>Entreprise française. Prix forfaitaire, code source remis à chaque projet. Zéro surprise.</p></Reveal>
          <Reveal delay={100}><CTA id="cta-bottom" /></Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-8 py-10 md:py-14 text-sm" style={{ backgroundColor: C.footer, color: "#D1D5DB" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5 mb-1">
              <img src={logo} alt="Botami Software" className="h-7 w-7 brightness-0 invert" />
              <span className={`${heading} text-lg text-white`}>Botami Software</span>
            </div>
            <p>Entreprise française</p>
            <a href="mailto:contact@botami.fr" className="hover:text-white transition-colors block">contact@botami.fr</a>
            <a href="tel:+33600000000" className="hover:text-white transition-colors block">06 00 00 00 00</a>
          </div>
          <div className="flex flex-col md:items-end gap-4">
            <div className="flex gap-4">
              <a href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</a>
              <span>|</span>
              <a href="/politique-de-confidentialite" className="hover:text-white transition-colors">Politique de confidentialité</a>
            </div>
            <a href="https://linkedin.com/company/botami" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingGoogleDev;
