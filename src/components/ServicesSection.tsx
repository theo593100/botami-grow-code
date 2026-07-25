import { home } from "@/content/home";
import { SectionHead } from "@/components/home/compounds";
import { ServiceRow } from "@/components/home/compounds";
import { SecNum } from "@/components/home/atoms";

const ServicesSection = () => {
  const c = home.services;
  return (
    <section
      id="services"
      data-screen-label="02 Services"
      className="py-24 sm:py-28 lg:py-32"
    >
      <div className="bo-wrap">
        <SectionHead
          eyebrow={<SecNum>{c.secNum}</SecNum>}
          titleBefore={c.title.before}
          titleIta={c.title.ital}
          titleAfter={c.title.after}
          rightText={c.right}
        />

        <ul className="border-t-[1.5px] border-ink" role="list">
          {c.items.map((item) => (
            <li key={item.index} className="m-0">
              <ServiceRow
                index={item.index}
                title={item.title}
                desc={item.desc}
                href={`/${item.slug}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
