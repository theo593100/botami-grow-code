import { Helmet } from "react-helmet-async";

type StructuredDataProps = {
  /** A single schema object or an array of schema objects (will be emitted as one @graph script). */
  data: Record<string, unknown> | Record<string, unknown>[];
};

/**
 * Injects JSON-LD structured data via Helmet.
 * Pass a single schema object or an array (rendered as @graph).
 */
const StructuredData = ({ data }: StructuredDataProps) => {
  const payload = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : data;

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(payload)}</script>
    </Helmet>
  );
};

export default StructuredData;
