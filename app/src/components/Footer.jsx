import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="section-bg fill" aria-hidden="true">
        <img
          src="/6289f19ce461d386e083603e_purple-gradient_k4qarj.png"
          className="bg"
          alt=""
        />
      </div>

      <div className="container footer-grid">
        <div className="footer-col footer-col--about">
          <h3>Merkez Nafaïs El Bayan</h3>
          <p>
            Ce site vise à promouvoir l’apprentissage de l’arabe et à faciliter la compréhension du
            Coran selon la compréhension des pieux prédécesseurs. Rejoignez-nous dans cette quête de
            connaissance&nbsp;!
          </p>
          <ul className="contact-info">
            <li>
              <span className="contact-label">Adresse</span>
              <span>Le Caire, Égypte</span>
            </li>
            <li>
              <span className="contact-label">Inscriptions femmes</span>
              <a href="https://wa.me/212648945906">+212 6 48 94 59 06</a>
            </li>
            <li>
              <span className="contact-label">Inscriptions hommes</span>
              <a href="https://wa.me/262693136467">+262 693 13 64 67</a>
            </li>
            <li>
              <span className="contact-label">Institut du Cheikh</span>
              <a href="https://t.me/ibnAbdelaziz" target="_blank" rel="noopener noreferrer">
                Telegram — t.me/ibnAbdelaziz
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Nos formations</h3>
          <ul>
            <li><Link to="/cours-de-coran">Cours de Coran</Link></li>
            <li><Link to="/cours-arabe">Cours d’Arabe</Link></li>
            <li><Link to="/sciences-religieuses">Sciences religieuses</Link></li>
            <li><Link to="/la-creche">La Crèche</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Informations</h3>
          <ul>
            <li><Link to="/a-propos">À propos</Link></li>
            <li><Link to="/inscription-et-tarifs">Inscription et Tarifs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/politique-de-confidentialite">Politique de confidentialité</Link></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Merkez Nafaïs El Bayan. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
