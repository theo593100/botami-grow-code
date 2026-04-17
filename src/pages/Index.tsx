import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ApproachSection from "@/components/ApproachSection";
import ProcessSection from "@/components/ProcessSection";
import CaseStudySection from "@/components/CaseStudySection";
import ClientLogosSection from "@/components/ClientLogosSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/seo/SEO";
import StructuredData from "@/components/seo/StructuredData";
import {
  organizationSchema,
  websiteSchema,
  faqSchema,
} from "@/lib/structured-data";

const homeFaqs = [
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

const Index = () => (
  <>
    <SEO
      title="Botami Software — Applications sur mesure pour PME"
      description="Botami Software développe des applications sur mesure pour PME et TPE. Forfait transparent de 5 000 à 15 000 €. Code source transféré. Livré en semaines."
      canonical="/"
      keywords="application sur mesure PME, développement logiciel PME, alternative SaaS, application métier sur mesure"
    />
    <StructuredData
      data={[organizationSchema(), websiteSchema(), faqSchema(homeFaqs)]}
    />
    <Navbar />
    <main>
      <HeroSection />
      <ProblemSection />
      <ApproachSection />
      <ProcessSection />
      {/* TODO: remettre après validation client
      <CaseStudySection />
      */}
      <ClientLogosSection />
      <TeamSection />
      <FAQSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
