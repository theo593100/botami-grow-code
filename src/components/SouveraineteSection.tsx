import { home } from "@/content/home";

/**
 * Section Souveraineté — version conforme au brief copywriting (14 mai).
 *
 * Spec :
 *  - Fond #FFFFFF (se détache du crème de la page)
 *  - Pas d'icônes décoratives sur les 4 sous-points
 *  - Filet visuel ambre 24×2px au-dessus de chaque micro-titre
 *  - Grille 4 cols desktop ≥1024 / 2×2 tablet ≥640 / stack mobile
 *  - Pas de CTA (choix éditorial)
 *  - Eyebrow ambre uppercase, H2 sobre charbon (pas d'italique)
 */
const SouveraineteSection = () => {
  const c = home.souverainete;
  return (
    <section
      id="souverainete"
      data-screen-label="07 Souveraineté"
      className="bg-white"
    >
      <div className="bo-wrap py-20 sm:py-24 lg:py-28">
        {/* Eyebrow + H2 + sous-titre */}
        <div className="mb-12 sm:mb-16 max-w-[860px]">
          <div className="font-display font-medium text-[14px] uppercase tracking-[0.1em] text-ambre mb-5">
            {c.eyebrow}
          </div>
          <h2 className="font-display font-semibold text-ink leading-[1.05] tracking-[-0.02em] text-[clamp(28px,5vw,40px)] bo-text-balance mb-5">
            {c.h2}
          </h2>
          <p className="font-sans text-[17px] sm:text-[18px] text-n-500 leading-[1.55] max-w-[720px] bo-text-pretty">
            {c.lead}
          </p>
        </div>

        {/* Grille 4 sous-points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {c.points.map((p) => (
            <article key={p.key}>
              {/* Filet ambre 24×2px */}
              <div
                className="h-[2px] w-6 bg-ambre mb-4"
                aria-hidden="true"
              />
              <h3 className="font-display font-semibold text-[18px] text-ink leading-[1.3] mb-2.5">
                {p.title}
              </h3>
              <p className="font-sans text-[15px] text-n-500 leading-[1.5]">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SouveraineteSection;
