import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/seo/SEO";
import StructuredData from "@/components/seo/StructuredData";
import { webPageSchema } from "@/lib/structured-data";

const MentionsLegales = () => (
  <>
    <SEO
      title="Mentions légales | Botami Software"
      description="Mentions légales du site software.botami-agency.com — éditeur BOTA-AG, hébergeur, propriété intellectuelle et coordonnées de contact."
      canonical="/mentions-legales"
    />
    <StructuredData
      data={webPageSchema({
        name: "Mentions légales — Botami Software",
        description: "Informations légales relatives au site software.botami-agency.com édité par BOTA-AG.",
        path: "/mentions-legales",
      })}
    />
    <Navbar />
    <main className="min-h-screen bg-background text-foreground pt-28 pb-20 px-4 md:px-8">
      <div className="container-wide max-w-3xl mx-auto prose prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Mentions légales</h1>
        <p className="text-sm text-muted-foreground italic mb-10">Dernière mise à jour : 11 avril 2026</p>

        <h2>Éditeur du site</h2>
        <p>
          Le site <strong>software.botami-agency.com</strong> est édité par la société <strong>BOTA-AG</strong>, qui exploite la marque commerciale <strong>Botami Software</strong>.
        </p>
        <ul>
          <li><strong>Raison sociale</strong> : BOTA-AG</li>
          <li><strong>Forme juridique</strong> : EURL (entreprise unipersonnelle à responsabilité limitée)</li>
          <li><strong>Capital social</strong> : 1 000 €</li>
          <li><strong>Siège social</strong> : Bureau 326, 59 rue de Ponthieu, 75008 Paris</li>
          <li><strong>RCS</strong> : Paris, 100 805 126 R.C.S. Paris</li>
          <li><strong>SIREN</strong> : 100 805 126</li>
          <li><strong>SIRET (siège)</strong> : 100 805 126 00016</li>
          <li><strong>Numéro de TVA intracommunautaire</strong> : FR42100805126</li>
          <li><strong>Code APE</strong> : 62.01Z (Programmation informatique)</li>
        </ul>

        <h2>Contact</h2>
        <ul>
          <li><strong>Email</strong> : <a href="mailto:contact@botami-agency.com" className="text-primary hover:underline">contact@botami-agency.com</a></li>
          <li><strong>Téléphone</strong> : <a href="tel:+33768041556" className="text-primary hover:underline">+33 7 68 04 15 56</a></li>
        </ul>

        <h2>Directeur de la publication</h2>
        <p>Monsieur <strong>Elias Ouannou</strong>, en sa qualité de gérant de BOTA-AG.</p>

        <h2>Hébergeur</h2>
        <p>Le site est hébergé par <strong>Lovable AB</strong>, société de droit suédois.</p>
        <ul>
          <li>Sveavägen 24-26, 111 57 Stockholm, Suède</li>
          <li>Site : <a href="https://lovable.dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">https://lovable.dev</a></li>
        </ul>

        <h2>Propriété intellectuelle</h2>
        <p>
          L'ensemble des éléments présents sur ce site (textes, images, logos, vidéos, code, structure) est la propriété exclusive de BOTA-AG ou de ses partenaires, sauf mention contraire. Toute reproduction, représentation, modification ou exploitation, totale ou partielle, sans autorisation écrite préalable, est interdite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
        </p>
        <p>La marque « Botami Software » et les éléments graphiques associés sont utilisés à titre commercial par BOTA-AG.</p>

        <h2>Responsabilité</h2>
        <p>
          BOTA-AG s'efforce d'assurer l'exactitude et la mise à jour des informations publiées sur ce site, mais ne peut garantir leur exhaustivité ou l'absence d'erreur. L'utilisation des informations et contenus du site se fait sous la responsabilité de l'utilisateur.
        </p>
        <p>
          BOTA-AG ne saurait être tenue responsable des dommages directs ou indirects résultant de l'accès au site ou de l'impossibilité d'y accéder.
        </p>

        <h2>Liens externes</h2>
        <p>Le site peut contenir des liens vers des sites tiers. BOTA-AG n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.</p>

        <h2>Droit applicable</h2>
        <p>Les présentes mentions légales sont régies par le droit français. Tout litige relatif à leur interprétation ou à leur exécution relève des tribunaux français compétents.</p>

        <h2>Contact</h2>
        <p>Pour toute question relative aux présentes mentions légales, vous pouvez nous écrire à <a href="mailto:contact@botami-agency.com" className="text-primary hover:underline">contact@botami-agency.com</a>.</p>
      </div>
    </main>
    <Footer />
  </>
);

export default MentionsLegales;
