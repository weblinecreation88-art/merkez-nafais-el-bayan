import { Link } from 'react-router-dom';
import './About.css';
import Seo from '../components/Seo';

const About = () => {
  return (
    <div className="about-page">
      <Seo
        titre="À propos du centre et du Cheikh Ali Moussa"
        description="Le Merkez Nafaïs El Bayan, institut en ligne basé au Caire, et la biographie du Cheikh Ali ibn Abd El Aziz Moussa : ses chouyoukh et ses ijâzât dans le Coran."
        chemin="/a-propos"
      />
      <div className="page-header about-header">
        <div className="container">
          <h1>À propos</h1>
          <p>Le centre Merkez Nafaïs El Bayan et le Cheikh Ali Moussa</p>
        </div>
      </div>

      <div className="container mt-4 mb-4">
        <section className="about-merkez">
          <h2 className="text-center mb-4">Notre centre</h2>
          <div className="intro-text">
            <p>Le Merkez Nafaïs el Bayan est le prolongement de l’ancien institut « Dar El Hikma », au Merkez El Badr du Cheikh Ali ibn Abd El Aziz Moussa. Votre institut en ligne pour l’apprentissage de la langue arabe, du Coran et des sciences religieuses s’adapte à toute la famille.</p>
            <p>Nos cours sont destinés aux <strong>femmes, aux hommes et aux enfants</strong>. Opter pour des cours en ligne, c’est choisir la sécurité et la facilité : plus besoin de voyager pour apprendre votre religion — un bon intermédiaire en attendant votre Hijra !</p>
            <p>L’accès à l’apprentissage de la langue arabe, du Coran et de la religion n’a jamais été aussi facilité qu’à notre époque, el hamdoulillah. Comme beaucoup d’élèves, rejoignez-nous ! Nos enseignants sont qualifiés et recommandés par notre Cheikh, qui les évalue avant de les recruter.</p>
            <p>Nos cours sont dispensés dans des classes virtuelles sur l’application <strong>Zoom</strong>, accessibles depuis tout support : ordinateur, smartphone ou tablette. Il suffit de nous contacter et nous nous efforcerons de répondre au mieux à vos attentes, bi idhniLlah.</p>
          </div>
        </section>

        <section className="about-cheikh mt-4">
          <h2 className="text-center mb-4">Biographie du Cheikh ‘Ali ben Abdelaziz Moussa</h2>
          <p className="text-center arabic-subtitle" lang="ar" dir="rtl" style={{ color: 'var(--primary-color)' }}>الشيخ علي بن عبدالعزيز موسى</p>
          
          <div className="intro-text mt-4">
            <p>Le Cheikh fait partie des gens de science en Égypte. Il a pris la science auprès de grands savants en Arabie Saoudite (qu’Allah la préserve de tout mal), et ce durant une période de <strong>onze années</strong>.</p>
            
            <div className="bio-card mt-4">
              <h3>Parmi ses Chouyoukh</h3>
              <ul className="custom-list">
                <li><strong>Cheikh AbdelAziz ibn AbdiLlah ibn Bâz</strong> <em>rahimahuLlah</em>, ancien Mufti d’Arabie Saoudite. Il a étudié auprès de lui pendant environ deux ans.</li>
                <li><strong>Le savant Sâlih ibn Fawzân al-Fawzân</strong> <em>hafidhahuLlah</em>.</li>
                <li><strong>Le savant AbdelAziz ibn AbdiLlah ar-Râjihî</strong> <em>hafidhahuLlah</em>.</li>
                <li><strong>Le savant Sâlih al-Atram</strong>, membre du Comité Permanent (<em>Lajnah Dâ’imah</em>).</li>
                <li><strong>Le savant AbdelKarîm ibn AbdiLlah al-Khoudheyr</strong>, membre du Comité Permanent.</li>
              </ul>
            </div>

            <div className="bio-card mt-4">
              <h3>Ses ijâzât dans le Coran</h3>
              <ul className="custom-list">
                <li>Il a lu la <strong>riwâya de Hafs</strong> auprès de son Cheikh Mohammed Fakhreddine Balir, et y a obtenu une <em>ijâza</em>.</li>
                <li>Il a lu la <strong>riwâya de Chu‘bah</strong> auprès du même Cheikh, et y a obtenu une <em>ijâza</em>.</li>
                <li>Il a lu la <strong>riwâya d’Ibn Kathîr al-Makkî</strong> jusqu’à la sourate Saba’ auprès du Cheikh Mohammed Fakhreddine Balir.</li>
              </ul>
            </div>
            
            <p className="source-note text-center mt-2"><em>Source : 3ilm.char3i — La science légiférée, publié le 1er septembre 2014.</em></p>
          </div>
        </section>

        <section className="cta-section text-center mt-4 mb-4">
          <h2>Rejoignez le Merkez</h2>
          <p><strong>Le premier cours est gratuit et sans engagement.</strong></p>
          <div className="hero-buttons mt-4">
            <Link to="/inscription-et-tarifs" className="btn">Je m'inscris</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
