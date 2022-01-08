//--------- Including all the external packages -----------
const express = require('express');
require('dotenv').config();

//--------- Importing internal modules and files ----------
const app = require('./app.js');

//--------- Variable assignment ------------------
const PORT = process.env.PORT || 8080;

//--------- Functional code for this file ---------
app.listen(PORT,() => {
	console.log(`Server has started on http://localhost:${PORT}/`);
});

//--------- Post function Assignment ---------------