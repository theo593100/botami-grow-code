import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Eye, EyeOff } from "lucide-react";

const Dashboard = () => {
  const { data: pages } = useQuery({
    queryKey: ["landing-pages-count"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("landing_pages")
        .select("id, is_active");
      if (error) throw error;
      return data;
    },
  });

  const total = pages?.length ?? 0;
  const active = pages?.filter((p) => p.is_active).length ?? 0;
  const inactive = total - active;

  return (
    <div className="space-y-6">
      <h2 className="font-heading text-2xl font-bold">Tableau de bord</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Landing pages
            </CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Actives
            </CardTitle>
            <Eye className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-accent">{active}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Inactives
            </CardTitle>
            <EyeOff className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{inactive}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
