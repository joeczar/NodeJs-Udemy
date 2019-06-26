/*jshint esversion: 6 */
const validator = require('validator');
const getNotes = require('./notes.js');
const chalk = require('chalk');

console.log(chalk.blue('Sup Gangsta!'));

const logColor = (msg) => {
  let i = (msg === false) ? 'red' : 'green'; 
  console.log(i);
  
  console.log(chalk.keyword(i).inverse(msg));
};


getNotes();

logColor(validator.isEmail('joe.czaroutlook.com'));

logColor(validator.isURL('https://joeczarnecki.com'));