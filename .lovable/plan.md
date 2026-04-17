

## SEO & AEO — Plan d'implémentation

Le site est une SPA Vite/React (CSR) avec ~25 routes publiques + zone `/admin`. Custom domain : `software.botami-agency.com`. Les infos business (BOTA-AG, Paris, contact@botami-agency.com, Elias Ouannou) sont déjà en mémoire — je n'ai pas besoin de les redemander.

### 1. Meta tags dynamiques

- Installer `react-helmet-async`, wrapper `<HelmetProvider>` autour de `<App />` dans `main.tsx`.
- Créer `src/components/seo/SEO.tsx` avec props `title`, `description`, `canonical`, `ogImage`, `ogType="website"`, `noindex=false`, `keywords?`. Émet : title, meta description, canonical, OG complets (title/description/image/url/type/site_name="Botami Software"/locale=fr_FR), Twitter summary_large_image.
- Centraliser dans `src/lib/seo-config.ts` : `SITE_URL`, `SITE_NAME`, `DEFAULT_OG_IMAGE`.
- Ajouter `<SEO>` en tête de chaque page avec valeurs spécifiques.
- Nettoyer `index.html` : fallback générique uniquement (Helmet écrasera). GA/Clarity/gtag intacts.
- `noindex` pour : `/admin/*`, `/unsubscribe`, `/404`, et selon ta réponse Q1 sur les LPs Ads.

### 2. JSON-LD — schemas proposés

| Page | Schemas |
|---|---|
| `/` | `Organization` + `WebSite` + `FAQPage` |
| `/lp/google/*` & `/lp/prix` | `Service` + `FAQPage` (si FAQ présente) |
| `/etude-de-cas` | `Article` (case study GATEFORGE TP) |
| Pages légales | `WebPage` |
| `/admin/*`, `/unsubscribe`, `/404` | aucun |

Composant `<StructuredData data={...} />` injecte un `<script type="application/ld+json">` via Helmet.

### 3. Sitemap

Statique dans `/public/sitemap.xml` listant les routes publiques (Index, LandingPrix, 13 LP Google, CaseStudy, 4 légales). Format avec `<loc>`, `<lastmod>`, `<changefreq>`, `<priority>` (1.0 home, 0.8 LPs, 0.5 légales). Pas de contenu Supabase public à indexer → **statique, à régénérer manuellement** quand de nouvelles routes apparaissent (je le mentionnerai dans le récap).

### 4. robots.txt

Réécrire `/public/robots.txt` :
- `User-agent: *` → `Allow: /`, `Disallow: /admin`, `/unsubscribe`
- Bloc explicite autorisant `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`
- `Sitemap:` selon ta réponse Q3

### 5. Hiérarchie HTML sémantique

Audit page par page. Vérifications : un seul `<h1>` (Hero), pas de saut H2→H4, présence de `<main>`/`<nav>`/`<footer>`/`<section>`. Corrections listées dans le récap.

### 6. Audit images

Pour chaque `<img>` : alt descriptif (logos partenaires, photos équipe), `alt=""` pour décoratifs, `width`/`height` explicites, `loading="eager"` + `fetchpriority="high"` sur hero, `loading="lazy"` ailleurs. Alts devinés listés pour validation.

### Questions avant exécution

J'ai 3 incertitudes qui changent le code livré :

**Q1 — Indexation des 13 LPs Google Ads**
- (a) Indexer (SEO + Ads) — risque de cannibalisation entre LPs au contenu très similaire
- (b) **Recommandé : Noindex** (Ads uniquement) — évite la duplication de contenu
- (c) Indexer seulement `/lp/google` parent, noindex sur les 12 variantes

**Q2 — SearchAction dans schema WebSite**
- (a) **Recommandé : Ne pas inclure** (pas de search interne, évite warnings GSC)
- (b) Inclure quand même

**Q3 — URL Sitemap dans robots.txt**
- (a) `https://software.botami-agency.com/sitemap.xml` (custom domain confirmé)
- (b) Placeholder `DOMAIN_A_REMPLACER`

Réponds avec ex. "Q1=b, Q2=a, Q3=a" et je passe à l'exécution.

