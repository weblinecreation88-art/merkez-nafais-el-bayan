import { Link, NavLink, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Header.css';

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/cours-de-coran', label: 'Cours de Coran' },
  { to: '/cours-arabe', label: "Cours d'Arabe" },
  { to: '/sciences-religieuses', label: 'Sciences Religieuses' },
  { to: '/la-creche', label: 'La Crèche' },
  { to: '/inscription-et-tarifs', label: 'Inscription et Tarifs' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const location = useLocation();

  /* L'en-tete n'est visible qu'en tout haut de page. Des que l'on quitte
     cette zone il s'escamote et le reste : il ne revient PAS a la
     remontee, seulement lorsqu'on est revenu tout en haut. */
  useEffect(() => {
    let enAttente = false;

    const surDefilement = () => {
      if (enAttente) return;
      enAttente = true;

      // Lecture groupee dans requestAnimationFrame : evite de forcer
      // un recalcul de mise en page a chaque evenement de defilement.
      window.requestAnimationFrame(() => {
        const seuil = 80; // hauteur de tolerance en haut de page
        setIsHidden(window.scrollY > seuil);
        enAttente = false;
      });
    };

    surDefilement();
    window.addEventListener('scroll', surDefilement, { passive: true });
    return () => window.removeEventListener('scroll', surDefilement);
  }, []);

  // Changement de page : on ferme le menu et on réaffiche l'en-tête
  // (ScrollToTop ramène en haut, l'en-tête doit donc être visible).
  useEffect(() => {
    setIsMenuOpen(false);
    setIsHidden(false);
  }, [location.pathname]);

  // Bloque le scroll de fond + fermeture à la touche Échap quand le menu est ouvert
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    /* Blocage du défilement de fond via position:fixed sur <body> plutôt
       qu'overflow:hidden : un overflow sur <body> en ferait un conteneur
       de défilement et casserait le position:fixed de l'en-tête.
       On mémorise la position pour la restaurer à la fermeture. */
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      window.scrollTo(0, scrollY);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isMenuOpen]);

  // Le menu ouvert force l'en-tête à rester visible.
  const estMasque = isHidden && !isMenuOpen;

  return (
    <>
    <header className={`header ${estMasque ? 'is-hidden' : ''}`}>
      <a href="#contenu-principal" className="skip-link">Aller au contenu principal</a>

      {/* Bandeau d'annonce */}
      <div className="top-bar">
        <div className="marquee">
          <span>
            📢 Les pré-inscriptions pour les sessions <strong>2026–2027</strong> sont ouvertes.
            Alhamdoulillah&nbsp;! 📖 Réservez votre place et rejoignez nos cours de Coran, de langue
            arabe et de sciences religieuses.
          </span>
        </div>
      </div>

      {/* Navigation principale */}
      <div className="nav-container container">
        <div className="logo">
          <Link to="/" aria-label="Merkez Nafaïs El Bayan — accueil">
            <img
              src="/cropped-WhatsApp_Image_2024-05-31_a_18.16.47_218c9fca-removebg-preview_dh2kld.png"
              alt="Merkez Nafaïs El Bayan"
              width="220"
              height="73"
            />
          </Link>
        </div>

        <nav className="main-nav" aria-label="Navigation principale">
          <ul>
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/inscription-et-tarifs" className="btn">
            S'inscrire
          </Link>
        </div>

        <button
          type="button"
          className={`burger ${isMenuOpen ? 'is-open' : ''}`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="menu-mobile"
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          <span className="burger-bar" />
          <span className="burger-bar" />
          <span className="burger-bar" />
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}
        id="menu-mobile"
        hidden={!isMenuOpen}
      >
        <nav aria-label="Navigation mobile">
          <ul>
            {NAV_LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} end={to === '/'}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu-actions">
          <Link to="/inscription-et-tarifs" className="btn btn-block">
            S'inscrire — 1er cours offert
          </Link>
          <a href="https://wa.me/33749542846" className="btn btn-outline btn-block">
            WhatsApp femmes
          </a>
          <a href="https://wa.me/262693136467" className="btn btn-outline btn-block">
            WhatsApp hommes
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <div className="menu-overlay" onClick={() => setIsMenuOpen(false)} aria-hidden="true" />
      )}

    </header>

    {/* Hors du <header> : celui-ci se translate hors de l'ecran quand il
        est escamote, ce qui emporterait le bouton avec lui. */}
    <button
      type="button"
      className={`retour-haut ${estMasque ? 'is-visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Revenir en haut de la page"
      tabIndex={estMasque ? 0 : -1}
    >
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path d="M12 5l-7 7h4v7h6v-7h4z" fill="currentColor" />
      </svg>
    </button>
    </>
  );
};

export default Header;
