const team = [
  {
    name: "Elias",
    role: "Co-fondateur",
    tagline: "10 ans d'expertise Facebook Ads & Google Ads",
    desc: "Compréhension des flux métier, expérience client en agences. Il sait ce que vos outils doivent résoudre au quotidien.",
    initials: "E",
  },
  {
    name: "Théo",
    role: "Co-fondateur",
    tagline: "Responsable marketing en startup",
    desc: "Vision produit, UX, process de développement. Il structure le besoin et s'assure que l'outil fonctionne pour vous — pas juste techniquement.",
    initials: "T",
  },
];

const TeamSection = () => (
  <section id="equipe" className="section-padding section-dark">
    <div className="container-narrow">
      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
        On comprend votre métier avant de coder
      </h2>
      <p className="text-lg opacity-70 max-w-2xl mb-14">
        Pas une équipe de développeurs à l'aveugle. Deux profils business qui partent de votre problème.
      </p>
      <div className="grid md:grid-cols-2 gap-8">
        {team.map((t) => (
          <div key={t.name} className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="flex-shrink-0 w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center font-heading text-2xl font-bold text-accent">
              {t.initials}
            </div>
            <div>
              <h3 className="font-heading text-xl font-bold">{t.name}</h3>
              <p className="text-sm font-medium text-accent mb-1">{t.role}</p>
              <p className="text-sm font-semibold opacity-80 mb-2">{t.tagline}</p>
              <p className="text-sm opacity-70 leading-relaxed">{t.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
