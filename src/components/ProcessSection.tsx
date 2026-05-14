import { home } from "@/content/home";
import { Btn, SecNum } from "@/components/home/atoms";
import { MethodStep, SectionHead } from "@/components/home/compounds";

const ProcessSection = () => {
  const c = home.methode;
  return (
    <section
      id="methode"
      data-screen-label="06 Méthode"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="bo-wrap">
        <SectionHead
          eyebrow={<SecNum>{c.secNum}</SecNum>}
          titleBefore={c.title.before}
          titleIta={c.title.ital}
          titleAfter={c.title.after}
          rightText={c.right}
        />

        {/* Paper */}
        <div className="bg-white border-[1.5px] border-ink rounded-card p-8 sm:p-12 lg:p-16">
          {/* Paper head */}
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-4 sm:gap-12 pb-8 border-b-[1.5px] border-ink">
            <h3 className="font-display font-bold text-[28px] sm:text-[36px] lg:text-[42px] leading-none tracking-[-0.03em] text-ink">
              {c.paperTitle}
            </h3>
            <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-n-500 sm:text-right">
              <b className="block text-ink mb-1 font-medium">
                {c.paperDocMeta.strong}
              </b>
              {c.paperDocMeta.line}
            </div>
          </div>

          {/* Steps */}
          <div>
            {c.steps.map((s, i) => (
              <MethodStep
                key={s.n}
                n={s.n}
                title={s.title}
                desc={s.desc}
                duration={s.duration}
                deliverable={s.deliverable}
                cost={s.cost}
                isLast={i === c.steps.length - 1}
              />
            ))}
          </div>

          {/* Paper foot */}
          <div className="mt-8 pt-8 border-t-[1.5px] border-ink flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <p className="font-display text-[18px] sm:text-[22px] font-medium tracking-[-0.02em] text-ink">
              {c.footTextBefore}
              <span className="bo-ital">{c.footTextIta}</span>
              {c.footTextAfter}
            </p>
            <Btn variant="ghost" href={c.footCta.href}>
              {c.footCta.label}
            </Btn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
