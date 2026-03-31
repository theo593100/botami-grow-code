import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Et si ça ne marche plus dans un an ?",
    a: "Support inclus la première année. Après, maintenance optionnelle ou intervention à la demande. Et dans tous les cas, vous avez le code source — un autre développeur peut intervenir. Vous n'êtes jamais bloqué.",
  },
  {
    q: "Comment je sais que c'est bien fait ?",
    a: "Vous validez à chaque étape : cahier des charges, maquettes, prototype testable, recette sur vos cas réels. Rien n'est développé sans votre validation. Et tout le code est documenté et transférable.",
  },
  {
    q: "5 à 15 000 € pour du sur-mesure, c'est pas trop beau ?",
    a: "L'IA comme assistant de développement multiplie notre productivité. On n'a pas de structure de 50 personnes à financer. Le prix reflète le travail réel — pas une marge d'agence à amortir.",
  },
  {
    q: "J'ai pas le temps de gérer un projet IT",
    a: "Vous ne gérez rien. On pose les questions, on propose, vous validez. Le diagnostic prend 1-2h. Les validations en cours de projet : 30 minutes par semaine maximum.",
  },
  {
    q: "Et si je veux changer de prestataire ?",
    a: "Tout est à vous : code source, données, documentation technique, accès serveur. Un autre développeur peut reprendre le projet demain. Zéro lock-in, c'est dans le contrat.",
  },
];

const FAQSection = () => (
  <section id="faq" className="section-padding section-alt">
    <div className="container-narrow max-w-3xl">
      <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">Vos doutes, nos réponses</h2>
      <p className="text-lg text-muted-foreground mb-12">
        Les vraies questions que nos clients posent avant de se lancer.
      </p>
      <Accordion type="single" collapsible defaultValue="item-0">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-b">
            <AccordionTrigger className="text-left font-heading font-semibold text-base py-5 hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
