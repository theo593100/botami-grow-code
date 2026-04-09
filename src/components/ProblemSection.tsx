import { CreditCard, FileSpreadsheet, Layers, ShieldOff } from "lucide-react";

const problems = [
  {
    icon: CreditCard,
    title: "Le SaaS trop cher",
    hook: "Vous payez 100% pour 10%",
    desc: "Vous utilisez une fraction de votre SaaS. Le prix augmente chaque année. Vous ne pouvez ni le customiser, ni en sortir facilement.",
  },
  {
    icon: FileSpreadsheet,
    title: "L'Excel qui déborde",
    hook: "Votre fichier fait peur à tout le monde",
    desc: "Ça marchait au début. Maintenant c'est un chaos de versions, de macros cassées, et personne n'ose y toucher.",
  },
  {
    icon: Layers,
    title: "Le logiciel usine à gaz",
    hook: "1 000 fonctions, vous en utilisez 10",
    desc: "Votre SaaS fait tout, mal. Vous payez pour des features que vous n'utiliserez jamais, et celles dont vous avez besoin marchent à moitié.",
  },
  {
    icon: ShieldOff,
    title: "Des données qui ne vous appartiennent pas",
    hook: "Vos données sont chez eux, pas chez vous",
    desc: "Vos données clients, vos historiques, vos fichiers… tout est stocké sur les serveurs d'un SaaS. Le jour où vous partez, bonne chance pour les récupérer.",
  },
];

const ProblemSection = () => (
  <section id="probleme" className="section-padding section-alt">
    <div className="container-narrow">
      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Vous vous reconnaissez ?</h2>
      <p className="text-lg text-muted-foreground max-w-2xl mb-12">
        Les PME paient des outils qui coûtent trop cher pour ce qu'elles en font, sans les fonctionnalités dont elles ont vraiment besoin.
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {problems.map((p) => (
          <div
            key={p.title}
            className="bg-card rounded-xl p-8 border hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10 mb-6">
              <p.icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-2">{p.title}</h3>
            <p className="text-sm font-semibold text-accent mb-3">{p.hook}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
