# Site web Blue Mind

## Descritpion
Refonte du site web de Blue Mind réalisée du 3/08/2026 au 30/09/2026 par Marius Bougouin.
Ce site remplace l'ancienne version WordPress par une Single Page Application.

## Contact
En cas de question à propos du site vous pouvez me contacter :
mariusbougouin@gmail.com
+33 6 13 38 69 03

## Stack Technique
*   **Framework :** Vue.js 3 (Composition API)
*   **Outil de build :** Vite
*   **Design :** Tailwind CSS
*   **Internationalisation :** vue-i18n
*   **Formulaire de contact :** Web3Forms
*   **Hébergement :** o2switch

## Démarrage Rapide

### Prérequis
*   Node.js (version 20 conseillée)
*   npm

### Installation locale
1.  Cloner le projet
2.  `npm install`
3.  Créer un fichier `.env` à la racine (voir section "Variables d'environnement")
4.  `npm run dev`

Le site sera accessible sur `http://localhost:5173`

## Architecture du Projet

Explication des principaux dossiers spécifiques à ce projet :

*   `/public` : Icon du site
    *   `/logos` : Logos des partenaires (stockés ici car leur url est stocké dans un fichier json)
*   `/src/assets` : Images, main.css (thèmes globaux du site : couleurs et polices)
*   `/src/components` : Composants Vue réutilisables, organisés par dossier thématique (ex: `carrieres_nomades`).
*   `/src/views`  : Page finale utilisé par le Router
*   `/src/langs` : Fichiers JSON de traduction pour `vue-i18n`.
    *   `/fr` : Source française.
    *   `/en` : Traduction anglaise.
*   `/src/router` : Fichier JS pour la configuration du Router.

## Variables d'environnement
Le projet nécessite un fichier `.env` à la racine pour fonctionner.
Modèle (`.env.example`) :

```env
VITE_WEB3FORMS_ACCESS_KEY=ton_access_key_ici
```

## Gestion des traductions (vue-i18n)

Les textes ne sont pas codés en dur (sauf si le texte ne necessite pas de traduction). Nous utilisons `vue-i18n`.
Les fichiers sources sont dans `/src/langs/`.
Chaque page à son propre fichier JSON.
Si vous souhaitez modifier un texte, il faut le modifer dans le fichier français ET anglais.
En cas d'absence de traduction anglaise, la version française sera utlisé par défaut.
Si vous souhaitez ajouter une nouvelle langue, il suffit d'ajouter les fichiers JSON correspondant et d'ajouter cette nouvelle traduction dans `main.js`.

**Règles de nommage :**
- Les clés simples s'appellent avec `$t('cle')`.
- **Attention** : Dans certains cas, nous utilisons des tableaux (Arrays) dans le JSON (par exemple lorsqu'on utilise un `v-for` pour afficher du texte). 
Pour boucler dessus dans le template Vue, il faut obligatoirement utiliser `$tm('chemin.vers.tableau')` pour cibler le tableau, et `$rt(item)` pour afficher chaque ligne.

## Formulaires

