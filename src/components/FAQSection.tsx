import { home } from "@/content/home";
import { SecNum } from "@/components/home/atoms";
import { FaqRow, SectionHead } from "@/components/home/compounds";

const FAQSection = () => {
  const c = home.faq;
  return (
    <section
      id="faq"
      data-screen-label="07 FAQ"
      className="py-24 sm:py-28 lg:py-32"
    >
      <div className="bo-wrap">
        <SectionHead
          align="center"
          eyebrow={<SecNum>{c.secNum}</SecNum>}
          titleBefore={c.title.before}
          titleIta={c.title.ital}
          titleAfter={c.title.after}
        />

        <div className="max-w-[920px] mx-auto">
          {c.items.map((item, i) => (
            <FaqRow
              key={item.q}
              index={String(i + 1).padStart(2, "0")}
              question={item.q}
              answer={item.a}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
