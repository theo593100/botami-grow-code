import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";
import SEO from "@/components/seo/SEO";
import StructuredData from "@/components/seo/StructuredData";
import {
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
} from "@/lib/structured-data";
import { SecNum } from "@/components/home/atoms";
import { services, servicePath } from "@/content/services";
import type { SrvSlug } from "@/content/home";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";

const ServicePage = ({ slug }: { slug: SrvSlug }) => {
  const c = services[slug];

  useEffect(() => {
    document.body.classList.add("bo-grain");
    return () => document.body.classList.remove("bo-grain");
  }, []);

  return (
    <>
      <SEO
        title={c.seo.title}
        description={c.seo.description}
        canonical={servicePath(slug)}
        keywords={c.seo.keywords}
      />
      <StructuredData
        data={[
          serviceSchema({
            name: c.seo.serviceName,
            description: c.seo.description,
            path: servicePath(slug),
            serviceType: c.seo.serviceType,
          }),
          faqSchema(c.faq),
          breadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: c.seo.serviceName, url: servicePath(slug) },
          ]),
        ]}
      />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="pt-16 sm:pt-20 pb-14 sm:pb-16">
          <div className="bo-wrap">
            <SecNum>— {c.eyebrow}</SecNum>
            <h1 className="font-display font-semibold tracking-[-0.02em] leading-[1.05] text-ink mt-4 text-[40px] sm:text-[56px] lg:text-[64px] max-w-[900px]">
              {c.h1.before}
              <em className="not-italic font-normal font-serif text-ambre">
                {c.h1.ital}
              </em>
              {c.h1.after}
            </h1>
            <p className="mt-6 text-[17px] sm:text-[19px] text-n-700 leading-[1.55] max-w-[720px]">
              {c.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[10px] bg-ink text-cream text-sm font-medium hover:bg-ink/90 transition-colors bo-focus"
              >
                Demander un diagnostic gratuit
              </a>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-[10px] border-[1.5px] border-ink text-ink text-sm font-medium hover:bg-white transition-colors bo-focus"
              >
                Découvrir Botami Software
              </Link>
            </div>
          </div>
        </section>

        {/* Contexte / SEO body */}
        <section className="py-16 sm:py-20 border-t-[1.5px] border-ink">
          <div className="bo-wrap grid lg:grid-cols-[1fr_1.6fr] gap-10">
            <div>
              <SecNum>— 01 / Contexte</SecNum>
              <h2 className="font-display font-semibold tracking-[-0.02em] text-ink mt-3 text-[28px] sm:text-[36px] leading-[1.1] max-w-[420px]">
                {c.contexte.title}
              </h2>
            </div>
            <div className="space-y-5 text-[15.5px] sm:text-[16.5px] text-n-700 leading-[1.65] max-w-[680px]">
              {c.contexte.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Bénéfices */}
        <section className="py-16 sm:py-20 border-t-[1.5px] border-ink bg-white">
          <div className="bo-wrap">
            <SecNum>— 02 / Bénéfices</SecNum>
            <h2 className="font-display font-semibold tracking-[-0.02em] text-ink mt-3 text-[28px] sm:text-[36px] leading-[1.1] max-w-[720px]">
              Ce que vous obtenez concrètement.
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {c.benefices.map((b) => (
                <div
                  key={b.title}
                  className="border-[1.5px] border-ink rounded-card p-6 bg-cream"
                >
                  <h3 className="font-display text-[19px] font-semibold tracking-[-0.01em] text-ink mb-2">
                    {b.title}
                  </h3>
                  <p className="text-[14.5px] text-n-700 leading-[1.6]">
                    {b.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cas d'usage */}
        <section className="py-16 sm:py-20 border-t-[1.5px] border-ink">
          <div className="bo-wrap">
            <SecNum>— 03 / Cas d'usage</SecNum>
            <h2 className="font-display font-semibold tracking-[-0.02em] text-ink mt-3 text-[28px] sm:text-[36px] leading-[1.1] max-w-[720px]">
              Des projets menés dans des secteurs variés.
            </h2>
            <ul
              role="list"
              className="mt-10 border-t-[1.5px] border-ink"
            >
              {c.casUsage.map((u) => (
                <li
                  key={u.secteur}
                  className="grid sm:grid-cols-[220px_1fr] gap-3 sm:gap-8 py-5 border-b-[1.5px] border-n-300"
                >
                  <div className="font-display font-semibold text-ink text-[16px]">
                    {u.secteur}
                  </div>
                  <p className="text-[15px] text-n-700 leading-[1.6]">
                    {u.exemple}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Livrables + technos */}
        <section className="py-16 sm:py-20 border-t-[1.5px] border-ink bg-ink text-cream">
          <div className="bo-wrap grid lg:grid-cols-2 gap-12">
            <div>
              <SecNum variant="dark">— 04 / Livrables</SecNum>
              <h2 className="font-display font-semibold tracking-[-0.02em] mt-3 text-[28px] sm:text-[36px] leading-[1.1] text-cream">
                Ce qui vous est remis à la livraison.
              </h2>
              <ul className="mt-8 space-y-3">
                {c.livrables.map((l) => (
                  <li key={l} className="flex gap-3 text-[15px] text-cream/85">
                    <Check className="w-5 h-5 text-ambre shrink-0 mt-0.5" />
                    <span>{l}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SecNum variant="dark">— 05 / Stack technique</SecNum>
              <h2 className="font-display font-semibold tracking-[-0.02em] mt-3 text-[28px] sm:text-[36px] leading-[1.1] text-cream">
                Une stack standard, transmissible.
              </h2>
              <dl className="mt-8 divide-y divide-cream/15 border-t border-cream/15">
                {c.technos.map((t) => (
                  <div
                    key={t.label}
                    className="grid grid-cols-[140px_1fr] gap-4 py-4"
                  >
                    <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-ambre">
                      {t.label}
                    </dt>
                    <dd className="text-[15px] text-cream/90">{t.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 sm:py-20 border-t-[1.5px] border-ink">
          <div className="bo-wrap">
            <SecNum>— 06 / Méthode</SecNum>
            <h2 className="font-display font-semibold tracking-[-0.02em] text-ink mt-3 text-[28px] sm:text-[36px] leading-[1.1] max-w-[720px]">
              Du brief à la mise en production.
            </h2>
            <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {c.process.map((s) => (
                <li
                  key={s.n}
                  className="border-[1.5px] border-ink rounded-card p-6 bg-white"
                >
                  <div className="font-mono text-[12px] text-ambre tracking-[0.15em] mb-3">
                    {s.n}
                  </div>
                  <h3 className="font-display text-[18px] font-semibold text-ink mb-2">
                    {s.title}
                  </h3>
                  <p className="text-[14px] text-n-700 leading-[1.55]">
                    {s.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-20 border-t-[1.5px] border-ink bg-white">
          <div className="bo-wrap max-w-[900px]">
            <SecNum>— 07 / FAQ</SecNum>
            <h2 className="font-display font-semibold tracking-[-0.02em] text-ink mt-3 text-[28px] sm:text-[36px] leading-[1.1]">
              Les questions fréquentes.
            </h2>
            <Accordion type="single" collapsible className="mt-8">
              {c.faq.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b-[1.5px] border-n-300"
                >
                  <AccordionTrigger className="text-left font-display text-[17px] font-semibold text-ink py-5 hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[15px] text-n-700 leading-[1.65] pb-5">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default ServicePage;
