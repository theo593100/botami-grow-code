import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import ProblemSection from "@/components/ProblemSection";
import CaseStudySection from "@/components/CaseStudySection";
import ClientLogosSection from "@/components/ClientLogosSection";
import ProcessSection from "@/components/ProcessSection";
import SouveraineteSection from "@/components/SouveraineteSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SEO from "@/components/seo/SEO";
import StructuredData from "@/components/seo/StructuredData";
import {
  organizationSchema,
  websiteSchema,
  faqSchema,
  servicesListSchema,
} from "@/lib/structured-data";
import { home } from "@/content/home";

const Index = () => {
  // Applique le fond crème grain Botami au body uniquement sur la home,
  // sans interférer avec les autres pages (admin, LPs).
  useEffect(() => {
    document.body.classList.add("bo-grain");
    return () => {
      document.body.classList.remove("bo-grain");
    };
  }, []);

  const homeFaqs = home.faq.items.map((i) => ({ q: i.q, a: i.a }));

  return (
    <>
      <SEO
        title="Botami Software — Agence dev en binôme avec l'IA"
        description="Agence française de développement en binôme humain-IA. Applications web et mobile sur mesure pour PME. Nîmes · Lille · Paris. Forfait à partir de 5 000 € HT. Livré en 4 à 8 semaines. Code source transmis, hébergement souverain."
        canonical="/"
        keywords="agence dev binôme IA, agence développement IA, application sur mesure PME, développement logiciel PME, alternative SaaS, souveraineté française logiciel, agence Nîmes Lille Paris"
      />
      <StructuredData
        data={[organizationSchema(), websiteSchema(), servicesListSchema(), faqSchema(homeFaqs)]}
      />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <ProblemSection />
        <CaseStudySection />
        <ClientLogosSection />
        <ProcessSection />
        <SouveraineteSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
