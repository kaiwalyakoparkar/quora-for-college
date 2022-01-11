//--------- Including all the external packages -----------
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv').config({ path: '../../.env' });
const fs = require('fs');
const chalk = require('chalk');

//--------- Importing internal modules and files ----------
const Question = require('../../models/questionsModel.js');
const Answer = require('../../models/answersModel.js');

//--------- Variable assignment ------------------
const DB = process.env.DB_STRING.replace('<PASSWORD>', process.env.DB_PASSWORD);
const log = console.log;

//--------- Functional code for this file ---------
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    // console.log(con.connection);//to see more info about the connection
    log(chalk.cyan('💽 Database Connected Successfully'));
  });

const questions = JSON.parse(
  fs.readFileSync(path.join(__dirname, './questions.json'), 'utf-8')
);

const answers = JSON.parse(
  fs.readFileSync(path.join(__dirname, './answers.json'), 'utf-8')
);

const importQuestionsData = async () => {
  try {
    await Question.create(questions);
    console.log('Questions Data successfully imported');
  } catch (err) {
    console.log(err);
  }
  process.exit();
}

const importAnswersData = async () => {
  try {
    await Answer.create(answers);
    console.log('Answers Data successfully imported');
  } catch (err) {
    console.log(err);
  }
  process.exit();
}

const deleteQuestionsData = async () => {
  try {
    await Question.deleteMany();
    console.log('Questions Data successfully deleted');
  } catch (err) {
    console.log(err);
  }
  process.exit();
}

const deleteAnswersData = async () => {
  try {
    await Answer.deleteMany();
    console.log('Answers  Data successfully deleted');
  } catch (err) {
    console.log(err);
  }
  process.exit();
}


if (process.argv[2] === '--import' && process.argv[3] === '--questions') {
  importQuestionsData(); //only imports questions data
} else if (process.argv[2] === '--import' && process.argv[3] === '--answers') {
  importAnswersData(); //only imports answers data
} else if (process.argv[2] === '--delete' && process.argv[3] === '--questions') {
  deleteQuestionsData(); //only deletes questions data
} else if (process.argv[2] === '--delete' && process.argv[3] === '--answers') {
  deleteAnswersData(); //only deletes answers data
}
