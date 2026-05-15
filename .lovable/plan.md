## Objectif
Appliquer 7 optimisations SEO ciblées sur Botami Software, sans toucher au contenu produit ni aux LPs Google Ads.

## Étapes

**1. `index.html` — méta-tags par défaut**
- Title : `Botami Software — Agence dev en binôme avec l'IA`
- Description (et og/twitter title+description identiques) : nouvelle phrase positionnement Nîmes·Lille·Paris, "à partir de 5 000 € HT", livré 4-8 semaines.
- og:image et twitter:image → `https://software.botami-agency.com/og-default.png`

**2. OG image par défaut**
- Génère `public/og-default.svg` (1200×630, fond crème grain, bloc logo ambre + "Botami Software" + tagline + "Nîmes · Lille · Paris").
- Tente conversion PNG via `nix run nixpkgs#librsvg -- rsvg-convert` vers `public/og-default.png`. Si échec, garde uniquement le SVG et signale qu'une conversion manuelle est nécessaire (et bascule temporairement la meta og:image vers `.svg` ou laisse `.png` en attendant l'upload).

**3. `public/sitemap.xml`**
- Tous les `<lastmod>` → `2026-05-15`.
- Vérifie que `/etude-de-cas` est présent (oui déjà, priority 0.7) et home priority 1.0 weekly (oui).
- Aucune autre modification.

**4. Preconnect Google Fonts**
- Insérer dans `<head>` avant `<link rel="canonical">` les 3 lignes : `preconnect googleapis`, `preconnect gstatic` (crossorigin), `preload` Space Grotesk woff2.

**5. Audit `<img>` (composants home + case study uniquement, pas les LPs)**
Cibles : `CaseStudySection.tsx`, `TeamSection.tsx`, `ProblemSection.tsx`, `home/compounds.tsx`, `home/atoms.tsx`.
- Ajouter `width`/`height` HTML, `loading="lazy"` (sauf hero), alt descriptif ou `alt=""` + `role="presentation"` pour décoratives.
- Cas Gateforge dans CaseStudySection : actuellement `alt={`Capture du back-office ${client}`}` — remplacer par alt SEO long ("Tableau de bord Gateforge : statistiques de présence, taux de remplissage et arrivées par créneau d'un événement professionnel") + `width="1920"` + `height="1200"`. Note : le chemin `/realisations/gateforge-stats.png` n'existe pas dans le code actuel ; le composant utilise `image` venant de `home.ts`. On applique les attributs sur le `<img>` existant.
- LPs Google Ads exclues (mention "ne pas toucher").

**6. `servicesListSchema()` + injection Index**
- Ajout export dans `src/lib/structured-data.ts` (ItemList de 4 Service tel que spécifié).
- Dans `src/pages/Index.tsx`, ajouter au tableau passé à `<StructuredData data={[...]}>`.

**7. `breadcrumbSchema()` + 5 pages secondaires**
- Ajout export dans `src/lib/structured-data.ts`.
- Insertion `<StructuredData data={[breadcrumbSchema([...])]}>` dans :
  - `CaseStudy.tsx` (déjà a un StructuredData → on l'ajoute au tableau existant)
  - `MentionsLegales.tsx`
  - `CGV.tsx`
  - `PolitiqueConfidentialite.tsx`
  - `PolitiqueCookies.tsx`
  - `Unsubscribe.tsx`

## Hors périmètre
- Aucun changement sur HeroSection, ProblemSection (texte), ServicesSection, Navbar, Footer, LPs Google Ads, edge functions, admin.

## Risque / point d'attention
- Si la conversion SVG→PNG échoue côté sandbox, l'og:image pointera vers un fichier inexistant tant que tu ne convertis pas manuellement. Je te le signalerai et tu pourras soit (a) uploader le PNG, soit (b) je bascule temporairement la meta sur `.svg` (LinkedIn ne supporte pas SVG en og:image — donc préférable de générer le PNG).
