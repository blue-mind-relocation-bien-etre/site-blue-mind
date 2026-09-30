# Site web Blue Mind

## Descritpion

Refonte du site web de Blue Mind réalisée du 3/08/2026 au 30/09/2026 par Marius Bougouin.
Ce site remplace l'ancienne version WordPress par une Single Page Application.

## Contact

En cas de question à propos du site vous pouvez me contacter :

- mariusbougouin@gmail.com

## Stack Technique

- **Framework :** Vue.js 3 (Composition API)
- **Outil de build :** Vite, Vite SSG
- **Design :** Tailwind CSS
- **Internationalisation :** vue-i18n
- **Formulaire de contact :** Web3Forms
- **Hébergement :** o2switch
- **Autres :** Oh-Vue-Icons! (icons diverses), vue-country-flag (icons pays de la navbar), Haikei (generateur SVG pour les vagues)

## Démarrage Rapide

### Prérequis

- Node.js (version 24)
- npm

### Installation locale

1.  Cloner le projet
2.  `npm install`
4.  `npm run dev`

Le site sera accessible sur `http://localhost:5173`

## Architecture du Projet

Explication des principaux dossiers spécifiques à ce projet :

- `/public` : Icon du site + `.htaccess` pour eviter les erreurs 404 au rechargement de la page
  - `/logos` : Logos des partenaires (stockés ici car leur url est stocké dans un fichier json)
  - `/fonts` : Polices utilisées sur le site
- `/src/assets` : Images, main.css (thèmes globaux du site : couleurs et polices)
- `/src/components` : Composants Vue réutilisables, organisés par dossier thématique (ex: `carrieres_nomades`).
- `/src/views` : Page finale utilisé par le Router
- `/src/langs` : Fichiers JSON de traduction pour `vue-i18n`.
  - `/fr` : Source française.
  - `/en` : Traduction anglaise.
- `/src/router` : Fichier JS pour la configuration du Router.
- `/.github/workflows`  : fichier `deploy.yml` pour l'automatisation du déploiment vers O2Switch
- `/scripts`  : contient le fichier `prerender-seo.js` qui gère l'ajout de titre et de meta description associé à chaque pages


## Gestion des traductions (vue-i18n)

Les textes ne sont pas codés en dur (sauf si le texte ne necessite pas de traduction). Nous utilisons `vue-i18n`.
Les fichiers sources sont dans `/src/langs/`.
Chaque page à son propre fichier JSON.
Si vous souhaitez modifier un texte, il faut le modifer dans le fichier français ET anglais.
En cas d'absence de traduction anglaise, la version française sera utlisé par défaut.
Si vous souhaitez ajouter une nouvelle langue, il suffit d'ajouter les fichiers JSON correspondant et d'ajouter cette nouvelle traduction dans `main.js`.

**Règles de nommage :**

- Les clés simples s'appellent avec `$t('cle')`.
- Dans certains cas, nous utilisons des tableaux dans le JSON (par exemple lorsqu'on utilise un `v-for` pour afficher du texte).
  Pour boucler dessus dans le template Vue, il faut obligatoirement utiliser `$tm('chemin.vers.tableau')` pour cibler le tableau, et `$rt(item)` pour afficher chaque ligne.
- Pour inserer des mots en gras dans un texte, il faut utiliser la balise HTML `<i18n-t>` (voir exemple ci dessous)

**Exemple d'utilisation :**

Clés simples :

```html
<h3>{{ $t('carrieresNomades.services.housing.title') }}</h3>
```

Avec un tableau :

```html
<div
  v-for="(section, index) in $tm('carrieresNomades.services.housing.sections')"
  :key="index"
>
  <h4 v-if="section.subtitle">{{ $rt(section.subtitle) }}</h4>
  <ul>
    <li v-for="(item, i) in section.items" :key="i">{{ $rt(item) }}</li>
  </ul>
</div>
```

Pour les paragraphes contenant des mots en gras, le fichier json est organisé de cette manière :

```json
{
  "text": "Nous vous accompagnons dans chaque étape de votre {0}. Profitez de {1} pour {2} et rendre votre transition aussi agréable que possible.",
  "bold_words": [
    "mobilité géographique",
    "solutions sur-mesure",
    "faciliter votre transition"
  ]
}
```

Pour mettre ce texte en forme :

```html
<i18n-t
  keypath="carrieresNomades.text"
  tag="p"
  class="text-slate-600 text-lg leading-relaxed text-center mx-5 md:mx-15 lg:mx-35"
>
  <strong
    v-for="(mot, index) in $tm(
            'carrieresNomades.bold_words',
          )"
    :key="index"
    class="text-slate-800 font-semibold"
  >
    {{ $rt(mot) }}
  </strong>
</i18n-t>
```

## Formulaires

La gestion des formulaires (contact et devis) est assurée par Web3Forms.

On peut configurer le formulaire directement sur le site de Web3Forms en utilisant les identifiants de l'entreprise.

Pour envoyer le formulaire, il faut utiliser l'Access Key (on peut la recuperer directement sur le site). Cette clé est publique, elle ne necessite pas d'être caché dans un fichier `.env`.

Les deux formualaires (contact et devis) sont les mêmes. Leurs seule différence est le champ `formType`, qui permet de les différencier dans l'email reçu par l'entreprise.

Les données reçu par mail sont stockés pendant 30 jours sur les servuers de Web3Forms. Il y a possibilité de les supprimer, pour cela, referrez vous à la notice de suppression.

### Protection anti-spam

Dans le formualaire actuel il y a un champ 'honeypot' pour contrer les tentatives de spam. Si cette sécurité n'est pas suffisante, il est possible d'ajouter un Captcha facilement avec Web3Forms. Pour cela, refferez vous à la documentation Web3Forms : https://docs.web3forms.com/getting-started/customizations/spam-protection/hcaptcha
 
## CI/CD et déploiement

### Publication

Toute modification poussée (`git push`) sur la branche `main` déclenche une Github Action qui déploie automatiquement le site sur ce sous domaine.

**Github Action utilisé :** `.github/workflows/deploy.yml`

**Secrets Github requis :** Il faut configurer les secrets suivants sur le dépot Github (dans `Settings/Secrets and variables/Actions/New repository secret`) : `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`. Un compte FTP a été créé spécifiquement pour la publication du site, il faut utiliser les identifiants de ce compte.

## Réferencement et SEO

### Vite SSG

Afin de contourner les limites des Single Page Action relatives aux réferencements (absences de contenu html pour les robots), l'outil `Vite SSG` est utilisé. Il permet de générer un fichier HTML pour chaque page du site lors de la phase de build. 

### Fichier `.htaccess``

Ce fichier permet deux choses :
  - Il configure le serveur Apache pour éviter les erreurs 404 lors du rechargement de la page, c'est à dire qu'il redirige toujours vers `index.html` au lieu de chercher un fichier HTML pour chaque page. Le module de code suivant permet de réaliser cela :

``` 
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

  - Il permet également de gerer les redirections de l'ancien site vers le nouveau. Concrètement, toutes les URL associées à l'ancien site Wordpress redirige vers la page équivalente du nouveau site (ou vers la page d'accueil s'il n'y a pas d'équivalent). Cela permet d'éviter les erreurs 404 et de conserver le référencement associé à l'ancien site. Le bloc code suivant permet de supprimer les `/` de fin d'url pour s'assurer que chaque URL est bien redirigé. Sur l'ancien site, des redirections était présente pour cela.

```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)/$ /$1 [L,R=301]
```

### Fichier `prerender-seo.js`

Pour des raisons inconnu, il n'a pas été possible d'integrer les balises de titre et de meta description de chaque page avec la méthode classique de Vite SSG (via l'utilisation de unhead). Ce fichier permet de régler ce problème en les ajoutant manuellement dans chaque fichier HTML généré par Vite SSG après la phase de build. Ce script intègre les balises dans les fichiers HTML visibles par les robots de réferencements. Les balises visibles par l'utilisateur sont directement ajouté dans la configuration du router `index.js`.

L'exécution de ce script est automatisé dans le fichier `package.json` pour se lancer juste après l'étape de build.

### Bonnes pratiques

Afin de maximiser les performances et le SEO, certaines bonnes pratiques ont été incluses. Les titres HTML suivent une structure logique, les images ont toujours un attribut `alt`, les liens `<a>` ont toujours un attribut `aria-label`, toutes les images sont au format `webp`.

