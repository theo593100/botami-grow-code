/**
 * Per-route SEO metadata for Google Ads landing pages.
 * Centralised so each LP page only imports its key.
 */
export type LPMeta = {
  path: string;
  title: string;
  description: string;
  serviceType: string;
  serviceName: string;
};

export const LP_META: Record<string, LPMeta> = {
  google: {
    path: "/lp/google",
    title: "Application métier sur mesure pour PME | Botami Software",
    description:
      "Application métier sur mesure pour PME et TPE. Forfait 5 000–15 000 €. Livré en 4 à 8 semaines. Code source à vous. Devis gratuit sous 24h.",
    serviceType: "Développement d'application métier sur mesure",
    serviceName: "Application métier sur mesure",
  },
  "application-mobile": {
    path: "/lp/google/application-mobile",
    title: "Développement d'application mobile sur mesure | Botami Software",
    description:
      "Application mobile iOS et Android sur mesure pour PME. Forfait transparent 5 000–15 000 €. Code source remis. Livré en quelques semaines.",
    serviceType: "Développement d'application mobile",
    serviceName: "Application mobile sur mesure",
  },
  "agence-dev-web": {
    path: "/lp/google/agence-dev-web",
    title: "Agence de développement web pour PME | Botami Software",
    description:
      "Agence de développement web spécialisée PME. Applications web sur mesure, forfait 5 000–15 000 €, code source livré. Devis sous 24h.",
    serviceType: "Agence de développement web",
    serviceName: "Développement web sur mesure",
  },
  "developpement-logiciel": {
    path: "/lp/google/developpement-logiciel",
    title: "Développement logiciel sur mesure pour PME | Botami Software",
    description:
      "Développement logiciel sur mesure pour PME. Forfait 5 000–15 000 €. Livré en semaines. Code source et données 100 % chez vous.",
    serviceType: "Développement de logiciel sur mesure",
    serviceName: "Logiciel sur mesure",
  },
  "application-web-sur-mesure": {
    path: "/lp/google/application-web-sur-mesure",
    title: "Application web sur mesure pour PME | Botami Software",
    description:
      "Application web sur mesure pour PME et TPE. Forfait 5 000–15 000 €. Conception, développement et livraison en quelques semaines.",
    serviceType: "Développement d'application web",
    serviceName: "Application web sur mesure",
  },
  "developpement-application": {
    path: "/lp/google/developpement-application",
    title: "Développement d'application sur mesure | Botami Software",
    description:
      "Développement d'application sur mesure pour PME. Forfait 5 000–15 000 €. Code source livré. Devis transparent sous 24h.",
    serviceType: "Développement d'application sur mesure",
    serviceName: "Développement d'application",
  },
  "logiciel-btp": {
    path: "/lp/google/logiciel-btp",
    title: "Logiciel BTP sur mesure pour entreprises du bâtiment | Botami Software",
    description:
      "Logiciel BTP sur mesure pour PME du bâtiment : devis, chantiers, suivi. Forfait 5 000–15 000 €. Adapté à votre métier, code source à vous.",
    serviceType: "Développement de logiciel BTP",
    serviceName: "Logiciel BTP sur mesure",
  },
  "logiciel-rh": {
    path: "/lp/google/logiciel-rh",
    title: "Logiciel RH sur mesure pour PME | Botami Software",
    description:
      "Logiciel RH sur mesure pour PME : congés, paie, dossiers salariés. Forfait 5 000–15 000 €. Interfacé Silae, Payfit. Code source livré.",
    serviceType: "Développement de logiciel RH",
    serviceName: "Logiciel RH sur mesure",
  },
  "erp-sur-mesure": {
    path: "/lp/google/erp-sur-mesure",
    title: "ERP sur mesure pour PME | Botami Software",
    description:
      "ERP sur mesure pour PME et TPE. Conçu autour de vos processus, forfait 5 000–15 000 €, livré en semaines. Code source 100 % chez vous.",
    serviceType: "Développement d'ERP sur mesure",
    serviceName: "ERP sur mesure",
  },
  "crm-sur-mesure": {
    path: "/lp/google/crm-sur-mesure",
    title: "CRM sur mesure pour PME | Botami Software",
    description:
      "CRM sur mesure pour PME, conçu autour de votre cycle de vente. Forfait 5 000–15 000 €. Livré en semaines. Code source remis.",
    serviceType: "Développement de CRM sur mesure",
    serviceName: "CRM sur mesure",
  },
  "logiciel-facturation": {
    path: "/lp/google/logiciel-facturation",
    title: "Logiciel de facturation sur mesure 2026 | Botami Software",
    description:
      "Logiciel de facturation sur mesure conforme à la réforme 2026. Forfait 5 000–15 000 €. Interfacé Pennylane, Sage. Code source livré.",
    serviceType: "Développement de logiciel de facturation",
    serviceName: "Logiciel de facturation sur mesure",
  },
  "logiciel-comptabilite": {
    path: "/lp/google/logiciel-comptabilite",
    title: "Logiciel de comptabilité sur mesure | Botami Software",
    description:
      "Logiciel de comptabilité sur mesure pour PME. Forfait 5 000–15 000 €. Interfacé Pennylane, Cegid, Sage. Code source 100 % chez vous.",
    serviceType: "Développement de logiciel de comptabilité",
    serviceName: "Logiciel de comptabilité sur mesure",
  },
  "logiciel-sur-mesure": {
    path: "/lp/google/logiciel-sur-mesure",
    title: "Logiciel sur mesure pour PME | Botami Software",
    description:
      "Logiciel sur mesure pour PME et TPE. Forfait transparent 5 000–15 000 €. Livré en semaines. Code source et données chez vous.",
    serviceType: "Développement de logiciel sur mesure",
    serviceName: "Logiciel sur mesure",
  },
};
