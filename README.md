# 🗺️ Itinéraire Étretat (Google Maps Custom)

Une application web interactive "One-Page" conçue pour planifier et visualiser un itinéraire d'une journée à Étretat. Ce projet utilise l'API Google Maps avec un thème sombre personnalisé, des calculs de trajets automatisés et une interface responsive adaptée aux mobiles (bandeau horizontal, menus coulissants).

🔗 **Lien vers le site en ligne :** [https://ofggout880.github.io/etretat-itinerary/](https://ofggout880.github.io/etretat-itinerary/)

## 🚀 Fonctionnalités
- **Carte Google Maps interactive** (Mode Sombre personnalisé).
- **Calcul d'itinéraire automatique** (Directions API) s'adaptant parfaitement aux routes (ex: parkings vs sentiers).
- **Marqueurs SVG sur-mesure** (émojis intégrés qui gardent la même taille au zoom).
- **Design Responsive / Mobile-First :** Slider horizontal des étapes en haut, carte plein écran en bas.
- **Panneaux coulissants** pour les détails de chaque étape (horaires, budget, etc.).
- **Zone de parking** affichée via un polygone rouge transparent sur la carte.

## 🛠️ Technologies Utilisées
- HTML5 / CSS3 (Flexbox, Animations CSS)
- JavaScript Vanilla
- **Google Maps JavaScript API** (Maps, Directions, Geometry)

## 💻 Comment lancer le projet en local (Développement)

Pour des raisons de sécurité liées à la clé Google Maps, il n'est pas possible d'ouvrir directement le fichier `index.html` via `file:///`. Il faut utiliser un petit serveur web local.

### Depuis le terminal (Mac/Linux) :
1. Ouvrez un terminal dans ce dossier.
2. Lancez la commande : `python3 -m http.server 8080`
3. Ouvrez votre navigateur sur `http://localhost:8080`

⚠️ **Important (Clé API) :** 
Si la carte s'affiche en gris, vous devez vous rendre sur votre **Google Cloud Console**, cliquer sur votre clé API, et ajouter `http://localhost:*` dans les restrictions de "Référents HTTP (sites Web)".

## 🌍 Déploiement (Mise en ligne)

Ce projet est hébergé gratuitement via **GitHub Pages**.

1. Tout changement poussé sur la branche `main` (ex: `git push origin main`) sera automatiquement mis en ligne au bout d'une minute ou deux.
2. L'URL en ligne doit IMPÉRATIVEMENT être autorisée dans votre Google Cloud Console (Restrictions HTTP). 
   - Exemple à ajouter : `https://ofggout880.github.io/*`
