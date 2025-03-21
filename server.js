//modules
var createError = require('http-errors');
const express = require('express');
var path = require('path'); //aide à trouver le chemin vers diféfrents fichiers et dossiers
var logger = require('morgan'); //Il note tout ce qui se passe pendant la fête pour que vous puissiez vous en souvenir plus tard
const sequelize = require('./config/db'); //ORM :facilite la manipulation de données
require('dotenv').config(); //Permet de charger des variables d'environnement à partir d'un fichier .env
const multer = require('multer'); //pour gérer les téléchargements de fichiers, comme les images ou les documents, dans l'application Express.

// Créer une instance d'application Express
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
