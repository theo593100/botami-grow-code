/**
 * Contenu SEO des 4 pages services dédiées.
 * Route : /[slug] (racine).
 */

import type { SrvSlug } from "@/content/home";

export type ServiceContent = {
  slug: SrvSlug;
  eyebrow: string;
  h1: { before: string; ital: string; after: string };
  intro: string;
  seo: {
    title: string;
    description: string;
    keywords: string;
    serviceName: string;
    serviceType: string;
  };
  contexte: {
    title: string;
    paragraphs: string[];
  };
  benefices: { title: string; body: string }[];
  casUsage: { secteur: string; exemple: string }[];
  livrables: string[];
  technos: { label: string; value: string }[];
  process: { n: string; title: string; desc: string }[];
  faq: { q: string; a: string }[];
};

export const services: Record<SrvSlug, ServiceContent> = {
  "applications-web-sur-mesure": {
    slug: "applications-web-sur-mesure",
    eyebrow: "Service · Développement d'applications web",
    h1: {
      before: "Applications ",
      ital: "web sur mesure",
      after: " pour PME.",
    },
    intro:
      "Nous concevons et développons des applications web métier qui remplacent vos SaaS, vos tableurs partagés et vos outils bricolés. Forfait à partir de 5 000 € HT, livraison en 4 à 8 semaines, code source transmis.",
    seo: {
      title: "Applications web sur mesure pour PME | Botami Software",
      description:
        "Développement d'applications web sur mesure : back-offices, espaces clients, outils internes. Forfait à partir de 5 000 € HT, livrées en 4 à 8 semaines, code source transmis.",
      keywords:
        "application web sur mesure, développement web PME, back-office sur mesure, espace client, outil interne, alternative SaaS",
      serviceName: "Applications web sur mesure",
      serviceType: "Développement d'application web sur mesure",
    },
    contexte: {
      title: "Quand une application web sur mesure devient pertinente",
      paragraphs: [
        "Vos processus ne rentrent plus dans un SaaS générique. Chaque équipe finit par contourner l'outil avec des fichiers Excel, des messages Slack et des exports manuels. Le coût réel n'est pas l'abonnement — c'est le temps perdu par vos collaborateurs à réconcilier des données que le logiciel ne sait pas gérer.",
        "Une application web sur mesure part du problème métier, pas d'un catalogue de fonctionnalités. Elle est conçue autour de votre vocabulaire, de vos règles de gestion et de vos utilisateurs réels. Elle s'exécute dans le navigateur, sans installation, accessible depuis tous vos sites et vos équipes en télétravail.",
        "Chez Botami Software, nous cadrons le projet pour vérifier qu'il justifie un développement sur mesure. Dans 60 % des cas, un SaaS existant suffit. Nous vous le disons dès le premier rendez-vous, sans facturer le cadrage.",
      ],
    },
    benefices: [
      {
        title: "Adaptation totale à vos processus",
        body: "Chaque écran reprend votre terminologie et vos règles métier. Les étapes que vous automatisez aujourd'hui à la main sont intégrées dans l'application.",
      },
      {
        title: "Fin de la location logicielle",
        body: "Vous payez le développement une fois. Aucun abonnement, aucun coût par utilisateur qui augmente avec la croissance de vos équipes.",
      },
      {
        title: "Propriété du code et des données",
        body: "Le dépôt Git, la base PostgreSQL et les accès serveur vous sont transmis à la livraison. Un autre prestataire peut reprendre le projet à tout moment.",
      },
      {
        title: "Hébergement souverain",
        body: "OVH ou Scaleway, en France. Vos données ne quittent pas le territoire national. Conformité RGPD intégrée dès la conception.",
      },
    ],
    casUsage: [
      { secteur: "Négoce & distribution", exemple: "Suivi des commandes, gestion des stocks multi-dépôts, portail revendeurs." },
      { secteur: "Formation & organismes", exemple: "Gestion des sessions, dossiers apprenants, exports Qualiopi." },
      { secteur: "Services aux entreprises", exemple: "Portail client, suivi de mission, facturation automatisée." },
      { secteur: "Immobilier & syndics", exemple: "Gestion des lots, tickets locataires, appels de fonds." },
      { secteur: "Santé & médico-social", exemple: "Planning des intervenants, dossier bénéficiaire, coordination terrain." },
      { secteur: "Industrie & production", exemple: "Suivi de production, traçabilité qualité, remontée d'indicateurs atelier." },
    ],
    livrables: [
      "Cahier des charges technique (offert au cadrage)",
      "Maquette cliquable validée avant développement",
      "Application web hébergée en France",
      "Code source complet et documentation technique",
      "Formation de vos équipes utilisatrices",
      "Trois mois de garantie post-livraison",
    ],
    technos: [
      { label: "Frontend", value: "React, TypeScript, Tailwind CSS" },
      { label: "Backend", value: "Node.js ou Python, PostgreSQL" },
      { label: "Hébergement", value: "OVH ou Scaleway (France)" },
      { label: "Sécurité", value: "Authentification, chiffrement, journalisation" },
    ],
    process: [
      { n: "01", title: "Cadrage", desc: "Compréhension du besoin, note de cadrage et cahier des charges technique offerts." },
      { n: "02", title: "Maquettage", desc: "Écrans à l'échelle réelle, prototype cliquable validé avant tout développement." },
      { n: "03", title: "Développement", desc: "Livraison incrémentale, démo hebdomadaire, ajustements en continu." },
      { n: "04", title: "Mise en production", desc: "Déploiement, formation, transfert du code source et de la documentation." },
    ],
    faq: [
      {
        q: "Combien coûte une application web sur mesure ?",
        a: "Nos projets démarrent à 5 000 € HT et plafonnent rarement au-delà de 25 000 € HT pour une V1 complète. Le devis est fixe : aucun dépassement caché. À titre de comparaison, un SaaS à 200 €/mois représente 7 200 € sur trois ans sans jamais devenir votre propriété.",
      },
      {
        q: "En combien de temps l'application est-elle livrée ?",
        a: "Comptez 4 à 8 semaines entre la validation du cahier des charges et la mise en production. Les premières démos utilisables sont disponibles dès la deuxième semaine de développement.",
      },
      {
        q: "L'application peut-elle se connecter à nos outils existants ?",
        a: "Oui : CRM, ERP, comptabilité, messagerie, e-signature. Nous branchons les API standard et développons les connecteurs manquants dans le forfait initial.",
      },
      {
        q: "Que se passe-t-il si nous changeons de prestataire ?",
        a: "Le code source, la base de données et l'hébergement sont chez vous. N'importe quel développeur maîtrisant React et PostgreSQL peut reprendre le projet, sans clause de retour ni royalties.",
      },
    ],
  },

  "applications-mobiles": {
    slug: "applications-mobiles",
    eyebrow: "Service · Applications mobiles iOS & Android",
    h1: {
      before: "Applications mobiles ",
      ital: "métier",
      after: " pour équipes terrain.",
    },
    intro:
      "Applications iOS et Android développées à partir d'une seule base de code, pour vos techniciens, commerciaux itinérants et opérateurs logistiques. Nous construisons des outils métier, pas des applications grand public.",
    seo: {
      title: "Applications mobiles sur mesure iOS & Android | Botami Software",
      description:
        "Développement d'applications mobiles métier iOS et Android. Techniciens, commerciaux, logistique. Forfait à partir de 5 000 € HT, livrées en 4 à 8 semaines.",
      keywords:
        "application mobile sur mesure, développement iOS Android, application terrain, application commerciaux, React Native, application PME",
      serviceName: "Applications mobiles sur mesure",
      serviceType: "Développement d'application mobile iOS et Android",
    },
    contexte: {
      title: "Pourquoi une application mobile métier plutôt qu'un SaaS",
      paragraphs: [
        "Vos équipes terrain sont limitées par des interfaces conçues pour le bureau. Le formulaire ouvert dans un navigateur, l'export Excel envoyé par mail le soir, la double saisie entre le PDA et le logiciel de facturation : chaque étape est un délai supplémentaire avant qu'une donnée fiable arrive dans votre système central.",
        "Une application mobile métier est pensée pour un usage sur téléphone ou tablette, en environnement contraint : gants, luminosité, réseau intermittent, gestes rapides. Elle synchronise les données dès que la connexion revient, et remonte l'information en temps réel dans votre back-office.",
        "Nous développons en React Native : une seule base de code pour iOS et Android, un temps de développement réduit et une maintenance simplifiée. Le résultat visuel et les performances restent équivalents à un développement natif.",
      ],
    },
    benefices: [
      {
        title: "Mode hors-ligne natif",
        body: "L'application continue de fonctionner sans réseau. Les données remontent automatiquement dès que la connexion est rétablie.",
      },
      {
        title: "Une seule base de code",
        body: "iOS et Android maintenus ensemble. Une évolution développée une fois, disponible sur les deux plateformes en même temps.",
      },
      {
        title: "Intégration à vos systèmes",
        body: "Synchronisation avec votre ERP, votre CRM ou votre logiciel de facturation. Vos équipes bureau et terrain travaillent sur la même donnée.",
      },
      {
        title: "Publication sur les stores",
        body: "Nous gérons la mise en ligne sur l'App Store et Google Play, ou la distribution en interne via MDM pour un usage strictement professionnel.",
      },
    ],
    casUsage: [
      { secteur: "Maintenance & SAV", exemple: "Fiche intervention, photos, signature client, rapport automatique." },
      { secteur: "Commerciaux itinérants", exemple: "Catalogue produits, prise de commande, consultation du CRM." },
      { secteur: "Logistique & livraison", exemple: "Scan des colis, preuve de livraison, optimisation de tournées." },
      { secteur: "Contrôle qualité", exemple: "Check-lists, remontée d'anomalies, tableau de bord temps réel." },
      { secteur: "BTP & installation", exemple: "Suivi de chantier, pointage, gestion des équipes sur site." },
      { secteur: "Aide à la personne", exemple: "Planning intervenants, pointage GPS, notes de visite." },
    ],
    livrables: [
      "Cahier des charges technique (offert au cadrage)",
      "Maquettes cliquables iOS et Android",
      "Application publiée sur l'App Store et Google Play",
      "Back-office web associé pour vos équipes bureau",
      "Code source React Native et documentation",
      "Formation et trois mois de garantie",
    ],
    technos: [
      { label: "Mobile", value: "React Native (iOS + Android)" },
      { label: "Backend", value: "Node.js ou Python, PostgreSQL" },
      { label: "Hors-ligne", value: "Synchronisation locale, résolution de conflits" },
      { label: "Notifications", value: "Push iOS (APNs) et Android (FCM)" },
    ],
    process: [
      { n: "01", title: "Cadrage terrain", desc: "Observation des usages réels, contraintes matérielles et réseau." },
      { n: "02", title: "Maquettage mobile", desc: "Prototype interactif testé sur téléphone et tablette." },
      { n: "03", title: "Développement", desc: "Versions internes testables dès la deuxième semaine." },
      { n: "04", title: "Publication & formation", desc: "Mise en ligne stores, formation utilisateurs, code source transmis." },
    ],
    faq: [
      {
        q: "iOS et Android sont-ils facturés séparément ?",
        a: "Non. Grâce à React Native, un seul développement couvre les deux plateformes. Une évolution développée une fois est disponible simultanément sur iOS et Android.",
      },
      {
        q: "L'application fonctionne-t-elle sans réseau ?",
        a: "Oui, le mode hors-ligne est natif. Les saisies sont stockées localement et synchronisées avec votre back-office dès que la connexion est rétablie.",
      },
      {
        q: "Prenez-vous en charge la publication sur les stores ?",
        a: "Oui. Nous préparons les fiches, gérons la soumission à Apple et Google, et prenons en charge les allers-retours de validation.",
      },
      {
        q: "Peut-on distribuer l'application uniquement en interne ?",
        a: "Oui, via un MDM (Mobile Device Management) ou une distribution ad hoc. Utile pour les usages strictement professionnels sans publication publique.",
      },
    ],
  },

  "refonte-outils-internes": {
    slug: "refonte-outils-internes",
    eyebrow: "Service · Refonte de logiciels métier",
    h1: {
      before: "Refonte d'",
      ital: "outils métiers",
      after: " sans interruption de service.",
    },
    intro:
      "Votre logiciel métier historique fait tourner l'entreprise mais devient un frein. Nous le réécrivons progressivement, sans arrêter l'exploitation, en préservant vos données et vos processus.",
    seo: {
      title: "Refonte d'outils métiers & logiciels internes | Botami Software",
      description:
        "Refonte de logiciels métier vieillissants sans interruption de service. Migration progressive, préservation des données, code source transmis. Forfait à partir de 5 000 € HT.",
      keywords:
        "refonte logiciel métier, modernisation logiciel interne, migration progressive, refonte ERP, refactoring, remplacement logiciel legacy",
      serviceName: "Refonte d'outils métiers",
      serviceType: "Modernisation et refonte de logiciel interne",
    },
    contexte: {
      title: "Quand un outil interne doit être refondu",
      paragraphs: [
        "L'outil a été développé il y a dix ou quinze ans. Il tourne, mais chaque évolution demande des semaines, le développeur d'origine n'est plus là, la documentation est incomplète et vos équipes contournent les limites avec des scripts Excel et des mails. La technologie est datée, la sécurité fragilisée, et le moindre bug bloque des dizaines de collaborateurs.",
        "Une refonte ne signifie pas tout jeter et reconstruire d'un bloc. Nous procédons par périmètres fonctionnels : nous identifions le module le plus critique, nous le réécrivons avec vos utilisateurs, nous le mettons en production. L'ancien outil continue de tourner en parallèle, jusqu'à ce que le nouveau prenne le relais complet.",
        "Cette approche progressive préserve l'exploitation quotidienne, limite le risque et permet de valider la valeur ajoutée à chaque étape. Le budget est étalé, les équipes sont formées au fur et à mesure, et la reprise des données est maîtrisée.",
      ],
    },
    benefices: [
      {
        title: "Continuité d'exploitation",
        body: "Aucune interruption. L'ancien outil et le nouveau cohabitent pendant la transition. Vos équipes basculent progressivement.",
      },
      {
        title: "Reprise des données maîtrisée",
        body: "Extraction, nettoyage, migration et vérification. Chaque table est validée avant bascule. Aucune donnée n'est perdue.",
      },
      {
        title: "Modernisation de la stack",
        body: "Fin des technologies obsolètes. Passage à une stack standard maintenue par la communauté et facilement transmissible.",
      },
      {
        title: "Fin de la dépendance au sachant",
        body: "Documentation à jour, code lisible, dépôt Git remis. Vos futurs prestataires reprennent le projet sans zone d'ombre.",
      },
    ],
    casUsage: [
      { secteur: "Access & FileMaker", exemple: "Migration vers une application web moderne, préservation des règles métier." },
      { secteur: "VB6 & anciens ERP", exemple: "Réécriture progressive module par module, sécurisation des données." },
      { secteur: "Applications PHP anciennes", exemple: "Passage à une architecture moderne, sécurité mise à niveau." },
      { secteur: "Excel critique", exemple: "Fichier de pilotage devenu incontournable, migré vers une vraie application." },
      { secteur: "Logiciels métier abandonnés", exemple: "Éditeur disparu, plus de support : reprise et modernisation." },
      { secteur: "SaaS trop rigides", exemple: "Réinternalisation d'une brique clé, adaptée à vos processus réels." },
    ],
    livrables: [
      "Audit technique et fonctionnel de l'existant",
      "Plan de migration progressif validé avec vos équipes",
      "Application refondue, module après module",
      "Reprise et vérification des données historiques",
      "Documentation technique et fonctionnelle complète",
      "Formation des utilisateurs et des administrateurs",
    ],
    technos: [
      { label: "Frontend", value: "React, TypeScript" },
      { label: "Backend", value: "Node.js ou Python, PostgreSQL" },
      { label: "Migration", value: "Scripts ETL, contrôle d'intégrité, historisation" },
      { label: "Cohabitation", value: "APIs de synchronisation entre ancien et nouveau système" },
    ],
    process: [
      { n: "01", title: "Audit", desc: "Cartographie technique et fonctionnelle. Identification des modules critiques." },
      { n: "02", title: "Plan de migration", desc: "Découpage par périmètre, priorisation avec les utilisateurs." },
      { n: "03", title: "Refonte progressive", desc: "Un module réécrit, testé et mis en production à la fois." },
      { n: "04", title: "Bascule complète", desc: "Décommissionnement de l'ancien outil, transmission du dépôt." },
    ],
    faq: [
      {
        q: "Faut-il tout arrêter pendant la refonte ?",
        a: "Non. Nous travaillons par périmètres fonctionnels. L'ancien outil continue de fonctionner tant que le nouveau ne le remplace pas totalement. Vos équipes basculent progressivement.",
      },
      {
        q: "Que devient la donnée historique ?",
        a: "Elle est extraite, nettoyée, migrée et vérifiée. Chaque bascule inclut un contrôle d'intégrité. Vous conservez un historique complet et exportable.",
      },
      {
        q: "Combien de temps prend une refonte complète ?",
        a: "Un premier module utilisable est livré en 4 à 8 semaines. Une refonte complète s'étale généralement sur 3 à 12 mois selon le nombre de modules et la complexité des règles métier.",
      },
      {
        q: "Que faire si l'éditeur d'origine a disparu ?",
        a: "Nous partons du logiciel en fonctionnement, de la base de données et des interviews utilisateurs. Nous reconstituons les règles métier même sans documentation d'origine.",
      },
    ],
  },

  "integrations-automatisations": {
    slug: "integrations-automatisations",
    eyebrow: "Service · Intégrations & automatisations",
    h1: {
      before: "Intégrations & ",
      ital: "automatisations",
      after: " sur périmètre précis.",
    },
    intro:
      "Connectez votre CRM à votre ERP, automatisez la facturation, intégrez une API. Interventions au forfait sur un périmètre défini, livrées en 2 à 4 semaines.",
    seo: {
      title: "Intégrations d'API & automatisations sur mesure | Botami Software",
      description:
        "Intégrations CRM-ERP, automatisation de facturation, connecteurs d'API. Interventions au forfait livrées en 2 à 4 semaines. Code et documentation transmis.",
      keywords:
        "intégration API, automatisation processus, connecteur CRM ERP, automatisation facturation, RPA, iPaaS, intégration sur mesure",
      serviceName: "Intégrations et automatisations",
      serviceType: "Intégration d'API et automatisation de processus",
    },
    contexte: {
      title: "Quand automatiser plutôt que refaire",
      paragraphs: [
        "Vous n'avez pas besoin d'une nouvelle application. Vous avez besoin que vos outils actuels se parlent. Chaque semaine, un collaborateur exporte des données d'un logiciel pour les réimporter dans un autre. Chaque saisie est une source d'erreur, chaque retard est un client mécontent.",
        "Une intégration bien conçue supprime la double saisie, réduit les délais et fiabilise la donnée. Elle se glisse entre vos outils existants sans les remplacer : votre CRM alimente automatiquement votre ERP, vos ventes déclenchent la facturation, vos formulaires web créent des dossiers dans votre back-office.",
        "Nous intervenons au forfait sur un périmètre défini à l'avance. Chaque flux automatisé est documenté, testé et supervisé. Vous conservez la main sur la configuration et pouvez faire évoluer les règles sans faire appel à nous.",
      ],
    },
    benefices: [
      {
        title: "Suppression des doubles saisies",
        body: "Vos outils échangent automatiquement les données. Fini les exports Excel du vendredi soir et les corrections du lundi matin.",
      },
      {
        title: "Fiabilité et traçabilité",
        body: "Chaque flux est journalisé. En cas d'anomalie, vous savez exactement où et pourquoi. Les erreurs sont notifiées.",
      },
      {
        title: "Livraison rapide",
        body: "Interventions au forfait livrées en 2 à 4 semaines. Périmètre défini au cadrage, résultat validé sur vos données réelles.",
      },
      {
        title: "Autonomie post-livraison",
        body: "Documentation claire, interface d'administration, journaux d'exécution. Vous gérez la configuration au quotidien.",
      },
    ],
    casUsage: [
      { secteur: "CRM → ERP", exemple: "Chaque opportunité gagnée crée automatiquement le bon de commande et la fiche client." },
      { secteur: "Facturation automatisée", exemple: "Génération, envoi et relance des factures à partir de votre logiciel de gestion." },
      { secteur: "Formulaires web → back-office", exemple: "Les leads captés créent un dossier structuré avec assignation automatique." },
      { secteur: "Comptabilité automatisée", exemple: "Écritures comptables générées et transmises à votre expert-comptable." },
      { secteur: "Alertes métier", exemple: "Notifications ciblées sur événements critiques : stock, retard, dépassement de seuil." },
      { secteur: "Reporting consolidé", exemple: "Tableau de bord unique qui agrège plusieurs sources de données." },
    ],
    livrables: [
      "Cartographie des flux et périmètre validé",
      "Connecteurs et scripts d'automatisation",
      "Interface d'administration et journaux d'exécution",
      "Documentation technique et procédure d'exploitation",
      "Formation à la supervision et aux ajustements courants",
      "Trois mois de garantie sur les flux livrés",
    ],
    technos: [
      { label: "APIs", value: "REST, GraphQL, SOAP, Webhooks" },
      { label: "Orchestration", value: "Node.js, Python, n8n auto-hébergé" },
      { label: "Formats", value: "JSON, XML, CSV, EDI" },
      { label: "Supervision", value: "Journaux, alertes, tableau de bord d'état" },
    ],
    process: [
      { n: "01", title: "Cadrage des flux", desc: "Identification des sources, cibles, règles et volumétrie. Périmètre chiffré." },
      { n: "02", title: "Prototype", desc: "Premier flux implémenté et testé sur un échantillon de vos données réelles." },
      { n: "03", title: "Développement", desc: "Connecteurs, orchestration et supervision. Validation flux par flux." },
      { n: "04", title: "Mise en production", desc: "Bascule, monitoring, formation. Documentation et code transmis." },
    ],
    faq: [
      {
        q: "Peut-on connecter n'importe quel logiciel ?",
        a: "Si le logiciel expose une API (même ancienne), oui. Si aucune API n'existe, nous étudions d'autres voies : exports programmés, base de données, RPA. Le cadrage définit la faisabilité.",
      },
      {
        q: "Combien coûte une intégration ?",
        a: "Selon le nombre de flux et leur complexité, une intervention démarre à 3 000 € HT pour un flux simple et bien documenté. La plupart des projets se situent entre 5 000 et 10 000 € HT.",
      },
      {
        q: "Que se passe-t-il si l'API cible change ?",
        a: "Nous surveillons les changements pendant la garantie et adaptons le connecteur. Au-delà, nous intervenons au forfait sur périmètre précis ou au tarif horaire selon vos préférences.",
      },
      {
        q: "L'automatisation remplace-t-elle une intégration native ?",
        a: "Souvent, oui, et pour bien moins cher qu'une brique dédiée éditeur. Nous validons cette pertinence au cadrage : nous ne développons que si c'est la meilleure option pour vous.",
      },
    ],
  },
};

/** Chemin racine (/[slug]) associé à chaque service. */
export const servicePath = (slug: SrvSlug) => `/${slug}`;
