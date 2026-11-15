# Reconstruction du site Merkez Nafaïs El Bayan

Contenu reconstruit à partir de l'archive Wayback Machine du site perdu
`merkez-nafais-el-bayan.com` (captures du 23 mars 2025 et 29 juillet 2024),
puis corrigé et enrichi.

## Comment coller les fichiers dans WordPress

Chaque fichier `.html` de ce dossier est du **code de blocs Gutenberg**.

1. Ouvrez la page dans WordPress (Pages → Modifier)
2. Cliquez sur les **⋮** en haut à droite → **Éditeur de code** (`Ctrl+Shift+Alt+M`)
3. Sélectionnez tout (`Ctrl+A`) et **collez** le contenu du fichier
4. Repassez en **Éditeur visuel** pour vérifier
5. Mettez à jour

## Les fichiers

| Fichier | Page WordPress | Permalien conseillé |
|---|---|---|
| `01-cours-de-coran.html` | Cours de Coran | `/cours-de-coran/` |
| `02-cours-arabe.html` | Cours d'Arabe | `/cours-arabe/` |
| `03-inscription-tarifs.html` | Inscription et Tarifs | `/inscription-et-tarifs/` |
| `04-accueil.html` | Accueil | `/` |
| `05-sciences-religieuses.html` | Sciences Religieuses | `/sciences-religieuses/` |
| `06-la-creche.html` | La Crèche | `/la-creche/` |
| `07-a-propos.html` | À propos | `/a-propos/` |

---

## ⚠️ Le bug principal à corriger

Sur le site actuel, **`/cours-de-coran/` affiche le contenu de la page Arabe**
(titre « COURS ARABE », méthode Nourania). Les visiteurs qui cliquent
« Cours coran » n'atteignent jamais les cours de Coran.

Le fichier `01` rétablit le vrai contenu Coran, le `02` garde le contenu Arabe
sur sa propre page.

---

## Corrections à faire en plus du contenu

### 1. Menu de navigation (Apparence → Menus)

| Actuel | Corriger en |
|---|---|
| ACCUIEL | **Accueil** |
| Cours coran | **Cours de Coran** |
| La Créche | **La Crèche** |

Structure du menu d'origine, à reproduire (avec sous-menus) :

- Accueil
- **Cours de Coran** → Mémorisation · Tajwid
- **Cours d'Arabe** → La Préface (Préface 1, Préface 2) · Débutant · Les Tomes (Tome 1 à 6)
- Sciences Religieuses
- **La Crèche** → Niveau 1 · Niveau 2 · Niveau 3 · Niveau 4
- Inscription et Tarifs
- Sermon de Cheikh Ali Moussa
- Contact

### 2. Pied de page — à remplacer entièrement

**Adresse à supprimer** (c'est la démo du thème) :
> 1500 Broadway #500, New York, NY 10018, United States

Le centre est basé **au Caire, en Égypte**. Mettez votre adresse réelle
ou simplement « Le Caire, Égypte » + les contacts WhatsApp.

**Colonnes de liens à remplacer** (actuellement en anglais, e-commerce) :

| Supprimer | Remplacer par |
|---|---|
| Payments, Shipping & delivery, Returns, Support | Cours de Coran, Cours d'Arabe, Cours religieux, La Crèche |
| About us, Services, Blog, Contact | À propos, Inscription et Tarifs, Contact, Politique de confidentialité |

**Texte de bas de page d'origine :**
> Ce site vise à promouvoir l'apprentissage de l'arabe et à faciliter la
> compréhension du Coran selon la compréhension des pieux prédécesseurs.
> Rejoignez-nous dans cette quête de connaissance !

**Copyright :** © 2026 Merkez Nafaïs El Bayan. Tous droits réservés.

### 3. Bandeau d'annonce

Il s'affiche **deux fois** sur la page actuelle. À n'afficher qu'une seule fois.

---

## Coordonnées récupérées de l'archive

À vérifier avant mise en ligne — elles datent de 2024/2025.

| Élément | Valeur |
|---|---|
| Inscription **femme** | +212 6 48 94 59 06 |
| Inscription **homme** | +262 693 13 64 67 |
| Questions au Cheikh (Telegram, arabe) | +20 128 483 7286 |
| Institut du Cheikh en ligne | https://t.me/ibnAbdelaziz |
| IBAN | FR76 1695 8000 0173 4276 6728 833 |
| PayPal | fatimaazmi@icloud.com |

Les boutons utilisent des liens `https://wa.me/…` (WhatsApp). Remplacez par
`tel:` si vous préférez un appel direct.

---

## Tarifs récupérés (grille d'origine)

| Formule | Coran / Nouraniya | Langue arabe | Religion |
|---|---|---|---|
| **Solo** | 4,50 € /h | 6 € /h | 5 € /h |
| **Duo** | 4 € /h | 5 € /h | 4,50 € /h |
| **Groupe** | 3,50 € /h | 4 € /h | 4 € /h |

Frais d'inscription : 5 € · Premier cours : gratuit · Livre Nouraniya : gratuit ·
Livre arabe : 10 € · Livre religion enfants : 10 €

---

## Ce que j'ai rédigé (à valider par vos soins)

L'archive laissait plusieurs sections **vides ou incomplètes**. Je les ai
remplies avec du contenu plausible, à corriger selon votre réalité :

1. **Cours d'arabe — descriptifs des 9 niveaux.** L'archive ne donnait que les
   titres (Préface 1/2, Débutant, Tomes 1 à 6). J'ai rédigé le contenu
   pédagogique de chacun.
2. **La Crèche — descriptifs des 4 niveaux.** Idem, seuls les titres existaient.
3. **Cours de Coran — objectifs par niveau.** Le déroulé en 3 étapes est
   d'origine ; les lignes « Objectif : » sont de moi.
4. **Niveaux Moyen et Avancé (Coran).** Ils étaient strictement identiques dans
   l'archive — je les ai différenciés.

## Informations qui manquent encore

À me fournir si vous voulez que je complète :

- L'**adresse réelle** du centre (pour le footer)
- Les **horaires** des cours et le jour des sciences religieuses
- La **durée** d'une séance
- Le nombre max. d'élèves en formule « groupe »
- Si les **tarifs 2026-2027** ont changé par rapport à cette grille

---

## Pages d'origine encore récupérables

Le site archivé comptait ~35 pages. Sont encore disponibles dans l'archive et
non traitées ici :

`/memorisation/` · `/tajwid/` · `/la-preface/` · `/preface-1/` · `/preface-2/` ·
`/debutant/` · `/les-tomes/` · `/tome-1/` à `/tome-6/` · `/niveau-1/` à
`/niveau-4/` · `/tarifs/` · `/livres/` · `/questions-reponses/` ·
`/sermon-de-cheikh-ali-moussa/` · `/le-cheikh-parle-du-merkez/` ·
`/politique-de-confidentialite/` + une dizaine d'articles de blog (sermons).

Dites-moi lesquelles reconstruire ensuite.
