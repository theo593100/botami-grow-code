import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { home } from "@/content/home";
import { Brand, Btn } from "@/components/home/atoms";

const Navbar = () => {
  const c = home.header;
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      const close = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileOpen(false);
      };
      window.addEventListener("keydown", close);
      return () => window.removeEventListener("keydown", close);
    }
  }, [mobileOpen]);

  return (
    <header
      className={[
        "sticky top-0 left-0 right-0 z-50 transition-shadow duration-200 border-b border-n-300",
        "bg-cream/85 supports-[backdrop-filter]:backdrop-blur-md supports-[backdrop-filter]:backdrop-saturate-150",
        scrolled ? "shadow-subtle" : "",
      ].join(" ")}
      data-screen-label="00 Header"
    >
      <div className="bo-wrap">
        <nav
          aria-label="Navigation principale"
          className="flex items-center justify-between py-[18px]"
        >
          <a href="#hero" className="bo-focus rounded-md" aria-label="Accueil Botami Software">
            <span className="text-base font-medium text-ink tracking-tight">
              {c.brandName}
              <span className="text-ink/60 ml-0.5">{c.brandSuffix}</span>
            </span>
          </a>

          {/* Nav desktop */}
          <ul className="hidden lg:flex items-center gap-7">
            {c.nav.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-ink hover:text-ambre-dark transition-colors bo-focus rounded"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="/admin"
              className="text-sm text-ink border-b border-current pb-0.5 hover:text-ambre-dark transition-colors bo-focus"
            >
              {c.loginLabel}
            </a>
            <Btn href="#contact">{c.ctaLabel}</Btn>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-ink bo-focus rounded"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden border-b border-n-300 bg-cream/95 supports-[backdrop-filter]:backdrop-blur-md"
        >
          <div className="bo-wrap py-6 flex flex-col gap-3">
            {c.nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-base text-ink py-2 hover:text-ambre-dark transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="/admin"
              onClick={() => setMobileOpen(false)}
              className="text-base text-ink py-2 border-b border-current self-start"
            >
              {c.loginLabel}
            </a>
            <Btn
              href="#contact"
              className="mt-3"
              onClick={() => setMobileOpen(false)}
            >
              {c.ctaLabel}
            </Btn>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
