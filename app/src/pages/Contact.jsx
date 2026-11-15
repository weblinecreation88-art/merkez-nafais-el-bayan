import { Link } from 'react-router-dom';
import './Contact.css';
import Seo from '../components/Seo';

const CONTACTS = [
  {
    titre: 'Inscriptions femmes et enfants',
    numero: '+212 6 48 94 59 06',
    lien: 'https://wa.me/212648945906',
    note: 'WhatsApp — inscriptions, questions sur les cours et les tarifs.',
  },
  {
    titre: 'Inscriptions hommes',
    numero: '+262 693 13 64 67',
    lien: 'https://wa.me/262693136467',
    note: 'WhatsApp — inscriptions, questions sur les cours et les tarifs.',
  },
];

const Contact = () => {
  return (
    <div className="contact-page">
      <Seo
        titre="Contact"
        description="Contactez le Merkez Nafaïs El Bayan par WhatsApp pour vous inscrire ou poser vos questions sur les cours, les niveaux et les tarifs."
        chemin="/contact"
      />
      <div className="page-header contact-header">
        <div className="container">
          <h1>Contact</h1>
          <p>
            Une question sur les cours, les niveaux ou les tarifs&nbsp;? Écrivez-nous, nous vous
            répondons dans les meilleurs délais bi idhniLlah.
          </p>
        </div>
      </div>

      <div className="container">
        {/* ---------- Inscriptions ---------- */}
        <section className="contact-principal">
          <h2 className="text-center">Nous joindre</h2>
          <p className="text-center section-intro">
            Les inscriptions se font par WhatsApp. Précisez la matière souhaitée, le niveau et vos
            disponibilités&nbsp;: nous organiserons votre test de niveau.
          </p>

          <div className="contact-grid">
            {CONTACTS.map(({ titre, numero, lien, note }) => (
              <div className="contact-card" key={lien}>
                <h3>{titre}</h3>
                <a href={lien} className="contact-numero">
                  {numero}
                </a>
                <p className="contact-note">{note}</p>
                <a href={lien} className="btn btn-block">
                  Écrire sur WhatsApp
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Questions au Cheikh ---------- */}
        <section className="contact-cheikh">
          <div className="info-encart">
            <h2>Poser une question au Cheikh</h2>
            <p>
              Cheikh Ali Moussa <span lang="ar" dir="rtl">حفظه الله</span> présente chaque semaine
              des séries de questions / réponses.
            </p>
            <ul className="liste-contact">
              <li>
                <strong>En arabe</strong>, directement via Telegram&nbsp;:{' '}
                <a href="https://t.me/+201284837286">+20 128 483 7286</a>
              </li>
              <li>
                <strong>En français</strong>&nbsp;: envoyez-nous votre question par WhatsApp, nous
                la traduirons avant de la transmettre.
              </li>
              <li>
                <strong>Institut du Cheikh en ligne</strong>&nbsp;:{' '}
                <a href="https://t.me/ibnAbdelaziz" target="_blank" rel="noopener noreferrer">
                  t.me/ibnAbdelaziz
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* ---------- Informations pratiques ---------- */}
        <section className="contact-infos">
          <h2 className="text-center">Informations pratiques</h2>
          <div className="grid">
            <div className="card">
              <h3>Où sommes-nous&nbsp;?</h3>
              <p>
                Le centre est basé au <strong>Caire, en Égypte</strong>. Tous les cours sont
                dispensés en ligne, dans des classes virtuelles sur Zoom.
              </p>
            </div>
            <div className="card">
              <h3>Comment se déroulent les cours&nbsp;?</h3>
              <p>
                Sur <strong>Zoom</strong>, depuis un ordinateur, une tablette ou un smartphone. Un
                test de niveau précède l’intégration afin de vous orienter vers le bon parcours.
              </p>
            </div>
            <div className="card">
              <h3>Combien ça coûte&nbsp;?</h3>
              <p>
                Tarifs identiques pour toutes les matières&nbsp;: <strong>3,50 € l’heure</strong> en groupe (3 à 5 personnes), <strong>6 € l’heure</strong> en duo (2 personnes) et <strong>9 € l’heure</strong> en solo (1 personne). Le premier cours est offert et sans engagement.
              </p>
              <Link to="/inscription-et-tarifs" className="lien-fort">
                Voir tous les tarifs
              </Link>
            </div>
          </div>
        </section>

        {/* ---------- Appel à l'action ---------- */}
        <section className="cta-section text-center">
          <h2>Prêt à commencer&nbsp;?</h2>
          <p>
            <strong>Le premier cours est gratuit et sans engagement.</strong>
          </p>
          <div className="hero-buttons mt-4">
            <Link to="/inscription-et-tarifs" className="btn">
              Formulaire de pré-inscription
            </Link>
            <Link to="/a-propos" className="btn btn-outline">
              En savoir plus sur le centre
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
