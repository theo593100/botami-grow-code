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

const Index = () => (
  <>
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
