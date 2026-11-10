import { Link } from 'react-router-dom';
import './ArabicCourses.css';
import Seo from '../components/Seo';

const ArabicCourses = () => {
  return (
    <div className="course-page">
      <Seo
        titre="Cours d'arabe en ligne"
        description="Cursus complet d'arabe en neuf niveaux, de l'alphabet à la lecture autonome. Cours en ligne sur Zoom pour femmes, hommes et enfants. Premier cours offert, dès 4 € l'heure."
        chemin="/cours-arabe"
      />
      {/* Page Header */}
      <div className="page-header arabic-header">
        <div className="container">
          <h1>Cours d'Arabe</h1>
          <p className="arabic-subtitle" lang="ar" dir="rtl">دورة لغة</p>
        </div>
      </div>

      <div className="container mt-4 mb-4">
        {/* Quote Section */}
        <section className="quote-section text-center">
          <blockquote>
            « Apprenez la langue arabe, car elle fait partie de votre religion. »
          </blockquote>
          <cite>‘Omar ibn Al-Khattâb (qu’Allah l’agrée) — rapporté par Ibn Abî Chayba dans son Mousannaf</cite>
        </section>

        {/* Nouraniyah Method Section */}
        <section className="nouraniyah-section mt-4">
          <h2 className="text-center mb-4">Apprendre la langue arabe avec la méthode Nouraniyah</h2>
          <p className="text-center mb-4">Voici ce que vous pouvez attendre de notre cours :</p>
          
          <div className="grid">
            <div className="card text-center">
              <h3>Apprentissage progressif</h3>
              <p>La méthode Nouraniyah commence par enseigner la prononciation correcte des lettres de l’alphabet arabe. Chaque lettre est étudiée individuellement, puis reliée aux autres pour former des mots et des phrases.</p>
            </div>
            <div className="card text-center">
              <h3>Règles de tajwîd</h3>
              <p>En plus de l’alphabet, vous découvrirez les règles de tajwîd (psalmodie du Coran). Vous apprendrez à lire le Coran avec la bonne intonation et à respecter les règles spécifiques à chaque lettre.</p>
            </div>
            <div className="card text-center">
              <h3>Exemples tirés du Coran</h3>
              <p>La méthode Nouraniyah s’appuie sur des exemples directement issus des versets du Coran. Vous développerez ainsi vos compétences en lecture et en compréhension du texte sacré.</p>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section className="curriculum-section mt-4">
          <h2 className="text-center mb-4">Un cursus complet en neuf niveaux</h2>
          <p className="text-center mb-4">Du tout premier contact avec l’alphabet jusqu’à la maîtrise de la grammaire, chaque niveau prépare le suivant. Un test de niveau détermine votre point de départ.</p>
          
          <div className="curriculum-block">
            <h3 className="section-title">Initiation à la langue arabe — La Préface</h3>
            <div className="grid">
              <div className="curriculum-card text-center">
                <p className="arabic-level" lang="ar" dir="rtl">المقدمة (أ)</p>
                <h4>Préface (1) — Votre premier pas en arabe</h4>
                <p>Reconnaissance et tracé des lettres de l’alphabet, prononciation des points de sortie (<em>makhârij</em>), voyelles courtes et longues, premiers assemblages de syllabes. Aucun prérequis.</p>
              </div>
              <div className="curriculum-card text-center">
                <p className="arabic-level" lang="ar" dir="rtl">المقدمة (ب)</p>
                <h4>Préface (2) — Votre deuxième pas</h4>
                <p>Lecture fluide de mots et de phrases courtes, règles de liaison, premiers éléments de vocabulaire courant et écriture attachée.</p>
              </div>
              <div className="curriculum-card text-center">
                <p className="arabic-level" lang="ar" dir="rtl">التمهيدي</p>
                <h4>Débutant — Vos débuts en grammaire</h4>
                <p>Niveau préparatoire à la grammaire arabe : nature des mots, phrase nominale et verbale, pronoms et premiers schémas de conjugaison.</p>
              </div>
            </div>
          </div>

          <div className="curriculum-block mt-4">
            <h3 className="section-title">Les Tomes — Moustawa 1 à 6</h3>
            <p className="text-center mb-4">Le cursus se poursuit sur six tomes progressifs, qui construisent la grammaire (<em>nahw</em>), la morphologie (<em>sarf</em>), le vocabulaire et l’expression, jusqu’à comprendre un texte arabe et vous exprimer à l’oral comme à l’écrit.</p>
            
            <div className="grid">
              <div className="curriculum-card">
                <h4>Tome (1) — Moustawa 1</h4>
                <p>Vocabulaire du quotidien, phrase simple, pronoms démonstratifs et interrogatifs.</p>
              </div>
              <div className="curriculum-card">
                <h4>Tome (2) — Moustawa 2</h4>
                <p>Conjugaison à l’accompli et à l’inaccompli, duel et pluriel, cas grammaticaux.</p>
              </div>
              <div className="curriculum-card">
                <h4>Tome (3) — Moustawa 3</h4>
                <p>Approfondissement du <em>nahw</em>, verbes irréguliers, compléments et compréhension de textes.</p>
              </div>
              <div className="curriculum-card">
                <h4>Tome (4) — Moustawa 4</h4>
                <p>Morphologie (<em>sarf</em>), schèmes verbaux augmentés, expression écrite guidée.</p>
              </div>
              <div className="curriculum-card">
                <h4>Tome (5) — Moustawa 5</h4>
                <p>Textes littéraires et religieux, syntaxe avancée, enrichissement lexical.</p>
              </div>
              <div className="curriculum-card">
                <h4>Tome (6) — Moustawa 6</h4>
                <p>Niveau avancé : rhétorique, lecture autonome des ouvrages de science et expression courante.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section text-center mt-4 mb-4">
          <h2 className="mt-4">Prêt à devenir arabophone ?</h2>
          <p>
            <strong>Le premier cours est gratuit et sans engagement.</strong><br/>
            Cours d'arabe dès <strong>3,50 € l’heure</strong> en groupe (3 à 5 pers.), <strong>6 € l’heure</strong> en duo (2 pers.) et <strong>9 € l’heure</strong> en solo (1 pers.). Livre : 10 €.
          </p>
          
          <div className="hero-buttons mt-4">
            <Link to="/inscription-et-tarifs" className="btn">Je m'inscris</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ArabicCourses;
