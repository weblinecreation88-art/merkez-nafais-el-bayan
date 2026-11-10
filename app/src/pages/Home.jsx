import { Link } from 'react-router-dom';
import './Home.css';
import Seo from '../components/Seo';

/* Données structurées : permettent à Google d'identifier le centre comme
   un organisme de formation, avec ses coordonnées et son catalogue. */
const SCHEMA_ORGANISME = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Merkez Nafaïs El Bayan',
  alternateName: 'نفائس البيان لتعليم اللغة العربية والقرآن',
  description:
    "Institut en ligne d'apprentissage du Coran, de la langue arabe et des sciences religieuses, basé au Caire.",
  url: 'https://merkez-nafais-el-bayan.fr',
  logo: 'https://merkez-nafais-el-bayan.fr/cropped-WhatsApp_Image_2024-05-31_a_18.16.47_218c9fca-removebg-preview_dh2kld.png',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Le Caire',
    addressCountry: 'EG',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+33749542846',
      contactType: 'Inscriptions femmes et enfants',
      availableLanguage: ['fr', 'ar'],
    },
    {
      '@type': 'ContactPoint',
      telephone: '+262693136467',
      contactType: 'Inscriptions hommes',
      availableLanguage: ['fr', 'ar'],
    },
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Nos formations',
    itemListElement: [
      { '@type': 'Course', name: 'Cours de Coran', description: 'Mémorisation et tajwîd.' },
      { '@type': 'Course', name: "Cours d'arabe", description: 'Cursus complet en neuf niveaux.' },
      { '@type': 'Course', name: 'Sciences religieuses', description: 'Cours en direct sur Zoom.' },
      { '@type': 'Course', name: 'La Crèche', description: 'Programme pour les enfants.' },
    ],
  },
};

/* Icônes reprises du site d'origine (jeu d'icônes rondes violettes),
   téléchargées dans /public pour ne plus dépendre du serveur source. */
const PILIERS = [
  {
    to: '/cours-de-coran',
    titre: 'Cours de Coran',
    texte: 'Mémorisation et tajwîd, du déchiffrage à l’ijâza.',
    image: '/icone-30.png',
  },
  {
    to: '/cours-arabe',
    titre: 'Cours d’Arabe',
    texte: 'Neuf niveaux, de l’alphabet à la lecture autonome.',
    image: '/icone-20.png',
  },
  {
    to: '/sciences-religieuses',
    titre: 'Sciences Religieuses',
    texte: 'Le samedi matin en direct, gratuit pour les adultes.',
    image: '/icone-10.png',
  },
  {
    to: '/a-propos',
    titre: 'Cadre Bienveillant',
    texte: 'Un accompagnement pas à pas, dans le respect de chacun.',
    image: '/icone-00.png',
  },
];

const Home = () => {
  return (
    <div className="home-page">
      <Seo
        description="Institut en ligne d'apprentissage du Coran, de la langue arabe et des sciences religieuses avec le cheikh Ali Moussa. Cours sur Zoom pour femmes, hommes et enfants. Premier cours offert, dès 3,50 € l'heure."
        chemin="/"
        schema={SCHEMA_ORGANISME}
      />

      {/* ---------- 1. Hero ---------- */}
      <section className="hero-identique">
        <div className="section-bg fill" aria-hidden="true">
          <img src="/bg-hero.png" className="bg" alt="" />
        </div>

        <div className="section-content relative">
          <div className="hero-inner text-center">
            <h1 className="hero-title">Merkez Nafaïs El Bayan</h1>

            <p className="hero-cheikh">
              Avec le cheikh Ali Moussa <span lang="ar" dir="rtl">حفظه الله</span>
            </p>

            <p className="hero-baseline">
              Apprenez le Coran, la langue arabe et les sciences religieuses selon le Coran et la
              Sounnah.
            </p>

            {/* Un appel à l'action dès le premier écran : auparavant, le
                premier bouton n'apparaissait qu'en bas de page. */}
            <div className="hero-buttons mt-5">
              <Link to="/inscription-et-tarifs" className="btn btn-lg">
                Je m’inscris — 1er cours offert
              </Link>
              <Link to="/cours-de-coran" className="btn btn-secondary btn-lg">
                Découvrir les cours
              </Link>
            </div>

            <ul className="hero-reassurance">
              <li>Cours en ligne sur Zoom</li>
              <li>Femmes, hommes et enfants</li>
              <li>Dès 3,50 € l’heure</li>
            </ul>
          </div>
        </div>

        <div className="ux-shape-divider ux-shape-divider--bottom" aria-hidden="true">
          <svg viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path
              className="ux-shape-fill"
              d="M0 0C0 0 200 50 500 50C800 50 1000 0 1000 0V101H0V1V0Z"
            />
          </svg>
        </div>
      </section>

      {/* ---------- 2. Les quatre pôles, cliquables ---------- */}
      <section className="features-overlap-container" aria-label="Nos formations">
        <div className="features-overlap-grid container">
          {PILIERS.map(({ to, titre, texte, image }) => (
            <Link to={to} key={to} className="feature-card overlap-card text-center">
              <div className="feature-image-small">
                <img src={image} alt="" aria-hidden="true" loading="lazy" />
              </div>
              <h3 className="feature-title">{titre}</h3>
              <p className="feature-text">{texte}</p>
              <span className="feature-link">En savoir plus</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- 3. Bienvenue ---------- */}
      <section className="bienvenue-section container text-center aere-section">
        <div className="bienvenue-image-wrapper">
          <img src="/06a704006660d7beae4d294543e23cbe.png" alt="" aria-hidden="true" loading="lazy" />
        </div>
        <h2 className="title-purple mt-5">Bienvenue au centre Merkez Nafaïs El Bayan</h2>
        <p className="arabic-text mt-4" lang="ar" dir="rtl">
          نَفَائسُ الْبَيَانِ لِتَعْلِيمِ اللُّغة الْعَرَبِيَةِ وَالْقُرْآنِ
        </p>
        <p className="lead mt-4">
          Institut d’apprentissage de la langue arabe, du Coran et des sciences religieuses, basé au
          Caire en Égypte.
        </p>
      </section>

      {/* ---------- 4. Notre Merkez ---------- */}
      <section className="notre-merkez container aere-section">
        <h2 className="title-purple text-center">Notre Merkez</h2>
        <div className="intro-text mt-5">
          <p>
            <strong>Le Merkez Nafaïs el Bayan</strong> est le substitut de l’ancien institut nommé
            «&nbsp;<strong>Dar El Hikma</strong>&nbsp;» au{' '}
            <strong>Merkez El Badr du Cheikh Ali Ibn Abd El Aziz Moussa</strong>. Votre institut en
            ligne pour l’apprentissage de la langue arabe, du Coran et de la science religieuse
            s’adapte à toute la famille.
          </p>
          <p>
            Nos cours sont destinés aux femmes, aux hommes et aux enfants. Opter pour des cours en
            ligne, c’est choisir la sécurité et la facilité. Plus besoin de voyager pour apprendre
            votre religion, un bon intermédiaire en attendant votre Hijra&nbsp;!
          </p>
          <p>
            L’accès à l’apprentissage de la langue arabe, du Coran et de la religion n’a jamais été
            aussi facilité qu’à notre époque, el hamdoulillah. Comme beaucoup d’élèves,
            rejoignez-nous&nbsp;! Nos enseignants sont qualifiés et recommandés par notre Cheikh,
            qui les évalue avant de les recruter.
          </p>
          <p>
            Nos cours sont dispensés dans des classes virtuelles sur l’application{' '}
            <strong>Zoom</strong>, accessibles depuis tout support&nbsp;: ordinateur, smartphone ou
            tablette. Il suffit de nous contacter et nous nous efforcerons de répondre au mieux à
            vos attentes bi idhniLlah.
          </p>
        </div>
      </section>

      {/* ---------- 5. Notre mission ---------- */}
      <section className="notre-mission aere-section-colored">
        <div className="section-bg fill" aria-hidden="true">
          <img
            src="/6289f19ce461d386e083603e_purple-gradient_k4qarj.png"
            className="bg"
            alt=""
          />
        </div>

        <div className="section-content relative text-white container text-center">
          <h2>Notre mission au centre</h2>
          <div className="mission-grid mt-5">
            <div className="mission-item">
              <h3>Favoriser</h3>
              <p>
                L’apprentissage de la langue arabe, avec des cours adaptés à tous les niveaux — des
                débutants aux avancés — et un accent particulier sur l’expression orale et écrite.
              </p>
            </div>
            <div className="mission-item">
              <h3>Encourager</h3>
              <p>
                La mémorisation du Coran, en mettant à disposition des méthodes et des outils
                efficaces pour aider nos étudiants à mémoriser et à comprendre le Saint Coran.
              </p>
            </div>
            <div className="mission-item">
              <h3>Promouvoir</h3>
              <p>
                Les valeurs islamiques, en enseignant les sciences islamiques, le Coran et la Sunna
                selon la compréhension des pieux prédécesseurs.
              </p>
            </div>
          </div>
        </div>

        <div
          className="ux-shape-divider ux-shape-divider--bottom ux-shape-divider--style-curve-invert"
          aria-hidden="true"
        >
          <svg viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path
              className="ux-shape-fill"
              d="M500 47.0297C184.4 47.0297 -26 100 -26 100H1026C1026 100 815.6 47.0297 500 47.0297ZM1026 -5.94059H-26V-7H1026V-5.94059Z"
            />
          </svg>
        </div>
      </section>

      {/* ---------- 6. Le Cheikh ---------- */}
      <section className="presentation-cheikh container aere-section">
        <div className="pill-card purple-bg">
          <h2 className="text-white text-center">
            Présentation personnelle de cheikh Ali Moussa
          </h2>
          <p className="text-white text-center mt-4 pill-text">
            Le Cheikh fait partie des gens de sciences en Égypte. Il a pris la science chez de
            grands savants en Arabie Saoudite (qu’Allah la préserve de tout mal), et ce durant une
            période de onze ans.
          </p>
          <div className="text-center mt-5">
            <Link to="/a-propos" className="btn btn-secondary">
              Lire sa biographie
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- 7. Le Merkez propose ---------- */}
      <section className="merkez-propose aere-section-colored">
        <div className="section-content relative container">
          <h2 className="text-center text-white mb-5">Le Merkez propose</h2>
          <div className="propose-grid mt-5">
            <article className="propose-card">
              <h3>L’apprentissage du Coran</h3>
              <ul className="propose-list">
                <li>Tu souhaites perfectionner ta prononciation du Coran&nbsp;?</li>
                <li>
                  Nos enseignants t’enseignent le tajwîd avec la méthode Tuhfatul Atfal, Al
                  Jazariya, ou même As Shatibiya.
                </li>
                <li>
                  Mémorisation du Coran avec possibilité d’obtention d’une ijâza pour les élèves
                  avancés.
                </li>
              </ul>
              <Link to="/cours-de-coran" className="propose-cta">
                Voir les cours de Coran
              </Link>
            </article>

            <article className="propose-card">
              <h3>L’apprentissage des sciences religieuses</h3>
              <ul className="propose-list">
                <li>Enseignement du poème «&nbsp;Touhfat el atfal&nbsp;» avec obtention de l’ijâza.</li>
                <li>
                  Sciences religieuses le samedi matin, en direct sur Zoom pour les femmes, à titre
                  gratuit pour les adultes.
                </li>
                <li>
                  Cours dispensés par Doha Oum Abd Rahman, la fille du Cheikh, traduits et
                  retranscrits sur Telegram.
                </li>
              </ul>
              <Link to="/sciences-religieuses" className="propose-cta">
                Voir les sciences religieuses
              </Link>
            </article>

            <article className="propose-card">
              <h3>La langue arabe</h3>
              <ul className="propose-list">
                <li>Un cursus complet en neuf niveaux&nbsp;:</li>
                <li>Mouqadima 1 et 2 — l’alphabet et la lecture</li>
                <li>Moustawa 1 à 6 — grammaire, morphologie et expression</li>
                <li>Un test de niveau détermine votre point de départ.</li>
              </ul>
              <Link to="/cours-arabe" className="propose-cta">
                Voir les cours d’arabe
              </Link>
            </article>
          </div>
        </div>
        <div
          className="ux-shape-divider ux-shape-divider--bottom ux-shape-divider--style-curve-invert"
          aria-hidden="true"
        >
          <svg viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path
              className="ux-shape-fill"
              d="M500 47.0297C184.4 47.0297 -26 100 -26 100H1026C1026 100 815.6 47.0297 500 47.0297ZM1026 -5.94059H-26V-7H1026V-5.94059Z"
            />
          </svg>
        </div>
      </section>

      {/* ---------- 8. Le problème que nous résolvons ---------- */}
      <section className="parcours-eleve container text-center aere-section">
        <h2 className="title-purple">
          Ils ne savent pas par où commencer&nbsp;: quel programme choisir, quels cours suivre&nbsp;?
        </h2>

        <div className="intro-text mt-5">
          <p>
            Ils sont motivés, mais ont besoin d’un véritable accompagnement et d’un soutien
            quotidien. Même lorsqu’ils ont déjà suivi des cours d’arabe, leur progression reste
            souvent irrégulière.
          </p>
          <p>
            Ils ne peuvent pas toujours choisir le profil de leur enseignant(e), et leurs emplois du
            temps chargés — entre le travail et la famille — ne leur permettent pas de trouver des
            cours adaptés à leurs disponibilités.
          </p>
        </div>

        <div className="pill-card purple-bg mt-5">
          <h3 className="text-white">
            Résultat&nbsp;: l’apprentissage de la langue arabe leur paraît difficile, voire
            inaccessible.
          </h3>
          <p className="text-white mt-4 pill-text">
            Avec <strong>Merkez Nafaïs El Bayan</strong>, nos élèves sont suivis pas à pas.
          </p>
        </div>
      </section>

      {/* ---------- 9. Une équipe compétente ---------- */}
      <section className="equipe-competente aere-section-colored">
        <div className="section-bg fill" aria-hidden="true">
          <img
            src="/6289f19ce461d386e083603e_purple-gradient_k4qarj.png"
            className="bg"
            alt=""
          />
        </div>
        <div className="section-content relative text-white container text-center">
          <h2>Une équipe compétente</h2>
          <div className="intro-text mt-5">
            <p>
              Nos enseignants sont sélectionnés avec soin sur la base de leurs diplômes, puis
              évalués par le noble Cheikh Ali Ibn Abd El Aziz Moussa, qu’Allah le préserve, avant
              leur recrutement.
            </p>
            <p>
              Nos professeurs de Coran sont qualifiés pour enseigner plusieurs lectures et, par la
              grâce d’Allah, pour accorder des autorisations d’enseignement (<em>ijâza</em>).
            </p>
          </div>
        </div>
        <div
          className="ux-shape-divider ux-shape-divider--bottom ux-shape-divider--style-curve-invert"
          aria-hidden="true"
        >
          <svg viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path
              className="ux-shape-fill"
              d="M500 47.0297C184.4 47.0297 -26 100 -26 100H1026C1026 100 815.6 47.0297 500 47.0297ZM1026 -5.94059H-26V-7H1026V-5.94059Z"
            />
          </svg>
        </div>
      </section>

      {/* ---------- 10. Un suivi personnalisé ---------- */}
      <section className="suivi-personnalise container text-center aere-section">
        <h2 className="title-purple">Un suivi personnalisé</h2>
        <div className="intro-text mt-5">
          <p>
            Chaque élève progresse à son propre rythme, avec le choix de la quantité de mémorisation
            souhaitée, sous le conseil et le suivi de son professeur. Un accompagnement régulier
            permet d’évaluer ses progrès et d’adapter le programme en fonction de son avancement.
          </p>
          <p>
            Un programme de révision est également proposé, adapté aux capacités et au niveau de
            mémorisation de chaque élève.
          </p>
          <p>
            Enfin, l’élève peut choisir le nombre de cours hebdomadaires ou mensuels selon ses
            disponibilités et ses objectifs.
          </p>
        </div>
      </section>

      {/* ---------- 11. Avec le Merkez, tu pourras ---------- */}
      <section className="avec-merkez aere-section-colored">
        <div className="section-content relative container">
          <h2 className="text-center text-white mb-5">Avec Merkez Nafaïs El Bayan, tu pourras</h2>
          <div className="propose-grid mt-5">
            <article className="propose-card text-center">
              <h3>Devenir arabophone</h3>
              <p>
                Pour comprendre le Coran et l’ensemble de ta religion, la langue arabe est
                essentielle.
              </p>
              <blockquote className="hadith">
                «&nbsp;Apprenez la langue arabe car elle fait partie de la religion.&nbsp;»
                <cite>‘Omar Ibn El Khattâb — rapporté par Ibn Abî Chayba dans son Mousannaf</cite>
              </blockquote>
            </article>

            <article className="propose-card text-center">
              <h3>Connaître les sciences islamiques</h3>
              <p>Apprendre sa religion est une obligation qui incombe à chaque musulman.</p>
              <blockquote className="hadith">
                «&nbsp;Apprendre la science est une obligation pour chaque musulman.&nbsp;»
                <cite>
                  D’après Anas — rapporté par Ibn Mâja, authentifié par Cheikh Al-Albâni dans Sahîh
                  Targhîb n°72
                </cite>
              </blockquote>
            </article>

            <article className="propose-card text-center">
              <h3>Mémoriser le Coran</h3>
              <p>
                Mémoriser le Livre d’Allah, puis le transmettre, est le plus noble des
                apprentissages.
              </p>
              <blockquote className="hadith">
                «&nbsp;Le meilleur d’entre vous est celui qui a appris le Coran et l’a enseigné aux
                autres.&nbsp;»
                <cite>
                  Selon ‘Othmân Ibn ‘Affân — rapporté par El Boukhâri dans son Sahîh n°5027
                </cite>
              </blockquote>
            </article>
          </div>
        </div>
        <div
          className="ux-shape-divider ux-shape-divider--bottom ux-shape-divider--style-curve-invert"
          aria-hidden="true"
        >
          <svg viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path
              className="ux-shape-fill"
              d="M500 47.0297C184.4 47.0297 -26 100 -26 100H1026C1026 100 815.6 47.0297 500 47.0297ZM1026 -5.94059H-26V-7H1026V-5.94059Z"
            />
          </svg>
        </div>
      </section>

      {/* ---------- 12. Les sessions du Cheikh ---------- */}
      <section className="sessions-cheikh container aere-section">
        <div className="sessions-grid">
          <div className="sessions-text">
            <h2 className="title-purple">
              Les sessions de Cheikh Ali Moussa, uniquement au Merkez Nafaïs El Bayan
            </h2>
            <p className="mt-4 lead-muted">
              L’honorable Cheikh du Caire, qui enseigne depuis de nombreuses années les différentes
              sciences religieuses et est connu pour son excellente pédagogie, nous fait l’honneur
              de présenter chaque semaine des séries de questions / réponses. Vous pouvez envoyer
              vos questions en arabe, ou nous les envoyer en français afin que nous les traduisions.
            </p>
            <p className="mt-3 lead-muted">
              Ce qui était autrefois réservé aux habitants du Caire vous est désormais accessible.
            </p>

            <div className="info-box mt-5">
              <h3>Institut du Cheikh en ligne</h3>
              <p>
                <a href="https://t.me/ibnAbdelaziz" target="_blank" rel="noopener noreferrer">
                  t.me/ibnAbdelaziz
                </a>{' '}
                — tous les cours dispensés à l’époque au Merkez «&nbsp;Dar El Hikma&nbsp;» y ont été
                enregistrés.
              </p>
              <p className="mt-3">
                Les cours sont en arabe. Le Cheikh encourage les francophones à s’efforcer de les
                écouter en arabe pendant qu’ils apprennent la langue&nbsp;: cela fait partie des
                causes de l’acquisition.
              </p>
              <p className="mt-3">
                Pour poser une question directement en arabe via Telegram&nbsp;:{' '}
                <a href="https://t.me/+201284837286">+20 128 483 7286</a>. En français,
                envoyez-la-nous et nous la traduirons.
              </p>
            </div>
          </div>

          <div className="sessions-image">
            <img
              src="/Design-sans-titre-9_lpbsr8.png"
              alt="Aperçu des sessions de questions-réponses du Cheikh sur Telegram"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ---------- 13. Appel à l'action final ---------- */}
      <section className="tous-supports aere-section-colored">
        <div className="section-bg fill" aria-hidden="true">
          <img
            src="/6289f19ce461d386e083603e_purple-gradient_k4qarj.png"
            className="bg"
            alt=""
          />
        </div>
        <div className="section-content relative container text-center text-white">
          <h2>Sur tous les supports</h2>
          <p className="mt-4 lead-white">
            Ordinateur, tablette ou smartphone&nbsp;: suivez vos cours d’où vous voulez.
          </p>

          <div className="supports-mockup mt-5 mb-5">
            <img
              src="/Soft-Minimalist-Download-Multiple-Devices-Mockup-2_cxc2cf.png"
              alt="Le site affiché sur ordinateur, tablette et téléphone"
              loading="lazy"
            />
          </div>

          <h3 className="text-white">Prêt à commencer&nbsp;? Le premier cours est offert.</h3>

          <div className="support-buttons mt-5">
            <a href="https://wa.me/33749542846" className="btn btn-secondary btn-lg">
              Inscription femmes
            </a>
            <a href="https://wa.me/262693136467" className="btn btn-secondary btn-lg">
              Inscription hommes
            </a>
          </div>

          <p className="mt-4 support-note">
            Vous préférez un formulaire&nbsp;?{' '}
            <Link to="/inscription-et-tarifs">Voir les tarifs et pré-inscription</Link>
          </p>
        </div>
        <div
          className="ux-shape-divider ux-shape-divider--bottom ux-shape-divider--style-curve"
          aria-hidden="true"
        >
          <svg viewBox="0 0 1000 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path
              className="ux-shape-fill"
              d="M0 0C0 0 200 50 500 50C800 50 1000 0 1000 0V101H0V1V0Z"
            />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Home;
