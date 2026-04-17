import { useScrollReveal } from "@/hooks/useScrollReveal";
import eliasPhoto from "@/assets/elias.webp";
import theoPhoto from "@/assets/theo.webp";

const team = [
  {
    name: "Elias",
    role: "Co-fondateur",
    tagline: "10 ans d'expertise Facebook Ads & Google Ads",
    desc: "Compréhension des flux métier, expérience client en agences. Il sait ce que vos outils doivent résoudre au quotidien.",
    initials: "E",
    photo: eliasPhoto,
  },
  {
    name: "Théo",
    role: "Co-fondateur",
    tagline: "Responsable marketing en startup",
    desc: "Vision produit, UX, process de développement. Il structure le besoin et s'assure que l'outil fonctionne pour vous — pas juste techniquement.",
    initials: "T",
    photo: theoPhoto,
  },
];

const TeamCard = ({ member, index }: { member: typeof team[0]; index: number }) => {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${index * 200}ms`,
      }}
    >
      {/* Photo container — plan américain, N&B, détouré */}
      <div className="relative w-full max-w-xs aspect-[3/4] mb-8 overflow-hidden rounded-2xl bg-muted group">
        {member.photo ? (
          <img
            src={member.photo}
            alt={`Portrait de ${member.name}, ${member.role} de Botami Software`}
            width={400}
            height={533}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 ease-out group-hover:scale-105"
            style={{
              objectPosition: member.name === "Théo" ? "center 35%" : "center 20%",
            }}
          />
        ) : (
          /* Placeholder stylisé en attendant les photos */
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-muted to-muted/60">
            <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <span className="font-heading text-5xl font-bold text-primary/30">
                {member.initials}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">Photo à venir</p>
          </div>
        )}
        {/* Subtle gradient overlay at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
      </div>

      <h3 className="font-heading text-2xl font-bold">{member.name}</h3>
      <p className="text-sm font-semibold text-accent mb-2">{member.role}</p>
      <p className="text-sm font-medium opacity-80 mb-3">{member.tagline}</p>
      <p className="text-sm opacity-70 leading-relaxed max-w-sm">{member.desc}</p>
    </div>
  );
};

const TeamSection = () => (
  <section id="equipe" className="section-padding section-dark">
    <div className="container-narrow">
      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-center">
        On comprend votre métier avant de coder
      </h2>
      <p className="text-lg opacity-70 max-w-2xl mx-auto mb-16 text-center">
        Pas une équipe de développeurs à l'aveugle. Deux profils business qui partent de votre problème.
      </p>
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 max-w-3xl mx-auto">
        {team.map((t, i) => (
          <TeamCard key={t.name} member={t} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
