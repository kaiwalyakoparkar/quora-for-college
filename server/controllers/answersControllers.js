//--------- Importing internal modules and files ----------
const Answers = require('../models/answersModel.js');

//--------- Functional code for this file ---------
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