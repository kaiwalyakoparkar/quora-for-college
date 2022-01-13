//--------- Importing internal modules and files ----------
const Questions = require('../models/questionsModel.js');
const catchAsync = require('../util/catchAsync.js');
const AppError = require('../util/appError.js');

//--------- Functional code for this file ---------

//Gets all the questions from the database
exports.getAllQuestions = catchAsync ( async (req, res, next) => {
	
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
});

//Get a single question from Database with provided id
exports.getSingleQuestion = catchAsync ( async (req, res, next) => {

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
});

//Posting a new question.
exports.postNewQuestion = catchAsync ( async (req, res, next) => {
	const question = await Questions.create(req.body);

	res.status(201).json({
		status: "Success",
		data: {
			question
		}
	})
});

//Delete a Question
exports.deleteQuestion = catchAsync ( async (req, res, next) => {
	const question = await Questions.findByIdAndDelete(req.params.id);

	res.status(202).json({
		status: "Success",
		data: {
			question
		}
	})
});

//Update a Question
exports.updateQuestion = catchAsync ( async (req, res, next) => {

	if (req.body.upvotes) {

		//Fetch the current values of the question
		const upvotedQuestion = await Questions.findById(req.params.id);

		//Extract the value of upvotes
		const presentUpvotes = upvotedQuestion.upvotes;

		//Add 1 to the current upvotes and store them in a variable
		const newUpvote = presentUpvotes + 1;

		//Create an object with updated upvotes
		const upvoteObj = {upvotes: newUpvote}

		//Make a patch request with modified object
		const question = await Questions.findByIdAndUpdate(req.params.id, upvoteObj, {new: true});

		//Send the updated response
		res.status(203).json({
			status: "Success",
			data: {
				question
			}
		});

	} else if (req.body.downvotes) {

		//Fetch the current values of the question
		const downvotedQuestion = await Questions.findById(req.params.id);

		//Extract the value of downvotes
		const presentDownvotes = downvotedQuestion.downvotes;

		//Add 1 to the current downvotes and store them in a variable
		const newDownvote = presentDownvotes + 1;

		//Create an object with updated downvotes
		const downObj = {downvotes: newDownvote}

		//Make a patch request with modified object
		const question = await Questions.findByIdAndUpdate(req.params.id, downObj, {new: true});

		//Send the updated response
		res.status(203).json({
			status: "Success",
			data: {
				question
			}
		});

	} else {
		const question = await Questions.findByIdAndUpdate(req.params.id, req.body, {new: true});

		res.status(203).json({
			status: "Success",
			data: {
				question
			}
		});
	}
});