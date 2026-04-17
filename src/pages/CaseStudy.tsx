import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/seo/SEO";
import StructuredData from "@/components/seo/StructuredData";
import { articleSchema } from "@/lib/structured-data";

const CaseStudy = () => (
  <>
    <SEO
      title="Étude de cas GATEFORGE TP — Application métier pour Transitions Pro | Botami Software"
      description="Comment Botami Software a développé GATEFORGE TP pour Transitions Pro Île-de-France : 15 000 € d'économies annuelles vs 5 800 € de développement, livré en quelques semaines."
      canonical="/etude-de-cas"
      ogType="article"
    />
    <StructuredData
      data={articleSchema({
        headline: "GATEFORGE TP — Application métier sur mesure pour Transitions Pro Île-de-France",
        description:
          "Étude de cas Botami Software : conception et développement de GATEFORGE TP, application métier qui a permis 15 000 € d'économies annuelles à Transitions Pro Île-de-France, pour un coût de 5 800 € en one-shot.",
        path: "/etude-de-cas",
      })}
    />
    <Navbar />
    <main className="pt-[var(--nav-height)] flex items-center justify-center min-h-[calc(100vh-var(--nav-height))]">
      <div className="w-full max-w-md mx-auto px-4 py-8">
        <h1 className="sr-only">
          Étude de cas GATEFORGE TP — Application métier pour Transitions Pro
        </h1>
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
