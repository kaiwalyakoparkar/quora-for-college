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
};

//Get a single question from Database with provided id
exports.getSingleQuestion = async (req, res, next) => {

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
};

//Posting a new question.
exports.postNewQuestion = async (req, res, next) => {
	const question = await Questions.create(req.body);

	res.status(201).json({
		status: "Success",
		data: {
			question
		}
	})
};

//Delete a Question
exports.deleteQuestion = async (req, res, next) => {
	const question = await Questions.findByIdAndDelete(req.params.id);

	res.status(202).json({
		status: "Success",
		data: {
			question
		}
	})
};

//Update a Question
exports.updateQuestion = async (req, res, next) => {
	const question = await Questions.findByIdAndUpdate(req.params.id, req.body, {new: true});

	res.status(203).json({
		status: "Success",
		data: {
			question
		}
	});
}