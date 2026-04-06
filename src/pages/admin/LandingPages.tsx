import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ExternalLink, Download } from "lucide-react";

const PUBLISHED_URL = "https://botami-grow-code.lovable.app";

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

  const exportCSV = () => {
    if (!pages?.length) return;
    const headers = ["Titre interne", "Balise title", "URL", "Statut"];
    const rows = pages.map((p) => [
      p.title,
      (p as any).meta_title || "",
      `${PUBLISHED_URL}${p.route}`,
      p.is_active ? "Active" : "Inactive",
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

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-2xl font-bold">Landing pages</h2>
        <Button variant="outline" size="sm" onClick={exportCSV} disabled={!pages?.length}>
          <Download className="h-4 w-4 mr-2" />
          Exporter CSV
        </Button>
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
                <TableHead>URL</TableHead>
                <TableHead className="w-24 text-center">Statut</TableHead>
                <TableHead className="w-12" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {pages.map((page) => {
                const fullUrl = `${PUBLISHED_URL}${page.route}`;
                return (
                  <TableRow key={page.id}>
                    <TableCell className="font-medium">{page.title}</TableCell>
                    <TableCell className="text-muted-foreground text-sm">
                      {(page as any).meta_title || "—"}
                    </TableCell>
                    <TableCell>
                      <a
                        href={fullUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline break-all"
                      >
                        {fullUrl}
                      </a>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge variant={page.is_active ? "default" : "secondary"}>
                        {page.is_active ? "Active" : "Inactive"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <a
                        href={page.route}
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
