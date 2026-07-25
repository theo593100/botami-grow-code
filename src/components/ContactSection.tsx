import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { home, type SituationKey } from "@/content/home";
import { BtnSubmit, SecNum } from "@/components/home/atoms";
import { InfoRow, SituationChip } from "@/components/home/compounds";

const ContactSection = () => {
  const c = home.contact;
  const [form, setForm] = useState({
    prenom: "",
    email: "",
    entreprise: "",
    situation: "projet" as SituationKey,
    message: "",
    honeypot: "", // anti-bot
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (form.honeypot) return; // bot
    if (!form.prenom || !form.email || !form.entreprise || !form.message) {
      toast.error("Merci de renseigner tous les champs obligatoires.");
      return;
    }

    setLoading(true);

    const leadId = crypto.randomUUID();
    const sourceRoute = window.location.pathname;
    const situationLabel =
      c.form.situations.find((s) => s.key === form.situation)?.label ?? "";

    // Persistance Supabase
    const { error: dbError } = await supabase.from("leads").insert({
      id: leadId,
      first_name: form.prenom,
      email: form.email,
      phone: null,
      message: `[${situationLabel}]${form.entreprise ? ` (${form.entreprise})` : ""}${
        form.message ? ` — ${form.message}` : ""
      }`,
      source_route: sourceRoute,
    });

    if (dbError) {
      setLoading(false);
      toast.error(
        "Un problème est survenu. Vous pouvez nous écrire à contact@botami-agency.com.",
      );
      return;
    }

    // Notifs internes (best-effort, n'empêche pas le succès)
    const templateData = {
      firstName: form.prenom,
      email: form.email,
      sourceRoute,
    };
    ["elias@botami-agency.com", "theo@botami-agency.com"].forEach((recipient) => {
      supabase.functions.invoke("send-transactional-email", {
        body: {
          templateName: "new-lead-notification",
          recipientEmail: recipient,
          idempotencyKey: `lead-notif-${leadId}-${recipient}`,
          templateData,
        },
      });
    });

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      data-screen-label="08 Contact"
      className="py-20 sm:py-24 lg:py-28"
    >
      <div className="bo-wrap">
        <SecNum className="mb-10 sm:mb-12">{c.secNum}</SecNum>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-24">
          {/* Colonne gauche : H2 + lead + InfoRows */}
          <div>
            <h2 className="font-display font-bold leading-[0.98] tracking-[-0.03em] text-ink text-[clamp(36px,6vw,60px)] bo-text-balance mb-5">
              {c.title.before}
              <span className="bo-ital">{c.title.ital}</span>
              {c.title.after}
            </h2>
            <p className="text-[17px] text-n-700 leading-[1.6] max-w-[420px] mb-10 lg:mb-12 bo-text-pretty">
              {c.lead}
            </p>
            <dl className="border-b border-n-300">
              {c.info.map((item) => (
                <InfoRow
                  key={item.label}
                  label={item.label}
                  value={
                    "href" in item && item.href ? (
                      <a
                        href={item.href}
                        className="hover:text-ambre-dark transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )
                  }
                  secondary={"secondary" in item ? item.secondary : undefined}
                />
              ))}
            </dl>
          </div>

          {/* Colonne droite : formulaire */}
          {submitted ? (
            <div className="bg-white border-[1.5px] border-ink rounded-card p-10 sm:p-12 text-center">
              <CheckCircle2
                className="w-12 h-12 mx-auto mb-4 text-ambre-dark"
                aria-hidden="true"
              />
              <h3 className="font-display text-[24px] font-semibold tracking-[-0.02em] mb-2 text-ink">
                {c.form.successTitle}
              </h3>
              <p className="text-[15px] text-n-700 leading-[1.6]">
                {c.form.successBody}
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white border-[1.5px] border-ink rounded-card p-6 sm:p-8"
              noValidate
            >
              {/* Honeypot anti-bot, masqué */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.honeypot}
                onChange={(e) =>
                  setForm((f) => ({ ...f, honeypot: e.target.value }))
                }
                aria-hidden="true"
                className="hidden"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="prenom"
                    className="font-mono text-[11px] uppercase tracking-[0.18em] text-n-500"
                  >
                    {c.form.labels.prenom}
                  </label>
                  <input
                    id="prenom"
                    name="prenom"
                    type="text"
                    required
                    autoComplete="given-name"
                    placeholder={c.form.placeholders.prenom}
                    value={form.prenom}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, prenom: e.target.value }))
                    }
                    className="h-11 px-3.5 border-[1.5px] border-ink rounded-[10px] bg-cream text-[15px] text-ink placeholder:text-n-500 focus:border-ambre focus:outline-none transition-colors font-sans"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-mono text-[11px] uppercase tracking-[0.18em] text-n-500"
                  >
                    {c.form.labels.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={c.form.placeholders.email}
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className="h-11 px-3.5 border-[1.5px] border-ink rounded-[10px] bg-cream text-[15px] text-ink placeholder:text-n-500 focus:border-ambre focus:outline-none transition-colors font-sans"
                  />
                </div>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label
                    htmlFor="entreprise"
                    className="font-mono text-[11px] uppercase tracking-[0.18em] text-n-500"
                  >
                    {c.form.labels.entreprise}
                  </label>
                  <input
                    id="entreprise"
                    name="entreprise"
                    type="text"
                    required
                    autoComplete="organization"
                    placeholder={c.form.placeholders.entreprise}
                    value={form.entreprise}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, entreprise: e.target.value }))
                    }
                    className="h-11 px-3.5 border-[1.5px] border-ink rounded-[10px] bg-cream text-[15px] text-ink placeholder:text-n-500 focus:border-ambre focus:outline-none transition-colors font-sans"
                  />
                </div>

                <fieldset className="flex flex-col gap-3 sm:col-span-2">
                  <legend className="font-mono text-[11px] uppercase tracking-[0.18em] text-n-500 mb-1">
                    {c.form.legendSituation}
                  </legend>
                  <div className="flex flex-wrap gap-2">
                    {c.form.situations.map((s) => (
                      <SituationChip
                        key={s.key}
                        selected={form.situation === s.key}
                        onSelect={() =>
                          setForm((f) => ({ ...f, situation: s.key }))
                        }
                      >
                        {s.label}
                      </SituationChip>
                    ))}
                  </div>
                </fieldset>

                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="font-mono text-[11px] uppercase tracking-[0.18em] text-n-500"
                  >
                    {c.form.labels.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={c.form.placeholders.message}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className="min-h-[120px] px-3.5 py-3 border-[1.5px] border-ink rounded-[10px] bg-cream text-[15px] text-ink placeholder:text-n-500 focus:border-ambre focus:outline-none transition-colors font-sans resize-y leading-[1.5]"
                  />
                </div>

                <div className="sm:col-span-2 mt-2">
                  <BtnSubmit fullWidth disabled={loading}>
                    {loading ? "Envoi en cours…" : c.form.submitLabel}
                  </BtnSubmit>
                  <p className="text-[12px] text-n-500 text-center mt-3 leading-[1.5]">
                    {c.form.fineprint}
                  </p>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
