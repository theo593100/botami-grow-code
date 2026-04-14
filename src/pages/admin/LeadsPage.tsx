import { useEffect, useState, useMemo, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { formatDistanceToNow, isToday, isPast, parseISO } from "date-fns";
import { fr } from "date-fns/locale";
import { RefreshCw, Search, X, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LeadDrawer } from "@/components/admin/LeadDrawer";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export interface Lead {
  id: string;
  first_name: string;
  email: string;
  phone: string | null;
  company: string | null;
  budget: string | null;
  company_size: string | null;
  source_route: string | null;
  message: string | null;
  created_at: string;
  statut: string;
  prochaine_action: string | null;
  notes: string | null;
  updated_at: string | null;
  updated_by: string | null;
}

const STATUT_OPTIONS = [
  { value: "nouveau", label: "Nouveau" },
  { value: "contacte", label: "Contacté" },
  { value: "qualifie", label: "Qualifié" },
  { value: "proposition_envoyee", label: "Proposition envoyée" },
  { value: "signe", label: "Signé" },
  { value: "perdu", label: "Perdu" },
];

const STATUT_COLORS: Record<string, string> = {
  nouveau: "bg-blue-100 text-blue-800",
  contacte: "bg-amber-100 text-amber-800",
  qualifie: "bg-purple-100 text-purple-800",
  proposition_envoyee: "bg-indigo-100 text-indigo-800",
  signe: "bg-green-100 text-green-800",
  perdu: "bg-gray-100 text-gray-500",
};

type SortKey = "prochaine_action" | "created_at" | "statut";
type SortDir = "asc" | "desc";

const PAGE_SIZE = 20;

const LeadsPage = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedStatuts, setSelectedStatuts] = useState<string[]>([]);
  const [sortKey, setSortKey] = useState<SortKey>("prochaine_action");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [page, setPage] = useState(0);
  const [drawerLead, setDrawerLead] = useState<Lead | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [filterUrgent, setFilterUrgent] = useState(false);
  const { toast } = useToast();

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
    }
    setLeads((data as Lead[]) || []);
    setLoading(false);
  }, [toast]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  // Urgent count
  const urgentCount = useMemo(() => {
    const today = new Date();
    today.setHours(23, 59, 59, 999);
    return leads.filter((l) => {
      if (l.statut === "signe" || l.statut === "perdu") return false;
      if (!l.prochaine_action) return false;
      return parseISO(l.prochaine_action) <= today;
    }).length;
  }, [leads]);

  // Filter
  const filtered = useMemo(() => {
    let result = leads;

    if (filterUrgent) {
      const today = new Date();
      today.setHours(23, 59, 59, 999);
      result = result.filter((l) => {
        if (l.statut === "signe" || l.statut === "perdu") return false;
        if (!l.prochaine_action) return false;
        return parseISO(l.prochaine_action) <= today;
      });
    }

    if (selectedStatuts.length > 0) {
      result = result.filter((l) => selectedStatuts.includes(l.statut));
    }

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (l) =>
          l.first_name?.toLowerCase().includes(q) ||
          l.email?.toLowerCase().includes(q) ||
          l.company?.toLowerCase().includes(q)
      );
    }

    return result;
  }, [leads, selectedStatuts, search, filterUrgent]);

  // Sort
  const sorted = useMemo(() => {
    const arr = [...filtered];
    arr.sort((a, b) => {
      if (sortKey === "prochaine_action") {
        const aVal = a.prochaine_action ?? "";
        const bVal = b.prochaine_action ?? "";
        // Nulls last for ascending
        if (!aVal && !bVal) return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        if (!aVal) return 1;
        if (!bVal) return -1;
        const cmp = aVal.localeCompare(bVal);
        return sortDir === "asc" ? cmp : -cmp;
      }
      if (sortKey === "created_at") {
        const cmp = new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        return sortDir === "asc" ? cmp : -cmp;
      }
      if (sortKey === "statut") {
        const cmp = (a.statut ?? "").localeCompare(b.statut ?? "");
        return sortDir === "asc" ? cmp : -cmp;
      }
      return 0;
    });
    return arr;
  }, [filtered, sortKey, sortDir]);

  // Paginate
  const totalPages = Math.ceil(sorted.length / PAGE_SIZE);
  const paginated = sorted.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  const toggleStatut = (val: string) => {
    setSelectedStatuts((prev) =>
      prev.includes(val) ? prev.filter((s) => s !== val) : [...prev, val]
    );
    setPage(0);
  };

  const resetFilters = () => {
    setSearch("");
    setSelectedStatuts([]);
    setFilterUrgent(false);
    setPage(0);
  };

  const openDrawer = (lead: Lead) => {
    setDrawerLead(lead);
    setDrawerOpen(true);
  };

  const handleSave = async (
    id: string,
    data: { statut: string; prochaine_action: string | null; notes: string | null }
  ) => {
    const { error } = await supabase
      .from("leads")
      .update(data as any)
      .eq("id", id);
    if (error) {
      toast({ title: "Erreur", description: error.message, variant: "destructive" });
      return;
    }
    toast({ title: "Lead mis à jour" });
    await fetchLeads();
  };

  const isUrgent = (lead: Lead) => {
    if (lead.statut === "signe" || lead.statut === "perdu") return false;
    if (!lead.prochaine_action) return false;
    const d = parseISO(lead.prochaine_action);
    return isPast(d) || isToday(d);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-heading font-bold">Leads</h1>
          {urgentCount > 0 && (
            <button
              onClick={() => {
                setFilterUrgent(!filterUrgent);
                setPage(0);
              }}
              className={cn(
                "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold transition-colors cursor-pointer",
                filterUrgent
                  ? "bg-destructive text-destructive-foreground"
                  : "bg-destructive/10 text-destructive hover:bg-destructive/20"
              )}
            >
              <Bell className="h-3 w-3" />
              {urgentCount} à rappeler aujourd'hui
            </button>
          )}
        </div>
        <Button variant="outline" size="sm" onClick={fetchLeads} disabled={loading}>
          <RefreshCw className={cn("h-4 w-4 mr-2", loading && "animate-spin")} />
          Actualiser
        </Button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Rechercher nom, email, entreprise…"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(0);
            }}
            className="pl-9"
          />
        </div>
        {STATUT_OPTIONS.map((opt) => (
          <button
            key={opt.value}
            onClick={() => toggleStatut(opt.value)}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium border transition-colors cursor-pointer",
              selectedStatuts.includes(opt.value)
                ? STATUT_COLORS[opt.value] + " border-transparent"
                : "bg-background text-muted-foreground border-border hover:bg-muted"
            )}
          >
            {opt.label}
          </button>
        ))}
        {(search || selectedStatuts.length > 0 || filterUrgent) && (
          <Button variant="ghost" size="sm" onClick={resetFilters}>
            <X className="h-3 w-3 mr-1" /> Reset
          </Button>
        )}
      </div>

      {/* Desktop table */}
      <div className="hidden md:block rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="hidden lg:table-cell">Téléphone</TableHead>
              <TableHead className="hidden xl:table-cell">Source</TableHead>
              <TableHead
                className="cursor-pointer select-none"
                onClick={() => toggleSort("created_at")}
              >
                Arrivée {sortKey === "created_at" && (sortDir === "asc" ? "↑" : "↓")}
              </TableHead>
              <TableHead
                className="cursor-pointer select-none"
                onClick={() => toggleSort("statut")}
              >
                Statut {sortKey === "statut" && (sortDir === "asc" ? "↑" : "↓")}
              </TableHead>
              <TableHead
                className="cursor-pointer select-none"
                onClick={() => toggleSort("prochaine_action")}
              >
                Prochaine action{" "}
                {sortKey === "prochaine_action" && (sortDir === "asc" ? "↑" : "↓")}
              </TableHead>
              <TableHead className="hidden xl:table-cell">Modifié</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginated.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center text-muted-foreground py-12">
                  {loading ? "Chargement…" : "Aucun lead"}
                </TableCell>
              </TableRow>
            ) : (
              paginated.map((lead) => (
                <TableRow
                  key={lead.id}
                  className={cn(
                    "cursor-pointer hover:bg-muted/50 transition-colors",
                    isUrgent(lead) && "bg-destructive/5",
                    lead.statut === "perdu" && "opacity-50"
                  )}
                  onClick={() => openDrawer(lead)}
                >
                  <TableCell>
                    <div className="font-medium">{lead.first_name}</div>
                    {lead.company && (
                      <div className="text-xs text-muted-foreground">{lead.company}</div>
                    )}
                  </TableCell>
                  <TableCell className="text-sm">{lead.email}</TableCell>
                  <TableCell className="hidden lg:table-cell text-sm">
                    {lead.phone || "—"}
                  </TableCell>
                  <TableCell className="hidden xl:table-cell text-xs text-muted-foreground">
                    {lead.source_route || "—"}
                  </TableCell>
                  <TableCell className="text-sm whitespace-nowrap">
                    {formatDistanceToNow(new Date(lead.created_at), {
                      addSuffix: true,
                      locale: fr,
                    })}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={cn(
                        "text-xs font-medium border-0",
                        STATUT_COLORS[lead.statut] || "bg-muted text-muted-foreground"
                      )}
                    >
                      {STATUT_OPTIONS.find((o) => o.value === lead.statut)?.label ?? lead.statut}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm whitespace-nowrap">
                    {lead.prochaine_action ? (
                      <span
                        className={cn(
                          isUrgent(lead) && "text-destructive font-semibold"
                        )}
                      >
                        {new Date(lead.prochaine_action).toLocaleDateString("fr-FR")}
                      </span>
                    ) : (
                      "—"
                    )}
                  </TableCell>
                  <TableCell className="hidden xl:table-cell text-xs text-muted-foreground">
                    {lead.updated_by ? (
                      <>
                        {lead.updated_by.split("@")[0]}
                        {lead.updated_at && (
                          <>
                            <br />
                            {formatDistanceToNow(new Date(lead.updated_at), {
                              addSuffix: true,
                              locale: fr,
                            })}
                          </>
                        )}
                      </>
                    ) : (
                      "—"
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Mobile cards */}
      <div className="md:hidden space-y-3">
        {loading && <p className="text-center text-muted-foreground py-8">Chargement…</p>}
        {!loading && paginated.length === 0 && (
          <p className="text-center text-muted-foreground py-8">Aucun lead</p>
        )}
        {paginated.map((lead) => (
          <div
            key={lead.id}
            onClick={() => openDrawer(lead)}
            className={cn(
              "rounded-lg border p-4 cursor-pointer hover:bg-muted/50 transition-colors",
              isUrgent(lead) && "border-destructive/30 bg-destructive/5",
              lead.statut === "perdu" && "opacity-50"
            )}
          >
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className="font-medium">{lead.first_name}</p>
                {lead.company && (
                  <p className="text-xs text-muted-foreground">{lead.company}</p>
                )}
              </div>
              <Badge
                className={cn(
                  "text-xs border-0 shrink-0",
                  STATUT_COLORS[lead.statut] || "bg-muted"
                )}
              >
                {STATUT_OPTIONS.find((o) => o.value === lead.statut)?.label ?? lead.statut}
              </Badge>
            </div>
            <div className="mt-2 text-sm text-muted-foreground space-y-0.5">
              <p>{lead.email}</p>
              {lead.phone && <p>{lead.phone}</p>}
              <div className="flex justify-between mt-1">
                <span>
                  {formatDistanceToNow(new Date(lead.created_at), {
                    addSuffix: true,
                    locale: fr,
                  })}
                </span>
                {lead.prochaine_action && (
                  <span className={cn(isUrgent(lead) && "text-destructive font-semibold")}>
                    Action : {new Date(lead.prochaine_action).toLocaleDateString("fr-FR")}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between pt-2">
          <p className="text-sm text-muted-foreground">
            {sorted.length} lead{sorted.length > 1 ? "s" : ""}
          </p>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 0}
              onClick={() => setPage((p) => p - 1)}
            >
              Précédent
            </Button>
            <span className="flex items-center text-sm text-muted-foreground px-2">
              {page + 1} / {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={page >= totalPages - 1}
              onClick={() => setPage((p) => p + 1)}
            >
              Suivant
            </Button>
          </div>
        </div>
      )}

      {/* Drawer */}
      <LeadDrawer
        lead={drawerLead}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
};

export default LeadsPage;
