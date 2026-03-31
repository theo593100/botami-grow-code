import { Star, ExternalLink } from "lucide-react";

const CaseStudySection = () => (
  <section id="realisation" className="section-padding">
    <div className="container-narrow">
      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12">Déjà en production</h2>

      {/* Case study card */}
      <div className="rounded-2xl border bg-card overflow-hidden mb-12">
        <div className="grid md:grid-cols-2">
          {/* Screenshot placeholder */}
          <div className="bg-muted flex items-center justify-center min-h-[260px] p-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <ExternalLink className="w-8 h-8 text-accent" />
              </div>
              <p className="text-sm text-muted-foreground">Screenshot à venir</p>
            </div>
          </div>

          {/* Details */}
          <div className="p-8 md:p-10 flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Étude de cas</p>
            <h3 className="font-heading text-2xl font-bold mb-2">Transition Pro</h3>
            <p className="text-muted-foreground mb-4">Organisme public — reconversion professionnelle</p>
            <p className="font-medium mb-1">Le RDV de la Reconversion — Édition Printemps 2026</p>
            <p className="text-sm text-muted-foreground mb-6">Application web événementielle</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium">Lovable</span>
              <span className="px-3 py-1 rounded-full bg-muted text-xs font-medium">Supabase</span>
            </div>
          </div>
        </div>
      </div>

      {/* Client logos */}
      <div className="flex flex-wrap items-center justify-center gap-10 mb-12">
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className="w-32 h-16 rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground"
          >
            Logo client {n}
          </div>
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
  </section>
);

export default CaseStudySection;
