# IKONIK — ikonik-ac.com

Site statique HTML déployé automatiquement sur Netlify via GitHub.

## Structure
- `index.html` — Homepage FR
- `en/index.html` — Homepage EN  
- `images/` — Toutes les images du site
- `_astro/` — CSS compilé
- `_headers` — Headers Netlify (cache, sécurité)
- `_redirects` — Redirections Netlify

## Modifier une image
1. Remplacer le fichier dans `images/`
2. `git add images/nom-image.webp`
3. `git commit -m "update: nouvelle image"`
4. `git push` → Netlify redéploie automatiquement en 30 secondes

## Modifier une page
1. Éditer le fichier HTML correspondant
2. `git add` + `git commit` + `git push`
