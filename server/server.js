//--------- Including all the external packages -----------
const express = require('express');
const chalk = require('chalk');
require('dotenv').config();

//--------- Importing internal modules and files ----------
const app = require('./app.js');

//--------- Variable assignment ------------------
const PORT = process.env.PORT || 8080;
const DOMAIN = process.env.DOMAIN || 'http://localhost';
const log = console.log;

//--------- Functional code for this file ---------
log(chalk.cyan('✨ App Started'));

app.listen(PORT,() => {
	log(chalk.cyan(`🏃 Server has started on ${DOMAIN}:${PORT}/`))
});

//--------- Post function Assignment ---------------