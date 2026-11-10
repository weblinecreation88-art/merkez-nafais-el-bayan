import { Link } from 'react-router-dom';
import './ReligiousSciences.css';
import Seo from '../components/Seo';

const ReligiousSciences = () => {
  return (
    <div className="course-page">
      <Seo
        titre="Cours de sciences religieuses"
        description="Sciences religieuses enseignées selon la compréhension des pieux prédécesseurs. Cours en direct sur Zoom le samedi matin, gratuits pour les femmes adultes."
        chemin="/sciences-religieuses"
      />
      <div className="page-header religion-header">
        <div className="container">
          <h1>Cours religieux</h1>
          <p className="arabic-subtitle" lang="ar" dir="rtl">الدورات الدينية</p>
        </div>
      </div>

      <div className="container mt-4 mb-4">
        <section className="quote-section text-center">
          <blockquote>
            « Celui pour qui Allah veut un bien, Il lui fait apprendre la science de la religion. »
          </blockquote>
          <cite>Rapporté par Al-Boukhâri dans son Sahîh n°71 et Mouslim dans son Sahîh n°1037</cite>
        </section>

        <section className="intro-section mt-4 text-center">
          <h2>Apprendre les sciences avec Nafaïs el Bayan</h2>
          <div className="intro-text">
            <p>Apprendre les sciences religieuses n’a jamais été aussi facile : nos cours ont lieu dans une classe virtuelle sur Zoom, accessible depuis un téléphone, une tablette ou un ordinateur.</p>
            <p>Ils sont dispensés en arabe et en direct par <strong>la fille du Cheikh</strong>, puis traduits, et enfin retranscrits en arabe comme en français.</p>
            <p className="bonus-note"><strong>Bon à savoir :</strong> les cours de sciences religieuses du samedi matin, en direct sur Zoom pour les femmes, sont dispensés <strong>à titre gratuit pour les adultes</strong> par Doha Oum Abd Rahman, la fille du Cheikh, et retranscrits sur Telegram.</p>
          </div>
        </section>

        <section className="subjects-section mt-4">
          <h2 className="text-center mb-4">Nos matières</h2>
          <div className="grid">
            <div className="subject-card">
              <h3>Cours de ‘Aqîda (le Dogme)</h3>
              <p>Les supports étudiés :</p>
              <ul>
                <li>Le poème <strong>El Hâ’iyya</strong> de l’Imam Ibn Abî Dâoud</li>
                <li>Les <strong>Trois Fondements</strong> du Cheikh Mouhammad ibn Abd El Wahhâb</li>
                <li><strong>Madârij as-Sâlikîn</strong> (Le sentier des itinérants) de l’Imam Ibn al-Qayyim</li>
              </ul>
            </div>
            <div className="subject-card">
              <h3>Cours de Hadîth</h3>
              <p>Le support étudié :</p>
              <ul>
                <li>Les <strong>40 Hadîths an-Nawawî</strong></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="process-section mt-4">
          <h2 className="text-center mb-4">Comment se déroule un cours</h2>
          <p className="text-center mb-4">Le cours se déroule <strong>une fois par semaine</strong> sur la plateforme Zoom.</p>
          
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Lecture et répétition</h4>
              <p>Le professeur lit quelques vers, et les élèves répètent après lui.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Explication</h4>
              <p>Le professeur procède ensuite à l’explication de la partie à mémoriser.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Mémorisation à la maison</h4>
              <p>L’élève mémorise la partie pour la semaine suivante et révise l’explication.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h4>Validation</h4>
              <p>À chaque début de cours, les élèves volontaires peuvent réciter la partie à mémoriser afin que le professeur corrige et valide.</p>
            </div>
          </div>
        </section>

        <section className="cta-section text-center mt-4 mb-4">
          <h2>Rejoindre un cours</h2>
          <p>
            <strong>Le premier cours est gratuit et sans engagement.</strong><br/>
            Cours de sciences religieuses dès <strong>3,50 € l’heure</strong> en groupe (3 à 5 pers.), <strong>6 € l’heure</strong> en duo (2 pers.) et <strong>9 € l’heure</strong> en solo (1 pers.). Livre pour enfants : 10 €.
          </p>
          
          <div className="hero-buttons mt-4">
            <Link to="/inscription-et-tarifs" className="btn">Je m'inscris</Link>
            <a href="tel:+33749542846" className="btn btn-outline">Inscription femme</a>
            <a href="tel:+262693136467" className="btn btn-outline">Inscription homme</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReligiousSciences;
