Application:
L'application est développé avec Laravel pour le backEnd
et avec vueJs pour le front end

Installation:

Il est nécessaire d'installer VueJs ainsi que Laravel pour faire fonctionner l'application

rendez-vous dans le dossier "front" et lancez la commande npm install. Cela devrait installer les dépendances de vueJS.
Lancez ensuite la commande "npm run dev"



Retournez ensuite à la racine
Si vous avez enregistré la commande php dans vos variable globales
lancez la commande "php artisan serve"

Sinon remplacer php par le chemin vers votre fichier php.exe (C:\PHP\php.exe dans mon cas)

Ensuite rendez-vous sur votre navigateur à l'adresse http:\\localhost:8080


Utilisation:

Cliquer sur le pavet numérique et les symboles mathématiques pour effectuer votre calcul

AC permet de tout supprimer
Sup supprime le dernier caractère

Save permet d'enregistré le dernier calcul effectué dans l'historique
Il faut donc avoir cliqué sur le bouton "=" pour qu'il soit enregistré

Pour afficher l'historique ou le raffraichir, cliquer sur "Mettre à jour l'historique"

Quels détails:

La partie Front ce trouve intégralement dans le dossier Front

Laravel créer énormenent de dossier, pour vous retrouvez:
Le routing ce trouve dans le fichier ./routes/web.php
la création du fichier historique dans ./app/Http/Controllers/HistoriqueController.php

Et le fichier est crée dans ./public/historique.txt

