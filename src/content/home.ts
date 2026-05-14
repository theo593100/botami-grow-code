/**
 * Copy externalisée — Home Botami Software
 *
 * Source de vérité du copywriting de la home. Toute modification de texte
 * passe par ce fichier ; les composants ne contiennent aucun string littéral
 * (sauf attributs structurels).
 *
 * Conformité KB :
 *  - Pricing : « à partir de 5 000 € HT » (décision #pricing-public, mai 2026)
 *  - Email   : contact@botami-agency.com
 *  - Tél     : non affiché (en attente, ne pas inventer)
 *  - Théo    : non exposé en nom public (contrainte CSP)
 *  - Stats   : valeurs vérifiables uniquement ; pas de « 17 apps livrées » inventées
 */

export type SrvSlug =
  | "applications-web-sur-mesure"
  | "applications-mobiles"
  | "refonte-outils-internes"
  | "integrations-automatisations";

export type SituationKey =
  | "projet"
  | "remplacer-saas"
  | "refonte"
  | "avis";

export const home = {
  /* ============ HEADER ============ */
  header: {
    nav: [
      { label: "Services", href: "#services" },
      { label: "Méthode", href: "#methode" },
      { label: "Réalisations", href: "#realisations" },
      { label: "FAQ", href: "#faq" },
    ],
    loginLabel: "Connexion client",
    ctaLabel: "Démarrer un projet",
    brandName: "Botami",
    brandSuffix: "Software",
  },

  /* ============ HERO ============ */
  hero: {
    eyebrow: "— 00 / Studio sur mesure · Nîmes",
    h1: {
      before: "On code ",
      ital: "ce que vous",
      after: "utilisez vraiment.",
    },
    subline: "Le reste, on vous fait économiser.",
    pricingPill: {
      text: "Forfait à partir de ",
      strong1: "5 000 € HT",
      mid: " · livré en ",
      strong2: "4 à 8 semaines",
      caption: "Pas d'abonnement",
    },
    lead:
      "Botami Software développe des applications web et mobile sur mesure pour les PME françaises. Vous payez une fois. Le code vous appartient.",
    secondaryCta: { label: "Voir nos réalisations", href: "#realisations" },
    availability: "Créneaux dispo · T3 2026",
    stats: [
      { num: "4–8", unit: " sem.", lbl: "Délai moyen de livraison" },
      { num: "100", unit: "%", lbl: "Code source transmis" },
      { num: "0", unit: "", lbl: "Abonnement après livraison" },
    ],
  },

  /* ============ SERVICES ============ */
  services: {
    secNum: "— 01 / Services",
    title: {
      before: "Quatre formats, ",
      ital: "une seule promesse",
      after: " : ça marche le jour de la livraison.",
    },
    right:
      "Chaque projet commence par un cadrage gratuit. Si on n'est pas la bonne réponse, on vous le dit avant le devis.",
    items: [
      {
        index: "01",
        slug: "applications-web-sur-mesure" as SrvSlug,
        title: "Applications web sur mesure",
        desc: "Outils internes, back-offices, espaces clients. On remplace votre Excel partagé ou votre Notion qui craque par une vraie app, sécurisée et hébergée chez vous si besoin.",
      },
      {
        index: "02",
        slug: "applications-mobiles" as SrvSlug,
        title: "Applications mobiles",
        desc: "iOS & Android, une seule base de code. Pour les équipes terrain, les commerciaux itinérants, les opérateurs logistique — pas pour faire un Uber concurrent.",
      },
      {
        index: "03",
        slug: "refonte-outils-internes" as SrvSlug,
        title: "Refonte d'outils internes",
        desc: "Vous avez un logiciel métier vieux de 10 ans qui tient toute la boîte ? On le réécrit sans interruption de service. Migration progressive, données préservées.",
      },
      {
        index: "04",
        slug: "integrations-automatisations" as SrvSlug,
        title: "Intégrations & automatisations",
        desc: "Connecter votre CRM à votre ERP, automatiser une facturation, brancher une API. Travail au forfait sur périmètre précis, livré sous 2 à 4 semaines.",
      },
    ],
  },

  /* ============ ARGUMENTAIRE ============ */
  argu: {
    secNum: "— 02 / Ce qui change avec nous",
    h2: {
      l1Before: "Vous payez ",
      l1Ital: "100 %",
      l1After: " du prix.",
      l2Before: "Pour ",
      l2Ital: "10 %",
      l2After: " des fonctionnalités.",
    },
    quote: {
      text: "Les SaaS facturent dix outils dont vous en utilisez un. On code le seul qui vous sert. Et on s'arrête là.",
      author: "Elias",
      role: "Co-fondateur · Botami Software",
    },
    body: [
      "Les SaaS sont conçus pour 10 000 boîtes différentes. Vous payez chaque mois pour 90 % de features qui ne vous servent à rien — et le jour où vous arrêtez l'abonnement, tout disparaît.",
      "Une app sur mesure coûte le prix de 18 mois d'abonnement SaaS. Sauf qu'au bout de 18 mois, vous ne payez plus rien. Et le code est à vous.",
    ],
    pillars: [
      {
        icon: "€",
        title: "Forfait, pas d'abonnement",
        body: "Devis fixe. Paiement en 3 fois. Aucun coût récurrent au-delà de l'hébergement (~30 €/mois).",
      },
      {
        icon: "</>",
        iconMono: true,
        title: "Le code vous appartient",
        body: "Sources, dépôt git, droits de propriété intellectuelle — transférés à la livraison. Sans clause de retour.",
      },
      {
        icon: "⌁",
        title: "Livré vite, vraiment",
        body: "4 à 8 semaines pour un MVP fonctionnel. Pas 6 mois de découverte, pas de roadmap glissante.",
      },
    ],
  },

  /* ============ SOUVERAINETÉ (section dédiée — copy à venir de la session copywriting) ============ */
  souverainete: {
    secNum: "— 06 / Souveraineté",
    // [COPY] Titre + lead en attente de la session copywriting.
    // Structure à conserver : titre avec un mot en italique ambre + lead 1-2 lignes.
    title: {
      before: "Votre app. Vos données. ",
      ital: "Votre destin.",
      after: "",
    },
    lead: "[COPY À VENIR] Promesse de souveraineté Botami : pourquoi on refuse l'empilement d'API étrangères et ce que ça change concrètement pour vos données.",
    cards: [
      {
        key: "propriete",
        icon: "{ }",
        iconMono: true,
        title: "Propriété du code & des données",
        body: "[COPY À VENIR] Sources, dépôt git, droits PI transférés à la livraison. Vos données restent chez vous, exportables à tout moment, sans clause de retour.",
      },
      {
        key: "hebergement-fr",
        // Drapeau FR utilisé en pictogramme. Implémenté en SVG inline dans le composant.
        icon: "FLAG_FR",
        title: "Hébergement français",
        body: "[COPY À VENIR] OVH ou Scaleway en France. Pas de transfert hors UE, pas de Cloud Act, pas de question à se poser le jour d'un audit.",
      },
      {
        key: "rgpd",
        icon: "RGPD",
        title: "RGPD natif",
        body: "[COPY À VENIR] Conformité RGPD intégrée dès la conception : registre des traitements, droit à l'effacement, journal d'accès. Pas de contorsion après coup.",
      },
      {
        key: "rgaa-rse",
        icon: "♿",
        title: "Accessibilité & démarche RSE",
        body: "[COPY À VENIR] Code livré aux standards RGAA. Stack sobre, dépendances minimales, empreinte serveur mesurée.",
      },
    ],
    cta: {
      label: "[COPY] En savoir plus sur notre engagement",
      // Page dédiée prévue en V2. En attendant : ancre vers le contact.
      href: "#contact",
    },
  },

  /* ============ RÉALISATIONS ============ */
  realisations: {
    secNum: "— 03 / Réalisations",
    title: {
      before: "Projets récents. ",
      ital: "Trois métiers",
      after: ", zéro template.",
    },
    rightLinkLabel: "Voir toutes les études de cas →",
    rightLinkHref: "/etude-de-cas",
    cards: [
      {
        size: "large" as const,
        category: "Transport sanitaire",
        client: "Transitions Pro",
        result: "÷ 3 le temps de traitement",
        sketch: "dashboard" as const,
      },
      {
        size: "small" as const,
        category: "Matériel médical",
        client: "Ergosanté",
        result: "+ 40 % de devis signés",
        sketch: "form" as const,
      },
      {
        size: "small" as const,
        category: "Immobilier · Paris",
        client: "Des Murs à Paris",
        result: "SaaS remplacé : 14 k€/an",
        sketch: "list" as const,
      },
    ],
  },

  /* ============ BANDEAU CHARBON (clients + stats) ============ */
  bandeau: {
    secNum: "— 04 / Clients",
    h2: "Ils ont arrêté de payer pour ne pas l'utiliser.",
    linkLabel: "Voir les études de cas →",
    linkHref: "/etude-de-cas",
    marquee: [
      "Transitions Pro",
      "Ergosanté",
      "Des Murs à Paris",
      "JD Group",
      "BlackFox",
      "Notaires de France",
      "Skin Caféine",
      "Mademoiselle Provence",
      "ProArti",
      "Skills Communication",
      "St-Aubin Avocats",
      "Libr'alerte",
    ],
    stats: [
      {
        num: "÷ 6",
        lbl: "le coût de l'outillage logiciel sur 3 ans",
        src: "Source · audit clients Botami",
      },
      {
        num: "× 3",
        lbl: "la vitesse de traitement des dossiers terrain",
        src: "Source · cas Transitions Pro",
      },
      {
        num: "+ 100 %",
        lbl: "de propriété sur le code, les données, le destin de l'app",
        src: "Source · contrat type Botami",
      },
    ],
  },

  /* ============ MÉTHODE (papier) ============ */
  methode: {
    secNum: "— 05 / Méthode",
    title: {
      before: "Cinq étapes. ",
      ital: "Pas une de plus.",
      after: "",
    },
    right:
      "Notre processus tient sur une page A4. On l'envoie en clair dès le premier rendez-vous, devis compris.",
    paperTitle: "Du brief à la mise en prod, sans surprise.",
    paperDocMeta: { strong: "Document · Méthode V2.1", line: "Botami Software · Nîmes" },
    steps: [
      {
        n: "01",
        title: "Cadrage",
        desc: "On comprend votre métier, on identifie les vrais points de friction. On vous dit franchement si une appli sur mesure est la bonne réponse — ou pas.",
        duration: "3 à 5 jours",
        deliverable: "Note de cadrage",
        cost: "Gratuit",
      },
      {
        n: "02",
        title: "Maquettage",
        desc: "On dessine chaque écran à l'échelle réelle, avec votre vrai vocabulaire métier. Vous validez avant qu'on touche au code.",
        duration: "1 à 2 semaines",
        deliverable: "Maquette cliquable",
        cost: "Inclus forfait",
      },
      {
        n: "03",
        title: "Développement",
        desc: "On livre une version utilisable chaque semaine. Vous testez, on ajuste. Pas de « big reveal » à la fin du projet.",
        duration: "3 à 6 semaines",
        deliverable: "Démos hebdo",
        cost: "Inclus forfait",
      },
      {
        n: "04",
        title: "Mise en prod",
        desc: "Déploiement sur votre serveur ou le nôtre. Formation de vos équipes, doc technique remise. Transfert du dépôt git en clair.",
        duration: "3 à 5 jours",
        deliverable: "App en prod + sources",
        cost: "Inclus forfait",
      },
      {
        n: "05",
        title: "Suivi (optionnel)",
        desc: "Trois mois de garantie inclus. Au-delà, contrat de maintenance au tarif horaire, sans engagement de durée — vous arrêtez quand vous voulez.",
        duration: "∞",
        deliverable: "SLA si demandé",
        cost: "Garantie offerte",
      },
    ],
    footTextBefore: "Pas sûr ",
    footTextIta: "qu'une appli",
    footTextAfter: " soit la bonne réponse ?",
    footCta: { label: "Demander un audit", href: "#contact" },
  },

  /* ============ FAQ ============ */
  faq: {
    secNum: "— 07 / FAQ",
    title: {
      before: "Les questions ",
      ital: "qu'on nous pose",
      after: " avant de signer.",
    },
    items: [
      {
        q: "Combien ça coûte vraiment, une application sur mesure ?",
        a: "Nos projets démarrent à 5 000 € HT et plafonnent rarement au-delà de 25 000 € HT pour une V1 complète. Le devis est fixe — pas de dépassement caché. À titre de comparaison, un SaaS à 200 €/mois représente 7 200 € sur 3 ans, sans jamais devenir votre propriété.",
      },
      {
        q: "Vous travaillez avec quelles technologies ?",
        a: "Stack moderne et standard : React/TypeScript côté front, PostgreSQL + Node ou Python côté back, hébergement OVH ou Scaleway en France. Rien d'exotique : si vous changez de prestataire demain, n'importe quel développeur peut reprendre le projet.",
      },
      {
        q: "Et si on a besoin d'évolutions après la livraison ?",
        a: "Vous avez le code source et un guide technique. Vous pouvez faire faire les évolutions par n'importe qui — y compris en interne. Si vous préférez qu'on s'en charge, on travaille au forfait sur périmètre précis ou au tarif horaire, sans engagement.",
      },
      {
        q: "Pourquoi ne pas prendre un SaaS générique du marché ?",
        a: "Pour 60 % des cas, un SaaS suffit largement et coûte moins cher à court terme. On vous le dit franchement lors du cadrage. Le sur-mesure devient pertinent quand vos process sont spécifiques, quand vous payez plusieurs SaaS qui se chevauchent, ou quand vous voulez retrouver le contrôle de vos données.",
      },
      {
        q: "Comment se passe le transfert du code à la fin du projet ?",
        a: "Le dépôt git, les accès serveur, la documentation technique et les droits de propriété intellectuelle sont transférés à la livraison. Sans clause de retour, sans royalties, sans aucune dépendance contractuelle envers Botami.",
      },
      {
        q: "Êtes-vous éligibles au crédit d'impôt innovation (CII) ?",
        a: "Les développements sur mesure peuvent ouvrir droit au CII selon le projet et votre secteur. On vous oriente vers un cabinet partenaire spécialisé si pertinent — Botami ne facture pas la prestation comme « R&D » par défaut.",
      },
    ],
  },

  /* ============ CONTACT ============ */
  contact: {
    secNum: "— 08 / Contact",
    title: {
      before: "Parlons de ",
      ital: "votre projet.",
      after: "",
    },
    lead: "Un échange de 30 minutes, sans engagement. On vous dit franchement si on peut aider — et combien ça coûterait.",
    info: [
      { label: "Email", value: "contact@botami-agency.com", href: "mailto:contact@botami-agency.com" },
      { label: "Lieu", value: "Nîmes, France", secondary: "Sur rendez-vous · présentiel ou visio" },
      { label: "Réponse", value: "Sous 24 h ouvrées", secondary: "Souvent moins." },
    ],
    form: {
      legendSituation: "Votre situation",
      situations: [
        { key: "projet" as SituationKey, label: "J'ai un projet d'app" },
        { key: "remplacer-saas" as SituationKey, label: "Je veux remplacer un SaaS" },
        { key: "refonte" as SituationKey, label: "J'ai un outil interne à refondre" },
        { key: "avis" as SituationKey, label: "Je veux juste un avis" },
      ],
      labels: {
        prenom: "Prénom",
        email: "Email pro",
        entreprise: "Entreprise",
        message: "Décrivez votre besoin",
      },
      placeholders: {
        prenom: "Camille",
        email: "camille@entreprise.fr",
        entreprise: "Nom de la société",
        message: "Quelques lignes suffisent — on rappelle pour creuser.",
      },
      submitLabel: "Demander un diagnostic gratuit",
      fineprint: "Réponse sous 24 h ouvrées · Aucune donnée transmise à des tiers",
      successTitle: "Merci.",
      successBody: "On revient vers vous sous 24 h ouvrées.",
    },
  },

  /* ============ FOOTER ============ */
  footer: {
    tagline: "Applications sur mesure pour PME. Livrées en semaines. À vous pour toujours.",
    columns: [
      {
        title: "Services",
        links: [
          { label: "Applications web", href: "#services" },
          { label: "Applications mobiles", href: "#services" },
          { label: "Refonte d'outils", href: "#services" },
          { label: "Intégrations", href: "#services" },
        ],
      },
      {
        title: "Secteurs",
        links: [
          { label: "Santé & médical", href: "#realisations" },
          { label: "Immobilier", href: "#realisations" },
          { label: "Transport & logistique", href: "#realisations" },
          { label: "Industrie & négoce", href: "#realisations" },
        ],
      },
      {
        title: "Botami",
        links: [
          { label: "Réalisations", href: "#realisations" },
          { label: "Méthode", href: "#methode" },
          { label: "Contact", href: "#contact" },
          { label: "Mentions légales", href: "/mentions-legales" },
        ],
      },
    ],
    bottomLeft: "© 2026 BOTA-AG · NÎMES",
    bottomRight: "CONTACT@BOTAMI-AGENCY.COM",
    bottomRightHref: "mailto:contact@botami-agency.com",
  },
} as const;

export type HomeContent = typeof home;
