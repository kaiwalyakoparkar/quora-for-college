//--------- Including all the external packages -----------
const fs = require('fs');
const path = require('path');

//--------- Importing internal modules and files ----------
const data = require(path.join(__dirname, '../data/dev-data/testResponse.json'));

exports.getAllQuestions = (req, res, next) => {
	res.status(200).json(data);
}