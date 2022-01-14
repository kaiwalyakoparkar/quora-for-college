//--------- Including all the external packages -----------
const express = require('express');

//--------- Importing internal modules and files ----------
const routes = express.Router();
const questionsControllers = require('../controllers/questionsControllers.js');
const authControllers = require('../controllers/authControllers.js');

//--------- Middlewares -----------
routes.use(express.json());

//--------- Functional code for this file ---------
//Route for '/'
routes.route('/')
	.get(questionsControllers.getAllQuestions)
	.post(authControllers.protect, questionsControllers.postNewQuestion);

//Route for '/id'
routes.route('/:id')
	.get(questionsControllers.getSingleQuestion)
	.delete(authControllers.protect, questionsControllers.deleteQuestion)
	.patch(authControllers.protect, questionsControllers.updateQuestion);

//--------- Post function Assignment ---------------
module.exports = routes;