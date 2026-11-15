import { useState } from 'react';
import './Pricing.css';
import Seo from '../components/Seo';

/* Le formulaire n'avait aucun traitement : onSubmit={e => e.preventDefault()}
   avalait la demande sans rien envoyer ni prévenir la personne. En l'absence
   de backend, on compose un message WhatsApp pré-rempli — le canal que le
   centre utilise déjà pour les inscriptions. */
const WHATSAPP = {
  femme: '212648945906',
  homme: '262693136467',
};

const MATIERES = [
  'Cours de Coran',
  'Langue arabe',
  'Sciences religieuses',
  'La Crèche',
];

const FORMULES = [
  'Groupe : 3 à 5 pers. (3,50 €/h)',
  'Duo : 2 pers. (6 €/h)',
  'Solo : 1 pers. (9 €/h)',
];

const Pricing = () => {
  const [form, setForm] = useState({
    nom: '',
    telephone: '',
    email: '',
    matieres: [],
    formule: '',
    destinataire: 'femme',
    message: '',
  });
  const [erreurs, setErreurs] = useState({});

  const majChamp = (champ) => (e) =>
    setForm((f) => ({ ...f, [champ]: e.target.value }));

  const basculeMatiere = (matiere) =>
    setForm((f) => ({
      ...f,
      matieres: f.matieres.includes(matiere)
        ? f.matieres.filter((m) => m !== matiere)
        : [...f.matieres, matiere],
    }));

  const valider = () => {
    const e = {};
    if (!form.nom.trim()) e.nom = 'Merci d’indiquer votre nom.';
    if (!form.telephone.trim()) e.telephone = 'Merci d’indiquer un numéro pour vous recontacter.';
    if (form.matieres.length === 0) e.matieres = 'Choisissez au moins une matière.';
    return e;
  };

  const envoyer = (e) => {
    e.preventDefault();
    const nouvellesErreurs = valider();
    setErreurs(nouvellesErreurs);
    if (Object.keys(nouvellesErreurs).length > 0) {
      // Amène la personne sur le premier champ en erreur
      const premier = document.querySelector('[aria-invalid="true"]');
      premier?.focus();
      return;
    }

    const lignes = [
      'As-salâmu ʿalaykum, je souhaite m’inscrire au Merkez Nafaïs El Bayan.',
      '',
      `Nom : ${form.nom}`,
      `Téléphone : ${form.telephone}`,
      form.email ? `E-mail : ${form.email}` : null,
      `Matières : ${form.matieres.join(', ')}`,
      form.formule ? `Formule souhaitée : ${form.formule}` : null,
      form.message ? `Message : ${form.message}` : null,
    ].filter(Boolean);

    const url = `https://wa.me/${WHATSAPP[form.destinataire]}?text=${encodeURIComponent(
      lignes.join('\n')
    )}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="pricing-page">
      <Seo
        titre="Inscription et tarifs 2026-2027"
        description="Tarifs des cours du merkez : 9 €/h en solo (1 personne), 6 €/h en duo (2 personnes) et 3,50 €/h en groupe (3 à 5 personnes). Valable pour l'arabe, le Coran et les sciences religieuses. 1er cours offert."
        chemin="/inscription-et-tarifs"
      />
      <div className="page-header">
        <div className="container">
          <h1>Inscription et Tarifs</h1>
          <p>
            Pré-inscriptions ouvertes pour les sessions 2026-2027. Le premier cours est offert et
            sans engagement.
          </p>
        </div>
      </div>

      <div className="container">
        <section className="pricing-section">
          <h2 className="text-center">Nos tarifs</h2>
          <p className="text-center section-intro">
            Tarifs horaires par élève, identiques pour l'ensemble des cours du merkez (langue arabe, sciences religieuses et Coran). Le tarif dépend uniquement du nombre d’élèves.
          </p>

          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Formule Groupe</h3>
              <p className="price-tag">
                3,50 € <span>/h</span>
              </p>
              <ul className="pricing-features">
                <li>Nombre d’élèves <strong>3, 4 ou 5 personnes</strong></li>
                <li>Langue arabe <strong>3,50 € /h</strong></li>
                <li>Sciences religieuses <strong>3,50 € /h</strong></li>
                <li>Coran / Nouraniya <strong>3,50 € /h</strong></li>
              </ul>
              <p className="card-note">3, 4 ou 5 personnes — Le plus économique</p>
            </div>

            <div className="pricing-card highlight">
              <div className="popular-badge">Recommandé</div>
              <h3>Formule Duo</h3>
              <p className="price-tag">
                6 € <span>/h</span>
              </p>
              <ul className="pricing-features">
                <li>Nombre d’élèves <strong>2 personnes</strong></li>
                <li>Langue arabe <strong>6 € /h</strong></li>
                <li>Sciences religieuses <strong>6 € /h</strong></li>
                <li>Coran / Nouraniya <strong>6 € /h</strong></li>
              </ul>
              <p className="card-note">Groupe de 2 élèves — Suivi rapproché</p>
            </div>

            <div className="pricing-card">
              <h3>Formule Solo</h3>
              <p className="price-tag">
                9 € <span>/h</span>
              </p>
              <ul className="pricing-features">
                <li>Format <strong>1 personne (individuel)</strong></li>
                <li>Langue arabe <strong>9 € /h</strong></li>
                <li>Sciences religieuses <strong>9 € /h</strong></li>
                <li>Coran / Nouraniya <strong>9 € /h</strong></li>
              </ul>
              <p className="card-note">Cours particulier — Rythme sur mesure</p>
            </div>
          </div>

          <div className="pricing-notes">
            <h3>Frais et inclusions</h3>
            <ul>
              <li><span>Premier cours</span><strong>Offert</strong></li>
              <li><span>Frais d’inscription</span><strong>5 €</strong></li>
              <li><span>Livre Nouraniya</span><strong>Offert</strong></li>
              <li><span>Livre d’arabe</span><strong>10 €</strong></li>
              <li><span>Livre de religion (enfants)</span><strong>10 €</strong></li>
            </ul>
            <p className="tarif-note">
              Tarifs horaires par élève pour la session 2026-2027, valables pour tous les cours (arabe, sciences religieuses et Coran). Contactez-nous pour toute situation particulière.
            </p>
          </div>
        </section>

        {/* ---------- Formulaire ---------- */}
        <section className="registration-section" id="inscription">
          <div className="merkez-form">
            <div className="form-title text-center">
              <span className="badge">Inscription 2026-2027</span>
              <h2>Demande de pré-inscription</h2>
              <p>
                Remplissez ce formulaire&nbsp;: il ouvrira WhatsApp avec votre demande déjà rédigée,
                prête à envoyer. Nous vous recontactons pour fixer votre test de niveau.
              </p>
            </div>

            <form onSubmit={envoyer} noValidate>
              <div className="field">
                <label htmlFor="nom">
                  Nom complet <span className="required">*</span>
                </label>
                <input
                  id="nom"
                  type="text"
                  value={form.nom}
                  onChange={majChamp('nom')}
                  placeholder="Votre nom et prénom"
                  aria-invalid={Boolean(erreurs.nom)}
                  aria-describedby={erreurs.nom ? 'err-nom' : undefined}
                />
                {erreurs.nom && (
                  <p className="field-error" id="err-nom">{erreurs.nom}</p>
                )}
              </div>

              <div className="field">
                <label htmlFor="tel">
                  Numéro WhatsApp <span className="required">*</span>
                </label>
                <input
                  id="tel"
                  type="tel"
                  value={form.telephone}
                  onChange={majChamp('telephone')}
                  placeholder="+33 6 12 34 56 78"
                  aria-invalid={Boolean(erreurs.telephone)}
                  aria-describedby={erreurs.telephone ? 'err-tel' : undefined}
                />
                {erreurs.telephone && (
                  <p className="field-error" id="err-tel">{erreurs.telephone}</p>
                )}
              </div>

              <div className="field full">
                <label htmlFor="email">E-mail (facultatif)</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={majChamp('email')}
                  placeholder="votre.email@exemple.com"
                />
              </div>

              <fieldset className="field full">
                <legend>
                  Matières souhaitées <span className="required">*</span>
                </legend>
                <div className="choice-grid">
                  {MATIERES.map((matiere) => (
                    <label className="choice" key={matiere}>
                      <input
                        type="checkbox"
                        checked={form.matieres.includes(matiere)}
                        onChange={() => basculeMatiere(matiere)}
                        aria-invalid={Boolean(erreurs.matieres)}
                      />
                      <span>{matiere}</span>
                    </label>
                  ))}
                </div>
                {erreurs.matieres && <p className="field-error">{erreurs.matieres}</p>}
              </fieldset>

              <fieldset className="field full">
                <legend>Formule souhaitée</legend>
                <div className="choice-grid">
                  {FORMULES.map((formule) => (
                    <label className="choice" key={formule}>
                      <input
                        type="radio"
                        name="formule"
                        checked={form.formule === formule}
                        onChange={() => setForm((f) => ({ ...f, formule }))}
                      />
                      <span>{formule}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="field full">
                <legend>Votre demande concerne</legend>
                <div className="choice-grid">
                  <label className="choice">
                    <input
                      type="radio"
                      name="destinataire"
                      checked={form.destinataire === 'femme'}
                      onChange={() => setForm((f) => ({ ...f, destinataire: 'femme' }))}
                    />
                    <span>Inscription femmes / enfants</span>
                  </label>
                  <label className="choice">
                    <input
                      type="radio"
                      name="destinataire"
                      checked={form.destinataire === 'homme'}
                      onChange={() => setForm((f) => ({ ...f, destinataire: 'homme' }))}
                    />
                    <span>Inscription hommes</span>
                  </label>
                </div>
              </fieldset>

              <div className="field full">
                <label htmlFor="message">Message (facultatif)</label>
                <textarea
                  id="message"
                  rows="4"
                  value={form.message}
                  onChange={majChamp('message')}
                  placeholder="Votre niveau actuel, vos disponibilités, l’âge des enfants…"
                />
              </div>

              <div className="field full">
                <button type="submit" className="btn btn-block submit-btn">
                  Envoyer ma demande via WhatsApp
                </button>
                <p className="form-note">
                  Vous pouvez aussi nous écrire directement&nbsp;:{' '}
                  <a href={`https://wa.me/${WHATSAPP.femme}`}>femmes</a> ·{' '}
                  <a href={`https://wa.me/${WHATSAPP.homme}`}>hommes</a>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Pricing;
