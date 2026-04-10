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

import logoBlackfox from "@/assets/clients/blackfox.png";
import logoDesMurs from "@/assets/clients/des-murs-a-paris.png";
import logoErgosante from "@/assets/clients/ergosante.png";
import logoJD from "@/assets/clients/jd-sports.png";
import logoKijiki from "@/assets/clients/kijiji.png";
import logoLibralerte from "@/assets/clients/libralerte.png";
import logoProvence from "@/assets/clients/mademoiselle-provence.png";
import logoNotaires from "@/assets/clients/notaires-de-france.png";
import logoPoupina from "@/assets/clients/poupina.png";
import logoProarti from "@/assets/clients/proarti.png";
import logoSkills from "@/assets/clients/skills-communication.png";
import logoSkinCafeine from "@/assets/clients/skin-cafeine.png";
import logoStAubin from "@/assets/clients/st-aubin-avocats.png";

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

const clientLogos = [
  { name: "Blackfox", src: logoBlackfox },
  { name: "Des Murs à Paris", src: logoDesMurs },
  { name: "Ergosanté", src: logoErgosante },
  { name: "JD Sports", src: logoJD },
  { name: "Kijiji", src: logoKijiki },
  { name: "Libralerte", src: logoLibralerte },
  { name: "Mademoiselle Provence", src: logoProvence },
  { name: "Notaires de France", src: logoNotaires },
  { name: "Poupina", src: logoPoupina },
  { name: "Proarti", src: logoProarti },
  { name: "Skills Communication", src: logoSkills },
  { name: "Skin Caféine", src: logoSkinCafeine },
  { name: "St Aubin Avocats", src: logoStAubin },
];

const LandingGoogleDeveloppementApplication = () => {
  const scrollReveal = useScrollReveal();

  useEffect(() => {
    document.title = "Développement application sur mesure | Botami Software";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Développement d'application sur mesure mobile, web ou métier. Forfait 5 000–15 000€, livré en 4 à 8 semaines, code source à vous.");
    }
  }, []);

  return (
    <div style={{ backgroundColor: C.bg, color: C.text }} className="font-body">
      {/* Header */}
      <header className="px-4 md:px-8 py-6 border-b" style={{ backgroundColor: C.card, borderColor: "#E5E7EB" }}>
        <div className="max-w-7xl mx-auto">
          <span className={`${heading} text-xl`}>Botami Software</span>
        </div>
      </header>

      {/* Bloc 1 — Hero */}
      <section className="px-4 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.card }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className={`${heading} text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight`}>
            Développement d'applications sur mesure. Mobile, web, métier — on construit la vôtre.
          </h1>
          <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: C.textSec }}>
            On conçoit, on développe, on livre votre application en 4 à 8 semaines.
            Forfait 5&nbsp;000–15&nbsp;000€. Code source à vous à la livraison.
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

      {/* Bloc 2 — Value props */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Cadrage métier avant une ligne de code",
                desc: "On commence par comprendre votre activité, vos utilisateurs, vos contraintes. Pas de code tant que le besoin n'est pas verrouillé. Résultat : pas de surprise à la livraison.",
              },
              {
                title: "Maquette validée avant le dev",
                desc: "Prototype cliquable de tous les écrans. Votre équipe teste la navigation, les parcours, la logique métier. On ne code rien tant que vous n'avez pas validé.",
              },
              {
                title: "Testable chaque semaine sur staging",
                desc: "Développement itératif. Chaque semaine, une version testable sur un environnement dédié. Retours intégrés en continu, pas de tunnel de 6 mois.",
              },
              {
                title: "Formation et code source remis à la livraison",
                desc: "Mise en production, formation de votre équipe, remise du code source et de la documentation. Vous êtes autonome dès le jour 1.",
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

          <div className="mb-10 py-8 rounded-2xl" style={{ backgroundColor: C.bg }}>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale">
              {clientLogos.map((logo, idx) => (
                <img key={idx} src={logo.src} alt={logo.name} className="h-8 md:h-10 object-contain" />
              ))}
            </div>
          </div>

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
            Agence classique vs Botami Software
          </h2>
          <p className="text-center mb-12 text-lg" style={{ color: C.textSec }}>
            Pourquoi le modèle agence traditionnelle coûte plus cher pour un résultat incertain.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr style={{ borderBottom: `2px solid ${C.amber}` }}>
                  <th className="text-left p-4 font-heading font-bold">Critère</th>
                  <th className="text-left p-4 font-heading font-bold">Agence / ESN classique</th>
                  <th className="text-left p-4 font-heading font-bold" style={{ color: C.amber }}>
                    Botami Software
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Modèle de prix", "TJM 500-800€ × estimation de jours", "Forfait 5 000-15 000€, une seule fois"],
                  ["Propriété du code", "Variable, souvent à négocier", "Oui, code source remis à la livraison"],
                  ["Délai de livraison", "3 à 12 mois selon la charge", "4 à 8 semaines"],
                  ["Interlocuteur", "Chef de projet, puis développeurs qui tournent", "2 fondateurs, de A à Z"],
                  ["Personnalisation", "Totale mais surfacturée au TJM", "Conçue sur mesure, incluse dans le forfait"],
                  ["Dépendance au fournisseur", "Forte (maintenance facturée, code retenu)", "Zéro — vous partez avec tout"],
                  ["Coût sur 3 ans", "25 000 à 90 000€", "5 000-15 000€ (payé une fois)"],
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

          <p className="text-sm mt-6 text-center max-w-3xl mx-auto" style={{ color: C.textSec }}>
            Une agence reste pertinente pour des projets très complexes avec des équipes dédiées sur plusieurs mois.
            Le sur mesure Botami convient aux PME/ETI qui veulent un outil fonctionnel rapidement, sans gérer un projet IT lourd.
          </p>
        </div>
      </section>

      {/* Bloc 3 — Process */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h2 className={`${heading} text-3xl md:text-4xl mb-12 text-center`}>
            Comment ça se passe
          </h2>

          <div className="relative">
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
                  desc: "On cartographie votre besoin métier : les utilisateurs, les fonctionnalités, les intégrations, les règles de gestion. On propose une architecture claire et un forfait ferme.",
                },
                {
                  num: "2",
                  title: "Maquette",
                  time: "1-2 semaines",
                  desc: "Prototype cliquable de tous les écrans. Navigation, workflows, logique métier visible. Votre équipe teste et valide avant qu'on code une seule ligne.",
                },
                {
                  num: "3",
                  title: "Développement",
                  time: "4-8 semaines",
                  desc: "Construction itérative. Versions testables chaque semaine sur un environnement de staging. Retours intégrés en continu. Bugs corrigés au fil de l'eau.",
                },
                {
                  num: "4",
                  title: "Livraison + formation",
                  time: "1 semaine",
                  desc: "Mise en production. Migration des données si besoin. Formation de votre équipe. Remise du code source, des accès et de la documentation complète.",
                },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 md:gap-8 items-start">
                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${heading} text-2xl text-white relative z-10`}
                    style={{ backgroundColor: C.amber }}
                  >
                    {step.num}
                  </div>

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
                q: "Vous développez des applications mobiles ou web ?",
                a: "Les deux. Application web accessible depuis un navigateur, application mobile native (iOS/Android), ou les deux combinées. On recommande la solution la plus adaptée à votre usage réel — souvent une webapp responsive suffit et coûte moins cher qu'une app native.",
              },
              {
                q: "Pourquoi pas une agence classique ?",
                a: "Une agence facture au TJM, avec des développeurs qui tournent sur votre projet. Résultat : délais longs, coût imprévisible, interlocuteur qui change. Chez Botami, vous parlez aux deux fondateurs, du brief à la livraison. Forfait fixe, pas de surprise.",
              },
              {
                q: "Et si mon besoin évolue après la livraison ?",
                a: "Le code est à vous. Vous pouvez nous confier les évolutions, ou les faire faire par un autre développeur. Maintenance optionnelle la première année, puis à la demande. Zéro engagement.",
              },
              {
                q: "Vous pouvez intégrer mon application avec mes outils existants ?",
                a: "Oui. APIs, exports/imports, synchronisation temps réel avec vos outils (CRM, ERP, compta, email, etc.). C'est inclus dans le scope initial si c'est au cahier des charges.",
              },
              {
                q: "Combien de temps pour être opérationnel ?",
                a: "4 à 8 semaines du brief à la mise en production. Cahier des charges et maquette en 2-4 semaines, développement en 4-8 semaines, livraison et formation en 1 semaine.",
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

      {/* Bloc 6 — Formulaire */}
      <LPFormCalendly
        route="/lp/google/developpement-application"
        title="Réservez votre appel découverte gratuit"
        subtitle="15-20 minutes pour évaluer votre besoin. On vous dit honnêtement si une application sur mesure est la bonne réponse."
        buttonLabel="Je réserve mon appel découverte gratuit"
      />

      {/* Bloc 7 — Dernier CTA */}
      <section className="px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl mb-6 leading-relaxed" style={{ color: C.textSec }}>
            Entreprise française. Code source remis à chaque projet. Prix forfaitaire. Votre application, pas un template.
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
                <a href="mailto:contact@botami-agency.com" className="hover:underline opacity-80">
                  contact@botami-agency.com
                </a>
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Légal</h4>
              <p className="text-sm mb-2">
                <a href="#" className="hover:underline opacity-80">Mentions légales</a>
              </p>
              <p className="text-sm opacity-80">
                <a href="#" className="hover:underline">Politique de confidentialité</a>
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

export default LandingGoogleDeveloppementApplication;
