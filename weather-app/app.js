/*jshint esversion: 6 */

const request = require('request');

const url = 'https://api.darksky.net/forecast/cb3bd684c5147594a33daa61c14c185b/52.563873,%2013.426779?units=si&lang=de';

request({ url: url, json: true }, (error, response) => {
  const dataCurrent = response.body.currently;
  console.log(`Es ist ${dataCurrent.temperature} grad, mit eine ${dataCurrent.precipProbability} prozent Niederschlagswarscheinlichkeit.`);
  const dataDaily = response.body.daily.data[0].summary;
  console.log(dataDaily);
  
});