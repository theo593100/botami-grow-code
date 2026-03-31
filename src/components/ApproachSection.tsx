import { Crosshair, Key, Rocket, Check, X } from "lucide-react";

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

const comparison = [
  { label: "SaaS à 200 €/mois", cost: "7 200 € sur 3 ans", own: false },
  { label: "SaaS à 500 €/mois", cost: "18 000 € sur 3 ans", own: false },
  { label: "Notre app (standard)", cost: "~10 000 € une fois", own: true, highlight: true },
];

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
      <div className="grid md:grid-cols-3 gap-4">
        {comparison.map((c) => (
          <div
            key={c.label}
            className={`rounded-xl border p-6 text-center transition-shadow ${
              c.highlight
                ? "bg-primary text-primary-foreground border-primary shadow-xl scale-[1.03]"
                : "bg-card"
            }`}
          >
            <p className={`text-sm font-medium mb-2 ${c.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
              {c.label}
            </p>
            <p className="text-2xl font-heading font-bold mb-4">{c.cost}</p>
            <div className="flex items-center justify-center gap-2">
              {c.own ? (
                <Check className="w-5 h-5 text-accent" />
              ) : (
                <X className={`w-5 h-5 ${c.highlight ? "text-primary-foreground/50" : "text-destructive"}`} />
              )}
              <span className="text-sm font-medium">
                Vous possédez : {c.own ? "Tout" : "Rien"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ApproachSection;
