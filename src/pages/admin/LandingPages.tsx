import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Plus, ExternalLink, Trash2, Pencil } from "lucide-react";
import { toast } from "sonner";

const LandingPages = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editId, setEditId] = useState<string | null>(null);
  const [form, setForm] = useState({ title: "", slug: "", route: "", description: "" });

  const { data: pages, isLoading } = useQuery({
    queryKey: ["landing-pages"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("landing_pages")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const upsertMutation = useMutation({
    mutationFn: async (values: typeof form & { id?: string }) => {
      const payload = {
        title: values.title,
        slug: values.slug,
        route: values.route.startsWith("/") ? values.route : `/${values.route}`,
        description: values.description || null,
        created_by: user?.id,
      };

      if (values.id) {
        const { error } = await supabase
          .from("landing_pages")
          .update(payload)
          .eq("id", values.id);
        if (error) throw error;
      } else {
        const { error } = await supabase.from("landing_pages").insert(payload);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["landing-pages"] });
      setDialogOpen(false);
      setEditId(null);
      setForm({ title: "", slug: "", route: "", description: "" });
      toast.success("Landing page enregistrée");
    },
    onError: () => toast.error("Erreur lors de l'enregistrement"),
  });

  const toggleMutation = useMutation({
    mutationFn: async ({ id, is_active }: { id: string; is_active: boolean }) => {
      const { error } = await supabase
        .from("landing_pages")
        .update({ is_active })
        .eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["landing-pages"] }),
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("landing_pages").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["landing-pages"] });
      toast.success("Landing page supprimée");
    },
  });

  const openEdit = (page: NonNullable<typeof pages>[0]) => {
    setEditId(page.id);
    setForm({
      title: page.title,
      slug: page.slug,
      route: page.route,
      description: page.description ?? "",
    });
    setDialogOpen(true);
  };

  const openNew = () => {
    setEditId(null);
    setForm({ title: "", slug: "", route: "", description: "" });
    setDialogOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="font-heading text-2xl font-bold">Landing pages</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openNew}>
              <Plus className="mr-2 h-4 w-4" />
              Ajouter
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                {editId ? "Modifier la landing page" : "Nouvelle landing page"}
              </DialogTitle>
            </DialogHeader>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                upsertMutation.mutate({ ...form, id: editId ?? undefined });
              }}
            >
              <div className="space-y-2">
                <Label>Titre</Label>
                <Input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  required
                  placeholder="Landing page Prix"
                />
              </div>
              <div className="space-y-2">
                <Label>Slug</Label>
                <Input
                  value={form.slug}
                  onChange={(e) => setForm({ ...form, slug: e.target.value })}
                  required
                  placeholder="prix"
                />
              </div>
              <div className="space-y-2">
                <Label>Route</Label>
                <Input
                  value={form.route}
                  onChange={(e) => setForm({ ...form, route: e.target.value })}
                  required
                  placeholder="/lp/prix"
                />
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Description courte..."
                />
              </div>
              <Button type="submit" className="w-full" disabled={upsertMutation.isPending}>
                {upsertMutation.isPending ? "Enregistrement..." : "Enregistrer"}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {isLoading ? (
        <p className="text-muted-foreground">Chargement...</p>
      ) : !pages?.length ? (
        <Card>
          <CardContent className="py-12 text-center text-muted-foreground">
            Aucune landing page enregistrée. Cliquez sur "Ajouter" pour commencer.
          </CardContent>
        </Card>
      ) : (
        <div className="grid gap-4">
          {pages.map((page) => (
            <Card key={page.id}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <div>
                  <CardTitle className="text-base">{page.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-1">
                    {page.route}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Switch
                    checked={page.is_active}
                    onCheckedChange={(checked) =>
                      toggleMutation.mutate({ id: page.id, is_active: checked })
                    }
                  />
                  <a
                    href={page.route}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                  <button
                    onClick={() => openEdit(page)}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => {
                      if (confirm("Supprimer cette landing page ?")) {
                        deleteMutation.mutate(page.id);
                      }
                    }}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
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
