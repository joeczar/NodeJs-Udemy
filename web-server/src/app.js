/*jshint esversion: 6 */
const express = require('express');

const app = express();

app.get('', (req, res) => {
  res.send('<h1>Whatch you want?!</h1>');
});

app.get('/help', (req, res) => {
  res.send('<h1>Help Page</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1>');
});

app.get('/weather', (req, res) => {
  res.send('<h1>Weather Page</h1>');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});