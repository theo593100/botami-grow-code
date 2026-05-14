import { home } from "@/content/home";
import { PricingPill, SecNum, StatItem } from "@/components/home/atoms";

const HeroSection = () => {
  const c = home.hero;
  return (
    <section
      id="hero"
      data-screen-label="01 Hero"
      className="pt-24 sm:pt-28 lg:pt-24 pb-0"
    >
      <div className="bo-wrap">
        <SecNum>{c.eyebrow}</SecNum>

        <div className="mt-7 sm:mt-8 grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-end">
          {/* Colonne gauche : H1 + subline + pricing pill */}
          <div>
            <h1 className="font-display font-bold tracking-[-0.04em] text-ink leading-[0.94] text-[clamp(48px,9vw,104px)] bo-text-balance">
              {c.h1.before}
              <span className="bo-ital">{c.h1.ital}</span>
              <br />
              {c.h1.after}
            </h1>
            <p className="mt-6 sm:mt-7 font-display font-medium text-n-700 leading-[1.15] tracking-[-0.02em] text-[clamp(20px,3.5vw,32px)] max-w-[680px]">
              {c.subline}
            </p>
            <PricingPill
              className="mt-10 sm:mt-12"
              before={c.pricingPill.text}
              strong1={c.pricingPill.strong1}
              mid={c.pricingPill.mid}
              strong2={c.pricingPill.strong2}
              caption={c.pricingPill.caption}
            />
          </div>

          {/* Colonne droite : lead + dispo (CTA secondaire retiré tant qu'il n'y a pas assez de cas) */}
          <div className="pb-2 lg:pb-3">
            <p className="text-[17px] text-n-700 leading-[1.6] max-w-[360px] mb-7">
              {c.lead}
            </p>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-n-500 flex items-center gap-2">
              <span
                className="w-[7px] h-[7px] rounded-full bg-[#2E8F4F]"
                style={{ boxShadow: "0 0 0 4px rgba(46,143,79,0.15)" }}
                aria-hidden="true"
              />
              {c.availability}
            </div>
          </div>
        </div>

        {/* Stats hero (3 colonnes : valeurs vérifiables uniquement) */}
        <div
          className="mt-16 sm:mt-20 lg:mt-24 border-t border-n-300 grid grid-cols-1 sm:grid-cols-3"
          role="list"
        >
          {c.stats.map((s, i) => (
            <div
              role="listitem"
              key={s.lbl}
              className={[
                "py-7 sm:py-7",
                i < c.stats.length - 1 ? "sm:border-r border-n-300" : "",
                i > 0 ? "sm:pl-8" : "",
                i > 0 ? "border-t sm:border-t-0 border-n-300" : "",
              ].join(" ")}
            >
              <StatItem num={s.num} unit={s.unit} lbl={s.lbl} theme="cream" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
