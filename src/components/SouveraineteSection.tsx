import { home } from "@/content/home";
import { Btn, SecNum } from "@/components/home/atoms";
import { SectionHead } from "@/components/home/compounds";
import { cn } from "@/lib/utils";

/**
 * Drapeau français inline — SVG sobre, ratio 3:2 standard.
 * Utilisé comme pictogramme pour la carte "Hébergement français".
 */
const FlagFR = ({ size = 28 }: { size?: number }) => (
  <svg
    width={size}
    height={Math.round((size * 2) / 3)}
    viewBox="0 0 3 2"
    role="img"
    aria-label="Drapeau de la France"
    className="block rounded-[2px] overflow-hidden"
  >
    <rect x="0" y="0" width="1" height="2" fill="#0055A4" />
    <rect x="1" y="0" width="1" height="2" fill="#FFFFFF" />
    <rect x="2" y="0" width="1" height="2" fill="#EF4135" />
  </svg>
);

/**
 * Carte souveraineté. Variante de Pillar avec icône custom.
 */
const SovCard = ({
  icon,
  iconMono,
  title,
  body,
}: {
  icon: React.ReactNode;
  iconMono?: boolean;
  title: string;
  body: string;
}) => (
  <article className="bg-white border-[1.5px] border-ink rounded-card p-6 sm:p-7 flex flex-col gap-4">
    <div
      className={cn(
        "w-12 h-12 rounded-[10px] border-[1.5px] border-ink bg-cream grid place-items-center text-ink",
        iconMono
          ? "font-mono text-[15px]"
          : "font-display font-semibold text-[16px] tracking-[-0.02em]",
      )}
      aria-hidden="true"
    >
      {icon}
    </div>
    <div>
      <h3 className="font-display text-[20px] sm:text-[22px] font-semibold tracking-[-0.02em] mb-2 text-ink">
        {title}
      </h3>
      <p className="text-[14px] sm:text-[15px] text-n-700 leading-[1.55]">
        {body}
      </p>
    </div>
  </article>
);

const SouveraineteSection = () => {
  const c = home.souverainete;
  return (
    <section
      id="souverainete"
      data-screen-label="07 Souveraineté"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="bo-wrap">
        <SectionHead
          eyebrow={
            <span className="inline-flex items-center gap-3">
              <SecNum>{c.secNum}</SecNum>
              <FlagFR size={20} />
            </span>
          }
          titleBefore={c.title.before}
          titleIta={c.title.ital}
          titleAfter={c.title.after}
          rightSlot={
            <p className="text-[15px] text-n-700 leading-[1.6] bo-text-pretty">
              {c.lead}
            </p>
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {c.cards.map((card) => {
            const renderIcon = () => {
              if (card.icon === "FLAG_FR") return <FlagFR size={24} />;
              if (card.icon === "RGPD")
                return <span className="text-[11px] font-bold">RGPD</span>;
              return card.icon;
            };
            return (
              <SovCard
                key={card.key}
                icon={renderIcon()}
                iconMono={card.iconMono ?? card.icon === "RGPD"}
                title={card.title}
                body={card.body}
              />
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Btn variant="ghost" href={c.cta.href}>
            {c.cta.label}
          </Btn>
        </div>
      </div>
    </section>
  );
};

export default SouveraineteSection;
