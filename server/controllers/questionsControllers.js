//--------- Importing internal modules and files ----------
const Questions = require('../models/questionsModel.js');

//--------- Functional code for this file ---------

//Gets all the questions from the database
exports.getAllQuestions = async (req, res, next) => {
	
	//Fetching the Questions
	const questions = await Questions.find();
	
	//Sending the response with the fetched questions
	res.status(200).json({
		status: "Success",
		result: questions.length,
		data: {
			questions
		}
	});
}

exports.getSingleQuestion = async (req, res, next) => {

	//Converting String into Number
	// const id = req.params.id * 1;

	//Fetching the Question of given Id
	const question = await Questions.findById(req.params.id);

	//If no question found with given id
	if (!question) {

		res.status(404).json({
			status: "Fail",
			message: "Did not find any question with given id"
		});
		
	} else {

		//Sending the response with the fetched question
		res.status(200).json({
			status: "Success",
			data: {
				question
			}
		});

	}
}