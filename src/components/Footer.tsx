import { home } from "@/content/home";
import { Brand } from "@/components/home/atoms";

const Footer = () => {
  const c = home.footer;
  return (
    <footer
      data-screen-label="09 Footer"
      className="pt-24 pb-8 border-t-[1.5px] border-ink mt-12 sm:mt-16 bg-cream"
    >
      <div className="bo-wrap">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 sm:gap-12 mb-12 sm:mb-16">
          <div className="foot-brand sm:col-span-2 lg:col-span-1">
            <Brand brandName="Botami" brandSuffix="Software" />
            <p className="font-display text-[18px] font-medium tracking-[-0.01em] text-n-700 mt-4 leading-[1.4] max-w-[340px]">
              {c.tagline}
            </p>
          </div>

          {c.columns.map((col) => (
            <div key={col.title}>
              <h5 className="font-display text-[11px] uppercase tracking-[0.15em] font-semibold text-ink mb-4">
                {col.title}
              </h5>
              <ul className="grid gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[13px] text-n-700 hover:text-ink hover:border-b hover:border-current pb-px transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 pt-8 border-t border-n-300 font-mono text-[12px] text-n-500 tracking-[0.04em]">
          <span>{c.bottomLeft}</span>
          <a href={c.bottomRightHref} className="hover:text-ink transition-colors">
            {c.bottomRight}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
