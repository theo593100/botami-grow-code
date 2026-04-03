import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ─── palette tokens (inline, standalone from site design system) ─── */
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

/* ─── reusable styles ─── */
const heading = "font-heading font-bold";
const body = "font-body";
const card = "bg-white rounded-2xl p-6 md:p-8";
const ctaBtn =
  "inline-block font-body font-semibold text-white rounded-lg px-8 py-4 text-base md:text-lg transition-colors";

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

/* ─── Page ─── */
const LandingPrix = () => {
  const [form, setForm] = useState({ prenom: "", email: "", tel: "", besoin: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ backgroundColor: C.bg, color: C.text }} className={`${body} min-h-screen`}>
      {/* ── Header ── */}
      <header className="py-5 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <span className={`${heading} text-xl select-none cursor-default`} style={{ color: C.text }}>
            Botami Software
          </span>
        </div>
      </header>

      {/* ── Bloc 1 — Hero ── */}
      <section className="px-4 md:px-8 pt-8 pb-8 md:pt-12 md:pb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`${heading} text-3xl md:text-5xl lg:text-6xl leading-tight mb-6`}>
            Combien vous coûtent vos abonnements logiciels par an ?
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: C.textSec }}>
            Le prix augmente chaque année. Vous utilisez une fraction des fonctionnalités. Et vous payez quand même l'intégralité.
          </p>
          <CTA />
        </div>
      </section>

      {/* ── Bloc 2 — Amplification ── */}
      <section className="px-4 md:px-8 py-8 md:py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className={`${heading} text-2xl md:text-3xl mb-6 text-center`}>
            Ce que vos abonnements vous coûtent vraiment
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Un SaaS à 200\u202F\u20AC/mois, c'est 7\u202F200\u202F\u20AC sur 3 ans. Pour un outil dont vous utilisez une fraction. Multipliez par le nombre d'abonnements dans votre entreprise.",
              "Le prix augmente, les fonctionnalités que vous attendez n'arrivent pas, et celles qu'on vous impose alourdissent l'interface. Vous n'avez aucun levier de négociation.",
              "Vous avez déjà cherché des alternatives. Même problème : trop de fonctionnalités inutiles, pas celles dont vous avez besoin. Changer d'outil coûte du temps, de l'énergie et des données.",
            ].map((t, i) => (
              <div key={i} className={card}>
                <p className="leading-relaxed" style={{ color: C.textSec }}>
                  {t}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bloc 3 — Résolution ── */}
      <section className="px-4 md:px-8 py-8 md:py-10">
        <div className="max-w-5xl mx-auto">
          <h2 className={`${heading} text-2xl md:text-3xl mb-4 text-center`}>
            Et si vous ne payiez que pour ce dont vous avez besoin ?
          </h2>
          <p className="text-center text-lg mb-8 max-w-2xl mx-auto" style={{ color: C.textSec }}>
            On développe une application conçue uniquement pour vous. Elle fait exactement ce que votre métier exige — rien de plus, rien de moins.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {([
              ["Prix", "Un prix forfaitaire, une seule fois. Pas d'abonnement mensuel. Pas de hausse annuelle surprise. Pour le prix de votre abonnement SaaS sur 2-3 ans, vous avez un outil qui vous appartient."],
              ["Propriété", "Le code source, les données, l'hébergement — tout est chez vous. Si demain vous voulez changer de prestataire, vous partez avec tout. Zéro dépendance."],
              ["Adéquation", "Chaque fonctionnalité existe parce que vous en avez besoin. Pas de menu à rallonge, pas d'options que personne n'utilise. L'outil s'adapte à votre façon de travailler — pas l'inverse."],
              ["Fiabilité", "Testée avec vous sur vos cas réels. Livrée clé en main."],
            ] as const).map(([title, desc], i) => (
              <div key={i} className={card}>
                <h3 className={`${heading} text-lg mb-3`} style={{ color: C.amber }}>
                  {title}
                </h3>
                <p className="leading-relaxed" style={{ color: C.textSec }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA intermédiaire ── */}
      <section className="px-4 md:px-8 py-8 md:py-10" style={{ backgroundColor: C.amberLight }}>
        <div className="max-w-3xl mx-auto text-center">
          <CTA />
          <p className="mt-4 text-sm" style={{ color: C.textSec }}>
            15-20 minutes pour comprendre votre situation. Sans engagement. Réponse sous 24h.
          </p>
        </div>
      </section>

      {/* ── Bloc 5 — Axes secondaires ── */}
      <section className="px-4 md:px-8 py-8 md:py-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {([
            ["Votre outil, vos règles.", "Code source remis à la livraison. Données hébergées chez vous. Pas de lock-in, pas de dépendance. Vous gardez le contrôle total."],
            ["Un seul outil. Le bon.", "Plus besoin d'empiler les logiciels et de bricoler des connexions entre eux. Une application pensée pour votre workflow, qui centralise ce qui compte."],
          ] as const).map(([title, desc], i) => (
            <div key={i} className={card}>
              <h3 className={`${heading} text-xl mb-3`}>{title}</h3>
              <p className="leading-relaxed" style={{ color: C.textSec }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bloc 6 — Process ── */}
      <section className="px-4 md:px-8 py-8 md:py-10">
        <div className="max-w-3xl mx-auto">
          <h2 className={`${heading} text-2xl md:text-3xl mb-8 text-center`}>
            Comment ça se passe, concrètement
          </h2>
          <div className="relative">
            {/* vertical line */}
            <div
              className="absolute left-5 md:left-6 top-0 bottom-0 w-px"
              style={{ backgroundColor: C.amber, opacity: 0.3 }}
            />
            {([
              ["Cahier des charges", "1-2 semaines", "On identifie votre besoin ensemble. Pas de brief unilatéral — on pose les questions, vous validez les réponses. Livrable : un document clair qui décrit exactement ce qu'on va construire."],
              ["Maquette", "1-2 semaines", "Vous voyez votre application avant qu'elle existe. Prototype cliquable, écrans réels, navigation testable. Vous validez avant qu'on écrive une seule ligne de code."],
              ["Développement", "4-8 semaines", "On construit. Vous suivez l'avancement avec des versions testables à chaque étape. Pas de tunnel de 3 mois sans nouvelles."],
              ["Livraison + formation", "1 semaine", "L'application est en production. Vos données sont migrées. Votre équipe est formée. Le code source et tous les accès sont entre vos mains."],
            ] as const).map(([title, duration, desc], i) => (
              <div key={i} className="relative pl-14 md:pl-16 pb-10 last:pb-0">
                {/* dot */}
                <div
                  className="absolute left-3 md:left-4 top-1 w-4 h-4 rounded-full border-2"
                  style={{ borderColor: C.amber, backgroundColor: C.bg }}
                />
                <h3 className={`${heading} text-lg`}>
                  {i + 1}. {title}{" "}
                  <span className="font-normal text-sm" style={{ color: C.textSec }}>
                    ({duration})
                  </span>
                </h3>
                <p className="mt-2 leading-relaxed" style={{ color: C.textSec }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bloc 7 — Crédibilité ── */}
      <section className="px-4 md:px-8 py-8 md:py-10">
        <div className="max-w-4xl mx-auto">
          <h2 className={`${heading} text-2xl md:text-3xl mb-6 text-center`}>
            Qui est derrière Botami
          </h2>

          {/* Qui on est */}
          <div className={`${card} mb-6`}>
            <h3 className={`${heading} text-lg mb-4`} style={{ color: C.amber }}>
              Qui on est
            </h3>
            <p className="leading-relaxed mb-3" style={{ color: C.textSec }}>
              Elias — 10 ans d'expertise en publicité digitale (Google Ads, Meta Ads). Il comprend les problèmes business avant de toucher au code.
            </p>
            <p className="leading-relaxed mb-3" style={{ color: C.textSec }}>
              Théo — Parcours marketing en startup. Orienté résultat, pas technologie.
            </p>
            <p className="leading-relaxed" style={{ color: C.textSec }}>
              On ne code pas à l'aveugle. On part de votre problème métier, pas d'un cahier des charges technique que personne ne comprend.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Garanties */}
            <div className={card}>
              <h3 className={`${heading} text-lg mb-4`} style={{ color: C.amber }}>
                Garanties
              </h3>
              <ul className="space-y-3" style={{ color: C.textSec }}>
                {[
                  "Prix forfaitaire. Le prix qu'on annonce est le prix que vous payez.",
                  "Code source remis à la livraison. Propriété totale.",
                  "Maquette validée avant le moindre développement.",
                  "Droit de changer de prestataire à tout moment. Tout est à vous.",
                ].map((t, i) => (
                  <li key={i} className="flex gap-3 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: C.amber }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Méthode */}
            <div className={card}>
              <h3 className={`${heading} text-lg mb-4`} style={{ color: C.amber }}>
                Méthode
              </h3>
              <ul className="space-y-3" style={{ color: C.textSec }}>
                {[
                  "Cahier des charges co-construit — pas un brief qu'on interprète seuls.",
                  "Tests sur vos cas réels — pas des scénarios inventés.",
                  "Jalons visibles à chaque étape — vous savez toujours où on en est.",
                ].map((t, i) => (
                  <li key={i} className="flex gap-3 leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: C.amber }} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bloc 8 — FAQ ── */}
      <section className="px-4 md:px-8 py-8 md:py-10">
        <div className="max-w-3xl mx-auto">
          <h2 className={`${heading} text-2xl md:text-3xl mb-6 text-center`}>
            Questions fréquentes
          </h2>
          <Accordion type="single" collapsible defaultValue="faq-0">
            {([
              ["Combien ça coûte ?", "Entre 5\u202F000\u202F\u20AC et 15\u202F000\u202F\u20AC selon la complexité. Prix forfaitaire — pas de TJM, pas de compteur qui tourne. Pour comparaison : un SaaS à 200\u202F\u20AC/mois vous coûte 7\u202F200\u202F\u20AC sur 3 ans. À 500\u202F\u20AC/mois, c'est 18\u202F000\u202F\u20AC. Notre application se rentabilise en 1 à 3 ans, et elle vous appartient."],
              ["Et si ça ne marche plus dans un an ?", "Le code est documenté et transférable. Un autre développeur peut le reprendre demain. On propose une maintenance optionnelle avec des conditions claires. Et si vous préférez être autonome, vous avez la documentation complète."],
              ["J'ai pas le temps de gérer un projet IT.", "Vous n'avez rien à gérer. On absorbe la charge projet : on pose les questions, on propose les solutions, vous validez les étapes. Votre rôle : donner votre avis. Le nôtre : tout le reste."],
              ["Comment je sais que c'est bien fait ?", "Vous voyez une maquette cliquable avant le développement. Vous testez des versions fonctionnelles en cours de route. Et la recette finale est faite sur vos cas réels — pas des tests génériques."],
              ["Et si je veux changer de prestataire ?", "Aucun problème. Le code source vous appartient. L'hébergement est chez vous. Vos données sont à vous. On ne vous rend pas dépendant — c'est un choix, pas un piège."],
            ] as const).map(([q, a], i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-b" style={{ borderColor: `${C.amber}33` }}>
                <AccordionTrigger className={`${heading} text-left text-base py-5 hover:no-underline`}>
                  {q}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed pb-5" style={{ color: C.textSec }}>
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── Bloc 9 — Formulaire ── */}
      <section id="formulaire" className="px-4 md:px-8 py-8 md:py-10">
        <div className="max-w-xl mx-auto">
          <h2 className={`${heading} text-2xl md:text-3xl mb-6 text-center`}>
            Parlez-nous de votre situation.
          </h2>
          {submitted ? (
            <div className={`${card} text-center`}>
              <p className={`${heading} text-xl mb-2`} style={{ color: C.success }}>
                Merci pour votre message.
              </p>
              <p style={{ color: C.textSec }}>
                Nous revenons vers vous sous 24h.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={`${card} space-y-5`}>
              <div>
                <label className="block text-sm font-semibold mb-1.5">Prénom *</label>
                <input
                  required
                  type="text"
                  value={form.prenom}
                  onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                  className="w-full rounded-lg border px-4 py-3 text-base outline-none transition-colors focus:border-amber-500"
                  style={{ borderColor: "#E5E7EB" }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">Email professionnel *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg border px-4 py-3 text-base outline-none transition-colors focus:border-amber-500"
                  style={{ borderColor: "#E5E7EB" }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">
                  Téléphone <span className="font-normal" style={{ color: C.textSec }}>(recommandé)</span>
                </label>
                <input
                  type="tel"
                  value={form.tel}
                  onChange={(e) => setForm({ ...form, tel: e.target.value })}
                  className="w-full rounded-lg border px-4 py-3 text-base outline-none transition-colors focus:border-amber-500"
                  style={{ borderColor: "#E5E7EB" }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5">
                  Décrivez brièvement votre besoin <span className="font-normal" style={{ color: C.textSec }}>(optionnel)</span>
                </label>
                <textarea
                  rows={4}
                  value={form.besoin}
                  onChange={(e) => setForm({ ...form, besoin: e.target.value })}
                  className="w-full rounded-lg border px-4 py-3 text-base outline-none transition-colors focus:border-amber-500 resize-none"
                  style={{ borderColor: "#E5E7EB" }}
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
                Réponse sous 24h. Pas d'engagement. 15-20 minutes pour comprendre votre situation.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* ── Bloc 10 — Footer ── */}
      <footer className="px-4 md:px-8 py-10" style={{ backgroundColor: C.footer, color: "#D1D5DB" }}>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <p className={`${heading} text-lg text-white mb-4`}>Botami Software</p>
              <div className="space-y-2 text-sm">
                <a href="mailto:contact@botami.fr" className="block hover:text-white transition-colors">
                  contact@botami.fr
                </a>
                <a href="tel:+33600000000" className="block hover:text-white transition-colors">
                  +33 6 00 00 00 00
                </a>
              </div>
            </div>
            <div className="text-sm space-y-2">
              <p>Entreprise française</p>
              <p>Garantie : code source remis à chaque projet</p>
              <div className="flex flex-wrap gap-4 mt-4">
                <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
                <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
              </div>
              <a
                href="https://www.linkedin.com/company/botami"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-xs" style={{ color: "#9CA3AF" }}>
            2026 Botami Software SAS. Tous droits réservés.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPrix;
