import { home } from "@/content/home";
import { SecNum } from "@/components/home/atoms";
import { Pillar, PillarFr } from "@/components/home/compounds";
import elias from "@/assets/elias.webp";

const ProblemSection = () => {
  const c = home.argu;
  return (
    <section
      id="argumentaire"
      data-screen-label="03 Argumentaire"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="bo-wrap">
        <SecNum>{c.secNum}</SecNum>

        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Colonne gauche : H2 + citation */}
          <div>
            <h2 className="font-display font-bold leading-[0.98] tracking-[-0.03em] text-ink text-[clamp(40px,7.5vw,72px)] bo-text-balance">
              {c.h2.l1Before}
              <span className="bo-ital">{c.h2.l1Ital}</span>
              {c.h2.l1After}
              <br />
              {c.h2.l2Before}
              <span className="bo-ital">{c.h2.l2Ital}</span>
              {c.h2.l2After}
            </h2>

            <figure className="mt-10 sm:mt-12 border-l-[3px] border-ambre pl-6 py-1.5">
              <blockquote>
                <p className="font-display text-[19px] sm:text-[21px] font-medium leading-[1.4] tracking-[-0.01em] text-ink max-w-[440px]">
                  « {c.quote.text} »
                </p>
              </blockquote>
              <figcaption className="flex items-center gap-3.5 mt-5">
                <img
                  src={elias}
                  alt=""
                  width={44}
                  height={44}
                  loading="lazy"
                  className="w-11 h-11 rounded-full border-[1.5px] border-ink object-cover"
                />
                <span className="text-[13px] text-n-700 leading-tight">
                  <b className="block font-semibold text-[14px] text-ink">
                    {c.quote.author}
                  </b>
                  {c.quote.role}
                </span>
              </figcaption>
            </figure>
          </div>

          {/* Colonne droite : 2 paragraphes + 4 piliers */}
          <div>
            <p className="text-[17px] sm:text-[18px] text-ink leading-[1.6]">
              {c.body[0]}
            </p>
            <p className="text-[17px] text-n-700 leading-[1.6] mt-4">
              {c.body[1]}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-8 sm:mt-9">
              {c.pillars.map((p) => {
                const iconMono = "iconMono" in p && p.iconMono === true;
                return (
                  <Pillar
                    key={p.title}
                    icon={p.icon}
                    iconMono={iconMono}
                    title={p.title}
                    body={p.body}
                  />
                );
              })}
              <PillarFr
                icon={c.pillarFr.icon}
                title={c.pillarFr.title}
                body={c.pillarFr.body}
                tag={c.pillarFr.tag}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
