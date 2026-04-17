/**
 * Reusable JSON-LD schema builders for Schema.org structured data.
 * Keep these pure & serialisable — they are stringified into <script type="application/ld+json">.
 */
import { SITE_URL, SITE_NAME, absoluteUrl } from "./seo-config";

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;

/** Organization schema — Botami Software / BOTA-AG. */
export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_NAME,
  legalName: "BOTA-AG",
  url: SITE_URL,
  logo: absoluteUrl("/favicon.png"),
  email: "contact@botami-agency.com",
  telephone: "+33768041556",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bureau 326, 59 rue de Ponthieu",
    postalCode: "75008",
    addressLocality: "Paris",
    addressCountry: "FR",
  },
  founder: [{ "@type": "Person", name: "Elias Ouannou" }],
  areaServed: "FR",
  sameAs: [],
});

/** WebSite schema — includes a SearchAction pointing at Google site: search. */
export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": SITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "fr-FR",
  publisher: { "@id": ORG_ID },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `https://www.google.com/search?q=site%3A${encodeURIComponent(
        SITE_URL.replace(/^https?:\/\//, ""),
      )}+{search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
});

/** WebPage schema — for legal/utility pages. */
export const webPageSchema = (params: {
  name: string;
  description: string;
  path: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: params.name,
  description: params.description,
  url: absoluteUrl(params.path),
  isPartOf: { "@id": SITE_ID },
  inLanguage: "fr-FR",
});

/** Service schema — for landing pages selling a service. */
export const serviceSchema = (params: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: params.name,
  description: params.description,
  serviceType: params.serviceType || "Développement d'application sur mesure",
  url: absoluteUrl(params.path),
  provider: { "@id": ORG_ID },
  areaServed: { "@type": "Country", name: "France" },
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    price: "5000",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "EUR",
      minPrice: "5000",
      maxPrice: "15000",
    },
    availability: "https://schema.org/InStock",
  },
});

/** FAQPage schema. */
export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

/** Article schema — for the case study page. */
export const articleSchema = (params: {
  headline: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: params.headline,
  description: params.description,
  url: absoluteUrl(params.path),
  mainEntityOfPage: absoluteUrl(params.path),
  image: params.image ? absoluteUrl(params.image) : undefined,
  datePublished: params.datePublished || "2026-01-01",
  dateModified: params.dateModified || "2026-04-11",
  author: { "@id": ORG_ID },
  publisher: { "@id": ORG_ID },
});
