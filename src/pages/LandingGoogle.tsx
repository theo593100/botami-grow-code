import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/* ─── palette tokens (standalone from site design system) ─── */
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
const body = "font-body";
const ctaBtn =
  "inline-block font-body font-semibold text-white rounded-lg px-8 py-4 text-base md:text-lg transition-colors cursor-pointer";

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
const LandingGoogle = () => {
  const [form, setForm] = useState({ prenom: "", email: "", tel: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={body} style={{ backgroundColor: C.bg, color: C.text }}>
      {/* ─── Header ─── */}
      <header className="py-4 px-4 md:px-8" style={{ backgroundColor: C.bg }}>
        <div className="max-w-5xl mx-auto">
          <span className={`${heading} text-xl md:text-2xl`} style={{ color: C.text }}>
            Botami Software
          </span>
        </div>
      </header>

      {/* ─── Bloc 1 — Hero ─── */}
      <section className="px-4 md:px-8 pt-12 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className={`${heading} text-3xl md:text-5xl leading-tight mb-6`}>
            Votre application métier, développée sur mesure.
          </h1>
          <p className="text-lg md:text-xl leading-relaxed mb-10" style={{ color: C.textSec }}>
            On remplace vos SaaS, vos fichiers Excel et vos outils bricolés par une application
            qui fait exactement ce dont vous avez besoin. Code source livré. Prix forfaitaire.
          </p>
          <CTA id="cta-hero" />
        </div>
      </section>

      {/* ─── Bloc 2 — Proposition de valeur ─── */}
      <section className="px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Prix forfaitaire",
              desc: "Entre 5 000€ et 15 000€ selon la complexité. Pas d'abonnement. Le prix qu'on annonce est le prix que vous payez.",
            },
            {
              title: "Livré en 4 à 8 semaines",
              desc: "Premiers écrans fonctionnels dès les premières semaines. Vous suivez l'avancement à chaque étape.",
            },
            {
              title: "Le code est à vous",
              desc: "Code source, données, hébergement — tout vous appartient. Zéro dépendance. Un autre développeur peut reprendre demain.",
            },
            {
              title: "Conçu pour votre métier",
              desc: "Chaque fonctionnalité existe parce que vous en avez besoin. L'outil s'adapte à votre façon de travailler — pas l'inverse.",
            },
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className={`${heading} text-lg md:text-xl mb-3`}>{c.title}</h3>
              <p className="leading-relaxed" style={{ color: C.textSec }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Bloc 3 — Process ─── */}
      <section className="px-4 md:px-8 py-16 md:py-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-3xl mx-auto">
          <h2 className={`${heading} text-2xl md:text-4xl mb-12 text-center`}>
            Comment ça se passe
          </h2>
          <div className="flex flex-col gap-10">
            {[
              {
                num: "01",
                title: "Cahier des charges",
                time: "1-2 semaines",
                desc: "On identifie votre besoin ensemble. Livrable : un document clair qui décrit exactement ce qu'on va construire.",
              },
              {
                num: "02",
                title: "Maquette",
                time: "1-2 semaines",
                desc: "Prototype cliquable, écrans réels. Vous validez avant qu'on écrive une seule ligne de code.",
              },
              {
                num: "03",
                title: "Développement",
                time: "4-8 semaines",
                desc: "On construit. Versions testables à chaque étape. Pas de tunnel de 3 mois sans nouvelles.",
              },
              {
                num: "04",
                title: "Livraison + formation",
                time: "1 semaine",
                desc: "Application en production. Données migrées. Équipe formée. Code source entre vos mains.",
              },
            ].map((s, i) => (
              <div key={i} className="flex gap-5 md:gap-8 items-start">
                <div
                  className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-heading font-bold text-lg text-white"
                  style={{ backgroundColor: C.amber }}
                >
                  {s.num}
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <h3 className={`${heading} text-lg md:text-xl`}>{s.title}</h3>
                    <span className="text-sm font-medium" style={{ color: C.textSec }}>
                      {s.time}
                    </span>
                  </div>
                  <p className="leading-relaxed max-w-lg" style={{ color: C.textSec }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bloc 4 — Crédibilité ─── */}
      <section className="px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className={`${heading} text-2xl md:text-4xl mb-10 text-center`}>
            Qui est derrière Botami
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className={`${heading} text-lg mb-2`}>Elias</h3>
              <p className="leading-relaxed" style={{ color: C.textSec }}>
                10 ans d'expertise en publicité digitale (Google Ads, Meta Ads). Il comprend les
                problèmes business avant de toucher au code.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
              <h3 className={`${heading} text-lg mb-2`}>Théo</h3>
              <p className="leading-relaxed" style={{ color: C.textSec }}>
                Parcours marketing en startup. Orienté résultat, pas technologie.
              </p>
            </div>
          </div>

          <p className="text-center text-lg leading-relaxed mb-10" style={{ color: C.textSec }}>
            On ne code pas à l'aveugle. On part de votre problème métier, pas d'un cahier des
            charges technique que personne ne comprend.
          </p>

          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
            <h3 className={`${heading} text-lg mb-4`}>Nos garanties</h3>
            <ul className="space-y-3">
              {[
                "Prix forfaitaire annoncé avant de commencer",
                "Code source remis à la livraison",
                "Maquette validée avant le développement",
                "Droit de changer de prestataire à tout moment",
              ].map((g, i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke={C.success}
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="leading-relaxed">{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── Bloc 5 — FAQ ─── */}
      <section className="px-4 md:px-8 py-16 md:py-20" style={{ backgroundColor: C.card }}>
        <div className="max-w-3xl mx-auto">
          <h2 className={`${heading} text-2xl md:text-4xl mb-10 text-center`}>
            Questions fréquentes
          </h2>
          <Accordion type="single" collapsible defaultValue="item-0">
            {[
              {
                q: "Combien ça coûte ?",
                a: "Entre 5 000€ et 15 000€ selon la complexité. Prix forfaitaire — pas de TJM, pas de compteur qui tourne. Pour comparaison : un SaaS à 200€/mois vous coûte 7 200€ sur 3 ans.",
              },
              {
                q: "Et si ça ne marche plus dans un an ?",
                a: "Le code est documenté et transférable. Un autre développeur peut le reprendre demain. On propose une maintenance optionnelle avec des conditions claires.",
              },
              {
                q: "J'ai pas le temps de gérer un projet IT.",
                a: "Vous n'avez rien à gérer. On absorbe la charge projet : on pose les questions, on propose les solutions, vous validez les étapes.",
              },
              {
                q: "Comment je sais que c'est bien fait ?",
                a: "Maquette cliquable avant le développement. Versions fonctionnelles en cours de route. Recette finale sur vos cas réels.",
              },
              {
                q: "Et si je veux changer de prestataire ?",
                a: "Aucun problème. Le code source vous appartient. L'hébergement est chez vous. Vos données sont à vous.",
              },
            ].map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-b border-gray-200">
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
        </div>
      </section>

      {/* ─── Bloc 6 — Formulaire ─── */}
      <section id="formulaire" className="px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-xl mx-auto">
          <h2 className={`${heading} text-2xl md:text-3xl mb-3 text-center`}>
            Réservez votre appel découverte gratuit
          </h2>
          <p className="text-center mb-10" style={{ color: C.textSec }}>
            15-20 minutes pour comprendre votre situation. Sans engagement.
          </p>

          {submitted ? (
            <div
              className="bg-white rounded-2xl p-8 text-center shadow-sm"
            >
              <svg
                className="w-12 h-12 mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke={C.success}
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <h3 className={`${heading} text-xl mb-2`}>Demande envoyée !</h3>
              <p style={{ color: C.textSec }}>On vous recontacte sous 24h.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm space-y-5">
              <div>
                <label className="block text-sm font-medium mb-1.5">
                  Prénom <span style={{ color: C.amber }}>*</span>
                </label>
                <input
                  required
                  type="text"
                  value={form.prenom}
                  onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-2"
                  style={{ "--tw-ring-color": C.amber } as React.CSSProperties}
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
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-2"
                  style={{ "--tw-ring-color": C.amber } as React.CSSProperties}
                  placeholder="prenom@entreprise.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Téléphone</label>
                <input
                  type="tel"
                  value={form.tel}
                  onChange={(e) => setForm({ ...form, tel: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-base focus:outline-none focus:ring-2"
                  style={{ "--tw-ring-color": C.amber } as React.CSSProperties}
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
        </div>
      </section>

      {/* ─── Bloc 7 — Dernier CTA ─── */}
      <section
        className="px-4 md:px-8 py-14 md:py-20 text-center"
        style={{ backgroundColor: C.amberLight }}
      >
        <div className="max-w-2xl mx-auto">
          <p className="text-lg md:text-xl font-medium mb-8" style={{ color: C.text }}>
            Entreprise française. Code source remis à chaque projet. Prix forfaitaire garanti.
          </p>
          <CTA id="cta-bottom" />
        </div>
      </section>

      {/* ─── Bloc 8 — Footer ─── */}
      <footer className="px-4 md:px-8 py-10 md:py-14 text-sm" style={{ backgroundColor: C.footer, color: "#D1D5DB" }}>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <span className={`${heading} text-lg text-white block`}>Botami Software</span>
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
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/company/botami"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingGoogle;
