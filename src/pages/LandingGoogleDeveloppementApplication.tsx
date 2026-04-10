import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  Clock,
  Euro,
  FileText,
  Hammer,
  Layers,
  Linkedin,
  Mail,
  PackageCheck,
  Phone,
  Shield,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import LPFormCalendly from "@/components/lp/LPFormCalendly";

const C = {
  bg: "#FAF7F2",
  card: "#FFFFFF",
  amber: "#C4872C",
  amberHover: "#D4A04A",
  amberPale: "#FEF3E2",
  charcoal: "#1A1A1A",
  slate: "#6B7280",
  success: "#10B981",
  footer: "#1A1A1A",
} as const;

const heading = "font-heading font-bold";
const ctaBtn =
  "inline-block font-body font-semibold text-white rounded-lg px-8 py-4 text-base md:text-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5";

const steps = [
  {
    num: "01",
    icon: FileText,
    title: "Cahier des charges",
    time: "1-2 semaines",
    desc: "On comprend votre besoin métier. On définit les fonctionnalités, les écrans, les intégrations, les règles de gestion. On propose une architecture claire.",
  },
  {
    num: "02",
    icon: Layers,
    title: "Maquette",
    time: "1-2 semaines",
    desc: "Prototype cliquable de toute l'application. Vous testez la navigation, validez les écrans, ajustez avant qu'on code une ligne.",
  },
  {
    num: "03",
    icon: Hammer,
    title: "Développement",
    time: "4-8 semaines",
    desc: "On construit. Versions testables chaque semaine sur un environnement de staging. Vous testez sur vos vrais cas d'usage. Bugs corrigés en continu.",
  },
  {
    num: "04",
    icon: PackageCheck,
    title: "Livraison + formation",
    time: "1 semaine",
    desc: "Mise en production. Migration des données si besoin. Formation de l'équipe. Remise du code source, des accès, de la documentation.",
  },
];

const valueProps = [
  {
    icon: Euro,
    title: "Comparaison 3 ans : app vs SaaS",
    desc: "SaaS à 200€/mois = 7 200€ sur 3 ans. À 500€/mois = 18 000€. Votre app : 5 000–15 000€ une seule fois. Propriété totale, zéro abonnement après.",
  },
  {
    icon: CheckCircle2,
    title: "Le prix qu'on annonce est le prix que vous payez",
    desc: "Pas de TJM qui traîne. Pas de surprise à la facturation. Forfait transparent. Honnêteté.",
  },
  {
    icon: Shield,
    title: "Chaque euro dépensé ajoute une fonction",
    desc: "L'app ne fait que ce dont vous avez besoin. Pas de 50 fonctionnalités inutiles. Budget rentabilisé rapidement.",
  },
  {
    icon: Clock,
    title: "Après livraison, moins coûteux",
    desc: "Plus d'abonnements SaaS. Application stable, documentée. Maintenance minimale. Coût total baisse.",
  },
];

const faqs = [
  {
    q: "5 000€-15 000€, c'est cher ?",
    a: "Non. Comparez : SaaS à 200€/mois = 7 200€ sur 3 ans, sans propriété. SaaS à 500€/mois = 18 000€ sur 3 ans. Votre app vous appartient, elle se rentabilise vite.",
  },
  {
    q: "Quels sont les coûts après la livraison ?",
    a: "L'app est stable et documentée. Maintenance minimale si bien construite. Mises à jour OS, corrections mineures. Pas d'abonnement obligatoire — maintenance optionnelle.",
  },
  {
    q: "Quel est le prix minimum ? Et le maximum ?",
    a: "Minimum : 5 000€. En dessous, c'est trop court pour une vraie app. Maximum : dépasse rarement 15 000€. Si votre besoin est hors budget, on réduit le scope ensemble.",
  },
  {
    q: "Pouvez-vous développer une app à 3 000€ ?",
    a: "Non. À 3 000€, c'est trop court. Ça pourrait être du no-code ailleurs, ou une app très minimale, mais une vraie application professionnelle : 5 000€ minimum.",
  },
  {
    q: "Puis-je payer en plusieurs fois ?",
    a: "Oui. Pour un forfait standard : dépôt à la signature, reste à la livraison. Pour gros projets : jalons intermédiaires. On discute du financement ensemble — flexibilité.",
  },
];

const comparisonRows = [
  { label: "Modèle de prix", competitor: "TJM 500-800€ × estimation de jours", botami: "Forfait 5 000-15 000€, une seule fois" },
  { label: "Propriété du code", competitor: "Variable, à négocier", botami: "Oui, code source remis à la livraison" },
  { label: "Délai de livraison", competitor: "4 à 12 mois selon la charge", botami: "4 à 8 semaines" },
  { label: "Personnalisation", competitor: "Totale mais à surfacturer", botami: "Conçu sur mesure pour votre métier" },
  { label: "Dépendance au fournisseur", competitor: "Forte (maintenance facturée)", botami: "Zéro — vous pouvez partir avec tout" },
  { label: "Coût sur 3 ans", competitor: "25 000 à 90 000€", botami: "5 000-15 000€ (payé une fois)" },
];

const clientLogos = [
  { name: "My Garden Loft", src: "/logos/mygardenloft.png" },
  { name: "Le Cannet Luxury Real Estate", src: "/logos/cannet-luxury-real-estate.png" },
  { name: "Fondation Mérieux", src: "/logos/fondation-merieux.png" },
  { name: "Esquare", src: "/logos/esquare.png" },
  { name: "YBA", src: "/logos/yba.png" },
  { name: "Léa", src: "/logos/lea.png" },
  { name: "Carré Privé", src: "/logos/carre-prive.svg" },
  { name: "Clinique Axium", src: "/logos/axium.png" },
  { name: "Harmonie", src: "/logos/harmonie.png" },
  { name: "Toundra", src: "/logos/toundra.png" },
];

const Header = () => (
  <header className="py-6 px-4 md:px-8" style={{ backgroundColor: C.card }}>
    <div className="max-w-6xl mx-auto flex items-center justify-center md:justify-start">
      <span className={`${heading} text-xl`} style={{ color: C.charcoal }}>
        Botami Software
      </span>
    </div>
  </header>
);

const Footer = () => (
  <footer style={{ backgroundColor: C.footer }} className="py-12 px-4 md:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-heading font-bold text-xl text-white mb-2">Botami Software</h3>
          <p className="text-sm opacity-80" style={{ color: C.slate }}>
            🇫🇷 Entreprise française
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center md:text-left">
          <a href="mailto:contact@botami.fr" className="flex items-center gap-2 hover:opacity-80 transition-opacity" style={{ color: C.slate }}>
            <Mail className="w-4 h-4" />
            <span className="text-sm">contact@botami.fr</span>
          </a>
          <a href="tel:+33600000000" className="flex items-center gap-2 hover:opacity-80 transition-opacity" style={{ color: C.slate }}>
            <Phone className="w-4 h-4" />
            <span className="text-sm">Téléphone</span>
          </a>
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity" style={{ color: C.slate }}>
            <Linkedin className="w-4 h-4" />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm" style={{ color: C.slate }}>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
          <span className="opacity-50">|</span>
          <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
        </div>
        <p className="opacity-60">© 2024 Botami Software</p>
      </div>
    </div>
  </footer>
);

const LandingGoogleDeveloppementApplication = () => {
  const logosRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Google Fonts
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const el = logosRef.current;
    if (!el) return;
    let raf: number;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const max = el.scrollWidth - el.clientWidth;
        if (max <= 0) return;
        const progress = window.scrollY / (document.body.scrollHeight - window.innerHeight);
        el.scrollLeft = progress * max;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="min-h-screen font-body" style={{ backgroundColor: C.bg }}>
      <style>{`
        :root {
          --font-heading: 'Space Grotesk', sans-serif;
          --font-body: 'DM Sans', sans-serif;
        }
        .font-heading { font-family: var(--font-heading); }
        .font-body { font-family: var(--font-body); }
      `}</style>

      <Header />

      {/* Bloc 1 — Hero */}
      <section className="px-4 md:px-8 pt-12 md:pt-20 pb-16 md:pb-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className={`${heading} text-3xl md:text-5xl lg:text-6xl mb-6`} style={{ color: C.charcoal }}>
            Combien coûte vraiment de développer une application ?
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10" style={{ color: C.slate }}>
            Entre 5 000€ et 15 000€. Prix forfaitaire, transparent, livré en 4 à 8 semaines. Pour comprendre ce prix, ce que vous en tirez, et comment ça se compare au SaaS, parlons de votre situation.
          </p>
          <a
            href="#formulaire"
            className={ctaBtn}
            style={{ backgroundColor: C.amber }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.amberHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.amber)}
          >
            Je réserve mon appel découverte gratuit
          </a>
          <p className="mt-4 text-sm" style={{ color: C.slate }}>
            Réponse sous 24h.
          </p>
        </div>
      </section>

      {/* Bloc 2 — Proposition de valeur */}
      <section className="px-4 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.bg }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((vp, idx) => (
              <div key={idx} className="p-6 rounded-xl border shadow-sm" style={{ backgroundColor: C.card, borderColor: "#E5E7EB" }}>
                <vp.icon className="w-8 h-8 mb-4" style={{ color: C.amber }} />
                <h3 className={`${heading} text-lg mb-2`} style={{ color: C.charcoal }}>{vp.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.slate }}>{vp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloc 2B — Trust bar */}
      <section className="px-4 md:px-8 py-12 md:py-16" style={{ backgroundColor: C.bg }}>
        <div className="max-w-6xl mx-auto">
          <p className={`${heading} text-sm uppercase tracking-widest text-center mb-8`} style={{ color: C.slate }}>
            Notre équipe accompagne des entreprises en acquisition digitale depuis des années
          </p>

          <div
            ref={logosRef}
            className="flex gap-8 overflow-x-auto scrollbar-hide py-4 opacity-60"
            style={{ scrollBehavior: "auto" }}
          >
            {clientLogos.map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 h-12 w-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                {logo.src ? (
                  <img src={logo.src} alt={logo.name} className="max-h-full max-w-full object-contain" />
                ) : (
                  <span className="font-heading font-semibold text-sm" style={{ color: C.charcoal }}>
                    {logo.name}
                  </span>
                )}
              </div>
            ))}
          </div>

          <p className="text-center mt-8 max-w-3xl mx-auto text-base italic" style={{ color: C.slate }}>
            "On les a vues se battre avec des SaaS trop chers, des Excel qui craquent, des outils qui ne collent pas à leur métier. Botami Software est né de ce constat : quand les outils du marché ne suffisent plus, on construit celui qu'il vous faut."
          </p>
        </div>
      </section>

      {/* Bloc 2C — Comparatif */}
      <section className="px-4 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.bg }}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`${heading} text-2xl md:text-3xl mb-4 text-center`} style={{ color: C.charcoal }}>
            Devis agence au TJM vs Botami Software
          </h2>
          <p className="text-center mb-10 max-w-2xl mx-auto" style={{ color: C.slate }}>
            Pourquoi le prix d'une application au forfait est honnête — et celui au TJM est un pari.
          </p>

          <div className="rounded-xl overflow-hidden border shadow-sm" style={{ backgroundColor: C.card, borderColor: "#E5E7EB" }}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: C.amberPale }}>
                    <th className="text-left p-4 font-heading font-semibold" style={{ color: C.charcoal }}>Critère</th>
                    <th className="text-left p-4 font-heading font-semibold" style={{ color: C.charcoal }}>Devis agence traditionnelle</th>
                    <th className="text-left p-4 font-heading font-semibold" style={{ color: C.amber }}>Botami Software</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="border-t" style={{ borderColor: "#E5E7EB" }}>
                      <td className="p-4 font-medium" style={{ color: C.charcoal }}>{row.label}</td>
                      <td className="p-4 text-sm" style={{ color: C.slate }}>{row.competitor}</td>
                      <td className="p-4 text-sm font-medium" style={{ color: C.amber }}>{row.botami}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Bloc 3 — Facteurs de prix */}
      <section className="px-4 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-6xl mx-auto">
          <h2 className={`${heading} text-2xl md:text-3xl mb-4 text-center`} style={{ color: C.charcoal }}>
            Pourquoi le coût varie entre 5 000€ et 15 000€
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {pricingFactors.map((pf, idx) => (
              <div key={idx} className="p-6 rounded-xl border" style={{ backgroundColor: C.bg, borderColor: "#E5E7EB" }}>
                <pf.icon className="w-8 h-8 mb-4" style={{ color: C.amber }} />
                <h3 className={`${heading} text-lg mb-2`} style={{ color: C.charcoal }}>{pf.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: C.slate }}>{pf.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloc 4 — Crédibilité */}
      <section className="px-4 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.bg }}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`${heading} text-2xl md:text-3xl mb-10 text-center`} style={{ color: C.charcoal }}>
            Qui est derrière Botami
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 rounded-xl border" style={{ backgroundColor: C.card, borderColor: "#E5E7EB" }}>
              <h3 className={`${heading} text-xl mb-2`} style={{ color: C.charcoal }}>Elias — CEO</h3>
              <p className="text-sm leading-relaxed" style={{ color: C.slate }}>
                Il cadre votre projet et vous donne un prix honnête dès le départ. 10 ans en publicité digitale, il connaît les outils métier et sait quand ils ne suffisent plus.
              </p>
            </div>
            <div className="p-6 rounded-xl border" style={{ backgroundColor: C.card, borderColor: "#E5E7EB" }}>
              <h3 className={`${heading} text-xl mb-2`} style={{ color: C.charcoal }}>Théo — CTO</h3>
              <p className="text-sm leading-relaxed" style={{ color: C.slate }}>
                Il développe votre application et garantit que le budget couvre le livrable. Parcours startup et marketing tech, il construit des outils qui servent le business, pas la technique.
              </p>
            </div>
          </div>

          <div className="rounded-xl p-6 border" style={{ backgroundColor: C.amberPale, borderColor: "#E5E7EB" }}>
            <h4 className={`${heading} text-lg mb-4`} style={{ color: C.charcoal }}>Garanties</h4>
            <ul className="space-y-3">
              {[
                "Prix forfaitaire annoncé avant de commencer",
                "Code source remis à la livraison",
                "Maquette validée avant le développement",
                "Droit de changer de prestataire à tout moment",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: C.success }} />
                  <span className="text-sm" style={{ color: C.charcoal }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bloc 5 — FAQ */}
      <section className="px-4 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-3xl mx-auto">
          <h2 className={`${heading} text-2xl md:text-3xl mb-10 text-center`} style={{ color: C.charcoal }}>
            Questions sur le coût
          </h2>

          <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border rounded-xl px-6" style={{ backgroundColor: C.bg, borderColor: "#E5E7EB" }}>
                <AccordionTrigger className={`${heading} text-left hover:no-underline py-4`} style={{ color: C.charcoal }}>
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-4" style={{ color: C.slate }}>
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bloc 6 — Réservation */}
      <LPFormCalendly
              route="/lp/google/developpement-application"
        title="Parlons de votre budget et votre projet"
        subtitle="15-20 minutes pour évaluer la complexité et le coût de votre app. Sans engagement."
        buttonLabel="Je réserve mon appel découverte gratuit"
      />

      {/* Bloc 7 — Dernier CTA */}
      <section className="px-4 md:px-8 py-16" style={{ backgroundColor: C.amberPale }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`${heading} text-2xl md:text-3xl mb-6`} style={{ color: C.charcoal }}>
            Prêt à discuter de votre projet et de votre budget ?
          </h2>
          <a
            href="#formulaire"
            className={ctaBtn}
            style={{ backgroundColor: C.amber }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.amberHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.amber)}
          >
            Je réserve mon appel découverte gratuit
          </a>
          <p className="mt-4 text-sm" style={{ color: C.slate }}>
            Entreprise française. Prix honnête, code source remis, pas de surprise. Entre 5 000€ et 15 000€.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingGoogleDeveloppementApplication;
