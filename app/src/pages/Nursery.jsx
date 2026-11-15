import { Link } from 'react-router-dom';
import './Nursery.css';
import Seo from '../components/Seo';

const Nursery = () => {
  return (
    <div className="course-page">
      <Seo
        titre="La Crèche — cours pour enfants"
        description="Apprentissage de la religion et de l'arabe pour les enfants, en quatre niveaux progressifs. Programme adapté à l'âge et au rythme de chacun, en ligne sur Zoom."
        chemin="/la-creche"
      />
      <div className="page-header nursery-header">
        <div className="container">
          <h1>La Crèche</h1>
          <p className="arabic-subtitle" lang="ar" dir="rtl">كتب الحضانة</p>
          <p className="header-tagline">Apprendre la religion aux enfants, avec Nafaïs el Bayan</p>
        </div>
      </div>

      <div className="container mt-4 mb-4">
        <section className="program-section text-center mt-4">
          <h2>Un programme complet, pensé pour les enfants</h2>
          <div className="intro-text">
            <p>Nos cours s’appuient sur le livre <strong>« La voie de l’apprentissage des sciences légiférées pour les enfants »</strong>, un ouvrage ayant reçu les éloges du grand savant Cheikh Hassan ibn ‘Abd El Wahhâb El Bannâ حفظه الله.</p>
            <p>Il couvre l’ensemble des matières fondamentales, adaptées à l’âge et au rythme de l’enfant :</p>
          </div>
          
          <div className="subjects-tags">
            <span className="tag">Jurisprudence (fiqh)</span>
            <span className="tag">Hadîth</span>
            <span className="tag">Tajwîd</span>
            <span className="tag">Comportement (adab)</span>
            <span className="tag">Exégèse du Coran (tafsîr)</span>
            <span className="tag">Invocation (du‘â)</span>
            <span className="tag">Biographie du Prophète ﷺ (sîra)</span>
          </div>
        </section>

        <section className="levels-section mt-4">
          <h2 className="text-center mb-4">Les quatre niveaux</h2>
          <p className="text-center mb-4">Le programme est découpé en quatre niveaux progressifs. Chaque enfant est évalué avant son intégration afin d’être placé dans le niveau qui lui correspond.</p>
          
          <div className="grid">
            <div className="level-card text-center nursery-level">
              <div className="level-badge">1</div>
              <h3>Niveau (1)</h3>
              <p>Premiers pas : les piliers de l’islam, les invocations du quotidien, les petites sourates et les bonnes manières de base.</p>
            </div>
            
            <div className="level-card text-center nursery-level">
              <div className="level-badge">2</div>
              <h3>Niveau (2)</h3>
              <p>Consolidation : la purification et la prière, les premiers hadîths, l’apprentissage du tajwîd et les récits prophétiques.</p>
            </div>
            
            <div className="level-card text-center nursery-level">
              <div className="level-badge">3</div>
              <h3>Niveau (3)</h3>
              <p>Approfondissement : le fiqh des adorations, l’exégèse des sourates étudiées et la biographie du Prophète ﷺ.</p>
            </div>
            
            <div className="level-card text-center nursery-level">
              <div className="level-badge">4</div>
              <h3>Niveau (4)</h3>
              <p>Niveau avancé : synthèse des matières, mémorisation élargie et autonomie dans la lecture et la compréhension.</p>
            </div>
          </div>
        </section>

        <section className="cta-section text-center mt-4 mb-4">
          <h2>Inscrire mon enfant</h2>
          <p>
            Les cours ont lieu sur Zoom, depuis chez vous, en solo, duo ou petit groupe.<br/>
            <strong>Le premier cours est gratuit et sans engagement.</strong><br/>
            Dès <strong>3,50 € l’heure</strong> en groupe (3 à 5 pers.), <strong>6 € l’heure</strong> en duo (2 pers.) et <strong>9 € l’heure</strong> en solo (1 pers.). Livre : 10 €.
          </p>
          
          <div className="hero-buttons mt-4">
            <Link to="/inscription-et-tarifs" className="btn">Je m'inscris</Link>
            <a href="https://wa.me/212648945906" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Nous contacter</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Nursery;
