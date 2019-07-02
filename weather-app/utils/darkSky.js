/*jshint esversion: 6 */
const request = require("request");

const darkSky = (lat, long, callback) => {
  const apiKey = "cb3bd684c5147594a33daa61c14c185b";
  const url = `https://api.darksky.net/forecast/${apiKey}/${lat},%20${long}?units=si&lang=de`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Couldn't reach service.", undefined);
    } else if (response.body.error) {
      callback('Something went wrong', undefined);
    } else {
      const dataCurrent = response.body.currently;
      callback(
        undefined,
        `Es ist ${dataCurrent.temperature} grad, mit eine ${
          dataCurrent.precipProbability
        } prozent Niederschlagswarscheinlichkeit.`
      );
      const dataDaily = response.body.daily.data[0].summary;
      callback(undefined, dataDaily);
    }
  });
};
module.exports = darkSky;
