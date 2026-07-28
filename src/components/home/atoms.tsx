/**
 * Atomes UI Botami (hi-fi). Réutilisés par les sections de la home.
 * Conformes au fichier COMPONENTS.md de la spec.
 */
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

/* ---------- Eyebrow ---------- */
export const Eyebrow = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={cn(
      "font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-n-500",
      className,
    )}
  >
    {children}
  </span>
);

/* ---------- SecNum ---------- */
export const SecNum = ({
  children,
  variant = "cream",
  className,
}: {
  children: React.ReactNode;
  variant?: "cream" | "dark";
  className?: string;
}) => (
  <div
    className={cn(
      "font-mono text-[11px] uppercase tracking-[0.18em]",
      variant === "cream" ? "text-n-500" : "text-cream/50",
      className,
    )}
  >
    {children}
  </div>
);

/* ---------- Btn (Button hi-fi) ----------
 * Note : on ne réutilise pas le `<Button>` shadcn ici car il est lié au système
 * primary/secondary shadcn (charbon par défaut). On crée un atome séparé pour
 * coller pixel-perfect au hi-fi sans casser le reste du site.
 */
export const Btn = forwardRef<
  HTMLAnchorElement,
  {
    variant?: "primary" | "ghost";
    href?: string;
    children: React.ReactNode;
    iconRight?: boolean;
    className?: string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
    fullWidth?: boolean;
    "aria-label"?: string;
  }
>(function Btn(
  {
    variant = "primary",
    href,
    children,
    iconRight = true,
    className,
    onClick,
    fullWidth,
    "aria-label": ariaLabel,
  },
  ref,
) {
  const base =
    "inline-flex items-center gap-2 px-[18px] py-3 rounded-[10px] text-sm font-medium font-sans transition-colors bo-focus";
  const styles =
    variant === "primary"
      ? "bg-ambre text-white hover:bg-ambre-dark"
      : "border-[1.5px] border-ink text-ink hover:bg-ink hover:text-cream";
  return (
    <a
      ref={ref}
      href={href}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cn(base, styles, fullWidth && "w-full justify-center", className)}
    >
      <span>{children}</span>
      {iconRight && <ArrowRightIcon className="w-[14px] h-[14px]" />}
    </a>
  );
});

/* ---------- Btn (button HTML, pour submit form) ---------- */
export const BtnSubmit = ({
  children,
  variant = "primary",
  className,
  disabled,
  fullWidth,
  iconRight = true,
}: {
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  iconRight?: boolean;
}) => {
  const base =
    "inline-flex items-center gap-2 px-[18px] py-3 rounded-[10px] text-sm font-medium font-sans transition-colors bo-focus disabled:opacity-60 disabled:cursor-not-allowed";
  const styles =
    variant === "primary"
      ? "bg-ambre text-white hover:bg-ambre-dark"
      : "border-[1.5px] border-ink text-ink hover:bg-ink hover:text-cream";
  return (
    <button
      type="submit"
      disabled={disabled}
      className={cn(base, styles, fullWidth && "w-full justify-center", className)}
    >
      <span>{children}</span>
      {iconRight && !disabled && <ArrowRightIcon className="w-[14px] h-[14px]" />}
    </button>
  );
};

/* ---------- ArrowRightIcon ---------- */
export const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    aria-hidden="true"
  >
    <path d="M5 12h14M13 5l7 7-7 7" />
  </svg>
);

/* ---------- ArrowCircle (cercle bordé avec flèche) ---------- */
export const ArrowCircle = ({
  size = 48,
  variant = "static",
  className,
}: {
  size?: number;
  variant?: "static" | "hover-fill";
  className?: string;
}) => (
  <span
    className={cn(
      "inline-grid place-items-center rounded-full border-[1.5px] transition-colors duration-200",
      variant === "hover-fill"
        ? "border-ink group-hover:bg-ambre group-hover:border-ambre"
        : "border-ink",
      className,
    )}
    style={{ width: size, height: size }}
    aria-hidden="true"
  >
    <svg
      width={Math.round(size * 0.375)}
      height={Math.round(size * 0.375)}
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.8"
      className={cn(
        "transition-colors duration-200",
        variant === "hover-fill"
          ? "stroke-ink group-hover:stroke-white"
          : "stroke-ink",
      )}
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  </span>
);

/* ---------- PricingPill ---------- */
export const PricingPill = ({
  before,
  strong1,
  mid,
  strong2,
  caption,
  className,
}: {
  before: string;
  strong1: string;
  mid: string;
  strong2: string;
  caption: string;
  className?: string;
}) => (
  <div
    className={cn(
      "inline-flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-[14px] bg-white border-[1.5px] border-ink rounded-[20px] sm:rounded-full pl-4 pr-4 py-3 sm:pl-[14px] sm:pr-[18px] sm:py-[11px] max-w-full",
      className,
    )}
  >
    <div className="flex items-center gap-3 sm:gap-[14px]">
      <span className="w-2 h-2 rounded-full bg-ambre flex-none" aria-hidden="true" />
      <span className="text-[13px] sm:text-sm text-ink">
        {before}
        <b className="font-semibold">{strong1}</b>
        {mid}
        <b className="font-semibold">{strong2}</b>
      </span>
    </div>
    <span className="hidden sm:block w-px h-[14px] bg-n-300" aria-hidden="true" />
    <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-n-500 pl-5 sm:pl-0">
      {caption}
    </span>
  </div>
);

/* ---------- Chip (résultat ambre) ---------- */
export const Chip = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={cn(
      "inline-flex items-center gap-2 bg-ambre-bg text-ambre-dark border border-ambre rounded-full px-3 py-[7px] font-display text-[13px] font-medium",
      className,
    )}
  >
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="2"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path d="M3 12h12M11 6l6 6-6 6" />
    </svg>
    {children}
  </span>
);

/* ---------- StatItem (hero stats / bandeau stats) ---------- */
export const StatItem = ({
  num,
  unit,
  lbl,
  src,
  theme = "cream",
}: {
  num: string;
  unit?: string;
  lbl: string;
  src?: string;
  theme?: "cream" | "dark";
}) => {
  if (theme === "dark") {
    return (
      <div>
        <div className="font-display text-[44px] sm:text-[56px] lg:text-[64px] font-semibold leading-none tracking-[-0.03em] text-ambre">
          {num}
          {unit && <span className="text-[0.6em] font-medium ml-1">{unit}</span>}
        </div>
        <div className="mt-3 sm:mt-4 font-display text-[15px] sm:text-[18px] font-medium text-cream leading-snug max-w-[240px]">
          {lbl}
        </div>
        {src && (
          <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-cream/45">
            {src}
          </div>
        )}
      </div>
    );
  }
  return (
    <div>
      <div className="font-display text-[32px] sm:text-[38px] font-semibold leading-none tracking-[-0.03em] text-ink">
        {num}
        {unit && (
          <span className="text-[0.55em] font-medium text-n-500 ml-0.5">{unit}</span>
        )}
      </div>
      <div className="mt-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-n-500">
        {lbl}
      </div>
    </div>
  );
};

/* ---------- Glyph (logo officiel ambre, SVG vectoriel) ---------- */
import iconeBotami from "@/assets/icone-botami.svg";

export const Glyph = ({ size = 36 }: { size?: number }) => (
  <img
    src={iconeBotami}
    alt=""
    aria-hidden="true"
    width={size}
    height={size}
    className="block"
    style={{ width: size, height: size }}
  />
);

/* ---------- Brand (logo + texte) ----------
 * Conforme charte : "Botami" en Space Grotesk 700 (Bold) charbon,
 * "Software" en Space Grotesk 400 (Regular) ardoise n-500.
 */
export const Brand = ({
  brandName,
  brandSuffix,
  className,
  size = 36,
}: {
  brandName: string;
  brandSuffix: string;
  className?: string;
  size?: number;
}) => (
  <span className={cn("inline-flex items-center gap-2.5", className)}>
    <Glyph size={size} />
    <span className="font-display tracking-[-0.01em] text-[17px] leading-none whitespace-nowrap">
      <span className="font-bold text-ink">{brandName}</span>{" "}
      <span className="font-normal text-n-500">{brandSuffix}</span>
    </span>
  </span>
);
