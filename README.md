# Merkez Nafaïs El Bayan

Site web officiel de l'institut Merkez Nafaïs El Bayan (cours de Coran, langue arabe et sciences religieuses en ligne).

## 1. Stack Technique
- **Framework** : React 19 + Vite
- **Routage** : React Router 7
- **Hébergement** : Firebase Hosting (projet `merkez-nafais-el-bayan`)
- **SEO & Pré-rendu** : Script Playwright (`app/scripts/prerender.js`) pour générer les snapshots statiques des routes (crucial pour le référencement et les aperçus WhatsApp).
- **Linter** : Oxlint

---

## 2. Démarrage rapide (Local)

### Prérequis
- Node.js 20+
- Firebase CLI (`npm install -g firebase-tools`)

### Installation & Lancement
```bash
cd app
npm install
npm run dev
```
L'application est accessible sur `http://localhost:5173`.

---

## 3. Déploiement en production

⚠️ **Attention** : Toujours utiliser `build:seo` pour que chaque page soit pré-rendue pour Google et le partage social.

```bash
cd app

# 1. Compiler avec le pré-rendu SEO
npm run build:seo

# 2. Déployer sur Firebase Hosting
firebase deploy --only hosting
```

---

## 4. Structure du Projet
- `app/` : Application React / Vite.
  - `src/pages/` : Pages du site (Accueil, Coran, Arabe, Sciences religieuses, Crèche, Tarifs, Contact, À propos...).
  - `src/components/` : Header, Footer, Seo.
  - `scripts/prerender.js` : Script de pré-rendu SEO Playwright.
  - `firebase.json` & `.firebaserc` : Configuration Firebase Hosting.
- `gutenberg/` : Fichiers et blocs HTML de référence WordPress issus de la reconstruction Wayback Machine.
