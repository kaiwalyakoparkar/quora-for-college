//--------- Including all the external packages -----------
const express = require('express');

//--------- Importing internal modules and files ----------
const questionsRoutes = require('./routes/questionsRoutes.js');

//--------- Variable assignment ------------------
const app = express();

//--------- Functional code for this file ---------
app.use('/', questionsRoutes);

//--------- Post function Assignment ---------------
module.exports = app;