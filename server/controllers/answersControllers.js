//--------- Importing internal modules and files ----------
const Answers = require('../models/answersModel.js');

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