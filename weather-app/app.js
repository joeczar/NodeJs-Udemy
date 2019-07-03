/*jshint esversion: 6 */
const geoCode = require("./utils/geoCode");
const darkSky = require("./utils/darkSky");

const userInput = process.argv[2];

if (!userInput) {
  console.log('====================================');
  console.log('please provide a location');
  console.log('====================================');
} else {
  geoCode(userInput, (error, locData) => {
    if (error) {
      return console.log(error);
    }
    
    darkSky(locData.lattitude, locData.longitude, (error, weatherData) => {
      if (error) {
        return console.log(error, locData);
      }
      console.log("MapBox:", locData);
      console.log("DarkSky:", weatherData);
    });
  });
}

