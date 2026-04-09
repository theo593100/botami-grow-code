import Navbar from "@/components/Navbar";
import CaseStudySection from "@/components/CaseStudySection";
import Footer from "@/components/Footer";

const CaseStudy = () => (
  <>
    <Navbar />
    <main className="pt-[var(--nav-height)]">
      <CaseStudySection />
    </main>
    <Footer />
  </>
);

export default CaseStudy;
