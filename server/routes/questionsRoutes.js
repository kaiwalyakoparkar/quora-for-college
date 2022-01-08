//--------- Including all the external packages -----------
const express = require('express');

//--------- Importing internal modules and files ----------
const routes = express.Router();
const questionsControllers = require('../controllers/questionsControllers.js');

//--------- Middlewares -----------
routes.use(express.json());

//--------- Functional code for this file ---------
routes.route('/').get(questionsControllers.getAllQuestions);

//--------- Post function Assignment ---------------
module.exports = routes;