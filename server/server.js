//--------- Including all the external packages -----------
const express = require('express');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

//--------- Importing internal modules and files ----------
const data = require(path.join(__dirname, './data/dev-data/testResponse.json'));

//--------- Variable assignment ------------------
const PORT = process.env.PORT || 8080;
const app = express();

//--------- Functional code for this file ---------
app.get('/', (req, res, next) => {
	res.status(200).json(data);
})

app.listen(PORT,() => {
	console.log(`Server has started on http://localhost:${PORT}/`);
});

//--------- Post function Assignment ---------------