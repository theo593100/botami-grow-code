import { useEffect, useRef, useState } from "react";

const steps = [
  {
    num: "01",
    title: "Audit",
    meta: "GRATUIT",
    metaExtra: " · 1-2h",
    desc: "On écoute votre problème, on challenge le besoin, on dit si le sur-mesure est la bonne réponse. Parfois, ce n'est pas le cas — et on vous le dit.",
  },
  {
    num: "02",
    title: "Cahier des charges",
    meta: "",
    metaExtra: "~1 semaine",
    desc: "On rédige ce que l'application va faire, écran par écran. Vous validez avant qu'une seule ligne de code n'existe.",
  },
  {
    num: "03",
    title: "Développement",
    meta: "",
    metaExtra: "1 semaine",
    desc: "On développe. Vous voyez l'avancement et pouvez tester en cours de route. Pas de tunnel de 3 mois sans nouvelles.",
  },
  {
    num: "04",
    title: "Recette",
    meta: "",
    metaExtra: "~1 semaine",
    desc: "On teste ensemble sur vos cas réels. Les corrections sont incluses dans le forfait — pas de surprise.",
  },
  {
    num: "05",
    title: "Livraison",
    meta: "",
    metaExtra: "1-2 jours",
    desc: "Installation sur votre hébergement. Formation de votre équipe. Documentation complète. Transfert du code source et de tous les accès.",
  },
];

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [progress, setProgress] = useState(0);
  const [activeSteps, setActiveSteps] = useState<boolean[]>(new Array(steps.length).fill(false));

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      const timeline = timelineRef.current;
      if (!section || !timeline) return;

      const timelineRect = timeline.getBoundingClientRect();
      const viewportCenter = window.innerHeight * 0.55;

      // Calculate progress of the colored line
      const lineTop = timelineRect.top;
      const lineHeight = timelineRect.height;

      if (lineTop >= viewportCenter) {
        setProgress(0);
      } else if (lineTop + lineHeight <= viewportCenter) {
        setProgress(100);
      } else {
        const traveled = viewportCenter - lineTop;
        setProgress((traveled / lineHeight) * 100);
      }

      // Check each step circle
      const newActive = stepRefs.current.map((ref) => {
        if (!ref) return false;
        const rect = ref.getBoundingClientRect();
        const circleCenter = rect.top + rect.height / 2;
        return circleCenter <= viewportCenter;
      });
      setActiveSteps(newActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="process" className="section-padding section-alt">
      <div className="container-narrow">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
          5 étapes. Vous validez à chacune.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-14">
          Vous ne gérez pas un projet IT. On pose les questions, on propose, vous validez. C'est tout.
        </p>

        <div className="relative" ref={sectionRef}>
          {/* Background line (dark/muted) */}
          <div
            ref={timelineRef}
            className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"
          />
          {/* Colored progress line */}
          <div
            className="absolute left-6 md:left-8 top-0 w-0.5 bg-accent hidden md:block transition-none"
            style={{ height: `${progress}%` }}
          />

          <div className="flex flex-col gap-10">
            {steps.map((s, i) => {
              const isActive = activeSteps[i];
              return (
                <div
                  key={s.num}
                  ref={(el) => { stepRefs.current[i] = el; }}
                  className="flex gap-6 md:gap-8 items-start"
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-heading font-bold text-lg md:text-xl relative z-10 transition-colors duration-500"
                    style={{
                      backgroundColor: isActive
                        ? "hsl(var(--accent))"
                        : "hsl(var(--primary))",
                      color: isActive
                        ? "hsl(var(--accent-foreground))"
                        : "hsl(var(--primary-foreground))",
                    }}
                  >
                    {s.num}
                  </div>
                  <div className="pt-1 md:pt-3">
                    <div className="flex flex-wrap items-baseline gap-3 mb-2">
                      <h3
                        className="font-heading text-xl font-bold transition-colors duration-500"
                        style={{
                          color: isActive ? "hsl(var(--accent))" : undefined,
                        }}
                      >
                        {s.title}
                      </h3>
                      {s.meta && (
                        <span className="text-sm font-bold uppercase tracking-wide text-accent bg-accent/10 px-2 py-0.5 rounded">
                          {s.meta}
                        </span>
                      )}
                      <span className="text-sm font-medium text-muted-foreground">
                        {s.metaExtra}
                      </span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed max-w-lg">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
