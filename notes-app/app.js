/*jshint esversion: 6 */
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

//Customize Yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note.',
  handler: function () {
    console.log('Adding a new note.');
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note.',
  handler: function () {
    console.log('Removing a note');
  }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'list all notes.',
  handler: function () {
    console.log('showing all notes');
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note.',
  handler: function () {
    console.log('Reading a note');
  }
});
// add, remove, read, list


console.log(yargs.argv);

const command = process.argv[2];

// if (command === 'add') {
//   console.log(chalk.green.inverse('Adding Note!'));
// } else if (command === 'remove') {
//   console.log(chalk.red.inverse('removing Note!'));
// }