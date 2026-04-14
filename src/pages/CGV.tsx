import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CGV = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-background text-foreground pt-28 pb-20 px-4 md:px-8">
      <div className="container-wide max-w-3xl mx-auto prose prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-li:text-muted-foreground prose-strong:text-foreground prose-td:text-muted-foreground prose-th:text-foreground">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Conditions Générales de Vente (CGV)</h1>
        <p className="text-sm text-muted-foreground italic mb-10">Dernière mise à jour : 11 avril 2026</p>

        <p>
          Les présentes Conditions Générales de Vente (ci-après « CGV ») régissent les prestations de développement logiciel sur mesure fournies par <strong>BOTA-AG</strong>, société exploitant la marque commerciale <strong>Botami Software</strong>, à ses clients professionnels.
        </p>

        <hr className="border-border my-8" />

        <h2>Article 1 — Identification du prestataire</h2>
        <p>
          <strong>BOTA-AG</strong>, EURL au capital de 1 000 €, immatriculée au RCS de Paris sous le numéro 100 805 126, dont le siège social est situé Bureau 326, 59 rue de Ponthieu, 75008 Paris, représentée par son gérant en exercice M. Elias Ouannou (ci-après « le Prestataire » ou « Botami »).
        </p>
        <p>Contact : <a href="mailto:contact@botami-agency.com" className="text-primary hover:underline">contact@botami-agency.com</a> — +33 7 68 04 15 56.</p>

        <h2>Article 2 — Objet</h2>
        <p>
          Les présentes CGV ont pour objet de définir les droits et obligations des parties dans le cadre de la fourniture, par le Prestataire, de prestations de <strong>conception, développement et livraison d'applications logicielles sur mesure</strong> pour ses clients professionnels (ci-après « le Client »).
        </p>
        <p>
          Elles s'appliquent à toute commande acceptée par le Prestataire et prévalent sur les conditions générales d'achat du Client, sauf accord écrit contraire.
        </p>

        <h2>Article 3 — Nature des prestations</h2>
        <p>Le Prestataire propose notamment :</p>
        <ul>
          <li>L'analyse du besoin et la rédaction d'un cahier des charges.</li>
          <li>La conception de maquettes et de l'architecture technique.</li>
          <li>Le développement de l'application logicielle sur mesure.</li>
          <li>La recette, la livraison et la mise en production de l'application.</li>
          <li>La formation du Client à l'utilisation de l'application livrée.</li>
          <li>Des prestations complémentaires de maintenance ou d'évolution, faisant l'objet d'un devis séparé.</li>
        </ul>
        <p>Les prestations sont détaillées dans le devis signé par les parties, qui prévaut sur les présentes CGV en cas de contradiction portant sur le périmètre.</p>

        <h2>Article 4 — Formation du contrat</h2>
        <p>
          Toute demande de prestation fait l'objet d'un devis écrit, établi par le Prestataire sur la base des informations fournies par le Client. Le contrat est formé lors de la signature du devis par le Client et du versement de l'acompte prévu à l'article 6.
        </p>
        <p>
          Le devis signé, les présentes CGV et, le cas échéant, le cahier des charges annexé, constituent l'intégralité de l'accord entre les parties.
        </p>

        <h2>Article 5 — Obligations des parties</h2>

        <h3>5.1 Obligations du Prestataire</h3>
        <p>Le Prestataire s'engage à :</p>
        <ul>
          <li>Exécuter les prestations avec le soin et la diligence attendus d'un professionnel.</li>
          <li>Respecter le périmètre, les délais et le budget définis dans le devis signé.</li>
          <li>Informer le Client de tout élément susceptible d'affecter la bonne exécution de la prestation.</li>
          <li>Garantir la confidentialité des informations transmises par le Client.</li>
        </ul>
        <p>Le Prestataire est tenu à une obligation de moyens.</p>

        <h3>5.2 Obligations du Client</h3>
        <p>Le Client s'engage à :</p>
        <ul>
          <li>Fournir en temps utile l'ensemble des informations, accès, comptes et documents nécessaires à la bonne exécution de la prestation.</li>
          <li>Désigner un interlocuteur unique en charge du suivi du projet.</li>
          <li>Valider ou formuler ses remarques sur les livrables dans les délais convenus.</li>
          <li>Régler les factures aux échéances prévues.</li>
        </ul>
        <p>Tout retard ou défaut d'information de la part du Client entraînant un décalage du planning ne pourra être imputé au Prestataire.</p>

        <h2>Article 6 — Prix et modalités de paiement</h2>

        <h3>6.1 Prix</h3>
        <p>
          Les prix sont fixés dans le devis signé. Ils sont exprimés en euros, hors taxes. La TVA applicable est ajoutée au taux en vigueur au jour de la facturation.
        </p>
        <p>
          Le Prestataire pratique un modèle de <strong>prix forfaitaire</strong>. Le prix annoncé au devis est le prix facturé, sauf modification écrite du périmètre formalisée par un avenant.
        </p>

        <h3>6.2 Échéancier</h3>
        <p>Sauf stipulation contraire au devis, le paiement s'effectue selon l'échéancier suivant :</p>
        <ul>
          <li><strong>50 %</strong> à la signature du devis, à titre d'acompte.</li>
          <li><strong>50 %</strong> à la livraison de l'application.</li>
        </ul>

        <h3>6.3 Modalités</h3>
        <p>
          Les paiements sont effectués par virement bancaire, sur le compte indiqué sur la facture. Les factures sont payables à <strong>30 jours</strong> à compter de leur date d'émission, sauf délai plus court indiqué sur la facture.
        </p>

        <h3>6.4 Retard de paiement</h3>
        <p>
          Conformément aux articles L.441-10 et suivants du Code de commerce, tout retard de paiement donne lieu, de plein droit et sans mise en demeure préalable :
        </p>
        <ul>
          <li>Au versement de pénalités de retard calculées sur la base du taux d'intérêt de refinancement de la Banque Centrale Européenne majoré de 10 points.</li>
          <li>Au versement d'une indemnité forfaitaire pour frais de recouvrement de <strong>40 €</strong> par facture, sans préjudice de l'indemnisation des frais réellement exposés si ceux-ci excèdent ce montant.</li>
        </ul>
        <p>
          En cas de retard de paiement, le Prestataire se réserve le droit de suspendre l'exécution des prestations en cours jusqu'au paiement intégral des sommes dues.
        </p>

        <h2>Article 7 — Délais et planning</h2>
        <p>
          Les délais indiqués dans le devis sont donnés à titre prévisionnel, sur la base des hypothèses connues au moment de la signature. Le Prestataire s'engage à tout mettre en œuvre pour les respecter.
        </p>
        <p>
          Aucun retard, quel qu'il soit, ne peut donner lieu à annulation de la commande, retenue, déduction ou indemnité, sauf accord écrit préalable du Prestataire.
        </p>
        <p>Les délais sont suspendus dans les cas suivants :</p>
        <ul>
          <li>Retard ou défaut d'information de la part du Client.</li>
          <li>Demande de modification du périmètre initial.</li>
          <li>Cas de force majeure au sens de l'article 1218 du Code civil.</li>
        </ul>

        <h2>Article 8 — Recette et livraison</h2>

        <h3>8.1 Procédure de recette</h3>
        <p>
          À l'issue du développement, le Prestataire remet au Client l'application et organise une session de recette. Le Client dispose d'un délai de <strong>10 jours ouvrés</strong> pour tester l'application et formuler d'éventuelles remarques écrites.
        </p>

        <h3>8.2 Acceptation tacite</h3>
        <p>
          À défaut de remarque écrite dans ce délai, l'application est réputée acceptée sans réserve par le Client. Le solde du prix devient exigible.
        </p>

        <h3>8.3 Corrections</h3>
        <p>
          Les anomalies signalées dans le délai de recette et relevant du périmètre initial sont corrigées par le Prestataire sans surcoût. Les demandes d'évolution hors périmètre font l'objet d'un devis complémentaire.
        </p>

        <h2>Article 9 — Propriété intellectuelle</h2>

        <h3>9.1 Cession</h3>
        <p>
          À compter du paiement intégral du prix, le Prestataire cède au Client, à titre exclusif et pour la durée légale de protection, l'ensemble des droits patrimoniaux de propriété intellectuelle afférents au code source de l'application livrée, pour tous modes d'exploitation connus ou à venir, dans le monde entier.
        </p>

        <h3>9.2 Remise du code source</h3>
        <p>
          Le code source de l'application est remis au Client à la livraison, dans un format permettant sa reprise et son évolution par tout prestataire tiers compétent.
        </p>

        <h3>9.3 Réserves</h3>
        <p>La cession ne porte pas sur :</p>
        <ul>
          <li>Les bibliothèques, frameworks et composants tiers open source ou sous licence, qui demeurent régis par leur licence d'origine.</li>
          <li>Le savoir-faire, la méthodologie et les outils internes du Prestataire, qui restent sa propriété exclusive.</li>
        </ul>

        <h3>9.4 Droit de référence</h3>
        <p>
          Le Client autorise le Prestataire, sauf clause de confidentialité renforcée expressément convenue, à :
        </p>
        <p>
          <strong>Utilisation libre (par défaut)</strong> : mentionner le nom du Client, son logo, son secteur d'activité et une description succincte du projet (nature de l'application, problème résolu) dans ses supports commerciaux (site web, portfolio, présentations, réseaux sociaux).
        </p>
        <p>
          <strong>Utilisation soumise à accord préalable</strong> : la publication de captures d'écran ou visuels de l'interface de l'application, d'études de cas détaillées, de témoignages attribués ou de citations du Client nécessite son accord écrit préalable. Le Client dispose de <strong>15 jours</strong> pour valider ou refuser la publication proposée. À défaut de réponse dans ce délai, la demande est réputée refusée.
        </p>
        <p>
          Dans tous les cas, le Prestataire s'engage à ne diffuser aucune donnée confidentielle, financière ou nominative des utilisateurs finaux du Client dans le cadre de ses communications.
        </p>

        <h2>Article 10 — Confidentialité</h2>
        <p>
          Chaque partie s'engage à considérer comme strictement confidentielles toutes les informations techniques, commerciales, financières ou stratégiques portées à sa connaissance dans le cadre du projet, et à ne pas les divulguer à des tiers sans autorisation écrite préalable.
        </p>
        <p>
          Cette obligation perdure pendant une durée de <strong>3 ans</strong> à compter de la fin de la relation contractuelle.
        </p>

        <h2>Article 11 — Garantie</h2>

        <h3>11.1 Garantie de conformité</h3>
        <p>
          Le Prestataire garantit pendant <strong>3 mois</strong> à compter de la livraison la conformité de l'application au cahier des charges signé. Toute anomalie bloquante signalée par écrit dans ce délai sera corrigée sans surcoût.
        </p>

        <h3>11.2 Exclusions</h3>
        <p>La garantie ne couvre pas :</p>
        <ul>
          <li>Les anomalies résultant d'une modification du code par le Client ou un tiers.</li>
          <li>Les anomalies résultant d'un usage non conforme à la documentation.</li>
          <li>Les évolutions fonctionnelles hors périmètre initial.</li>
          <li>Les dysfonctionnements liés à l'environnement technique du Client (serveur, base de données, services tiers).</li>
        </ul>

        <h2>Article 12 — Responsabilité</h2>
        <p>
          La responsabilité du Prestataire est limitée, tous chefs de préjudice confondus, au montant total hors taxes effectivement payé par le Client au titre de la prestation concernée.
        </p>
        <p>
          Le Prestataire ne saurait en aucun cas être tenu responsable des dommages indirects tels que perte de chiffre d'affaires, perte de clientèle, atteinte à l'image, perte de données.
        </p>

        <h2>Article 13 — Force majeure</h2>
        <p>
          Aucune des parties ne pourra être tenue responsable d'une inexécution de ses obligations résultant d'un cas de force majeure au sens de l'article 1218 du Code civil. La partie concernée informera l'autre dans les meilleurs délais.
        </p>
        <p>
          Si le cas de force majeure perdure au-delà de <strong>30 jours</strong>, chaque partie pourra résilier le contrat de plein droit, sans indemnité.
        </p>

        <h2>Article 14 — Résiliation</h2>

        <h3>14.1 Résiliation pour manquement</h3>
        <p>
          En cas de manquement grave d'une partie à ses obligations, non réparé dans un délai de <strong>15 jours</strong> suivant une mise en demeure restée sans effet, l'autre partie pourra résilier le contrat de plein droit.
        </p>

        <h3>14.2 Conséquences financières</h3>
        <p>
          En cas de résiliation imputable au Client, les sommes déjà versées restent acquises au Prestataire, et le Client reste redevable du prix des prestations déjà réalisées et non encore facturées.
        </p>

        <h2>Article 15 — Données personnelles</h2>
        <p>
          Dans le cadre de l'exécution du contrat, les parties peuvent être amenées à traiter des données personnelles. Elles s'engagent à respecter le RGPD et la loi Informatique et Libertés modifiée.
        </p>
        <p>
          Si le Prestataire est amené à traiter des données personnelles pour le compte du Client dans le cadre du projet, un accord de sous-traitance spécifique sera signé conformément à l'article 28 du RGPD.
        </p>
        <p>
          Les modalités de traitement des données personnelles collectées via le site software.botami-agency.com sont décrites dans la <a href="/politique-de-confidentialite" className="text-primary hover:underline">politique de confidentialité</a>.
        </p>

        <h2>Article 16 — Droit applicable et juridiction compétente</h2>
        <p>
          Les présentes CGV sont soumises au <strong>droit français</strong>.
        </p>
        <p>
          En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action contentieuse. À défaut d'accord, <strong>le Tribunal de commerce de Paris sera seul compétent</strong>, nonobstant pluralité de défendeurs, appel en garantie ou demande incidente.
        </p>

        <h2>Article 17 — Dispositions diverses</h2>
        <p>
          Si l'une des clauses des présentes CGV venait à être déclarée nulle ou inapplicable, les autres clauses resteraient pleinement en vigueur.
        </p>
        <p>
          Le fait pour le Prestataire de ne pas se prévaloir d'un manquement du Client à l'une des obligations des présentes CGV ne saurait être interprété comme une renonciation à s'en prévaloir ultérieurement.
        </p>

        <hr className="border-border my-8" />

        <p className="text-sm italic">
          Les présentes CGV sont disponibles à tout moment sur le site software.botami-agency.com et peuvent être communiquées sur simple demande à <a href="mailto:contact@botami-agency.com" className="text-primary hover:underline">contact@botami-agency.com</a>.
        </p>
      </div>
    </main>
    <Footer />
  </>
);

export default CGV;
