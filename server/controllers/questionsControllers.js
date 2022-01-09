//--------- Importing internal modules and files ----------
const Questions = require('../models/questionsModel.js');

//--------- Functional code for this file ---------

//Gets all the questions from the database
exports.getAllQuestions = async (req, res, next) => {
	
	const questions = await Questions.find();
	
	res.status(200).json({
		"status": "Success",
		"result": questions.length,
		questions
	});
}
