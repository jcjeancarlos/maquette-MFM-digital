# maquette-MFM-digital
## project to clone a contact form page


Projet réalisé dans le cadre d’un exercice de développement front-end.  
L’objectif était de créer une page de contact moderne, responsive et interactive, intégrant un système de sélection thématique inspiré de *Lord of the Rings* et *Harry Potter*.

---

## 🎯 Objectifs du projet

- Construire une page de contact complète en HTML, CSS et JavaScript.
- Implémenter un **toggle interactif** permettant de choisir entre deux univers (LOTR / HP).
- Adapter dynamiquement le contenu du formulaire selon le choix de l’utilisateur.
- Afficher une **notification personnalisée** lors de l’envoi du formulaire.
- Assurer une **responsivité complète** (desktop, tablette, mobile).
- Respecter une structure propre, lisible et professionnelle.

---

## 🧙‍♂️🪄 Fonctionnalités principales

### ✔ Toggle thématique (LOTR / HP)
- Le slider se déplace en douceur grâce à une transition CSS.
- Le bouton actif change de style (`btn_active`).
- Le JavaScript détecte automatiquement l’univers choisi.
- Aucune dépendance externe.

### ✔ Message dynamique lors de l’envoi du formulaire
Selon l’univers sélectionné :

**LOTR :**
> Votre message a été envoyé ! Protégé par Gandalf, il traversera la Terre du Milieu en toute sécurité.

**HP :**
> Votre message a été envoyé ! Un Auror du Ministère de la Magie veillera personnellement sur vos données.

Le message apparaît avec un **fade-in** et disparaît automatiquement après quelques secondes.

### ✔ Formulaire complet
- Champs obligatoires (nom, prénom, téléphone, email)
- Champs optionnels (adresse, code postal, ville)
- Checkbox "consent"
- Bouton d’envoi stylisé

### ✔ Design responsive
- Passage en colonne unique sur mobile
- Réduction des paddings et marges
- Ajustement des tailles de police et du bouton
- Image d’en-tête adaptée aux petits écrans

---



## 🛠️ Technologies utilisées

- **HTML5** — structure sémantique propre
- **CSS3** — flexbox, media queries, transitions, ombres
- **JavaScript Vanilla** — interactions, logique du toggle, notifications
- **SVG** — icônes personnalisées pour LOTR et HP

---

## 🧠 Choix techniques et justification

### 1. **Toggle basé sur un slider + classes CSS**
- Solution légère, sans librairies.
- Permet une animation fluide et un code lisible.
- Le slider est indépendant des boutons, plus facile à maintenir.

### 2. **Détection de l’univers via `textContent.includes()`**
- Méthode simple et robuste.
- Évite d’ajouter des IDs ou attributs supplémentaires.
- Peut être remplacée par des classes si nécessaire.

### 3. **Notification via classe `.show`**
- Séparation claire entre logique (JS) et animation (CSS).
- Transition CSS gère le fade-in / fade-out.
- Code propre et facilement réutilisable.

### 4. **Responsivité avec deux breakpoints**
- `1024px` pour tablettes
- `768px` pour mobiles
- Ajustements progressifs pour garder le design fidèle au Figma.

### 5. **Utilisation de `accent-color` pour le checkbox**
- Solution moderne et propre.
- Évite de recréer un checkbox custom complexe.

---

## 📱 Aperçu responsive

- Desktop : deux colonnes (infos + formulaire)
- Tablette : paddings réduits, toggle recentré
- Mobile : une seule colonne, formulaire recentré, image recadrée

---

## 🚀 Améliorations possibles

- Validation avancée du formulaire (regex, messages d’erreur).
- Envoi réel via API ou backend.
- Modal de confirmation au lieu d’un simple fade.
- Ajouter un lien direct vers Google Maps sur l’adresse afin de permettre à l’utilisateur d’ouvrir automatiquement l’itinéraire.
- Transformer l’adresse e‑mail en lien "mailto": pour ouvrir automatiquement l’application de messagerie du client.
- Rendre les icônes sociales entièrement fonctionnelles en les reliant aux pages officielles (Facebook, LinkedIn).

---

## 👤 Auteur

**Jean Carlos Dos Santos Saraiva**  
Étudiant en développement web — Bruxelles  
Projet réalisé dans le cadre d’un exercice front-end.

---

## 📄 Licence
MIT
Projet éducatif — libre d’utilisation pour apprentissage.


