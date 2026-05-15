import { home } from "@/content/home";
import { SecNum } from "@/components/home/atoms";
import { RealCard, SectionHead } from "@/components/home/compounds";
import { Chip } from "@/components/home/atoms";
import { Sketch } from "@/components/home/sketches";
import { ArrowRightIcon } from "@/components/home/atoms";

/**
 * Carte réalisation pleine largeur — utilisée quand on n'a qu'un seul cas.
 * Layout : esquisse à gauche (ratio 16:10), méta à droite, le tout dans un
 * <a> qui pointe vers la démo.
 */
const RealCardSolo = ({
  category,
  client,
  result,
  sketch,
  href,
  external,
}: {
  category: string;
  client: string;
  result: string;
  sketch: "dashboard" | "form" | "list";
  href?: string;
  external?: boolean;
}) => {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group block border-[1.5px] border-ink rounded-card overflow-hidden bg-white bo-focus transition-colors"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr]">
        {/* Esquisse */}
        <div className="relative aspect-[16/10] lg:aspect-auto bg-n-200 border-b-[1.5px] lg:border-b-0 lg:border-r-[1.5px] border-ink overflow-hidden">
          <Sketch variant={sketch} />
        </div>
        {/* Méta */}
        <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center gap-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-n-500 font-medium">
            {category}
          </span>
          <h3 className="font-display text-[28px] sm:text-[32px] lg:text-[36px] font-semibold tracking-[-0.02em] leading-[1.1] text-ink">
            {client}
          </h3>
          <Chip>{result}</Chip>
          {href && (
            <span className="inline-flex items-center gap-2 mt-2 text-sm text-ink font-medium border-b border-ink pb-0.5 self-start group-hover:text-ambre-dark group-hover:border-ambre-dark transition-colors">
              Ouvrir la démo interactive
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const CaseStudySection = () => {
  const c = home.realisations;
  const cards = c.cards;
  const single = cards.length === 1;
  return (
    <section
      id="realisations"
      data-screen-label="04 Réalisations"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="bo-wrap">
        <SectionHead
          eyebrow={<SecNum>{c.secNum}</SecNum>}
          titleBefore={c.title.before}
          titleIta={c.title.ital}
          titleAfter={c.title.after}
          rightSlot={
            <p className="text-[15px] text-n-700 leading-[1.6]">
              {c.rightLinkHref && (
                <a
                  href={c.rightLinkHref}
                  target={
                    "rightLinkExternal" in c && c.rightLinkExternal
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    "rightLinkExternal" in c && c.rightLinkExternal
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-ink border-b border-ink hover:text-ambre-dark hover:border-ambre-dark transition-colors"
                >
                  {c.rightLinkLabel}
                </a>
              )}
            </p>
          }
        />

        {single ? (
          <RealCardSolo
            category={cards[0].category}
            client={cards[0].client}
            result={cards[0].result}
            sketch={cards[0].sketch}
            href={"href" in cards[0] ? cards[0].href : undefined}
            external={"external" in cards[0] ? cards[0].external : undefined}
          />
        ) : (
          (() => {
            const [big, ...rest] = cards;
            return (
              <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-6">
                <RealCard
                  size="large"
                  category={big.category}
                  client={big.client}
                  result={big.result}
                  sketch={big.sketch}
                />
                <div className="grid grid-cols-1 gap-6">
                  {rest.map((card) => (
                    <RealCard
                      key={card.client}
                      size="small"
                      category={card.category}
                      client={card.client}
                      result={card.result}
                      sketch={card.sketch}
                    />
                  ))}
                </div>
              </div>
            );
          })()
        )}
      </div>
    </section>
  );
};

export default CaseStudySection;
