//--------- Including all the external packages -----------
const express = require('express');

//--------- Importing internal modules and files ----------
const routes = express.Router();
const answersControllers = require('../controllers/answersControllers.js');
const authControllers = require('../controllers/authControllers.js');

//--------- Middlewares -----------
routes.use(express.json());

//--------- Functional code for this file ---------

//Route for '/'
routes.route('/')
	.get(answersControllers.getAllAnswers);

//Route for '/id'
routes.route('/:id')
	.get(answersControllers.getSingleAnswer)
	.patch(authControllers.protect, answersControllers.updateAnswer)
	.delete(authControllers.protect, answersControllers.deleteAnswer)
	.post(authControllers.protect, answersControllers.postNewAnswer);

//--------- Post function Assignment ---------------
module.exports = routes;