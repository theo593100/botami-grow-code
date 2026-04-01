import { Crosshair, Key, Rocket, Check, X, Minus } from "lucide-react";

const pillars = [
  {
    icon: Crosshair,
    title: "Sur-mesure exact",
    desc: "On développe les fonctionnalités dont vous avez besoin. Pas 100 features dont vous utilisez 10. Votre outil fait exactement ce que vous voulez — rien de plus, rien de moins.",
  },
  {
    icon: Key,
    title: "C'est votre outil",
    desc: "Code source, données, hébergement — tout est chez vous. Pas de loyer mensuel, pas de dépendance. Un autre développeur peut reprendre demain si vous le souhaitez.",
  },
  {
    icon: Rocket,
    title: "Livré en semaines",
    desc: "L'IA comme assistant de développement nous permet de livrer vite, à des budgets PME. Forfait transparent, prix fixe annoncé avant de commencer.",
  },
];

type CellValue = true | false | "partial" | string;

const comparisonRows: { label: string; saas: CellValue; custom: CellValue; highlight?: boolean }[] = [
  { label: "Coût année 1", saas: "3 600 – 9 600 €", custom: "5 000 – 15 000 €" },
  { label: "Coût sur 3 ans", saas: "10 800 – 28 800 €", custom: "5 000 – 15 000 €", highlight: true },
  { label: "Propriété du code", saas: false, custom: true },
  { label: "Propriété des données", saas: "Hébergées chez l'éditeur", custom: "100 % chez vous" },
  { label: "Adaptation à votre métier", saas: "Limité aux options prévues", custom: "Conçu pour votre workflow" },
  { label: "Risque de lock-in", saas: "Élevé — migration coûteuse", custom: "Aucun — code open & portable" },
  { label: "Hausse de prix unilatérale", saas: "Fréquente (+20-40 %/an)", custom: "Impossible — forfait unique" },
  { label: "Risque de fermeture / pivot", saas: "Vous perdez tout", custom: "Votre app tourne indéfiniment" },
];

const CellIcon = ({ value }: { value: CellValue }) => {
  if (value === true) return <Check className="w-5 h-5 text-accent" />;
  if (value === false) return <X className="w-5 h-5 text-destructive" />;
  if (value === "partial") return <Minus className="w-5 h-5 text-muted-foreground" />;
  return <span>{value}</span>;
};

const ApproachSection = () => (
  <section id="approche" className="section-padding">
    <div className="container-narrow">
      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Du logiciel qui vous ressemble</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mb-12">
        Pas une agence de dev à 80&nbsp;000&nbsp;€. Pas un SaaS de plus. Un outil sur mesure, à votre budget, qui vous appartient.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {pillars.map((p) => (
          <div key={p.title} className="p-6">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-5">
              <p.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Comparison table */}
      <div className="rounded-2xl border bg-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b bg-muted/40">
                <th className="text-left p-4 font-medium text-muted-foreground w-[40%]" />
                <th className="p-4 font-semibold text-center text-muted-foreground">SaaS empilés <span className="text-xs font-normal block">(300–800 €/mois)</span></th>
                <th className="p-4 font-semibold text-center text-accent">App sur mesure <span className="text-xs font-normal block">(Botami)</span></th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, i) => (
                <tr key={i} className={`border-b last:border-0 ${row.highlight ? "bg-accent/5" : ""}`}>
                  <td className="p-4 font-medium">{row.label}</td>
                  <td className="p-4 text-center text-muted-foreground">
                    <div className="flex items-center justify-center">
                      <CellIcon value={row.saas} />
                    </div>
                  </td>
                  <td className={`p-4 text-center font-medium ${row.highlight ? "text-accent font-bold" : ""}`}>
                    <div className="flex items-center justify-center">
                      <CellIcon value={row.custom} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="border-t px-4 py-3 text-xs text-muted-foreground text-center">
          * Hébergement de votre app : 5–20 €/mois (serveur + domaine), géré par vous ou par nous.
        </div>
      </div>
    </div>
  </section>
);

export default ApproachSection;
