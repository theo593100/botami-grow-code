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
    eyebrow: "— 00 / Agence Vibe coding · Paris · Nîmes · Lille",
    h1: {
      before: "Votre ",
      ital: "application sur mesure",
      after: " en 4 semaines.",
    },
    subline:
      "Botami Software conçoit des applications web et mobiles pour les PME. Vous investissez une fois : le code vous appartient.",
    pricingPill: {
      text: "Forfait à partir de ",
      strong1: "5 000 € HT",
      mid: " · délai de ",
      strong2: "4 à 8 semaines",
      caption: "Sans abonnement",
    },
    lead: "",
    secondaryCta: { label: "Voir nos réalisations", href: "#realisations" },
    availability: "Disponibilité · T3 2026",
    stats: [
      { num: "4–8", unit: " sem.", lbl: "Délai moyen de livraison" },
      { num: "100", unit: "%", lbl: "Code source transmis" },
      { num: "0", unit: "", lbl: "dépendances après la livraison" },
    ],
  },

  /* ============ SERVICES ============ */
  services: {
    secNum: "— 01 / Services",
    title: {
      before: "Quatre formats, ",
      ital: "une promesse",
      after: " : une solution opérationnelle dès la livraison.",
    },
    right:
      "Chaque projet débute par la rédaction d'un cahier des charges technique par nos experts. Ce document vous est offert.",
    items: [
      {
        index: "01",
        slug: "applications-web-sur-mesure" as SrvSlug,
        title: "Applications web sur mesure",
        desc: "Outils internes, back-offices et espaces clients. Nous remplaçons vos tableurs partagés et vos outils limités par une application sécurisée, adaptée à vos processus et hébergée selon vos préférences.",
      },
      {
        index: "02",
        slug: "applications-mobiles" as SrvSlug,
        title: "Applications mobiles",
        desc: "iOS et Android à partir d'une seule base de code. À destination des équipes terrain, commerciaux itinérants et opérateurs logistiques — pour des outils métiers, non des applications grand public.",
      },
      {
        index: "03",
        slug: "refonte-outils-internes" as SrvSlug,
        title: "Refonte d'outils métiers",
        desc: "Votre logiciel métier historique fait tourner l'ensemble de l'entreprise ? Nous le réécrivons sans interruption de service, avec une migration progressive et la préservation de vos données.",
      },
      {
        index: "04",
        slug: "integrations-automatisations" as SrvSlug,
        title: "Intégrations & automatisations",
        desc: "Connectez votre CRM à votre ERP, automatisez une facturation ou intégrez une API. Interventions au forfait sur un périmètre précis, livrées en 2 à 4 semaines.",
      },
    ],
  },

  /* ============ ARGUMENTAIRE ============ */
  argu: {
    secNum: "— 02 / Le prix après l'IA",
    h2: {
      l1Before: "Les agences facturent encore ",
      l1Ital: "comme en 2018.",
      l1After: "",
      l2Before: "Nous répercutons les gains de ",
      l2Ital: "l'IA",
      l2After: " sur votre devis.",
    },
    quote: {
      text: "L'IA n'a pas remplacé l'expertise, mais elle a considérablement accéléré la documentation, les tests et le code répétitif. Au lieu de garder cette productivité en marge, nous la répercutons intégralement sur le devis. C'est pourquoi une application qui coûtait 30 000 € en agence traditionnelle démarre aujourd'hui à 5 000 € chez Botami.",
      author: "Elias",
      role: "Co-fondateur · Botami Software",
    },
    body: [
      "Les agences classiques facturent encore à la journée, comme si l'intelligence artificielle n'avait pas transformé la productivité du développement. Vous payez des heures de travail que l'IA réduit aujourd'hui de manière significative.",
      "Chez Botami Software, nous intégrons ces gains de productivité directement dans nos devis. Le résultat : une application sur mesure, livrée en 4 à 8 semaines, à un budget six fois inférieur à celui d'une agence traditionnelle — avec la même qualité et le transfert complet du code source.",
    ],
    pillars: [
      {
        icon: "✦",
        title: "Développement assisté par l'IA",
        body: "L'IA accélère les tâches répétitives. L'architecture, la sécurité et la compréhension métier restent 100 % humaines.",
      },
      {
        icon: "÷6",
        iconMono: true,
        title: "Coûts divisés par six",
        body: "Les gains de productivité sont répercutés sur le devis. Pas de marge cachée, pas de journée facturée inutilement.",
      },
      {
        icon: "⌁",
        title: "Délai maîtrisé",
        body: "Cahier des charges, développement, recette et mise en production dans un calendrier défini.",
      },
    ],
  },

  /* ============ SOUVERAINETÉ (section dédiée) ============
   * Copy intégrée mot pour mot depuis le brief copywriting (14 mai).
   * Référence durable : marketing/positionnement-souverainete.md
   */
  souverainete: {
    eyebrow: "RGPD & souveraineté numérique",
    h2: "Votre logiciel, vos données, votre infrastructure.",
    lead: "Nous développons et hébergeons en France. Chaque solution construite vous appartient.",
    points: [
      {
        key: "propriete",
        title: "Propriété du code et des données",
        body: "Le code source et la base de données vous appartiennent. Pas de licence, pas de location.",
      },
      {
        key: "hebergement-fr",
        title: "Hébergement français",
        body: "OVH ou Scaleway, au choix. Vos données ne quittent pas le territoire français.",
      },
      {
        key: "rgpd",
        title: "RGPD natif",
        body: "Conformité intégrée dès la conception, sans correctif ultérieur.",
      },
      {
        key: "rgaa-rse",
        title: "Accessibilité et RSE",
        body: "Conception RGAA pour les obligations secteur public et les entreprises engagées.",
      },
    ],
  },

  /* ============ RÉALISATIONS ============
   * Pour l'instant : un seul cas live (Gateforge). Les autres clients
   * (Mondial Box, DK PaceBoard) en attente d'accord public.
   * Quand on aura d'autres cas, on ajoute des entrées dans `cards` ;
   * le composant gère 1 carte (pleine largeur) ou 3+ cartes (1 grand + petites).
   */
  realisations: {
    secNum: "— 03 / Étude de cas",
    title: {
      before: "Un projet concret. ",
      ital: "Démo interactive",
      after: " disponible.",
    },
    rightLinkLabel: "",
    rightLinkHref: "",
    rightLinkExternal: false,
    cards: [],
  },

  /* ============ BANDEAU CHARBON (clients + stats) ============ */
  bandeau: {
    secNum: "— 04 / Clients",
    h2: "Ils ont cessé de payer des outils qu'ils n'utilisaient pas.",
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
        lbl: "réduction du coût logiciel sur 3 ans",
        src: "Source · audit clients Botami",
      },
      {
        num: "× 3",
        lbl: "gain de vitesse sur le traitement des dossiers terrain",
        src: "Source · cas Transitions Pro",
      },
      {
        num: "+ 100 %",
        lbl: "propriété du code, des données et de l'avenir de l'application",
        src: "Source · contrat type Botami",
      },
    ],
  },

  /* ============ MÉTHODE (papier) ============ */
  methode: {
    secNum: "— 05 / Méthode",
    title: {
      before: "Cinq étapes. ",
      ital: "Aucune de plus",
      after: ".",
    },
    right:
      "Notre processus tient sur une page. Il vous est communiqué dès le premier rendez-vous, avec le devis.",
    paperTitle: "Du brief à la mise en production, sans surprise.",
    paperDocMeta: { strong: "Document · Méthode V2.1", line: "Botami Software · Paris · Nîmes · Lille" },
    steps: [
      {
        n: "01",
        title: "Cadrage",
        desc: "Nous prenons le temps de comprendre votre métier et d'identifier les points de friction réels. Nous vous indiquons avec transparence si une application sur mesure est la solution adaptée.",
        duration: "3 à 5 jours",
        deliverable: "Note de cadrage",
        cost: "Gratuit",
      },
      {
        n: "02",
        title: "Maquettage",
        desc: "Nous concevons chaque écran à l'échelle réelle, en utilisant votre vocabulaire métier. Vous validez avant le début du développement.",
        duration: "1 à 2 semaines",
        deliverable: "Maquette cliquable",
        cost: "Inclus forfait",
      },
      {
        n: "03",
        title: "Développement",
        desc: "Nous livrons une version utilisable chaque semaine. Vous testez, nous ajustons. La progression est visible en permanence, sans révélation finale.",
        duration: "3 à 6 semaines",
        deliverable: "Démos hebdo",
        cost: "Inclus forfait",
      },
      {
        n: "04",
        title: "Mise en prod",
        desc: "Déploiement sur votre serveur ou sur notre infrastructure. Formation des équipes, documentation technique remise. Transfert du dépôt Git en clair.",
        duration: "3 à 5 jours",
        deliverable: "App en prod + sources",
        cost: "Inclus forfait",
      },
      {
        n: "05",
        title: "Suivi (optionnel)",
        desc: "Trois mois de garantie inclus. Au-delà, une maintenance au tarif horaire sans engagement de durée.",
        duration: "∞",
        deliverable: "SLA si demandé",
        cost: "Garantie offerte",
      },
    ],
    footTextBefore: "Vous souhaitez ",
    footTextIta: "vérifier",
    footTextAfter: " la pertinence d'une application sur mesure ?",
    footCta: { label: "Demander un audit", href: "#contact" },
  },

  /* ============ FAQ ============ */
  faq: {
    secNum: "— 07 / FAQ",
    title: {
      before: "Les questions ",
      ital: "fréquentes",
      after: " avant de démarrer un projet.",
    },
    items: [
      {
        q: "Combien coûte une application sur mesure ?",
        a: "Nos projets démarrent à 5 000 € HT et plafonnent rarement au-delà de 25 000 € HT pour une V1 complète. Le devis est fixe : pas de dépassement caché. À titre de comparaison, un SaaS à 200 €/mois représente 7 200 € sur 3 ans, sans jamais devenir votre propriété.",
      },
      {
        q: "Quelles technologies utilisez-vous ?",
        a: "Une stack moderne et standard : React/TypeScript côté front, PostgreSQL avec Node ou Python côté back, hébergement OVH ou Scaleway en France. Rien d'exotique : si vous changez de prestataire, n'importe quel développeur peut reprendre le projet.",
      },
      {
        q: "Et si nous avons besoin d'évolutions après la livraison ?",
        a: "Vous disposez du code source et d'un guide technique. Vous pouvez faire faire les évolutions en interne ou par un autre prestataire. Si vous préférez que nous en assurions la continuité, nous travaillons au forfait sur périmètre précis ou au tarif horaire, sans engagement.",
      },
      {
        q: "Pourquoi ne pas choisir un SaaS générique ?",
        a: "Dans 60 % des cas, un SaaS suffit et coûte moins cher à court terme. Nous vous le disons clairement lors du cadrage. Le sur-mesure devient pertinent quand vos processus sont spécifiques, quand vous payez plusieurs SaaS qui se chevauchent, ou quand vous souhaitez reprendre le contrôle de vos données.",
      },
      {
        q: "Comment se passe le transfert du code à la fin du projet ?",
        a: "Le dépôt Git, les accès serveur, la documentation technique et les droits de propriété intellectuelle vous sont transférés à la livraison. Sans clause de retour, sans royalties, sans dépendance contractuelle envers Botami.",
      },
      {
        q: "Êtes-vous éligibles au crédit d'impôt innovation (CII) ?",
        a: "Les développements sur mesure peuvent ouvrir droit au CII selon le projet et votre secteur. Nous vous orientons vers un cabinet partenaire spécialisé si pertinent. Botami ne facture pas la prestation comme de la R&D par défaut.",
      },
    ],
  },

  /* ============ CONTACT ============ */
  contact: {
    secNum: "— 08 / Contact",
    title: {
      before: "Parlons de ",
      ital: "votre projet",
      after: ".",
    },
    lead: "Un échange de 30 minutes, sans engagement. Nous évaluons ensemble la faisabilité de votre projet et vous communiquons une fourchette de budget.",
    info: [
      { label: "Email", value: "contact@botami-agency.com", href: "mailto:contact@botami-agency.com" },
      { label: "Lieu", value: "Paris · Nîmes · Lille", secondary: "Sur rendez-vous · présentiel ou visio" },
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
        message: "Quelques lignes suffisent ; nous vous rappelons pour préciser votre besoin.",
      },
      submitLabel: "Demander un diagnostic gratuit",
      fineprint: "Réponse sous 24 h ouvrées · Aucune donnée transmise à des tiers",
      successTitle: "Merci.",
      successBody: "Nous vous recontactons sous 24 h ouvrées.",
    },
  },

  /* ============ FOOTER ============ */
  footer: {
    tagline: "Applications sur mesure pour PME, livrées en quelques semaines et qui vous appartiennent.",
    columns: [
      {
        title: "Services",
        links: [
          { label: "Applications web", href: "/applications-web-sur-mesure" },
          { label: "Applications mobiles", href: "/applications-mobiles" },
          { label: "Refonte d'outils", href: "/refonte-outils-internes" },
          { label: "Intégrations", href: "/integrations-automatisations" },
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
    bottomLeft: "© 2026 BOTA-AG · NÎMES · LILLE · PARIS",
    bottomRight: "CONTACT@BOTAMI-AGENCY.COM",
    bottomRightHref: "mailto:contact@botami-agency.com",
  },
} as const;

export type HomeContent = typeof home;
