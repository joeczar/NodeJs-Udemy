/*jshint esversion: 6 */
const validator = require('validator');
const getNotes = require('./notes.js');

getNotes();

console.log(validator.isEmail('joe.czaroutlook.com'));

console.log(validator.isURL('https://joeczarnecki.com'));