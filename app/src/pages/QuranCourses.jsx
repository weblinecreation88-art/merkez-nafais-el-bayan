import { Link } from 'react-router-dom';
import './QuranCourses.css';
import Seo from '../components/Seo';

const QuranCourses = () => {
  return (
    <div className="course-page">
      <Seo
        titre="Cours de Coran en ligne"
        description="Apprenez le Coran en ligne sur Zoom : mémorisation (hifz), tajwîd et méthode Nouraniyah. Professeurs qualifiés, ijâza possible. Premier cours offert, dès 3,50 € l'heure."
        chemin="/cours-de-coran"
      />
      {/* Page Header */}
      <div className="page-header quran-header">
        <div className="container">
          <h1>Cours de Coran</h1>
          <p className="arabic-subtitle" lang="ar" dir="rtl">دروس القرآن</p>
        </div>
      </div>

      <div className="container mt-4 mb-4">
        {/* Quote Section */}
        <section className="quote-section text-center">
          <blockquote>
            « Le meilleur d’entre vous est celui qui apprend le Coran et l’enseigne. »
          </blockquote>
          <cite>Le Prophète ﷺ — rapporté par al-Boukhâri</cite>
        </section>

        {/* Intro Section */}
        <section className="intro-section mt-4 text-center">
          <h2>Apprendre le Coran avec Nafaïs el Bayan</h2>
          <div className="intro-text">
            <p>Apprendre le Coran n’a jamais été aussi facile. Nos cours ont lieu dans une classe virtuelle sur Zoom : vous pouvez y accéder depuis un téléphone, une tablette ou un ordinateur, où que vous soyez.</p>
            <p>Nos cours sont adaptés à tous, des grands débutants aux arabophones confirmés : <strong>aucune connaissance préalable de la langue arabe n’est requise</strong>. Que vous soyez homme, femme ou enfant, nos leçons sont conçues pour vous, avec des méthodes pédagogiques éprouvées.</p>
            <p>Nos enseignants qualifiés vous guideront à travers les règles de la lecture coranique en utilisant la <strong>méthode Nouraniyah</strong>. Vous développerez progressivement vos compétences en tajwîd (règles de prononciation) et en mémorisation des versets sacrés.</p>
          </div>
        </section>

        {/* Pathways Section */}
        <section className="pathways-section mt-4">
          <h2 className="text-center mb-4">Nos deux parcours</h2>
          <div className="grid">
            <div className="card text-center">
              <h3>Mémorisation (Hifz)</h3>
              <p>Mémorisez le Livre d’Allah à votre rythme, avec un programme de révision personnalisé. Possibilité d’obtenir une <em>ijâza</em> pour les élèves avancés.</p>
            </div>
            <div className="card text-center">
              <h3>Tajwîd</h3>
              <p>Perfectionnez votre prononciation avec les méthodes <em>Tuhfat al-Atfâl</em>, <em>Al-Jazariyya</em> ou <em>Ash-Shâtibiyya</em>, enseignées par des professeurs habilités.</p>
            </div>
          </div>
        </section>

        {/* Levels Section */}
        <section className="levels-section mt-4">
          <h2 className="text-center mb-4">Le déroulement des cours, niveau par niveau</h2>
          <p className="text-center mb-4">Chaque élève passe un test de niveau avant son intégration, afin d’être orienté vers le parcours qui lui correspond.</p>
          
          <div className="levels-grid">
            <div className="level-card">
              <h3>Niveau Débutant</h3>
              <p className="objective"><strong>Objectif :</strong> maîtriser le déchiffrage des lettres et lire correctement, puis mémoriser les sourates courtes (juz’ ‘Amma).</p>
              <ol>
                <li><strong>Révision.</strong> L’étudiant récite ce qu’il a mémorisé auparavant.</li>
                <li><strong>Récitation du nouveau passage.</strong> L’étudiant récite par cœur ce qu’il a mémorisé.</li>
                <li><strong>Lecture accompagnée + tajwîd.</strong> L’étudiant lit seul sur le Mus-haf ; le professeur le corrige et lui enseigne les règles de tajwîd correspondantes.</li>
              </ol>
            </div>

            <div className="level-card">
              <h3>Niveau Moyen</h3>
              <p className="objective"><strong>Objectif :</strong> installer un rythme de mémorisation régulier et consolider les acquis par un programme de révision structuré.</p>
              <ol>
                <li><strong>Révision.</strong> L’étudiant récite ce qu’il a mémorisé auparavant.</li>
                <li><strong>Récitation du nouveau passage.</strong> L’étudiant récite par cœur.</li>
                <li><strong>Lecture des nouveaux versets + tajwîd.</strong> Le professeur enseigne les règles utiles en fonction des versets abordés.</li>
              </ol>
            </div>

            <div className="level-card">
              <h3>Niveau Avancé</h3>
              <p className="objective"><strong>Objectif :</strong> viser la mémorisation complète et la maîtrise d’une lecture (<em>riwâya</em>), avec possibilité d’<em>ijâza</em>.</p>
              <ol>
                <li><strong>Révision.</strong> L’étudiant récite ce qu’il a mémorisé auparavant.</li>
                <li><strong>Récitation du nouveau passage.</strong> L’étudiant récite par cœur.</li>
                <li><strong>Perfectionnement du tajwîd.</strong> Le professeur approfondit les règles et prépare l’élève à la certification.</li>
              </ol>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/inscription-et-tarifs" className="btn">Je m'inscris</Link>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="why-us-section mt-4 mb-4">
          <h2 className="text-center mb-4">Pourquoi choisir le Merkez Nafaïs el Bayan</h2>
          <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
            <div className="feature-item">
              <h3>Une équipe compétente</h3>
              <p>Nos professeurs sont sélectionnés selon leurs diplômes et évalués par le noble Cheikh Ali ibn Abd El Aziz Moussa حفظه الله. Ils sont aptes à octroyer des <em>ijâzât</em>.</p>
            </div>
            <div className="feature-item">
              <h3>Un suivi personnalisé</h3>
              <p>Chaque élève avance à son rythme et choisit sa quantité de mémorisation, avec le conseil de son professeur. Il choisit le nombre de cours hebdomadaires et mensuels.</p>
            </div>
            <div className="feature-item">
              <h3>Un apprentissage progressif</h3>
              <p>Chaque élève passe un test de niveau. Le professeur l’oriente et s’adapte à son rythme d’avancement, en fonction de ses capacités et disponibilités.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section text-center mt-4 mb-4">
           <blockquote>
            « Aucun homme n’est sorti de sa maison pour la recherche de la science sans qu’Allah ne lui facilite un chemin vers le Paradis. »
            <cite>At-Tabarâni, authentifié par Cheikh Al-Albâni</cite>
          </blockquote>
          
          <h2 className="mt-4">Commencez dès aujourd’hui</h2>
          <p>
            <strong>Le premier cours est gratuit et sans engagement.</strong><br/>
            Cours de Coran / Nouraniyah dès <strong>3,50 € l’heure</strong> en groupe (3 à 5 pers.), <strong>6 € l’heure</strong> en duo (2 pers.) et <strong>9 € l’heure</strong> en solo (1 pers.). Le livre Nouraniyah est offert.
          </p>
          
          <div className="hero-buttons mt-4">
            <a href="https://wa.me/212648945906" target="_blank" rel="noopener noreferrer" className="btn">Inscription femme</a>
            <a href="https://wa.me/262693136467" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Inscription homme</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default QuranCourses;
