import { Star, ExternalLink, Check, X, ArrowRight, Quote } from "lucide-react";

import logoBlackfox from "@/assets/clients/blackfox.png";
import logoDesMurs from "@/assets/clients/des-murs-a-paris.png";
import logoErgosante from "@/assets/clients/ergosante.png";
import logoJD from "@/assets/clients/jd-sports.png";
import logoKijiji from "@/assets/clients/kijiji.png";
import logoLibralerte from "@/assets/clients/libralerte.png";
import logoProvence from "@/assets/clients/mademoiselle-provence.png";
import logoNotaires from "@/assets/clients/notaires-de-france.png";
import logoPoupina from "@/assets/clients/poupina.png";
import logoProarti from "@/assets/clients/proarti.png";
import logoSkills from "@/assets/clients/skills-communication.png";
import logoSkinCafeine from "@/assets/clients/skin-cafeine.png";
import logoStAubin from "@/assets/clients/st-aubin-avocats.png";

const clientLogos = [
  { src: logoBlackfox, alt: "Blackfox" },
  { src: logoDesMurs, alt: "Des Murs à Paris" },
  { src: logoErgosante, alt: "Ergo Santé" },
  { src: logoJD, alt: "JD Sports" },
  { src: logoKijiji, alt: "Kijiji" },
  { src: logoLibralerte, alt: "Libr'Alerte" },
  { src: logoProvence, alt: "Mademoiselle Provence" },
  { src: logoNotaires, alt: "Notaires de France" },
  { src: logoPoupina, alt: "Poupina" },
  { src: logoProarti, alt: "Proarti" },
  { src: logoSkills, alt: "Skills Communication" },
  { src: logoSkinCafeine, alt: "Skin Cafeine" },
  { src: logoStAubin, alt: "St-Aubin Avocats" },
];

const comparisonRows = [
  { label: "Coût", before: "~15 000 €/an", after: "5 800 € (une fois)", highlight: true },
  { label: "Inscription par atelier", before: false, after: true },
  { label: "Scan par atelier", before: false, after: "Oui — multi-niveaux, hors-ligne" },
  { label: "Emails personnalisés", before: "Non — rappels génériques", after: "Oui — avec SES ateliers, SES horaires" },
  { label: "Stats temps réel", before: false, after: "Oui — dashboard live par atelier" },
  { label: "Couverture du besoin", before: "~60%", after: "100%" },
  { label: "Propriété", before: "Location (abonnement)", after: "Le client possède tout" },
];

const features = [
  {
    title: "Inscription en ligne",
    desc: "Sélection de créneaux avec gestion des capacités en temps réel, liste d'attente automatique et QR code généré à l'inscription.",
  },
  {
    title: "Scanner multi-niveaux",
    desc: "Entrée générale + scan par atelier, fonctionnement hors-ligne, 10+ scanners simultanés sans ralentissement.",
  },
  {
    title: "Emails automatisés",
    desc: "Intégration Klaviyo : rappel J-2 personnalisé, J-1 rappel, post-event segmenté présents/absents.",
  },
  {
    title: "Dashboard temps réel",
    desc: "Inscrits, présents, no-show, taux de remplissage par atelier, walk-in, export CSV en un clic.",
  },
];

const stats = [
  { value: "2 500+", label: "inscrits" },
  { value: "850+", label: "présents" },
  { value: "~20", label: "ateliers sur 3 jours" },
  { value: "5 000+", label: "emails envoyés" },
  { value: "3 sem.", label: "de développement" },
  { value: "5 800 €", label: "forfait unique" },
];

const CellValue = ({ value }: { value: string | boolean }) => {
  if (value === true) return <Check className="w-5 h-5 text-accent mx-auto" />;
  if (value === false) return <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />;
  return <span>{value}</span>;
};

const CaseStudySection = () => (
  <section id="realisation" className="section-padding">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Déjà en production</h2>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left content */}
        <div className="lg:w-2/3 min-w-0">
          {/* Client context */}
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-2">Étude de cas</p>
            <h3 className="font-heading text-2xl font-bold mb-1">Transitions Pro Île-de-France</h3>
            <p className="text-muted-foreground mb-3">Organisme public — reconversion professionnelle</p>
            <p className="text-foreground/80 text-sm leading-relaxed">
              Organise des événements multi-jours (conférences, ateliers, RDV individuels).
              Utilisait Weezevent pour l'inscription et le check-in — mais les 40 % restants étaient gérés en Excel et listes papier.
            </p>
          </div>

          {/* Price delta banner */}
          <div className="rounded-xl bg-accent/10 border border-accent/20 p-5 mb-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <span className="text-lg line-through text-muted-foreground">15 000 €/an</span>
            <ArrowRight className="w-5 h-5 text-accent hidden sm:block" />
            <span className="text-2xl font-heading font-bold text-accent">5 800 € une fois</span>
          </div>

          {/* Comparison table */}
          <div className="rounded-2xl border bg-card overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/40">
                    <th className="text-left p-4 font-medium text-muted-foreground w-[40%]" />
                    <th className="p-4 font-semibold text-center text-muted-foreground">Weezevent <span className="text-xs font-normal">(avant)</span></th>
                    <th className="p-4 font-semibold text-center text-accent">GATEFORGE TP <span className="text-xs font-normal">(après)</span></th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className={`border-b last:border-0 ${row.highlight ? "bg-accent/5" : ""}`}>
                      <td className="p-4 font-medium">{row.label}</td>
                      <td className={`p-4 text-center ${row.highlight ? "text-muted-foreground line-through" : "text-muted-foreground"}`}>
                        <CellValue value={row.before} />
                      </td>
                      <td className={`p-4 text-center font-medium ${row.highlight ? "text-accent font-bold" : ""}`}>
                        <CellValue value={row.after} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* What we built */}
          <h3 className="font-heading text-xl font-bold mb-6">Ce qu'on a construit</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            {features.map((f, i) => (
              <div key={i} className="rounded-xl border bg-card p-6">
                <p className="font-semibold mb-2">{f.title}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {stats.map((s, i) => (
              <div key={i} className="rounded-xl bg-card border p-6 text-center">
                <p className="font-heading text-2xl md:text-3xl font-bold text-accent">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Quote */}
          <div className="rounded-xl border bg-card p-6 md:p-8 mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">Journal de réactivité — Jour J</p>
            <div className="font-mono text-sm leading-loose text-foreground/90 space-y-1">
              <p><span className="text-accent font-semibold">10h03</span> — bug détecté.</p>
              <p><span className="text-accent font-semibold">10h20</span> — résolu.</p>
              <p><span className="text-accent font-semibold">15h20</span> — le scan QR ne marche plus.</p>
              <p><span className="text-accent font-semibold">15h23</span> — c'est réglé.</p>
              <p><span className="text-accent font-semibold">11h27</span> — un bug.</p>
              <p><span className="text-accent font-semibold">11h36</span> — corrigé.</p>
            </div>
          </div>

          {/* Client logos */}
          <div className="flex flex-wrap items-center justify-center gap-8 mb-12">
            {clientLogos.map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
              />
            ))}
          </div>

          {/* Rating banner */}
          <div className="rounded-xl bg-accent/10 p-6 text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-sm text-foreground">
              L'équipe Botami est aussi notée <strong>4.8/5 sur 50 avis</strong> pour son accompagnement en acquisition digitale.
            </p>
          </div>
        </div>

        {/* Right sticky video — 1/3 */}
        <div className="hidden lg:block lg:w-[40%] shrink-0">
          <div className="sticky top-24 flex items-center justify-center" style={{ height: 'calc(100vh - 6rem)' }}>
            <div className="rounded-2xl border overflow-hidden aspect-[9/16] w-full max-h-[80vh]">
              <iframe
                src="https://player.vimeo.com/video/1179192157?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Étude de cas — Transitions Pro"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CaseStudySection;
