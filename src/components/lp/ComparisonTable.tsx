import { Check, X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const C = { amber: "#C4872C", text: "#1A1A1A", textSec: "#6B7280", success: "#10B981", card: "#FFFFFF" } as const;
const heading = "font-heading font-bold";

const Reveal = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${className}`} style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? "translateY(0)" : "translateY(32px)", transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

interface ComparisonTableProps {
  h2: string;
  subtitle: string;
  headers: [string, string, string];
  rows: Array<[string, string, string]>;
}

const ComparisonTable = ({ h2, subtitle, headers, rows }: ComparisonTableProps) => (
  <section className="px-4 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.card }}>
    <div className="max-w-4xl mx-auto">
      <Reveal><h2 className={`${heading} text-2xl md:text-4xl mb-4 text-center`}>{h2}</h2></Reveal>
      <Reveal delay={100}><p className="text-lg text-center mb-12" style={{ color: C.textSec }}>{subtitle}</p></Reveal>
      <Reveal delay={200}>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className={`${heading} text-sm uppercase tracking-wide py-4 px-4 border-b-2`} style={{ borderColor: "#E5E7EB", color: C.textSec }}>{headers[0]}</th>
                <th className={`${heading} text-sm uppercase tracking-wide py-4 px-4 border-b-2`} style={{ borderColor: "#E5E7EB", color: C.textSec }}>{headers[1]}</th>
                <th className={`${heading} text-sm uppercase tracking-wide py-4 px-4 border-b-2`} style={{ borderColor: C.amber, color: C.amber }}>{headers[2]}</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className="border-b" style={{ borderColor: "#E5E7EB" }}>
                  <td className="py-4 px-4 font-semibold text-sm" style={{ color: C.text }}>{row[0]}</td>
                  <td className="py-4 px-4 text-sm" style={{ color: C.textSec }}>
                    <span className="flex items-start gap-2"><X className="w-4 h-4 mt-0.5 flex-shrink-0 text-red-400" />{row[1]}</span>
                  </td>
                  <td className="py-4 px-4 text-sm font-medium" style={{ color: C.text }}>
                    <span className="flex items-start gap-2"><Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: C.success }} />{row[2]}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </div>
  </section>
);

export default ComparisonTable;
