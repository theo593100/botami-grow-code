import { useState, useEffect } from "react";
import { CheckCircle2 } from "lucide-react";

const C = {
  bg: "#FAF7F2",
  card: "#FFFFFF",
  amber: "#C4872C",
  amberHover: "#D4A04A",
  success: "#10B981",
  textSec: "#6B7280",
} as const;

const heading = "font-heading font-bold";
const ctaBtn =
  "inline-block font-body font-semibold text-white rounded-lg px-8 py-4 text-base md:text-lg transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:-translate-y-0.5";

const inputClass =
  "w-full rounded-lg border px-4 py-3 text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:border-transparent";
const inputStyle = { borderColor: "#D1D5DB", "--tw-ring-color": C.amber } as React.CSSProperties;

const spendRanges = [
  "Moins de 100€/mois",
  "100€ – 300€/mois",
  "300€ – 500€/mois",
  "Plus de 500€/mois",
  "Je ne sais pas",
];

const companySizes = [
  "1 personne",
  "2 – 10",
  "11 – 50",
  "51 – 200",
  "200+",
];

interface Props {
  title: string;
  subtitle: string;
  buttonLabel?: string;
}

const LPFormCalendly = ({
  title,
  subtitle,
  buttonLabel = "Je réserve mon appel découverte gratuit",
}: Props) => {
  const [form, setForm] = useState({
    prenom: "",
    email: "",
    tel: "",
    entreprise: "",
    depense: "",
    taille: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Load Calendly widget script
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);
    }

    // Listen for Calendly scheduled event → conversion
    const handleCalendlyMessage = (e: MessageEvent) => {
      if (e.origin === "https://calendly.com" && e.data?.event === "calendly.event_scheduled") {
        (window as any).gtag_report_rdv?.();
      }
    };
    window.addEventListener("message", handleCalendlyMessage);
    return () => window.removeEventListener("message", handleCalendlyMessage);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    (window as any).gtag_report_lead_form?.();
  };

  return (
    <section id="formulaire" className="px-4 md:px-8 py-16 md:py-24" style={{ backgroundColor: C.card }}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`${heading} text-2xl md:text-3xl mb-3 text-center`}>{title}</h2>
        <p className="text-center mb-10" style={{ color: C.textSec }}>{subtitle}</p>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="rounded-2xl p-8 text-center border" style={{ backgroundColor: C.bg, borderColor: "#E5E7EB" }}>
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4" style={{ color: C.success }} />
                <h3 className={`${heading} text-xl mb-2`}>Demande envoyée !</h3>
                <p style={{ color: C.textSec }}>On vous recontacte sous 24h.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-6 md:p-8 border space-y-4"
                style={{ backgroundColor: C.bg, borderColor: "#E5E7EB" }}
              >
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">
                      Prénom <span style={{ color: C.amber }}>*</span>
                    </label>
                    <input
                      required
                      type="text"
                      value={form.prenom}
                      onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">
                      Nom de l'entreprise
                    </label>
                    <input
                      type="text"
                      value={form.entreprise}
                      onChange={(e) => setForm({ ...form, entreprise: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="Votre entreprise"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1.5">
                      Email <span style={{ color: C.amber }}>*</span>
                    </label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1.5">Téléphone</label>
                    <input
                      type="tel"
                      value={form.tel}
                      onChange={(e) => setForm({ ...form, tel: e.target.value })}
                      className={inputClass}
                      style={inputStyle}
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Dépense en abonnements logiciels / mois
                  </label>
                  <select
                    value={form.depense}
                    onChange={(e) => setForm({ ...form, depense: e.target.value })}
                    className={inputClass}
                    style={inputStyle}
                  >
                    <option value="">Sélectionner</option>
                    {spendRanges.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1.5">
                    Taille de l'entreprise
                  </label>
                  <select
                    value={form.taille}
                    onChange={(e) => setForm({ ...form, taille: e.target.value })}
                    className={inputClass}
                    style={inputStyle}
                  >
                    <option value="">Sélectionner</option>
                    {companySizes.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className={`${ctaBtn} w-full text-center`}
                  style={{ backgroundColor: C.amber }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = C.amberHover)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = C.amber)}
                >
                  {buttonLabel}
                </button>
                <p className="text-center text-sm" style={{ color: C.textSec }}>
                  Réponse sous 24h.
                </p>
              </form>
            )}
          </div>

          {/* Calendly widget */}
          <div className="w-full">
            <div
              className="calendly-inline-widget rounded-2xl overflow-hidden border"
              data-url="https://calendly.com/elias-botami-agency/30min?hide_event_type_details=1&hide_gdpr_banner=1"
              style={{ minWidth: "280px", height: "700px", borderColor: "#E5E7EB" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LPFormCalendly;
