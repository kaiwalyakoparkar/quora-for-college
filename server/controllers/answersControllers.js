//--------- Importing internal modules and files ----------
const Answers = require('../models/answersModel.js');
const Questions = require('../models/questionsModel.js');

//--------- Functional code for this file ---------

//Get all the answers
exports.getAllAnswers = async (req, res, next) => {
	const answers = await Answers.find();

	res.status(200).json({
		status: "Success",
		result: answers.length,
		data: {
			answers
		}
	});
};

//Get a single answer
exports.getSingleAnswer = async (req, res, next) => {
	const answer = await Answers.findById(req.params.id);

	res.status(200).json({
		status: "Success",
		data: {
			answer
		}
	});
};

//Update a answer, upvoting and downvoting the answer
exports.updateAnswer = async (req, res, next) => {
	if (req.body.upvotes) {

		//Fetch the current values of the answer
		const upvotedAnswer = await Answers.findById(req.params.id);

		//Extract the value of upvotes
		const presentUpvotes = upvotedAnswer.upvotes;

		//Add 1 to the current upvotes and store them in a variable
		const newUpvote = presentUpvotes + 1;

		//Create an object with updated upvotes
		const upvoteObj = {upvotes: newUpvote}

		//Make a patch request with modified object
		const answer = await Answers.findByIdAndUpdate(req.params.id, upvoteObj, {new: true});

		//Send the updated response
		res.status(203).json({
			status: "Success",
			data: {
				answer
			}
		});

	} else if (req.body.downvotes) {

		//Fetch the current values of the answer
		const downvotedAnswer = await Answers.findById(req.params.id);

		//Extract the value of downvotes
		const presentDownvotes = downvotedAnswer.downvotes;

		//Add 1 to the current downvotes and store them in a variable
		const newDownvote = presentDownvotes + 1;

		//Create an object with updated downvotes
		const downObj = {downvotes: newDownvote}

		//Make a patch request with modified object
		const answer = await Answers.findByIdAndUpdate(req.params.id, downObj, {new: true});

		//Send the updated response
		res.status(203).json({
			status: "Success",
			data: {
				answer
			}
		});

	} else {
		const answer = await Answers.findByIdAndUpdate(req.params.id, req.body, {new: true});

		res.status(203).json({
			status: "Success",
			data: {
				answer
			}
		});
	}
};

//Deleting an answer and it's registration from the question document
exports.deleteAnswer = async (req, res, next) => {

	//Answer Part
	const answer = await Answers.findByIdAndDelete(req.params.id);

	//Question Part
	//Finding the question document which has the answer to be deleted
	const question = await Questions.find({answers: answer.id});

	//Removing the answer from the array of the question document.
	//Creating answer object for filter and identification of the correct answer to delete
	const answerObj = {answers: answer.id}

	//Updating the question document by deleting the deleted answer
	const updatedQuestion = await Questions.findByIdAndUpdate(question[0].id, {$pull: answerObj}, {new: true});

	//Sending the response
	res.status(202).json({
		status: "Success",
		data: {
			answer,
			updatedQuestion
		}
	});
};

//Posting a new answer and adding it's reference id to the question document
exports.postNewAnswer = async (req, res, next) => {

	// Answer Part
	//We will add a new answer to database
	const answer = await Answers.create(req.body);

	//Take the id of the answer
	const answerId = answer.id;

	// Question Part
	//We will receive a question id here
	const questionId = req.params.id;

	//Creating an answer object
	const answerObj = {answers: answerId}

	//Get the question & update the answer field with new answer id
	const updatedQuestion = await Questions.findByIdAndUpdate(questionId, {$push:answerObj}, {new: true});

	//Send the response
	res.status(201).json({
		status: "Success",
		data: {
			answer
		}
	})
};