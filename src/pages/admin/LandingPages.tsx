import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ExternalLink, Download, Eye, MousePointerClick } from "lucide-react";

const PUBLISHED_URL = "https://botami-grow-code.lovable.app";

type EventStats = Record<string, { page_view: number; cta_click: number }>;

const LandingPages = () => {
  const { data: pages, isLoading } = useQuery({
    queryKey: ["landing-pages"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("landing_pages")
        .select("*")
        .order("created_at", { ascending: true });
      if (error) throw error;
      return data;
    },
  });

  const { data: stats } = useQuery({
    queryKey: ["landing-page-stats"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("landing_page_events")
        .select("route, event_type");
      if (error) throw error;

      const map: EventStats = {};
      for (const row of data || []) {
        if (!map[row.route]) map[row.route] = { page_view: 0, cta_click: 0 };
        if (row.event_type === "page_view") map[row.route].page_view++;
        if (row.event_type === "cta_click") map[row.route].cta_click++;
      }
      return map;
    },
  });

  const exportCSV = () => {
    if (!pages?.length) return;
    const headers = ["Titre interne", "Balise title", "URL", "Statut", "Visiteurs", "Clics CTA"];
    const rows = pages.map((p) => [
      p.title,
      p.meta_title || "",
      `${PUBLISHED_URL}${p.route}`,
      p.is_active ? "Active" : "Inactive",
      stats?.[p.route]?.page_view ?? 0,
      stats?.[p.route]?.cta_click ?? 0,
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "landing-pages.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  const totalViews = Object.values(stats || {}).reduce((s, v) => s + v.page_view, 0);
  const totalClicks = Object.values(stats || {}).reduce((s, v) => s + v.cta_click, 0);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-2xl font-bold">Landing pages</h2>
        <Button variant="outline" size="sm" onClick={exportCSV} disabled={!pages?.length}>
          <Download className="h-4 w-4 mr-2" />
          Exporter CSV
        </Button>
      </div>

      {/* Stats summary */}
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-lg border bg-card p-4">
          <p className="text-sm text-muted-foreground">Pages actives</p>
          <p className="text-2xl font-bold">{pages?.filter((p) => p.is_active).length ?? 0}</p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Eye className="h-4 w-4" /> Visiteurs
          </div>
          <p className="text-2xl font-bold">{totalViews}</p>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MousePointerClick className="h-4 w-4" /> Clics CTA
          </div>
          <p className="text-2xl font-bold">{totalClicks}</p>
          {totalViews > 0 && (
            <p className="text-xs text-muted-foreground">
              {((totalClicks / totalViews) * 100).toFixed(1)}% taux de conversion
            </p>
          )}
        </div>
      </div>

      {isLoading ? (
        <p className="text-muted-foreground">Chargement...</p>
      ) : !pages?.length ? (
        <p className="text-muted-foreground text-center py-12">Aucune landing page enregistrée.</p>
      ) : (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Titre interne</TableHead>
                <TableHead>Balise title</TableHead>
                <TableHead className="w-20 text-center">
                  <Eye className="h-4 w-4 mx-auto" />
                </TableHead>
                <TableHead className="w-20 text-center">
                  <MousePointerClick className="h-4 w-4 mx-auto" />
                </TableHead>
                <TableHead className="w-20 text-center">Conv.</TableHead>
                <TableHead className="w-24 text-center">Statut</TableHead>
                <TableHead className="w-12" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {pages.map((page) => {
                const fullUrl = `${PUBLISHED_URL}${page.route}`;
                const views = stats?.[page.route]?.page_view ?? 0;
                const clicks = stats?.[page.route]?.cta_click ?? 0;
                const conv = views > 0 ? ((clicks / views) * 100).toFixed(1) + "%" : "—";
                return (
                  <TableRow key={page.id}>
                    <TableCell className="font-medium">{page.title}</TableCell>
                    <TableCell className="text-muted-foreground text-sm max-w-[200px] truncate">
                      {page.meta_title || "—"}
                    </TableCell>
                    <TableCell className="text-center font-mono text-sm">{views}</TableCell>
                    <TableCell className="text-center font-mono text-sm">{clicks}</TableCell>
                    <TableCell className="text-center font-mono text-sm">{conv}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant={page.is_active ? "default" : "secondary"}>
                        {page.is_active ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <a
                        href={fullUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default LandingPages;
