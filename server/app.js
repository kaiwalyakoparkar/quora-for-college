//--------- Including all the external packages -----------
const express = require('express');

//--------- Importing internal modules and files ----------
const questionsRoutes = require('./routes/questionsRoutes.js');
const answersRoutes = require('./routes/answersRoutes.js');
const globalErrorHandler = require('./controllers/errorController.js');
const appError = require('./util/appError.js');

//--------- Variable assignment ------------------
const app = express();

//--------- Functional code for this file ---------
//Routes mounting
app.use('/api/v1/questions', questionsRoutes);
app.use('/api/v1/answers', answersRoutes);

//Global error handlers added
app.use(globalErrorHandler);

//Unhandled errors handled
app.all('*', (req, res, next) => {
	next(new appError(`${req.originalUrl} was not found on the server. Please check the Url :D`));
});

//--------- Post function Assignment ---------------
module.exports = app;