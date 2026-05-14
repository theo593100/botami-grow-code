/**
 * Esquisses HTML/CSS pour les RealCards (Réalisations).
 * Reprend les primitives `.sk-*` du hi-fi. Architecturé pour pouvoir
 * remplacer une esquisse par une vraie capture d'app via la prop `image`
 * sans refactor.
 */
import { cn } from "@/lib/utils";

const SkBar = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2.5 h-[22px]">{children}</div>
);

const SkDot = () => (
  <span className="w-[9px] h-[9px] rounded-full bg-ink opacity-[0.18]" />
);

const SkPill = ({
  width,
  className,
  orange,
}: {
  width: number;
  className?: string;
  orange?: boolean;
}) => (
  <span
    className={cn(
      "h-[9px] rounded-md",
      orange ? "bg-ambre opacity-100" : "bg-ink opacity-[0.16]",
      className,
    )}
    style={{ width }}
  />
);

const SkBlock = ({
  children,
  className,
  style,
}: {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => (
  <div
    className={cn(
      "flex-1 border-[1.5px] border-ink rounded-lg bg-white/55 p-4 grid gap-2.5",
      className,
    )}
    style={style}
  >
    {children}
  </div>
);

const SkRow = ({
  variant = "full",
  className,
  style,
}: {
  variant?: "full" | "mid" | "short" | "acc";
  className?: string;
  style?: React.CSSProperties;
}) => {
  const variantClass = {
    full: "w-full h-2 opacity-[0.12] bg-ink",
    mid: "w-[68%] h-2 opacity-[0.12] bg-ink",
    short: "w-[46%] h-2 opacity-[0.12] bg-ink",
    acc: "w-[30%] h-2.5 bg-ambre opacity-100",
  };
  return (
    <span
      className={cn("rounded", variantClass[variant], className)}
      style={style}
    />
  );
};

const SkGrid = ({
  cols = 3,
  cells,
}: {
  cols?: 3 | 4;
  cells: ("base" | "warm" | "dark")[];
}) => (
  <div
    className="grid gap-2.5"
    style={{ gridTemplateColumns: `repeat(${cols},1fr)` }}
  >
    {cells.map((c, i) => (
      <span
        key={i}
        className={cn(
          "h-[42px] rounded-md",
          c === "warm" && "bg-ambre opacity-[0.18]",
          c === "dark" && "bg-ink opacity-[0.18]",
          c === "base" && "bg-ink opacity-[0.08]",
        )}
      />
    ))}
  </div>
);

const SkFigure = () => (
  <div
    className="h-16 rounded-lg border-[1.5px] border-ink relative overflow-hidden"
    style={{
      backgroundImage:
        "repeating-linear-gradient(180deg, transparent 0 10px, rgba(26,26,26,0.06) 10px 11px)",
    }}
  >
    <span
      className="absolute h-0.5 bg-ink opacity-50"
      style={{ left: "8%", right: "36%", bottom: "32px" }}
    />
    <span
      className="absolute h-0.5 bg-ambre"
      style={{ left: "8%", right: "12%", bottom: "14px" }}
    />
  </div>
);

const SkInput = ({ full }: { full?: boolean }) => (
  <span
    className={cn(
      "h-6 rounded-md border border-ink/90 bg-white/70",
      full && "col-span-2",
    )}
  />
);

const SkCta = () => (
  <span className="h-[26px] rounded-md bg-ambre w-[120px] mt-0.5" />
);

const SketchWrap = ({ children }: { children: React.ReactNode }) => (
  <div
    className="absolute inset-0 p-7 flex flex-col gap-3.5"
    style={{
      background: "linear-gradient(160deg, #F5EFE3 0%, #EFE7D6 100%)",
    }}
    aria-hidden="true"
  >
    {children}
  </div>
);

/* ---------- Variantes ---------- */

export const SketchDashboard = () => (
  <SketchWrap>
    <SkBar>
      <SkDot />
      <SkDot />
      <SkDot />
      <SkPill width={140} />
      <span className="flex-1" />
      <SkPill width={60} orange />
    </SkBar>
    <div
      className="grid gap-3.5 flex-1"
      style={{ gridTemplateColumns: "160px 1fr" }}
    >
      <SkBlock className="p-3.5">
        <SkRow variant="full" />
        <SkRow variant="mid" />
        <SkRow variant="full" />
        <SkRow variant="short" />
        <SkRow variant="mid" />
        <SkRow variant="acc" />
      </SkBlock>
      <SkBlock>
        <div className="flex justify-between items-center">
          <SkRow variant="full" className="w-[42%] h-3.5" />
          <SkPill width={60} />
        </div>
        <SkFigure />
        <SkGrid
          cols={3}
          cells={["base", "warm", "base", "base", "base", "warm"]}
        />
      </SkBlock>
    </div>
  </SketchWrap>
);

export const SketchForm = () => (
  <SketchWrap>
    <SkBar>
      <SkDot />
      <SkDot />
      <SkPill width={90} />
      <span className="flex-1" />
      <SkPill width={40} orange />
    </SkBar>
    <SkBlock>
      <SkRow variant="mid" />
      <div className="grid gap-2" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <SkInput />
        <SkInput />
        <SkInput full />
        <SkInput full />
      </div>
      <SkCta />
    </SkBlock>
  </SketchWrap>
);

export const SketchList = () => (
  <SketchWrap>
    <SkBar>
      <SkDot />
      <SkPill width={70} />
      <span className="flex-1" />
      <SkPill width={30} />
      <SkPill width={30} orange />
    </SkBar>
    <SkBlock>
      <div className="flex justify-between items-center">
        <SkRow variant="full" className="w-[38%] h-3" />
        <SkRow variant="full" className="w-[24%] h-3" />
      </div>
      <SkGrid
        cols={4}
        cells={[
          "dark",
          "base",
          "warm",
          "base",
          "base",
          "dark",
          "base",
          "base",
        ]}
      />
      <SkRow variant="full" />
      <SkRow variant="mid" />
    </SkBlock>
  </SketchWrap>
);

export const Sketch = ({ variant }: { variant: "dashboard" | "form" | "list" }) => {
  if (variant === "dashboard") return <SketchDashboard />;
  if (variant === "form") return <SketchForm />;
  return <SketchList />;
};
