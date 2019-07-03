/*jshint esversion: 6 */
const geoCode = require("./utils/geoCode");
const darkSky = require("./utils/darkSky");

const userInput = process.argv[2];

if (!userInput) {
  console.log('====================================');
  console.log('please provide a location');
  console.log('====================================');
} else {
  geoCode(userInput, (error, {lattitude, longitude, location}) => {
    if (error) {
      return console.log(error);
    }
    
    darkSky(lattitude, longitude, (error, weatherData) => {
      if (error) {
        return console.log(error, location);
      }
      console.log("Ort:", location);
      console.log("Wettervorhersage:", weatherData);
    });
  });
}

