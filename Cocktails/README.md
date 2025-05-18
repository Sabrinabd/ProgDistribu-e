# Cocktails

Ce projet consiste à développer une application web permettant d'afficher une liste de cocktails et leurs détails. L'interface utilisateur est réalisée avec Angular.

## Installation

1. Assurez-vous d'exécuter `npm install` dans les dossiers suivants :
    - **backend** : pour installer les dépendances du serveur Express.
    - **cocktails** : pour installer les dépendances du frontend Angular.

2. Pour démarrer les projets :
    - Dans le dossier **cocktails**, exécutez : `ng serve`.
    - Dans le dossier **backend**, exécutez : `npm start`.

## Affichage des cocktails

Pour afficher la liste des cocktails, suivez ces étapes :

1. Importez les données dans le fichier `src/app/app.component.ts` en décommentant les lignes suivantes :

    ```typescript
    // import { seedData } from './partage/interfaces/data/seed';
    // seedData();
    ```

2. Sauvegardez le fichier. Angular rafraîchira automatiquement l'application, et vous verrez les cocktails apparaître.

## Paiements

Une API Stripe a été intégrée pour gérer les paiements. Elle est utilisée avec un ensemble minimal de fonctionnalités, compte tenu de sa complexité et de ses nombreuses possibilités.

---

Avec ces étapes, vous serez prêt à explorer et utiliser l'application Cocktails !
