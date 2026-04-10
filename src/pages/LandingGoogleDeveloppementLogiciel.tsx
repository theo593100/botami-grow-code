import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check } from "lucide-react";
import LPFormCalendly from "@/components/lp/LPFormCalendly";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Palette stricte
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

const heading = "font-heading font-bold";
const ctaBtn =
  "inline-block font-body font-semibold text-white rounded-lg px-8 py-4 text-base md:text-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5";
const card = "rounded-2xl p-6 md:p-8 border shadow-sm transition-all duration-300 hover:shadow-lg";

const LandingGoogleDeveloppementLogiciel = () => {
  const scrollReveal = useScrollReveal();

  useEffect(() => {
    document.title = "Développement logiciel sur mesure | Botami Software";
  }, []);

  return (
    <div style={{ backgroundColor: C.bg, color: C.text }} className="font-body">
      {/* Header minimaliste */}
      <header className="px-4 md:px-8 py-6 border-b" style={{ backgroundColor: C.card, borderColor: "#E5E7EB" }}>
        <div className="max-w-7xl mx-auto">
          <span className={`${heading} text-xl`}>Botami Software</span>
        </div>
      </header>

      {/* Bloc 1 — Hero */}
      <section className="px-4 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`${heading} text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight`}>
            Développement logiciel sur mesure pour votre entreprise.
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: C.textSec }}>
            Vous avez un besoin logiciel unique. On crée la solution taillée pour vous — prix forfaitaire clair, livraison 4 à 8 semaines, code source à votre nom.
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
        </div>
      </section>

      {/* Bloc 2 — Value props (4 cards) */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Prix transparent, pas de surprise",
                desc: "Forfait de 5 000€ à 15 000€ selon la complexité. C'est le prix qu'on vous donne, c'est celui que vous payez. Pas de TJM qui tourne.",
              },
              {
                title: "Logiciel construit pour vous",
                desc: "Vos workflows, votre métier, vos règles. Pas de compromis avec des logiciels génériques. Chaque fonction existe parce que vous en avez besoin.",
              },
              {
                title: "Code source à votre nom",
                desc: "Vous êtes propriétaires. Code, données, hébergement — c'est à vous. Vous pouvez changer de dev, rester autonome, ou nous confier la maintenance.",
              },
              {
                title: "Livré vite, testé en continu",
                desc: "2 semaines : cahier des charges + maquette. Puis développement itératif avec tests réguliers. Production en 4 à 8 semaines.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`${card} ${scrollReveal}`}
                style={{ backgroundColor: C.card, borderColor: "#E5E7EB" }}
              >
                <h3 className={`${heading} text-xl mb-3`}>{item.title}</h3>
                <p className="leading-relaxed" style={{ color: C.textSec }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloc 2B — Trust bar */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-base md:text-lg mb-8 font-medium" style={{ color: C.textSec }}>
            Notre équipe accompagne des entreprises en acquisition digitale depuis des années
          </p>

          {/* Bande de logos clients */}
          <div className="mb-10 py-8 rounded-2xl" style={{ backgroundColor: C.bg }}>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale">
              <img src="https://cdn.brandfetch.io/idAnDITPqq/theme/dark/logo.svg?k=id64Mup7ac&t=1735898019104" alt="Lucca" className="h-8 md:h-10" />
              <img src="https://cdn.brandfetch.io/idvQGNfSmx/theme/dark/logo.svg?k=id64Mup7ac&t=1736188573062" alt="Qonto" className="h-8 md:h-10" />
              <img src="https://cdn.brandfetch.io/id3c3OVm9E/theme/dark/logo.svg?k=id64Mup7ac&t=1736188566927" alt="Pennylane" className="h-8 md:h-10" />
              <img src="https://cdn.brandfetch.io/idavZxQ-ux/theme/dark/logo.svg?k=id64Mup7ac&t=1736188575513" alt="Sellsy" className="h-8 md:h-10" />
              <img src="https://cdn.brandfetch.io/idNuiHVxRl/theme/dark/logo.svg?k=id64Mup7ac&t=1735897974060" alt="Alan" className="h-8 md:h-10" />
            </div>
          </div>

          {/* Citation stylisée */}
          <div className="max-w-3xl mx-auto">
            <p className="text-base md:text-lg leading-relaxed italic" style={{ color: C.textSec }}>
              On les a vues se battre avec{" "}
              <span style={{ color: C.amber }} className="not-italic font-medium">
                des SaaS trop chers
              </span>
              ,{" "}
              <span style={{ color: C.amber }} className="not-italic font-medium">
                des Excel qui craquent
              </span>
              ,{" "}
              <span style={{ color: C.amber }} className="not-italic font-medium">
                des outils qui ne collent pas à leur métier
              </span>
              . Botami Software est né de ce constat : quand les outils du marché ne suffisent plus, on construit celui qu'il vous faut.
            </p>
          </div>
        </div>
      </section>

      {/* Bloc 2C — Comparatif */}
      <section className="px-4 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`${heading} text-3xl md:text-4xl mb-3 text-center`}>
            Logiciel éditeur du marché vs Botami Software
          </h2>
          <p className="text-center mb-12 text-lg" style={{ color: C.textSec }}>
            Un logiciel standard, c'est 1000 fonctionnalités — dont 950 que vous n'utiliserez jamais.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ borderBottom: `2px solid ${C.amber}` }}>
                  <th className="text-left p-4 font-heading font-bold">Critère</th>
                  <th className="text-left p-4 font-heading font-bold">Logiciel éditeur standard</th>
                  <th className="text-left p-4 font-heading font-bold" style={{ color: C.amber }}>
                    Botami Software
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Modèle de prix", "Licence annuelle + maintenance", "Forfait 5 000-15 000€, une seule fois"],
                  ["Propriété du code", "Non, éditeur tiers", "Oui, code source remis à la livraison"],
                  ["Délai de livraison", "Immédiat (achat) mais paramétrage long", "4 à 8 semaines"],
                  ["Personnalisation", "Paramétrage dans les limites de l'éditeur", "Conçu sur mesure pour votre métier"],
                  ["Dépendance au fournisseur", "Totale (mises à jour, arrêt de support)", "Zéro — vous pouvez partir avec tout"],
                  ["Coût sur 3 ans", "10 000 à 45 000€", "5 000-15 000€ (payé une fois)"],
                ].map(([crit, col1, col2], i) => (
                  <tr key={i} style={{ borderBottom: "1px solid #E5E7EB" }}>
                    <td className="p-4 font-medium">{crit}</td>
                    <td className="p-4" style={{ color: C.textSec }}>{col1}</td>
                    <td className="p-4 font-medium" style={{ color: C.amber }}>{col2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bloc 3 — Process (4 étapes) */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className={`${heading} text-3xl md:text-4xl mb-12 text-center`}>
            Comment ça se passe
          </h2>

          <div className="relative">
            {/* Timeline verticale */}
            <div
              className="absolute left-8 top-0 bottom-0 w-0.5 hidden md:block"
              style={{ backgroundColor: C.amber, opacity: 0.3 }}
            />

            <div className="space-y-8">
              {[
                {
                  num: "1",
                  title: "Cahier des charges",
                  time: "1-2 semaines",
                  desc: "On comprend votre besoin en profondeur. Vos processus, vos données, vos intégrations. On documente précisément.",
                },
                {
                  num: "2",
                  title: "Maquette",
                  time: "1-2 semaines",
                  desc: "Prototype cliquable. Tous les écrans. Votre équipe valide avant le développement. Pas de surprise à la livraison.",
                },
                {
                  num: "3",
                  title: "Développement",
                  time: "4-8 semaines",
                  desc: "Construction solide. Architecture scalable. Tests automatisés. Versions testables tout le long. Retours intégrés en continu.",
                },
                {
                  num: "4",
                  title: "Livraison + formation",
                  time: "1 semaine",
                  desc: "Logiciel en production. Données migrées. Équipe formée. Code source, accès, documentation — vous avez tout.",
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 md:gap-8 items-start">
                  {/* Numéro */}
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${heading} text-2xl text-white relative z-10`}
                    style={{ backgroundColor: C.amber }}
                  >
                    {step.num}
                  </div>

                  {/* Contenu */}
                  <div className={`flex-1 ${card} ${scrollReveal}`} style={{ backgroundColor: C.card, borderColor: "#E5E7EB" }}>
                    <div className="flex flex-wrap items-baseline gap-2 mb-2">
                      <h3 className={`${heading} text-xl`}>{step.title}</h3>
                      <span className="text-sm font-medium" style={{ color: C.amber }}>
                        {step.time}
                      </span>
                    </div>
                    <p className="leading-relaxed" style={{ color: C.textSec }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bloc 4 — Crédibilité */}
      <section className="px-4 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`${heading} text-3xl md:text-4xl mb-12 text-center`}>
            Qui est derrière Botami
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className={card} style={{ backgroundColor: C.bg, borderColor: "#E5E7EB" }}>
              <h3 className={`${heading} text-xl mb-2`}>Elias — CEO</h3>
              <p className="leading-relaxed" style={{ color: C.textSec }}>
                Il cadre votre projet et pilote la relation client. 10 ans en publicité digitale, il connaît les outils métier et sait quand ils ne suffisent plus.
              </p>
            </div>

            <div className={card} style={{ backgroundColor: C.bg, borderColor: "#E5E7EB" }}>
              <h3 className={`${heading} text-xl mb-2`}>Théo — CTO</h3>
              <p className="leading-relaxed" style={{ color: C.textSec }}>
                Il conçoit et développe votre application de A à Z. Parcours startup et marketing tech, il construit des outils qui servent le business, pas la technique.
              </p>
            </div>
          </div>

          {/* Garanties */}
          <div className={`${card} max-w-3xl mx-auto`} style={{ backgroundColor: C.amberLight, borderColor: C.amber }}>
            <h3 className={`${heading} text-xl mb-4 text-center`}>Garanties</h3>
            <ul className="space-y-3">
              {[
                "Prix forfaitaire annoncé avant de commencer",
                "Code source remis à la livraison",
                "Maquette validée avant le développement",
                "Droit de changer de prestataire à tout moment",
              ].map((g, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: C.success }} />
                  <span className="leading-relaxed">{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bloc 5 — FAQ */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className={`${heading} text-3xl md:text-4xl mb-12 text-center`}>
            Questions fréquentes
          </h2>

          <Accordion type="single" collapsible defaultValue="item-0">
            {[
              {
                q: "Quel type de logiciel vous développez ?",
                a: "Logiciels métier, applicatifs internes, outils de gestion, automations complexes. Peu importe votre secteur : retail, manufacturing, services, etc. Si ça doit fonctionner pour votre métier, on le développe.",
              },
              {
                q: "Comment se passe la relation client ?",
                a: "On est responsables du projet de A à Z. Vous ne gerez rien techniquement. On pose les questions, on propose, vous validez. Vous êtes décideur, pas PM.",
              },
              {
                q: "Et si mon logiciel doit interfacer avec mes autres systèmes ?",
                a: "C'est notre métier. Intégrations APIs, exports/imports, synchronisation temps réel. Tout ça est inclus selon le scope initial.",
              },
              {
                q: "Peut-on réduire les coûts en diminuant le scope ?",
                a: "Oui, on peut toujours découper. MVP à 5-6k€, puis évolutions plus tard. Flexibilité, mais clarté sur chaque version.",
              },
              {
                q: "Que se passe-t-il si le projet prend plus de temps ?",
                a: "Calendrier clair dès le départ. Si débordement vient de votre côté (retards de réponse, changement de scope), on renégocie. Si c'est de nous, on absorbe.",
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b" style={{ borderColor: "#E5E7EB" }}>
                <AccordionTrigger className="text-left font-heading font-semibold text-base py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed pb-5" style={{ color: C.textSec }}>
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Bloc 6 — Formulaire Calendly */}
      <LPFormCalendly
              route="/lp/google/developpement-logiciel"
        title="Réservez votre appel découverte gratuit"
        subtitle="15-20 minutes pour parler de votre logiciel. Sans engagement."
        buttonLabel="Je réserve mon appel découverte gratuit"
      />

      {/* Bloc 7 — Dernier CTA */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl mb-6 leading-relaxed" style={{ color: C.textSec }}>
            Entreprise française. Code source remis à chaque projet. Prix forfaitaire. Logiciel qui travaille pour vous.
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
        </div>
      </section>

      {/* Bloc 8 — Footer */}
      <footer className="px-4 md:px-8 py-12" style={{ backgroundColor: C.footer, color: C.card }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className={`${heading} text-lg mb-3`}>Botami Software</h3>
              <p className="text-sm opacity-80 mb-2">Entreprise française 🇫🇷</p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <p className="text-sm mb-2">
                <a href="mailto:contact@botami.fr" className="hover:underline opacity-80">
                  contact@botami.fr
                </a>
              </p>
              <p className="text-sm opacity-80">
                <a href="tel:+33123456789" className="hover:underline">
                  +33 1 23 45 67 89
                </a>
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Légal</h4>
              <p className="text-sm mb-2">
                <a href="#" className="hover:underline opacity-80">
                  Mentions légales
                </a>
              </p>
              <p className="text-sm opacity-80">
                <a href="#" className="hover:underline">
                  Politique de confidentialité
                </a>
              </p>
            </div>
          </div>

          <div className="flex justify-center pt-6 border-t border-white/20">
            <a
              href="https://www.linkedin.com/company/botami"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-80 hover:opacity-100 transition-opacity"
              aria-label="LinkedIn"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingGoogleDeveloppementLogiciel;
