import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

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

  return (
    <div className="space-y-6">
      <h2 className="font-heading text-2xl font-bold">Landing pages</h2>

      {isLoading ? (
        <p className="text-muted-foreground">Chargement...</p>
      ) : !pages?.length ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            Aucune landing page enregistrée.
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {pages.map((page) => (
            <Card key={page.id}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle className="text-base">{page.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">{page.route}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={page.is_active ? "default" : "secondary"}>
                    {page.is_active ? "Active" : "Inactive"}
                  </Badge>
                  <a
                    href={page.route}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </CardHeader>
              {page.description && (
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">{page.description}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default LandingPages;
