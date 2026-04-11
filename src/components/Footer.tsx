import { Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-botami.svg";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-14 px-4 md:px-8">
    <div className="container-wide">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <div className="flex items-center gap-2.5 mb-3">
            <img src={logo} alt="Botami Software" className="h-7 w-7 brightness-0 invert" />
            <p className="font-heading text-xl font-bold">Botami Software</p>
          </div>
          <p className="text-sm opacity-70 leading-relaxed max-w-xs">
            Applications sur mesure pour PME. Livrées en semaines. À vous pour toujours.
          </p>
        </div>
        <div>
          <p className="font-heading font-semibold mb-3">Contact</p>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <a href="mailto:contact@botami-agency.com" className="flex items-center gap-2 hover:opacity-100 transition-opacity">
              <Mail className="w-4 h-4" /> contact@botami-agency.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Lille · Paris · Nîmes
            </span>
          </div>
        </div>
        <div>
          <p className="font-heading font-semibold mb-3">Légal</p>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <a href="/mentions-legales" className="hover:opacity-100 transition-opacity">Mentions légales</a>
            <a href="/politique-de-confidentialite" className="hover:opacity-100 transition-opacity">Politique de confidentialité</a>
            <a href="/politique-cookies" className="hover:opacity-100 transition-opacity">Politique de cookies</a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 pt-6 text-xs opacity-50">
        <span>© 2026 Botami Software SAS. Tous droits réservés.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
