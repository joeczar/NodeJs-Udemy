/*jshint esversion: 6 */

const geoCode = require("./utils/geoCode");
const darkSky = require("./utils/darkSky");

console.log(argv);


geoCode("Prenzlauer Promenade 147", (error, locData) => {
  if (error) {
    return console.log(error);
  }
  
  darkSky(locData.lattitude, locData.longitude, (error, weatherData) => {
    if (error) {
      return console.log(error);
    }
    console.log("MapBox:", locData);
    console.log("DarkSky:", weatherData);
  });
});
