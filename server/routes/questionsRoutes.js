//--------- Including all the external packages -----------
const express = require('express');

//--------- Importing internal modules and files ----------
const routes = express.Router();
const questionsControllers = require('../controllers/questionsControllers.js');

//--------- Middlewares -----------
routes.use(express.json());

//--------- Functional code for this file ---------
//Route for '/'
routes.route('/')
	.get(questionsControllers.getAllQuestions)
	.post(questionsControllers.postNewQuestion);

//Route for '/id'
routes.route('/:id')
	.get(questionsControllers.getSingleQuestion)
	.delete(questionsControllers.deleteQuestion)
	.patch(questionsControllers.updateQuestion);

//--------- Post function Assignment ---------------
module.exports = routes;