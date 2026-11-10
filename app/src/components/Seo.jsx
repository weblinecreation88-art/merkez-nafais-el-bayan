import { useEffect } from 'react';

const SITE = 'https://merkez-nafais-el-bayan.fr';
const NOM = 'Merkez Nafaïs El Bayan';

/* React 19 remonte nativement <title> et <meta> dans le <head>, mais il
   ne dédoublonne pas les balises déjà présentes dans index.html. On pilote
   donc le head à la main : chaque page écrase les valeurs communes. */
function poser(selecteur, attrs) {
  let el = document.head.querySelector(selecteur);
  if (!el) {
    el = document.createElement(attrs.tag);
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => {
    if (k !== 'tag' && v != null) el.setAttribute(k, v);
  });
  return el;
}

/**
 * Métadonnées d'une page : titre, description, URL canonique,
 * partage social et données structurées optionnelles.
 */
const Seo = ({ titre, description, chemin, schema }) => {
  useEffect(() => {
    const titreComplet = titre ? `${titre} — ${NOM}` : NOM;
    const url = `${SITE}${chemin || '/'}`;

    document.title = titreComplet;

    poser('meta[name="description"]', {
      tag: 'meta',
      name: 'description',
      content: description,
    });

    // L'URL canonique évite que /contact et /a-propos soient vues
    // comme des doublons par les moteurs.
    poser('link[rel="canonical"]', { tag: 'link', rel: 'canonical', href: url });

    poser('meta[property="og:title"]', {
      tag: 'meta',
      property: 'og:title',
      content: titreComplet,
    });
    poser('meta[property="og:description"]', {
      tag: 'meta',
      property: 'og:description',
      content: description,
    });
    poser('meta[property="og:url"]', { tag: 'meta', property: 'og:url', content: url });

    // Données structurées propres à la page (JSON-LD)
    const ancien = document.head.querySelector('script[data-seo-page]');
    if (ancien) ancien.remove();
    if (schema) {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.setAttribute('data-seo-page', '');
      s.textContent = JSON.stringify(schema);
      document.head.appendChild(s);
    }
  }, [titre, description, chemin, schema]);

  return null;
};

export default Seo;
