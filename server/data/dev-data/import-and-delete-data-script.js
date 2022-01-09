const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv').config({ path: '../../.env' });
const fs = require('fs');
const Project = require('../../models/questionsModel.js');
const chalk = require('chalk');

const DB = process.env.DB_STRING.replace('<PASSWORD>', process.env.DB_PASSWORD);

const log = console.log;

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

const importData = async () => {
  try {
    await Project.create(questions);
    console.log('Questions and Answers Data successfully imported');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Project.deleteMany();
    console.log('Questions and Answers  Data successfully deleted');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}