import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Linkedin, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const situations = [
  "Je paie un SaaS qui ne me convient pas",
  "Mon fichier Excel a atteint ses limites",
  "J'ai un outil interne obsolète",
  "Autre / je ne suis pas sûr",
];

const ContactSection = () => {
  const [form, setForm] = useState({
    prenom: "",
    email: "",
    telephone: "",
    situation: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.prenom || !form.email) {
      toast.error("Veuillez remplir les champs requis.");
      return;
    }

    setLoading(true);

    const leadId = crypto.randomUUID();
    const sourceRoute = window.location.pathname;

    // Save lead to database
    await supabase.from("leads").insert({
      id: leadId,
      first_name: form.prenom,
      email: form.email,
      phone: form.telephone || null,
      message: form.situation ? `[${form.situation}] ${form.message}` : form.message || null,
      source_route: sourceRoute,
    });

    // Send notification emails to both addresses
    const templateData = {
      firstName: form.prenom,
      email: form.email,
      phone: form.telephone || undefined,
      sourceRoute,
    };

    const recipients = ["elias@botami-agency.com", "theo@botami-agency.com"];
    recipients.forEach((recipient) => {
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

  if (submitted) {
    return (
      <section id="contact" className="section-padding">
        <div className="container-narrow">
          <div className="bg-card border rounded-2xl p-12 text-center max-w-lg mx-auto">
            <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-accent" />
            <h3 className="font-heading text-xl font-bold mb-2">Demande envoyée !</h3>
            <p className="text-muted-foreground">Nous reviendrons vers vous sous 24h.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left info */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Parlons de votre projet</h2>
            <p className="text-lg text-muted-foreground mb-10">
              Diagnostic gratuit, sans engagement. On vous dit si le sur-mesure est la bonne réponse pour vous.
            </p>
            <div className="flex flex-col gap-5">
              <a href="mailto:contact@botami-agency.com" className="flex items-center gap-3 text-foreground hover:text-accent transition-colors">
                <Mail className="w-5 h-5 text-accent" />
                contact@botami-agency.com
              </a>
              <div className="flex items-center gap-3 text-foreground">
                <MapPin className="w-5 h-5 text-accent" />
                Nîmes, France
              </div>
              <a
                href="https://linkedin.com/company/botami"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-accent transition-colors"
              >
                <Linkedin className="w-5 h-5 text-accent" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card border rounded-2xl p-8 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="prenom">Prénom *</Label>
                <Input
                  id="prenom"
                  required
                  value={form.prenom}
                  onChange={(e) => setForm({ ...form, prenom: e.target.value })}
                  className="mt-1.5"
                />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1.5"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="telephone">Téléphone</Label>
              <Input
                id="telephone"
                type="tel"
                value={form.telephone}
                onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                className="mt-1.5"
              />
            </div>

            <fieldset>
              <legend className="text-sm font-medium mb-3">Votre situation actuelle</legend>
              <div className="grid sm:grid-cols-2 gap-2">
                {situations.map((s) => (
                  <label
                    key={s}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border cursor-pointer transition-colors text-sm ${
                      form.situation === s
                        ? "border-accent bg-accent/10 text-foreground"
                        : "border-border bg-background text-muted-foreground hover:border-accent/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="situation"
                      value={s}
                      checked={form.situation === s}
                      onChange={(e) => setForm({ ...form, situation: e.target.value })}
                      className="accent-accent"
                    />
                    {s}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <Label htmlFor="message">Décrivez brièvement votre besoin</Label>
              <Textarea
                id="message"
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1.5"
              />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full text-base" disabled={loading}>
              {loading ? "Envoi en cours…" : "Demander un diagnostic gratuit"}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Pas de newsletter, pas de relance commerciale. Juste une réponse à votre besoin.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
