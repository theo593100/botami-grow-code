import { home } from "@/content/home";
import { SecNum } from "@/components/home/atoms";
import { RealCard, SectionHead } from "@/components/home/compounds";

const CaseStudySection = () => {
  const c = home.realisations;
  const [big, ...rest] = c.cards;
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
              Voir{" "}
              <a
                href={c.rightLinkHref}
                className="text-ink border-b border-ink hover:text-ambre-dark hover:border-ambre-dark transition-colors"
              >
                {c.rightLinkLabel}
              </a>
            </p>
          }
        />

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
      </div>
    </section>
  );
};

export default CaseStudySection;
