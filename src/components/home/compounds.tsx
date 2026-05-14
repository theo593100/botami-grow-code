/**
 * Composants composés Botami (hi-fi).
 */
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ArrowCircle, Chip } from "./atoms";
import { Sketch } from "./sketches";

/* ---------- Pillar (carte argumentaire) ---------- */
export type PillarProps = {
  icon: React.ReactNode;
  iconMono?: boolean;
  title: string;
  body: string;
};

export const Pillar = ({ icon, iconMono, title, body }: PillarProps) => (
  <div className="bg-white border-[1.5px] border-ink rounded-card p-6 relative">
    <div
      className={cn(
        "w-10 h-10 rounded-[10px] border-[1.5px] border-ink bg-cream grid place-items-center mb-[18px] text-ink",
        iconMono
          ? "font-mono text-base"
          : "font-display font-semibold text-[18px] tracking-[-0.02em]",
      )}
      aria-hidden="true"
    >
      {icon}
    </div>
    <h4 className="font-display text-[18px] font-semibold tracking-[-0.01em] mb-1.5 text-ink">
      {title}
    </h4>
    <p className="text-[13px] text-n-700 leading-[1.5]">{body}</p>
  </div>
);

/* ---------- PillarFr (pilier highlight charbon, full-width) ---------- */
export const PillarFr = ({
  icon,
  title,
  body,
  tag,
}: {
  icon: string;
  title: string;
  body: string;
  tag: string;
}) => (
  <div className="col-span-1 sm:col-span-2 bg-ink text-cream rounded-card p-8 grid grid-cols-1 sm:grid-cols-[auto_1fr_auto] gap-5 sm:gap-7 items-center">
    <div
      className="w-14 h-14 rounded-xl bg-ambre grid place-items-center font-display font-bold text-[22px] tracking-[-0.02em] text-ink"
      aria-hidden="true"
    >
      {icon}
    </div>
    <div>
      <h4 className="font-display text-[20px] sm:text-[24px] font-semibold tracking-[-0.02em] text-cream">
        {title}
      </h4>
      <p className="text-[14px] text-cream/70 mt-1 leading-[1.55]">{body}</p>
    </div>
    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ambre sm:justify-self-end">
      {tag}
    </div>
  </div>
);

/* ---------- ServiceRow (ligne services) ---------- */
export const ServiceRow = ({
  index,
  title,
  desc,
  href,
}: {
  index: string;
  title: string;
  desc: string;
  href?: string;
}) => (
  <a
    href={href ?? "#contact"}
    className="group grid grid-cols-1 sm:grid-cols-[60px_1.1fr_1.4fr_56px] gap-4 sm:gap-8 items-start sm:items-center px-2 py-7 sm:py-9 border-b-[1.5px] border-ink transition-colors hover:bg-white bo-focus"
  >
    <div className="font-mono text-[13px] text-n-500 tracking-[0.06em]">
      <span className="text-ambre mr-1.5" aria-hidden="true">
        →
      </span>
      {index}
    </div>
    <h3 className="font-display text-[22px] sm:text-[28px] lg:text-[30px] font-semibold tracking-[-0.02em] leading-[1.1] text-ink">
      {title}
    </h3>
    <p className="text-[15px] text-n-700 leading-[1.55] max-w-[520px]">{desc}</p>
    <div className="sm:justify-self-end">
      <ArrowCircle size={48} variant="hover-fill" />
    </div>
  </a>
);

/* ---------- RealCard (carte réalisation) ---------- */
export const RealCard = ({
  size,
  category,
  client,
  result,
  sketch,
  image,
}: {
  size: "large" | "small";
  category: string;
  client: string;
  result: string;
  sketch: "dashboard" | "form" | "list";
  image?: string;
}) => (
  <article className="flex flex-col gap-4">
    <div
      className={cn(
        "bg-n-200 border-[1.5px] border-ink rounded-xl overflow-hidden relative",
        size === "large" ? "aspect-[16/10]" : "aspect-[4/3]",
      )}
    >
      {image ? (
        <img
          src={image}
          alt={`${client} — capture d'application`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      ) : (
        <Sketch variant={sketch} />
      )}
    </div>
    <div className="flex items-start sm:items-center justify-between gap-4 flex-wrap">
      <div>
        <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-n-500 font-medium mb-1">
          {category}
        </span>
        <span className="font-display text-[18px] font-semibold tracking-[-0.01em] text-ink">
          {client}
        </span>
      </div>
      <Chip>{result}</Chip>
    </div>
  </article>
);

/* ---------- MethodStep (étape papier) ---------- */
export const MethodStep = ({
  n,
  title,
  desc,
  duration,
  deliverable,
  cost,
  isLast,
}: {
  n: string;
  title: string;
  desc: string;
  duration: string;
  deliverable: string;
  cost: string;
  isLast?: boolean;
}) => (
  <div
    className={cn(
      "grid grid-cols-1 lg:grid-cols-[80px_1fr_260px] gap-6 lg:gap-8 py-8",
      !isLast && "border-b-[1.5px] border-ink",
    )}
  >
    <div className="font-mono text-[13px] tracking-[0.06em] text-n-500 pt-1.5">
      {n}
    </div>
    <div>
      <h4 className="font-display text-[22px] sm:text-[24px] font-semibold tracking-[-0.02em] mb-2 text-ink">
        {title}
      </h4>
      <p className="text-[15px] text-n-700 leading-[1.55] max-w-[520px]">
        {desc}
      </p>
    </div>
    <dl className="text-[13px] text-n-700 leading-[1.55] lg:text-right">
      <MetaRow label="Durée" value={duration} />
      <MetaRow label="Livrable" value={deliverable} />
      <MetaRow label="Coût" value={cost} isLast />
    </dl>
  </div>
);

const MetaRow = ({
  label,
  value,
  isLast,
}: {
  label: string;
  value: string;
  isLast?: boolean;
}) => (
  <div
    className={cn(
      "flex justify-between gap-4 py-1.5",
      !isLast && "border-b border-dashed border-n-300",
    )}
  >
    <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-n-500">
      {label}
    </dt>
    <dd className="text-ink font-medium font-display">{value}</dd>
  </div>
);

/* ---------- FaqRow (accordion natif) ---------- */
export const FaqRow = ({
  index,
  question,
  answer,
}: {
  index: string;
  question: string;
  answer: string;
}) => (
  <details className="group border-b-[1.5px] border-ink last:border-b-[1.5px] first:border-t-[1.5px] first:border-ink open:bg-white/40">
    <summary className="grid grid-cols-[48px_1fr_24px] gap-4 items-center px-1 py-6 cursor-pointer list-none hover:bg-white transition-colors bo-focus">
      <span className="font-mono text-[12px] text-n-500 tracking-[0.06em]">
        {index}
      </span>
      <span className="font-display text-[17px] sm:text-[19px] font-medium tracking-[-0.01em] text-ink">
        {question}
      </span>
      <span
        className="text-n-500 text-2xl font-light justify-self-end transition-transform duration-200 group-open:rotate-45"
        aria-hidden="true"
      >
        +
      </span>
    </summary>
    <p className="pl-[64px] pr-10 pb-7 pt-1 text-[15px] text-n-700 leading-[1.6] max-w-[800px]">
      {answer}
    </p>
  </details>
);

/* ---------- MarqueeContinuous (animation CSS infinie) ----------
 * Variante "MODE A". Défile en continu, vitesse constante.
 */
export const MarqueeContinuous = ({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) => {
  const loop = [...items, ...items];
  return (
    <div
      className={cn(
        "relative overflow-hidden bo-mask-fade-x",
        className,
      )}
      aria-hidden="true"
    >
      {/* L'animation est déclarée en CSS pur dans index.css (.bo-marquee-track)
          pour échapper à la purge Tailwind JIT côté Lovable. */}
      <div className="bo-marquee-track flex gap-[72px] w-max will-change-transform">
        {loop.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="font-display text-[22px] sm:text-[26px] lg:text-[30px] font-medium tracking-[-0.02em] text-cream/70 whitespace-nowrap inline-flex items-center gap-[72px]"
          >
            {name}
            <span className="text-ambre text-[30px]" aria-hidden="true">
              ·
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

/* Alias de compat — on garde l'export Marquee historique pointé sur Continuous. */
export const Marquee = MarqueeContinuous;

/* ---------- SituationChip ---------- */
export const SituationChip = ({
  selected,
  onSelect,
  children,
}: {
  selected: boolean;
  onSelect: () => void;
  children: React.ReactNode;
}) => (
  <button
    type="button"
    onClick={onSelect}
    aria-pressed={selected}
    className={cn(
      "px-3.5 py-2.5 rounded-full border-[1.5px] border-ink text-[13px] font-sans transition-colors bo-focus",
      selected ? "bg-ink text-cream" : "bg-transparent text-ink hover:bg-cream",
    )}
  >
    {children}
  </button>
);

/* ---------- SectionHead ---------- */
export const SectionHead = ({
  eyebrow,
  titleBefore,
  titleIta,
  titleAfter,
  rightText,
  rightSlot,
  align = "split",
  className,
}: {
  eyebrow: React.ReactNode;
  titleBefore: string;
  titleIta: string;
  titleAfter: string;
  rightText?: string;
  rightSlot?: React.ReactNode;
  align?: "split" | "center";
  className?: string;
}) => {
  if (align === "center") {
    return (
      <div
        className={cn(
          "flex flex-col items-center text-center gap-4 mb-10 sm:mb-14",
          className,
        )}
      >
        <div>{eyebrow}</div>
        <h2 className="font-display font-bold text-[42px] sm:text-[60px] lg:text-[72px] leading-[0.98] tracking-[-0.03em] max-w-[720px] bo-text-balance text-ink">
          {titleBefore}
          <span className="bo-ital">{titleIta}</span>
          {titleAfter}
        </h2>
      </div>
    );
  }
  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row lg:items-baseline lg:justify-between gap-6 lg:gap-12 mb-10 sm:mb-14",
        className,
      )}
    >
      <div>
        <div className="mb-5">{eyebrow}</div>
        <h2 className="font-display font-bold text-[42px] sm:text-[56px] lg:text-[68px] leading-[0.98] tracking-[-0.03em] max-w-[780px] bo-text-balance text-ink">
          {titleBefore}
          <span className="bo-ital">{titleIta}</span>
          {titleAfter}
        </h2>
      </div>
      <div className="lg:max-w-[300px]">
        {rightSlot ?? (
          <p className="text-[15px] text-n-700 leading-[1.6] bo-text-pretty">
            {rightText}
          </p>
        )}
      </div>
    </div>
  );
};

/* ---------- InfoRow (Contact) ---------- */
export const InfoRow = ({
  label,
  value,
  secondary,
}: {
  label: string;
  value: React.ReactNode;
  secondary?: string;
}) => (
  <div className="grid grid-cols-[110px_1fr] sm:grid-cols-[140px_1fr] gap-6 py-4 sm:py-[18px] border-t border-n-300 items-baseline">
    <dt className="font-mono text-[11px] uppercase tracking-[0.2em] text-n-500">
      {label}
    </dt>
    <dd className="text-[15px] text-ink">
      {value}
      {secondary && (
        <span className="block text-[13px] text-n-500 mt-0.5">{secondary}</span>
      )}
    </dd>
  </div>
);

/* ---------- Hook utilitaire pour gérer le state d'un set unique ---------- */
export function useSingleSelect<T extends string>(initial: T) {
  const [value, setValue] = useState<T>(initial);
  return { value, setValue };
}
