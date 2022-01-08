//--------- Including all the external packages -----------
const express = require('express');
const fs = require('fs');
const path = require('path');

//--------- Importing internal modules and files ----------
const data = require(path.join(__dirname, './data/dev-data/testResponse.json'));

//--------- Variable assignment ------------------
const app = express();

//--------- Functional code for this file ---------
app.get('/', (req, res, next) => {
	res.status(200).json(data);
})

//--------- Post function Assignment ---------------
module.exports = app;