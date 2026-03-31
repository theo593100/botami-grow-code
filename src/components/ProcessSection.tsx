const steps = [
  {
    num: "01",
    title: "Diagnostic",
    meta: "Gratuit · 1-2h",
    desc: "On écoute votre problème, on challenge le besoin, on dit si le sur-mesure est la bonne réponse. Parfois, ce n'est pas le cas — et on vous le dit.",
  },
  {
    num: "02",
    title: "Cahier des charges",
    meta: "~1 semaine",
    desc: "On rédige ce que l'application va faire, écran par écran. Vous validez avant qu'une seule ligne de code n'existe.",
  },
  {
    num: "03",
    title: "Développement",
    meta: "2-6 semaines",
    desc: "On développe. Vous voyez l'avancement et pouvez tester en cours de route. Pas de tunnel de 3 mois sans nouvelles.",
  },
  {
    num: "04",
    title: "Recette",
    meta: "~1 semaine",
    desc: "On teste ensemble sur vos cas réels. Les corrections sont incluses dans le forfait — pas de surprise.",
  },
  {
    num: "05",
    title: "Livraison",
    meta: "1-2 jours",
    desc: "Installation sur votre hébergement. Formation de votre équipe. Documentation complète. Transfert du code source et de tous les accès.",
  },
];

const ProcessSection = () => (
  <section id="process" className="section-padding section-alt">
    <div className="container-narrow">
      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
        5 étapes. Vous validez à chacune.
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mb-14">
        Vous ne gérez pas un projet IT. On pose les questions, on propose, vous validez. C'est tout.
      </p>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="flex flex-col gap-10">
          {steps.map((s, i) => (
            <div key={s.num} className="flex gap-6 md:gap-8 items-start">
              <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-bold text-lg md:text-xl relative z-10">
                {s.num}
              </div>
              <div className="pt-1 md:pt-3">
                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <h3 className="font-heading text-xl font-bold">{s.title}</h3>
                  <span className="text-sm font-medium text-accent">{s.meta}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed max-w-lg">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ProcessSection;
