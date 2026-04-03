# CLAUDE_CODE_BRIEF.md — IKONIK V5 Site Refonte

> Ce document est le briefing complet pour Claude Code. Lis-le en entier avant de coder quoi que ce soit.

---

## 1. CONTEXTE PROJET

**Client :** IKONIK (ikonik-ac.com) — Agence créative + tech basée en Normandie
**Fondateur :** Johann — vibe coder, réalisateur/producteur vidéo, artiste numérique
**Repositionnement :** Double entrée Créatif + Tech
**Baseline :** "Nous construisons les outils, les contenus et les systèmes qui font vendre."

### Deux pôles

**IKONIK Créatif :** Films IA, FOOH, animés, art & print, contenu social, UGC IA
**IKONIK Tech :** Plateformes SaaS, CRM sectoriels, Marketing OS, dashboards IA, automatisation, apps communautaires

### Technos brandées
- Composition Lock© (workflow de production)
- VibeCoding Studio© (développement assisté IA)
- Pipeline Cinématique© (pipeline de production vidéo)

---

## 2. RÉFÉRENCE DESIGN — WARWICK ACOUSTICS

Le site V5 est un clone de l'architecture et du design system de warwickacoustics.com.
Johann a validé cette direction après 3 itérations de prototypes.

### Design System Warwick (à reproduire)

```css
/* COULEURS */
--bg: #ebeaea;
--dark: #151c24;
--text: #222931;
--muted: #cac4bf;
--accent: #E9540D;   /* → sera remplacé par orange IKONIK ou bleu selon contexte */
--white: #fff;
--border: #9ea8b5;
--gray: #5e6670;

/* EASING */
--ease: cubic-bezier(.645,.045,.355,1);

/* TYPOS — Warwick utilise NeueHaasGrotesk + BigCaslon */
/* On utilise les substituts Google : */
/* Sans-serif : Outfit (weights 300, 400, 500, 600) */
/* Serif italic : Playfair Display (italic, weights 400, 700, 900) */

/* SPACING */
/* Sections : padding 8rem mobile → 16rem tablet → 20rem desktop */
/* Container : max-width 132rem, padding 2rem → 2.8rem → 4rem */

/* BORDER RADIUS */
/* layout__content overlap sur hero : border-radius: 60px top */
/* Feature cards : 20px → 40px desktop */
/* Boutons : border-radius: 80rem (pill) */
/* Sign-up / cards blanches : border-radius: 4rem */

/* LETTER SPACING */
/* Body : .06em */
/* Uppercase labels : .16em mobile → .14em desktop */
/* Headings : .06em */
/* Buttons : .04em */
```

### Architecture de la Home Page V5 (validée par Johann)

1. **HERO** — Vidéo plein écran (comme home Warwick), overlay gradient léger `linear-gradient(180deg, rgba(0,0,0,.4), transparent 50%)`, titre **"*Make* it IKONIK"** lettre-par-lettre ("Make" en serif italic Playfair Display comme "Hear" de Warwick, "it IKONIK" en sans uppercase Outfit 600), sous-titre **"Créer. Construire. Vendre."** en fade-in décalé
2. **DEUX PORTES CRÉATIF / TECH** — Layout alterné comme la page Headphones de Warwick (APERIO/BRAVURA) :
   - Porte 1 (Créatif) : vidéo autoplay arrondie à gauche + texte à droite (tagline "PÔLE CRÉATIF", titre "IKONIK Créatif" + accent-line SVG dot, description : "Des films qui marquent, des images qui vendent. Production publicitaire, CGI photoréaliste, animation de marque — notre pipeline cinématique transforme chaque idée en contenu qui performe.", bouton "Découvrir le créatif")
   - Porte 2 (Tech) : texte à gauche + vidéo autoplay arrondie à droite (tagline "PÔLE TECH", titre "IKONIK Tech" + accent-line SVG chevron, description : "Des plateformes qui tournent, des systèmes qui convertissent. On construit vos outils métiers sur mesure — du CRM au SaaS — l'IA intégrée à chaque étape de votre chaîne de valeur.", bouton "Découvrir la tech")
3. **QUOTE** — Citation centrée avec 2 dots orange au-dessus
4. **TEXT CARDS** — 3 colonnes : Card 1 "Un seul studio, deux expertises" / Card 2 "Pensé pour convertir" / Card 3 "Construit pour durer" (gradient blanc, heading uppercase, texte descriptif, image/vidéo arrondie en bas)
5. **SECTION SOMBRE** — Feature card plein écran avec vidéo/image de fond + content-block overlay
6. **GALERIE ASYMÉTRIQUE** — 3 items (image + vidéo + image) avec décalage vertical
7. **FEATURE CARD** — Image de fond avec titre + description overlay
8. **REVIEW SECTION** — Grille asymétrique 2x2 (vidéos + images décalées 20%) + citation + bouton
9. **SIGN UP** — Card blanche arrondie avec formulaire
10. **ARTICLES** — Grille 3 colonnes avec cards blanches arrondies
11. **FOOTER** — Fond sombre, colonnes de liens, logo roundel, infos légales

### Composants clés à extraire en Astro

- `Header.astro` — fixe, collapse au scroll, peek au scroll up, logo SVG + nav
- `Button.astro` — pill avec gradient tail orange, hover text-slide
- `HeroVideo.astro` — vidéo plein écran, titre lettre-par-lettre
- `ProductGate.astro` — layout 2 colonnes alterné (new-card vidéo + content-block)
- `Quote.astro` — citation centrée avec dots orange
- `TextCard.astro` — card 3 colonnes avec gradient
- `FeatureCard.astro` — card plein écran image/vidéo + overlay texte
- `GalleryRow.astro` — galerie asymétrique 3 items
- `ReviewSection.astro` — grille 2x2 + citation
- `SignUp.astro` — formulaire card blanche
- `ArticleCard.astro` — card article avec image hover
- `Footer.astro` — footer sombre avec colonnes

### Animations (exactes Warwick)

```css
@keyframes moveUpAndFadeIn { 0% { opacity:0; transform:translateY(15px) } to { opacity:1; transform:translateY(0) } }
@keyframes fadeIn { 0% { opacity:0 } to { opacity:1 } }
@keyframes grow { 0% { width:0 } to { width:100% } }
@keyframes scaleIn { 0% { transform:scale(1.1) } to { transform:scale(1) } }
```

### Bouton pill (exact Warwick)

```css
.button {
  background: linear-gradient(325deg, var(--accent) -20%, rgba(233,84,13,0) 31%);
  border-radius: 80rem;
  padding: .4rem .4rem .4rem 0;
}
/* Hover = text slides out left, new text slides in from right */
```

### Accent-line SVGs

APERIO style (ligne + point) :
```html
<svg fill="none" viewBox="0 0 200 11"><path d="M177 5.5H0" stroke="#222931"></path><circle cx="194.5" cy="5.5" r="5.5" fill="#E9540D"></circle></svg>
```

BRAVURA style (ligne + chevron) :
```html
<svg fill="none" viewBox="0 0 200 12"><path d="M179 6H0" stroke="#222931"></path><path d="m191 0 8.195 6L191 12V0Z" fill="#E9540D"></path></svg>
```

---

## 3. INFRASTRUCTURE TECHNIQUE

### Netlify V5 (DEV — où déployer)
- **Site ID :** `df109670-f805-46dd-ae49-4025169c1971`
- **URL preview :** https://ikonik-v5.netlify.app
- **Team ID :** `698a2d52fabffda470f1b3aa`

### Netlify PROD (NE PAS TOUCHER)
- **Site ID :** `77f454b3-2a33-4a63-b90e-afe95ebf4220`
- **URL :** https://ikonik-ac.com

### Supabase `ikonik-site`
- **Project ID :** `kgfolduvslsytbekbjvf`
- **URL API :** `https://kgfolduvslsytbekbjvf.supabase.co`
- **Anon Key :** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtnZm9sZHV2c2xzeXRiZWtianZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzUxNDU3MDcsImV4cCI6MjA5MDcyMTcwN30.4jZ9fMfSinEc1CE3s6LuR4q_WNeisEdtyBM5XQ2uMJg`
- **Région :** eu-west-3 (Paris)
- **Tables créées :** services (14 rows), projects (10), technologies (3), site_config (7), blog_posts, testimonials, faq, pages

### GitHub
- **Repo :** `webflowjohann-prog/ikonik-ac-site`
- **Branche :** `main`

### Stack
- **Framework :** Astro 5 (SSG)
- **Database :** Supabase (PostgreSQL)
- **Hébergement :** Netlify
- **CSS :** Custom (pas de Tailwind — reproduire le design system Warwick)

---

## 4. STRUCTURE DES PAGES

```
/                    → Home (hero vidéo + 2 portes + contenu)
/creatif/            → Page Créatif (showreel, services créatifs)
/tech/               → Page Tech (cas clients, services tech)
/studio/             → Le studio IKONIK (équipe, philosophie)
/blog/               → Articles SEO
/blog/[slug]         → Article individuel
/contact/            → Contact
/en/                 → Version anglaise (phase ultérieure)
```

---

## 5. COULEURS IKONIK (pour personnalisation ultérieure)

```css
/* Couleurs du brief IKONIK — à utiliser quand on remplace le contenu Warwick */
--ikonik-bg: #faf8f4;        /* fond crème */
--ikonik-noir: #0a0a0a;
--ikonik-or: #b8963e;
--ikonik-orange: #b85a38;    /* Créatif */
--ikonik-bleu: #2e6ba6;      /* Tech */
--ikonik-gris: #8a8780;

/* Typos IKONIK */
/* Cormorant Garamond (serif) + DM Sans (sans-serif) */
/* Instrument Serif, Syne, Space Mono aussi utilisées */
```

> NOTE : Pour le moment, on garde le design system Warwick tel quel.
> La personnalisation IKONIK (couleurs, typos, contenu) viendra dans une phase suivante.

---

## 6. ASSETS EXISTANTS

### Visuels IKONIK (dans le repo GitHub)
- Logo : `LOGO_IKONIK.webp`, `LOGO_IKONIK_blanc.webp`
- Photos : sandro-chinatown, cafe-san-marco, bouillon-anime, segafredo, johann, louka, ikonik-fondateurs, ikonik-duo-studio, studio-hero
- Vidéos : `showreel-mobile.mp4`, `showreel-web-light.mp4`
- Services : service-film, service-art, service-print, service-social, service-anime, service-docu, service-audit

### Assets Warwick (pour le dev — seront remplacés)
- Vidéos : Home-Hero-Mobile-v2.mp4, auto-interior--trim.mp4, video-1/3/4/5/6.mp4
- Images : gallery-image-4/5/6/7/8/18/19/33.avif, testimonial-8/9.avif, feature-1-mobile.avif, headphones-hero-mobile.avif
- Base URL : `https://d3aq9k5clbjrty.cloudfront.net/`

---

## 7. INSTRUCTIONS DE DÉVELOPPEMENT

### Étape 1 : Initialiser le projet Astro
```bash
npm create astro@latest ikonik-v5 -- --template minimal
cd ikonik-v5
npm install @supabase/supabase-js
```

### Étape 2 : Configurer Supabase
Créer `src/lib/supabase.ts` avec l'URL et l'anon key ci-dessus.

### Étape 3 : Créer le design system
Créer `src/styles/global.css` avec toutes les variables CSS Warwick extraites.

### Étape 4 : Créer les composants Astro
Chaque section de la home page = un composant réutilisable.

### Étape 5 : Assembler la home page
`src/pages/index.astro` importe tous les composants dans l'ordre validé.

### Étape 6 : Déployer
```bash
npm run build
# Déployer le dossier dist/ sur Netlify site df109670-f805-46dd-ae49-4025169c1971
```

---

## 8. RÉFÉRENCES NOTION

- **Brief stratégique :** `336d8049714c81299cd1c1820bc65b8e`
- **Roadmap technique :** `336d8049714c81e088a8d20f91704278`
- **IKONIK BRAIN (parent) :** `32ad8049714c8120a99cf34709687fd2`

---

## 9. PROTOTYPES HTML DE RÉFÉRENCE

Deux prototypes HTML ont été créés pendant la session de travail chat :

1. **Clone home page Warwick** — reproduit exactement la home page warwickacoustics.com avec leur hero vidéo, quote, text-cards, feature cards auto/headphones, review section, sign-up, articles, footer
2. **Clone page Headphones Warwick** — reproduit la page /headphones/ avec hero image statique, layout alterné APERIO/BRAVURA (new-card vidéo + content-block), GoldenSound feature card, Sonoma card, review section, awards, sign-up

Ces fichiers HTML contiennent tout le CSS et le HTML nécessaires pour reproduire pixel-perfect chaque composant. Ils serviront de référence pour créer les composants Astro.

---

## 10. DÉCISIONS VALIDÉES PAR JOHANN

- ✅ Hero = vidéo plein écran (pas image statique sur la home)
- ✅ Les 2 portes Créatif/Tech = layout alterné type APERIO/BRAVURA (new-card vidéo arrondie + content-block avec accent-line)
- ✅ Le reste de la home page garde la structure de la home Warwick (quote, text-cards, feature cards, etc.)
- ✅ Build from scratch en Astro (pas de modification du HTML compilé existant)
- ✅ Supabase pour le contenu dynamique
- ✅ Déployer sur Netlify V5 (`ikonik-v5.netlify.app`) puis bascule DNS quand prêt
- ✅ Développement via Claude Code (pas le chat)
- ✅ Ambiance bleu marine sur les visuels (comme Warwick)
