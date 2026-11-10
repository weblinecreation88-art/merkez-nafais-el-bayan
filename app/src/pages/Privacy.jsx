import './Privacy.css';
import Seo from '../components/Seo';

const Privacy = () => {
  return (
    <div className="privacy-page">
      <Seo
        titre="Politique de confidentialité"
        description="Comment le Merkez Nafaïs El Bayan collecte, utilise et protège vos données personnelles lors des demandes de pré-inscription."
        chemin="/politique-de-confidentialite"
      />
      <div className="page-header">
        <div className="container">
          <h1>Politique de confidentialité</h1>
          <p>Comment nous traitons vos données personnelles</p>
        </div>
      </div>

      <div className="container mt-4 mb-4">
        <div className="privacy-content">
          <p className="update-note">
            Dernière mise à jour&nbsp;: {new Date().getFullYear()}
          </p>

          <h2>Qui sommes-nous&nbsp;?</h2>
          <p>
            Le Merkez Nafaïs El Bayan est un institut d’enseignement en ligne de la langue arabe,
            du Coran et des sciences religieuses, basé au Caire (Égypte). Pour toute question
            relative à vos données, vous pouvez nous joindre via les contacts indiqués en bas de
            cette page.
          </p>

          <h2>Quelles données nous collectons</h2>
          <p>
            Nous collectons uniquement les informations que vous nous transmettez volontairement
            lors d’une demande d’inscription&nbsp;:
          </p>
          <ul>
            <li>votre nom et prénom&nbsp;;</li>
            <li>votre numéro de téléphone / WhatsApp&nbsp;;</li>
            <li>votre adresse e-mail&nbsp;;</li>
            <li>les matières et la formule qui vous intéressent.</li>
          </ul>

          <h2>Pourquoi nous les utilisons</h2>
          <p>
            Ces informations servent exclusivement à traiter votre demande d’inscription, à vous
            recontacter, à organiser votre test de niveau et à assurer le suivi pédagogique de
            votre parcours. Elles ne sont utilisées à aucune autre fin.
          </p>

          <h2>Partage des données</h2>
          <p>
            Vos données ne sont ni vendues, ni louées, ni transmises à des tiers à des fins
            commerciales. Elles sont accessibles uniquement à l’équipe administrative et
            pédagogique du centre.
          </p>

          <h2>Mesure d’audience</h2>
          <p>
            Ce site utilise un outil de mesure d’audience afin de comprendre comment les visiteurs
            l’utilisent (pages consultées, type d’appareil). Ces statistiques sont agrégées et ne
            servent pas à vous identifier personnellement.
          </p>

          <h2>Durée de conservation</h2>
          <p>
            Vos données sont conservées le temps nécessaire au traitement de votre demande et au
            suivi de votre inscription. Au-delà, elles sont supprimées sur simple demande de votre
            part.
          </p>

          <h2>Vos droits</h2>
          <p>
            Vous disposez d’un droit d’accès, de rectification et de suppression de vos données.
            Pour exercer ces droits, contactez-nous par WhatsApp aux numéros indiqués sur le site,
            en précisant votre demande.
          </p>

          <h2>Contact</h2>
          <ul className="contact-list">
            <li>
              Inscriptions femmes&nbsp;:{' '}
              <a href="https://wa.me/33749542846">+33 7 49 54 28 46</a>
            </li>
            <li>
              Inscriptions hommes&nbsp;:{' '}
              <a href="https://wa.me/262693136467">+262 693 13 64 67</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
