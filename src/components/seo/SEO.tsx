import { Helmet } from "react-helmet-async";
import {
  SITE_NAME,
  SITE_LOCALE,
  DEFAULT_OG_IMAGE,
  DEFAULT_DESCRIPTION,
  absoluteUrl,
} from "@/lib/seo-config";

export type SEOProps = {
  title: string;
  description?: string;
  /** Page path (e.g. "/lp/prix") or absolute URL. Used for canonical + og:url. */
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product";
  noindex?: boolean;
  keywords?: string;
};

/**
 * Reusable SEO component — manages title, description, canonical,
 * Open Graph and Twitter Card metadata via react-helmet-async.
 */
const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  noindex = false,
  keywords,
}: SEOProps) => {
  const url = canonical ? absoluteUrl(canonical) : undefined;
  const image = ogImage.startsWith("http") ? ogImage : absoluteUrl(ogImage);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      {url ? <link rel="canonical" href={url} /> : null}
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}
      />

      {/* Open Graph */}
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content={SITE_LOCALE} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {url ? <meta property="og:url" content={url} /> : null}
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
