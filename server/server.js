//--------- Including all the external packages -----------
const express = require('express');
const chalk = require('chalk');
const mongoose = require('mongoose');
require('dotenv').config();

//--------- Importing internal modules and files ----------
const app = require('./app.js');

//--------- Variable assignment ------------------
const PORT = process.env.PORT || 8080;
const DOMAIN = process.env.DOMAIN || 'http://localhost';
const log = console.log;
const DB = process.env.DB_STRING.replace('<PASSWORD>', process.env.DB_PASSWORD);

//--------- Functional code for this file ---------
log(chalk.cyan('✨ App Started'));

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
	log(chalk.cyan('🔐 Database Connected Successfully'));
});

app.listen(PORT,() => {
	log(chalk.cyan(`🏃 Server has started on ${DOMAIN}:${PORT}/`));
});

//--------- Post function Assignment ---------------