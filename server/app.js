//--------- Including all the external packages -----------
const express = require('express');

//--------- Importing internal modules and files ----------
const questionsRoutes = require('./routes/questionsRoutes.js');
const answersRoutes = require('./routes/answersRoutes.js');

//--------- Variable assignment ------------------
const app = express();

//--------- Functional code for this file ---------
app.use('/api/v1/questions', questionsRoutes);
app.use('/api/v1/answers', answersRoutes);

//--------- Post function Assignment ---------------
module.exports = app;