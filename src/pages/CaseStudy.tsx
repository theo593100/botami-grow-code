import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CaseStudy = () => (
  <>
    <Navbar />
    <main className="pt-[var(--nav-height)] flex items-center justify-center min-h-[calc(100vh-var(--nav-height))]">
      <div className="w-full max-w-md mx-auto px-4 py-8">
        <div className="rounded-2xl border overflow-hidden aspect-[9/16] w-full">
          <iframe
            src="https://player.vimeo.com/video/1179192157?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1"
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Étude de cas — Transitions Pro"
          />
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default CaseStudy;
