/**
 * Centralised SEO configuration for Botami Software.
 * SITE_URL must match the canonical custom domain (no trailing slash).
 */
export const SITE_URL = "https://software.botami-agency.com";
export const SITE_NAME = "Botami Software";
export const SITE_LOCALE = "fr_FR";

// Default OG image — fallback used when a page does not provide its own.
// 1200x630 recommended. Replace this URL with a hosted asset on the domain
// once a custom OG image is available.
export const DEFAULT_OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/fab30620-07eb-449c-b61a-9913e8a9e587/id-preview-7871ecb3--6cf584f2-c5be-409b-9fba-83418143fc9e.lovable.app-1775045248338.png";

export const DEFAULT_DESCRIPTION =
  "Botami Software développe des applications sur mesure pour PME et TPE. Forfait transparent de 5 000 à 15 000 €. Code source transféré. Livré en semaines.";

/** Build an absolute URL from a path (e.g. "/lp/google" → SITE_URL + "/lp/google"). */
export const absoluteUrl = (path: string): string => {
  if (!path) return SITE_URL;
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
};
