//--------- Including all the external packages -----------
const express = require('express');

//--------- Importing internal modules and files ----------
const routes = express.Router();
const answersControllers = require('../controllers/answersControllers.js');

//--------- Middlewares -----------
routes.use(express.json());

//--------- Functional code for this file ---------

//Route for '/'
routes.route('/')
	.get(answersControllers.getAllAnswers);

//Route for '/id'
routes.route('/:id')
	.get(answersControllers.getSingleAnswer)
	.patch(answersControllers.updateAnswer)
	.delete(answersControllers.deleteAnswer)
	.post(answersControllers.postNewAnswer);

//--------- Post function Assignment ---------------
module.exports = routes;