import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PolitiqueConfidentialite = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-background text-foreground pt-28 pb-20 px-4 md:px-8">
      <div className="container-wide max-w-3xl mx-auto prose prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-td:text-muted-foreground prose-th:text-foreground">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Politique de confidentialité</h1>
        <p className="text-sm text-muted-foreground italic mb-10">Dernière mise à jour : 11 avril 2026</p>

        <p>
          BOTA-AG (ci-après « Botami Software », « nous ») accorde une grande importance à la protection des données personnelles des utilisateurs de son site <strong>software.botami-agency.com</strong>. La présente politique décrit, en application du Règlement général sur la protection des données (RGPD) et de la loi Informatique et Libertés modifiée, comment vos données sont collectées, utilisées et protégées.
        </p>

        <h2>1. Responsable du traitement</h2>
        <p>Le responsable du traitement des données personnelles est :</p>
        <p>
          <strong>BOTA-AG</strong><br />
          Bureau 326, 59 rue de Ponthieu, 75008 Paris<br />
          SIREN : 100 805 126<br />
          Email : <a href="mailto:contact@botami-agency.com" className="text-primary hover:underline">contact@botami-agency.com</a><br />
          Représentée par M. Elias Ouannou, gérant.
        </p>

        <h2>2. Données collectées</h2>
        <p>Nous collectons et traitons les catégories de données suivantes :</p>

        <p><strong>Données que vous nous fournissez directement :</strong></p>
        <ul>
          <li>Lorsque vous réservez un appel découverte via Calendly : nom, prénom, email, numéro de téléphone éventuel, nom de votre entreprise, créneau choisi, questions libres que vous renseignez dans le formulaire.</li>
          <li>Lorsque vous nous écrivez à <code>contact@botami-agency.com</code> : votre adresse email et le contenu de votre message.</li>
        </ul>

        <p><strong>Données collectées automatiquement :</strong></p>
        <ul>
          <li>Données de navigation (pages visitées, durée, source de trafic) via <strong>Google Analytics 4</strong> et <strong>Microsoft Clarity</strong>.</li>
          <li>Adresse IP tronquée, type de navigateur, système d'exploitation, résolution d'écran.</li>
          <li>Données d'interaction (clics, scroll, mouvements de souris) via Microsoft Clarity.</li>
          <li>Événements publicitaires Google Ads (clic sur annonce, conversion) via <strong>gtag.js</strong>.</li>
        </ul>

        <h2>3. Finalités et bases légales</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr><th>Finalité</th><th>Base légale</th></tr>
            </thead>
            <tbody>
              <tr><td>Répondre aux demandes de contact et organiser un appel découverte</td><td>Exécution de mesures précontractuelles à votre demande (art. 6.1.b RGPD)</td></tr>
              <tr><td>Établir et suivre une relation commerciale</td><td>Exécution d'un contrat ou intérêt légitime à prospecter (art. 6.1.b et 6.1.f RGPD)</td></tr>
              <tr><td>Mesurer l'audience et améliorer le site (GA4, Clarity)</td><td>Votre consentement, recueilli via le bandeau cookies (art. 6.1.a RGPD)</td></tr>
              <tr><td>Mesurer la performance des campagnes Google Ads</td><td>Votre consentement (art. 6.1.a RGPD)</td></tr>
              <tr><td>Respecter nos obligations légales et comptables</td><td>Obligation légale (art. 6.1.c RGPD)</td></tr>
            </tbody>
          </table>
        </div>

        <h2>4. Destinataires des données</h2>
        <p>Vos données sont accessibles uniquement aux personnes habilitées au sein de BOTA-AG, ainsi qu'aux sous-traitants techniques suivants, qui agissent sur nos instructions :</p>
        <ul>
          <li><strong>Lovable AB</strong> (Suède) — hébergement du site</li>
          <li><strong>Google Ireland Limited</strong> (Irlande) — Google Analytics 4, Google Ads (via gtag.js)</li>
          <li><strong>Microsoft Ireland Operations Limited</strong> (Irlande) — Microsoft Clarity</li>
          <li><strong>Calendly LLC</strong> (États-Unis) — prise de rendez-vous. Les transferts vers les États-Unis sont encadrés par les clauses contractuelles types de la Commission européenne et, lorsque applicable, par le Data Privacy Framework.</li>
        </ul>
        <p>Nous ne vendons ni ne louons vos données personnelles à des tiers.</p>

        <h2>5. Durées de conservation</h2>
        <div className="overflow-x-auto">
          <table>
            <thead>
              <tr><th>Catégorie</th><th>Durée</th></tr>
            </thead>
            <tbody>
              <tr><td>Données de contact et d'échanges commerciaux (prospects)</td><td>3 ans à compter du dernier contact</td></tr>
              <tr><td>Données de clients</td><td>Durée de la relation contractuelle + 5 ans</td></tr>
              <tr><td>Données de facturation</td><td>10 ans (obligation légale)</td></tr>
              <tr><td>Données de navigation anonymisées (GA4, Clarity)</td><td>14 mois maximum</td></tr>
              <tr><td>Cookies</td><td>Maximum 13 mois</td></tr>
            </tbody>
          </table>
        </div>

        <h2>6. Vos droits</h2>
        <p>Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :</p>
        <ul>
          <li><strong>Droit d'accès</strong> : obtenir la confirmation que vos données sont traitées et en obtenir copie.</li>
          <li><strong>Droit de rectification</strong> : corriger des données inexactes ou incomplètes.</li>
          <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données, dans les cas prévus par la loi.</li>
          <li><strong>Droit à la limitation</strong> du traitement.</li>
          <li><strong>Droit d'opposition</strong> au traitement, notamment à des fins de prospection.</li>
          <li><strong>Droit à la portabilité</strong> : recevoir vos données dans un format structuré et lisible.</li>
          <li><strong>Droit de retirer votre consentement</strong> à tout moment, pour les traitements fondés sur le consentement.</li>
          <li><strong>Droit de définir des directives</strong> relatives à la conservation, l'effacement et la communication de vos données après votre décès.</li>
        </ul>
        <p>
          Pour exercer ces droits, écrivez à <a href="mailto:contact@botami-agency.com" className="text-primary hover:underline">contact@botami-agency.com</a> en précisant votre demande. Une pièce d'identité pourra vous être demandée en cas de doute raisonnable sur votre identité.
        </p>

        <h2>7. Réclamation auprès de la CNIL</h2>
        <p>
          Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la Commission Nationale de l'Informatique et des Libertés :
        </p>
        <p>
          <strong>CNIL</strong> — 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 — <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr</a>
        </p>

        <h2>8. Sécurité</h2>
        <p>
          BOTA-AG met en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données contre l'accès non autorisé, l'altération, la divulgation ou la destruction : chiffrement TLS des échanges, accès restreint aux données, sauvegardes régulières, politique de mots de passe.
        </p>

        <h2>9. Modifications</h2>
        <p>
          La présente politique peut être mise à jour pour refléter l'évolution de nos pratiques ou de la réglementation. La date de dernière mise à jour figure en haut de ce document.
        </p>

        <h2>10. Contact</h2>
        <p>
          Toute question relative à cette politique : <a href="mailto:contact@botami-agency.com" className="text-primary hover:underline">contact@botami-agency.com</a>.
        </p>
      </div>
    </main>
    <Footer />
  </>
);

export default PolitiqueConfidentialite;
