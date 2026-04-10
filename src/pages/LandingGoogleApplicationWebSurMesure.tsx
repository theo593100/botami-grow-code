import { useEffect, useRef, useState } from "react";
import {
  CheckCircle2,
  Clock,
  Code2,
  Globe,
  Linkedin,
  Mail,
  Phone,
  Shield,
  Smartphone,
  Zap,
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

const processSteps = [
  {
    icon: Code2,
    title: "Cahier des charges",
    desc: "On comprend votre workflow en détail. Modules, rôles utilisateur, données, intégrations. On propose une architecture web scalable.",
    duration: "1-2 semaines",
  },
  {
    icon: Smartphone,
    title: "Maquette",
    desc: "Prototype cliquable complet. Backoffice, front client, tous les écrans. Vous testez la navigation avant le code.",
    duration: "1-2 semaines",
  },
  {
    icon: Globe,
    title: "Développement",
    desc: "Backend + frontend en parallèle. Bases de données sécurisées. Versions testables sur serveur de staging. Vous testez en continu.",
    duration: "4-8 semaines",
  },
  {
    icon: CheckCircle2,
    title: "Livraison + formation",
    desc: "Migration des données. Lancement en production. Formation détaillée. Code source, documentation, accès — vous êtes autonomes.",
    duration: "1 semaine",
  },
];

const valueProps = [
  {
    icon: Globe,
    title: "Accès de partout",
    desc: "Web app = une URL. Vos utilisateurs se connectent depuis n'importe quel appareil, n'importe où. Bureau, mobile, tablette — même application adaptée.",
  },
  {
    icon: Shield,
    title: "Sécurité et performance",
    desc: "Architecture solide, données chiffrées, hébergement français. Votre app supporte les pics de charge sans ralentir. Mises à jour de sécurité continues.",
  },
  {
    icon: Zap,
    title: "Prix fixe, vous êtes propriétaires",
    desc: "Entre 5 000€ et 15 000€ une seule fois. Code source à vous. Aucune dépendance. Vous pouvez embaucher quelqu'un ou nous confier la maintenance.",
  },
  {
    icon: Clock,
    title: "Livraison complète en 4-8 semaines",
    desc: "2 semaines : cahier des charges + maquette. Puis développement itératif. Production rapidement, sans délai qui traîne.",
  },
];

const faqs = [
  {
    q: "Quelle différence entre une web app sur mesure et un SaaS commercial ?",
    a: "SaaS = c'est à eux, vous louez. Web app = c'est à vous, vous achetez une seule fois. SaaS veut vous enfermer, web app sur mesure vous donne la propriété totale.",
  },
  {
    q: "Combien de temps avant d'être en production ?",
    a: "4 à 8 semaines après signature. Les 2 premières : cahier des charges + maquette. La suite : développement en continu, tests réguliers. Puis lancement.",
  },
  {
    q: "Mon app web peut marcher sans connexion internet ?",
    a: "Partiellement. Les données se sync quand la connexion revient. C'est possible, mais c'est du travail supplémentaire — à inclure dans le cahier des charges.",
  },
  {
    q: "Combien d'utilisateurs simultanés peut supporter mon app ?",
    a: "Dépend du volume de données et de la complexité. Pour une PME : 100-1000 utilisateurs simultanés sans souci. Gros volume ? On dimensionne l'infra ensemble.",
  },
  {
    q: "Et après la livraison ? Qui maintient l'app ?",
    a: "C'est votre choix. Code documenté et transférable. Vous l'embauchez quelqu'un, nous proposez la maintenance, ou restez autonome. Zéro obligation.",
  },
];

const comparisonRows = [
  { label: "Modèle de prix", competitor: "Abonnement mensuel par utilisateur", botami: "Forfait 5 000-15 000€, une seule fois" },
  { label: "Propriété du code", competitor: "Non, code source chez l'éditeur", botami: "Oui, code source remis à la livraison" },
  { label: "Délai de livraison", competitor: "Immédiat, mais adaptation impossible", botami: "4 à 8 semaines" },
  { label: "Personnalisation", competitor: "Contrainte par le template multi-clients", botami: "Conçu sur mesure pour votre métier" },
  { label: "Dépendance au fournisseur", competitor: "Totale (données, tarif, fermeture éventuelle)", botami: "Zéro — vous pouvez partir avec tout" },
  { label: "Coût sur 3 ans", competitor: "7 200 à 30 000€ (selon utilisateurs)", botami: "5 000-15 000€ (payé une fois)" },
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

const LandingGoogleApplicationWebSurMesure = () => {
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
            Application web sur mesure. Accessible partout, sécurisée, votre propriété.
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10" style={{ color: C.slate }}>
            Vous avez un besoin métier pour une application web. On la construit entièrement sur mesure — backoffice, front client, intégrations — prix forfaitaire, livraison 4 à 8 semaines, code source à vous.
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
            SaaS commercial vs Botami Software
          </h2>
          <p className="text-center mb-10 max-w-2xl mx-auto" style={{ color: C.slate }}>
            Votre SaaS privé : accessible depuis n'importe où, propriété totale, zéro abonnement.
          </p>

          <div className="rounded-xl overflow-hidden border shadow-sm" style={{ backgroundColor: C.card, borderColor: "#E5E7EB" }}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ backgroundColor: C.amberPale }}>
                    <th className="text-left p-4 font-heading font-semibold" style={{ color: C.charcoal }}>Critère</th>
                    <th className="text-left p-4 font-heading font-semibold" style={{ color: C.charcoal }}>SaaS commercial en ligne</th>
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

      {/* Bloc 3 — Process */}
      <section className="px-4 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`${heading} text-2xl md:text-3xl mb-12 text-center`} style={{ color: C.charcoal }}>
            Comment ça se passe
          </h2>

          <div className="space-y-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: C.amberPale }}>
                    <step.icon className="w-6 h-6" style={{ color: C.amber }} />
                  </div>
                  {idx < processSteps.length - 1 && (
                    <div className="w-0.5 h-full mx-auto mt-4" style={{ backgroundColor: "#E5E7EB" }} />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className={`${heading} text-xl`} style={{ color: C.charcoal }}>{step.title}</h3>
                    <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: C.amberPale, color: C.amber }}>
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: C.slate }}>{step.desc}</p>
                </div>
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
                Il cadre votre projet et pilote la relation client. 10 ans en publicité digitale, il connaît les outils métier et sait quand ils ne suffisent plus.
              </p>
            </div>
            <div className="p-6 rounded-xl border" style={{ backgroundColor: C.card, borderColor: "#E5E7EB" }}>
              <h3 className={`${heading} text-xl mb-2`} style={{ color: C.charcoal }}>Théo — CTO</h3>
              <p className="text-sm leading-relaxed" style={{ color: C.slate }}>
                Il conçoit et développe votre application de A à Z. Parcours startup et marketing tech, il construit des outils qui servent le business, pas la technique.
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
            Questions fréquentes
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
              route="/lp/google/application-web-sur-mesure"
        title="Réservez votre appel découverte gratuit"
        subtitle="15-20 minutes pour évaluer votre application web. Sans engagement."
        buttonLabel="Je réserve mon appel découverte gratuit"
      />

      {/* Bloc 7 — Dernier CTA */}
      <section className="px-4 md:px-8 py-16" style={{ backgroundColor: C.amberPale }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`${heading} text-2xl md:text-3xl mb-6`} style={{ color: C.charcoal }}>
            Prêt à construire votre application web ?
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
            Entreprise française. Code source remis. Prix forfaitaire. Application web scalable et sécurisée.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingGoogleApplicationWebSurMesure;
