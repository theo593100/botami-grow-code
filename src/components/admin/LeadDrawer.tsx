import { useState } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
} from "@/components/ui/sheet";
import type { Lead } from "@/pages/admin/LeadsPage";

const STATUT_OPTIONS = [
  { value: "nouveau", label: "Nouveau" },
  { value: "contacte", label: "Contacté" },
  { value: "qualifie", label: "Qualifié" },
  { value: "proposition_envoyee", label: "Proposition envoyée" },
  { value: "signe", label: "Signé" },
  { value: "perdu", label: "Perdu" },
];

interface Props {
  lead: Lead | null;
  open: boolean;
  onClose: () => void;
  onSave: (id: string, data: { statut: string; prochaine_action: string | null; notes: string | null }) => Promise<void>;
}

export function LeadDrawer({ lead, open, onClose, onSave }: Props) {
  const [statut, setStatut] = useState(lead?.statut ?? "nouveau");
  const [prochaineAction, setProchaineAction] = useState<Date | undefined>(
    lead?.prochaine_action ? new Date(lead.prochaine_action) : undefined
  );
  const [notes, setNotes] = useState(lead?.notes ?? "");
  const [saving, setSaving] = useState(false);

  // Reset form when lead changes
  const resetForm = () => {
    setStatut(lead?.statut ?? "nouveau");
    setProchaineAction(
      lead?.prochaine_action ? new Date(lead.prochaine_action) : undefined
    );
    setNotes(lead?.notes ?? "");
  };

  const handleSave = async () => {
    if (!lead) return;
    setSaving(true);
    await onSave(lead.id, {
      statut,
      prochaine_action: prochaineAction
        ? format(prochaineAction, "yyyy-MM-dd")
        : null,
      notes: notes || null,
    });
    setSaving(false);
    onClose();
  };

  return (
    <Sheet
      open={open}
      onOpenChange={(o) => {
        if (!o) onClose();
        else resetForm();
      }}
    >
      <SheetContent className="w-full sm:w-[40vw] sm:max-w-[600px] overflow-y-auto">
        {lead && (
          <>
            <SheetHeader>
              <SheetTitle className="text-left">
                {lead.first_name}
                {lead.company && (
                  <span className="block text-sm font-normal text-muted-foreground">
                    {lead.company}
                  </span>
                )}
              </SheetTitle>
            </SheetHeader>

            {/* Read-only info */}
            <div className="mt-6 space-y-3 text-sm">
              <Info label="Email" value={lead.email} />
              <Info label="Téléphone" value={lead.phone} />
              <Info label="Entreprise" value={lead.company} />
              <Info label="Budget" value={lead.budget} />
              <Info label="Taille" value={lead.company_size} />
              <Info label="Source" value={lead.source_route} />
              <Info label="Message" value={lead.message} />
              <Info
                label="Arrivé le"
                value={format(new Date(lead.created_at), "dd MMM yyyy à HH:mm", { locale: fr })}
              />
            </div>

            <hr className="my-6" />

            {/* Editable fields */}
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Statut</Label>
                <Select value={statut} onValueChange={setStatut}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {STATUT_OPTIONS.map((o) => (
                      <SelectItem key={o.value} value={o.value}>
                        {o.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Prochaine action</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !prochaineAction && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {prochaineAction
                        ? format(prochaineAction, "dd MMM yyyy", { locale: fr })
                        : "Sélectionner une date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={prochaineAction}
                      onSelect={setProchaineAction}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
                {prochaineAction && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-xs text-muted-foreground"
                    onClick={() => setProchaineAction(undefined)}
                  >
                    Effacer la date
                  </Button>
                )}
              </div>

              <div className="space-y-2">
                <Label>Notes</Label>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={6}
                  placeholder="Notes libres…"
                />
              </div>
            </div>

            <SheetFooter className="mt-6 flex gap-2">
              <Button variant="outline" onClick={onClose} disabled={saving}>
                Annuler
              </Button>
              <Button onClick={handleSave} disabled={saving}>
                {saving ? "Enregistrement…" : "Enregistrer"}
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

function Info({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null;
  return (
    <div>
      <span className="text-muted-foreground">{label} :</span>{" "}
      <span className="font-medium">{value}</span>
    </div>
  );
}
