import { Button } from "@/components/ui/button";
import { Star, ShieldCheck, Zap } from "lucide-react";

const stats = [
  { icon: Star, value: "4.8/5", label: "Satisfaction client" },
  { icon: ShieldCheck, value: "100%", label: "Proprio du code" },
  { icon: Zap, value: "4 sem.", label: "Délai moyen" },
];

const HeroSection = () => (
  <section className="relative section-padding pt-32 md:pt-40" id="hero">
    <div className="container-narrow">
      <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-4">
        Développement sur mesure pour PME
      </p>
      <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 max-w-3xl">
        On remplace vos SaaS, Excel et outils bricolés par des applications qui vous appartiennent.
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
        Forfait transparent de 5&nbsp;000 à 15&nbsp;000&nbsp;€. Code source, données, hébergement — tout est chez vous.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <a href="#contact">
          <Button variant="hero" size="lg" className="text-base px-8 py-6">
            Parler de votre projet
          </Button>
        </a>
        <a href="#process">
          <Button variant="hero-outline" size="lg" className="text-base px-8 py-6">
            Voir comment ça marche
          </Button>
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((s) => (
          <div key={s.label} className="flex items-center gap-4 p-4 rounded-lg bg-card border">
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-accent/10">
              <s.icon className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-2xl font-heading font-bold">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
