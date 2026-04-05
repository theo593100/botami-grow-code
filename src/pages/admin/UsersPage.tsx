import { Card, CardContent } from "@/components/ui/card";

const UsersPage = () => {
  return (
    <div className="space-y-6">
      <h2 className="font-heading text-2xl font-bold">Utilisateurs</h2>
      <Card>
        <CardContent className="py-12 text-center text-muted-foreground">
          La gestion des utilisateurs sera disponible prochainement.
        </CardContent>
      </Card>
    </div>
  );
};

export default UsersPage;
