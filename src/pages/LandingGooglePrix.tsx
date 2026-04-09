import { useState, useEffect, useRef } from "react";
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
  TrendingDown,
  BarChart3,
  Link2,
  Timer,
} from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import eliasPhoto from "@/assets/elias.png";
import theoPhoto from "@/assets/theo.png";
import logo from "@/assets/logo-botami.svg";

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

const valueProps = [
  {
    icon: Banknote,
    title: "Budget 3 ans : comparez l'app vs le SaaS",
    desc: "SaaS à 200€/mois = 7 200€ sur 3 ans. À 500€/mois = 18 000€. Notre app : entre 5 000€ et 15 000€, une seule fois. Vous rentabilisez en 1-3 ans.",
  },
  {
    icon: ShieldCheck,
    title: "Prix forfaitaire, pas de TJM caché",
    desc: "Le prix qu'on annonce est le prix que vous payez. Pas de jours supplémentaires qui traînent. Pas de surprise à la facturation. Honnêteté.",
  },
  {
    icon: TrendingDown,
    title: "Vous économisez après livraison",
    desc: "Plus d'abonnements, plus de maintenance coûteuse. Une application qu'un autre dev peut reprendre. Coût total baisse rapidement.",
  },
  {
    icon: Settings2,
    title: "Payez pour ce que vous utilisez, rien d'autre",
    desc: "L'app fait votre métier, pas 50 fonctionnalités inutiles. Chaque euro dépensé ajoute une fonctionnalité pertinente.",
  },
];

const priceFactors = [
  {
    icon: Layers,
    title: "Complexité métier",
    desc: "Une app de gestion de commandes : ~5 000-7 000€. Un système d'automatisation complexe : 10 000-15 000€.",
  },
  {
    icon: BarChart3,
    title: "Volume de données",
    desc: "Peu de données : prix bas. Énormes volumes, rapports sophistiqués, historique : prix monte.",
  },
  {
    icon: Link2,
    title: "Intégrations externes",
    desc: "Une app simple : peu d'intégrations. Un système qui connecte 3-5 outils : coût augmente.",
  },
  {
    icon: Timer,
    title: "Délai",
    desc: "Vous voulez vite, mais avec qualité ? C'est faisable — ça s'appelle le coût du travail. Un délai un peu plus long = coût baisse un peu.",
  },
];

const faqs = [
  {
    q: "5 000€-15 000€, c'est beaucoup ?",
    a: "Comparez à un SaaS : 200€/mois = 7 200€ sur 3 ans, sans propriété. À 500€/mois = 18 000€. Notre app vous appartient, vous la gardez, elle se rentabilise.",
  },
  {
    q: "Que se passe-t-il après la livraison ? Ça coûte cher de la maintenir ?",
    a: "Le code est documenté et stable. Maintenance minimale. Vous pouvez la faire vous-même, embaucher quelqu'un, ou nous proposer un contrat (tarif à définir). Pas obligatoire.",
  },
  {
    q: "Quel est le prix minimum ?",
    a: "5 000€. Dessous, c'est trop court pour construire correctement. Ça peut être une prestation no-code ailleurs, pas une vraie app.",
  },
  {
    q: "Et si mon projet dépasse 15 000€ ?",
    a: "C'est possible, mais rare. On évalue précisément au cahier des charges. Si c'est hors budget, on peut réduire le scope ensemble.",
  },
  {
    q: "Puis-je payer en plusieurs fois ?",
    a: "On discute du financement ensemble. Pour un forfait standard : dépôt au signature, reste à la livraison. Pour les gros projets : jalons intermédiaires. On est flexibles.",
  },
];

const guarantees = [
  "Prix forfaitaire annoncé avant de commencer",
  "Code source remis à la livraison",
  "Maquette validée avant le développement",
  "Droit de changer de prestataire à tout moment",
];

const team = [
  {
    name: "Elias",
    role: "Co-fondateur",
    photo: eliasPhoto,
    desc: "10 ans en publicité digitale (Google Ads, Meta Ads). Il connaît le coût réel des outils.",
    objectPosition: "center 20%",
  },
  {
    name: "Théo",
    role: "Co-fondateur",
    photo: theoPhoto,
    desc: "Parcours marketing en startup. Pragmatique sur les budgets.",
    objectPosition: "center 35%",
  },
];

const LandingGooglePrix = () => {
  const [form, setForm] = useState({ prenom: "", email: "", tel: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              Prix du développement sur mesure
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className={`${heading} text-3xl md:text-5xl lg:text-[3.5rem] leading-tight mb-6`}>
              Combien coûte vraiment une application sur mesure ?
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: C.textSec }}>
              Entre 5 000€ et 15 000€. Prix forfaitaire, transparent, livré en 4 à 8 semaines.
              Pour comprendre ce prix et ce que vous en tirez, parlez-nous de votre situation.
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

      {/* ─── Bloc 3 — Facteurs de prix ─── */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className={`${heading} text-2xl md:text-4xl mb-4 text-center`}>
              Pourquoi le coût varie entre 5 000€ et 15 000€
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-center mb-14 max-w-2xl mx-auto" style={{ color: C.textSec }}>
              Chaque projet est différent. Voici ce qui influence le prix.
            </p>
          </Reveal>

          <div className="flex flex-col gap-8">
            {priceFactors.map((f, i) => {
              const Icon = f.icon;
              return (
                <Reveal key={i} delay={i * 100}>
                  <div className="rounded-2xl p-6 md:p-8 border hover:shadow-lg transition-all duration-300" style={{ backgroundColor: C.card, borderColor: "#E5E7EB" }}>
                    <div className="flex gap-5 items-start">
                      <div
                        className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl"
                        style={{ backgroundColor: C.amberLight }}
                      >
                        <Icon className="w-6 h-6" style={{ color: C.amber }} />
                      </div>
                      <div>
                        <h3 className={`${heading} text-lg md:text-xl mb-2`}>{f.title}</h3>
                        <p className="leading-relaxed" style={{ color: C.textSec }}>{f.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
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
              On ne gonfle pas le prix. On estime honnêtement, on livre sans débordement.
            </p>
          </Reveal>

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
              Questions sur le prix
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-center mb-12" style={{ color: C.textSec }}>
              Tout ce que vous voulez savoir sur le coût d'une application sur mesure.
            </p>
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
      <section id="formulaire" className="px-4 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-xl mx-auto">
          <Reveal>
            <h2 className={`${heading} text-2xl md:text-3xl mb-3 text-center`}>
              Parlons de votre budget et votre projet
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-center mb-10" style={{ color: C.textSec }}>
              15-20 minutes pour évaluer la complexité et le coût. Sans engagement.
            </p>
          </Reveal>

          <Reveal delay={200}>
            {submitted ? (
              <div className="rounded-2xl p-8 text-center border" style={{ backgroundColor: C.bg, borderColor: "#E5E7EB" }}>
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4" style={{ color: C.success }} />
                <h3 className={`${heading} text-xl mb-2`}>Demande envoyée !</h3>
                <p style={{ color: C.textSec }}>On vous recontacte sous 24h.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-6 md:p-8 border space-y-5"
                style={{ backgroundColor: C.bg, borderColor: "#E5E7EB" }}
              >
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Prénom <span style={{ color: C.amber }}>*</span>
                  </label>
                  <input
                    required
                    type="text"
                    value={form.prenom}
                    onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                    className="w-full rounded-lg border px-4 py-3 text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ borderColor: "#D1D5DB", "--tw-ring-color": C.amber } as React.CSSProperties}
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Email professionnel <span style={{ color: C.amber }}>*</span>
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border px-4 py-3 text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ borderColor: "#D1D5DB", "--tw-ring-color": C.amber } as React.CSSProperties}
                    placeholder="prenom@entreprise.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Téléphone</label>
                  <input
                    type="tel"
                    value={form.tel}
                    onChange={(e) => setForm({ ...form, tel: e.target.value })}
                    className="w-full rounded-lg border px-4 py-3 text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent"
                    style={{ borderColor: "#D1D5DB", "--tw-ring-color": C.amber } as React.CSSProperties}
                    placeholder="06 12 34 56 78"
                  />
                </div>
                <button
                  type="submit"
                  className={`${ctaBtn} w-full text-center`}
                  style={{ backgroundColor: C.amber }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.amberHover)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.amber)}
                >
                  Je réserve mon appel découverte gratuit
                </button>
                <p className="text-center text-sm" style={{ color: C.textSec }}>
                  Réponse sous 24h.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* ─── Bloc 7 — Dernier CTA ─── */}
      <section className="px-4 md:px-8 py-16 md:py-20 text-center" style={{ backgroundColor: C.amberLight }}>
        <div className="max-w-2xl mx-auto">
          <Reveal>
            <p className="text-lg md:text-xl font-medium mb-8" style={{ color: C.text }}>
              Entreprise française. Prix honnête, code source remis, pas de surprises. Entre 5 000€ et 15 000€.
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
            <p>Entreprise française</p>
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

export default LandingGooglePrix;
