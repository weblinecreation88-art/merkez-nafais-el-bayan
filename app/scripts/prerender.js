/**
 * Pré-rendu des pages après le build.
 *
 * Le site est une SPA : le HTML livré ne contient qu'une div vide, et tout
 * le contenu (titres, textes, métadonnées) n'apparaît qu'une fois le
 * JavaScript exécuté. Google sait le faire, mais avec un délai ; les robots
 * de WhatsApp, Facebook ou Bing, eux, ne l'exécutent pas — un lien partagé
 * n'affiche alors ni bon titre ni description.
 *
 * Ce script ouvre chaque route dans un navigateur, laisse React s'exécuter,
 * puis écrit le HTML obtenu dans dist/<route>/index.html. Chaque page
 * possède ainsi son contenu et ses balises dès la première réponse du
 * serveur, sans rien changer au fonctionnement côté visiteur.
 */
import { chromium } from 'playwright';
import { preview } from 'vite';
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const ROUTES = [
  '/',
  '/cours-de-coran',
  '/cours-arabe',
  '/sciences-religieuses',
  '/la-creche',
  '/inscription-et-tarifs',
  '/contact',
  '/a-propos',
  '/politique-de-confidentialite',
];

const DIST = resolve(process.cwd(), 'dist');

/* On sert le BUILD (dist/), pas un serveur de développement : ce dernier
   injecte des modules non compilés, et le HTML capturé ne référencerait
   alors aucun asset — la page serait vide chez le visiteur. */
const serveur = await preview({
  configFile: false,
  root: process.cwd(),
  preview: { port: 5199, strictPort: true },
});

const navigateur = await chromium.launch();
const page = await navigateur.newPage();

let ok = 0;
for (const route of ROUTES) {
  try {
    await page.goto(`http://localhost:5199${route}`, {
      waitUntil: 'networkidle',
      timeout: 30000,
    });
    // Laisse à React le temps de poser titre, description et canonical.
    await page.waitForFunction(() => document.querySelector('link[rel="canonical"]'), {
      timeout: 10000,
    });

    const html = await page.content();
    const sortie =
      route === '/' ? resolve(DIST, 'index.html') : resolve(DIST, `.${route}/index.html`);
    mkdirSync(dirname(sortie), { recursive: true });
    writeFileSync(sortie, html, 'utf8');
    console.log(`  pre-rendu  ${route}`);
    ok++;
  } catch (e) {
    console.error(`  ECHEC      ${route} : ${e.message}`);
  }
}

await navigateur.close();
await serveur.httpServer.close();

console.log(`\n${ok}/${ROUTES.length} pages pre-rendues.`);
if (ok < ROUTES.length) process.exit(1);
