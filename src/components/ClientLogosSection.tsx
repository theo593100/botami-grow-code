import { home } from "@/content/home";
import { SecNum, StatItem } from "@/components/home/atoms";
import {
  MarqueeContinuous,
  MarqueeScrollLinked,
} from "@/components/home/compounds";

const ClientLogosSection = () => {
  const c = home.bandeau;
  return (
    <section
      data-screen-label="05 Clients + Stats"
      className="px-5 sm:px-8 lg:px-16 py-12 sm:py-16"
    >
      <div className="bg-ink text-cream rounded-band px-6 py-12 sm:px-10 sm:py-16 lg:px-[72px] lg:py-[88px]">
        {/* Bande head : eyebrow + h2 + lien */}
        <div className="flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-6 lg:gap-12 mb-12 sm:mb-16">
          <div>
            <SecNum variant="dark">{c.secNum}</SecNum>
            <h2 className="mt-2 font-display font-bold text-[34px] sm:text-[44px] lg:text-[54px] leading-[1] tracking-[-0.03em] text-cream max-w-[600px] bo-text-balance">
              {c.h2}
            </h2>
          </div>
          <a
            href={c.linkHref}
            className="self-start lg:self-end text-sm text-cream border-b border-cream/80 pb-0.5 hover:text-ambre hover:border-ambre transition-colors"
          >
            {c.linkLabel}
          </a>
        </div>

        {/* === Test A/B des deux marquees — à arbitrer par Théo ===
            Une fois la décision prise, supprimer le bloc non retenu. */}
        <div className="mb-12 sm:mb-16 lg:mb-20 space-y-8">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-cream/45 mb-3">
              Mode A · Défilement continu
            </div>
            <MarqueeContinuous items={c.marquee} />
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-cream/45 mb-3">
              Mode B · Défilement piloté par le scroll
            </div>
            <MarqueeScrollLinked items={c.marquee} />
          </div>
        </div>

        {/* 3 stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0">
          {c.stats.map((s, i) => (
            <div
              key={s.lbl}
              className={[
                "sm:px-8 lg:px-10",
                i === 0 ? "sm:pl-0" : "",
                i < c.stats.length - 1 ? "sm:border-r border-cream/20" : "",
              ].join(" ")}
            >
              <StatItem num={s.num} lbl={s.lbl} src={s.src} theme="dark" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
