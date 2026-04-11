import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PolitiqueCookies = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-background text-foreground pt-28 pb-20 px-4 md:px-8">
      <div className="container-wide max-w-3xl mx-auto prose prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-td:text-muted-foreground prose-th:text-foreground">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Politique de gestion des cookies</h1>
        <p className="text-sm text-muted-foreground italic mb-10">Dernière mise à jour : 11 avril 2026</p>

        <h2>1. Qu'est-ce qu'un cookie ?</h2>
        <p>Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de votre visite sur un site. Il permet au site de reconnaître votre navigateur, de mémoriser certaines informations, et de mesurer l'audience.</p>

        <h2>2. Finalités des cookies utilisés</h2>
        <p>Le site <strong>software.botami-agency.com</strong> utilise des cookies pour trois finalités :</p>
        <ul>
          <li><strong>Cookies strictement nécessaires</strong> : indispensables au fonctionnement du site (mémorisation de votre choix sur le bandeau cookies). Ils ne nécessitent pas votre consentement.</li>
          <li><strong>Cookies de mesure d'audience</strong> : comprendre comment les visiteurs utilisent le site pour l'améliorer. Ils nécessitent votre consentement.</li>
          <li><strong>Cookies publicitaires et de mesure de campagne</strong> : mesurer l'efficacité de nos campagnes Google Ads. Ils nécessitent votre consentement.</li>
        </ul>

        <h2>3. Liste des cookies déposés</h2>

        <h3>Traceurs strictement nécessaires</h3>
        <div className="overflow-x-auto">
          <table>
            <thead><tr><th>Traceur</th><th>Type</th><th>Finalité</th><th>Durée</th></tr></thead>
            <tbody>
              <tr><td><code>cookie_dismissed</code></td><td>localStorage</td><td>Mémorise la fermeture du bandeau cookies</td><td>Permanent tant que non effacé</td></tr>
              <tr><td><code>session-id</code></td><td>Cookie de session</td><td>Identifier techniquement la session de navigation</td><td>Session</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Cookies de mesure d'audience (soumis au consentement)</h3>
        <div className="overflow-x-auto">
          <table>
            <thead><tr><th>Cookie</th><th>Émetteur</th><th>Finalité</th><th>Durée</th></tr></thead>
            <tbody>
              <tr><td><code>_ga</code>, <code>_ga_&lt;ID&gt;</code></td><td>Google Analytics 4</td><td>Identifier les visiteurs uniques, mesurer l'audience du site</td><td>13 mois</td></tr>
              <tr><td><code>_clck</code>, <code>_clsk</code></td><td>Microsoft Clarity</td><td>Analyser les parcours de navigation et les interactions</td><td>12 mois</td></tr>
              <tr><td><code>MUID</code>, <code>ANONCHK</code>, <code>SM</code></td><td>Microsoft Clarity</td><td>Identifier le terminal de façon anonyme</td><td>13 mois maximum</td></tr>
            </tbody>
          </table>
        </div>

        <h3>Cookies publicitaires (soumis au consentement)</h3>
        <div className="overflow-x-auto">
          <table>
            <thead><tr><th>Cookie</th><th>Émetteur</th><th>Finalité</th><th>Durée</th></tr></thead>
            <tbody>
              <tr><td><code>_gcl_au</code>, <code>_gcl_aw</code></td><td>Google Ads (gtag.js)</td><td>Mesurer les conversions publicitaires Google Ads</td><td>90 jours</td></tr>
              <tr><td><code>NID</code>, <code>IDE</code></td><td>Google</td><td>Mesurer l'efficacité des annonces et limiter la répétition</td><td>13 mois maximum</td></tr>
            </tbody>
          </table>
        </div>

        <p>Identifiants des comptes utilisés : Google Ads <code>AW-17963133191</code>, Google Analytics 4 <code>G-TVPD38XZ7S</code>, Microsoft Clarity <code>w8zd4ye9r8</code>.</p>

        <h3>Cookies de réservation de rendez-vous</h3>
        <div className="overflow-x-auto">
          <table>
            <thead><tr><th>Cookie</th><th>Émetteur</th><th>Finalité</th><th>Durée</th></tr></thead>
            <tbody>
              <tr><td>Cookies de session Calendly</td><td>Calendly</td><td>Permettre la prise de rendez-vous via le widget intégré</td><td>Session</td></tr>
            </tbody>
          </table>
        </div>

        <h2>4. Gérer vos cookies</h2>
        <p>Lors de votre première visite, un bandeau vous permet d'accepter ou de refuser l'ensemble des cookies non essentiels. Vous pouvez à tout moment modifier vos préférences :</p>
        <ul>
          <li><strong>Sur le site</strong> : cliquez sur le lien « Gérer mes cookies » en bas de page pour rouvrir le panneau de gestion.</li>
          <li><strong>Dans votre navigateur</strong> : vous pouvez configurer votre navigateur pour bloquer tout ou partie des cookies. Les modalités varient selon le navigateur (Chrome, Firefox, Safari, Edge). Consultez l'aide de votre navigateur.</li>
        </ul>
        <p>Notez que le refus de certains cookies peut affecter votre expérience sur le site et notre capacité à mesurer son audience.</p>

        <h2>5. Durée de conservation</h2>
        <p>La durée de conservation maximale des cookies est de <strong>13 mois</strong> à compter de leur dépôt, conformément aux recommandations de la CNIL. Les données de mesure d'audience elles-mêmes sont conservées au maximum <strong>25 mois</strong>.</p>

        <h2>6. Transferts hors UE</h2>
        <p>Certains sous-traitants (Google, Microsoft, Calendly) peuvent traiter les données collectées via les cookies en dehors de l'Union européenne, notamment aux États-Unis. Ces transferts sont encadrés par les clauses contractuelles types de la Commission européenne et, le cas échéant, par le Data Privacy Framework.</p>

        <h2>7. Vos droits</h2>
        <p>Vous disposez de l'ensemble des droits garantis par le RGPD sur les données collectées via cookies. Pour exercer ces droits ou poser une question, écrivez à <a href="mailto:contact@botami-agency.com" className="text-primary hover:underline">contact@botami-agency.com</a>.</p>
        <p>Pour plus d'information sur la gestion des cookies, consultez le site de la CNIL : <a href="https://www.cnil.fr/fr/cookies-et-traceurs" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.cnil.fr/fr/cookies-et-traceurs</a>.</p>
      </div>
    </main>
    <Footer />
  </>
);

export default PolitiqueCookies;
