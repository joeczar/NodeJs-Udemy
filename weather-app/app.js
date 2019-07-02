/*jshint esversion: 6 */
const request = require("request");
const geoCode = require("./utils/geoCode");
const darkSky = require("./utils/darkSky");

geoCode('Prenzlauer Promenade 147', (error, data) => {
  console.log('Error!', error);
  console.log('Data:', data);
});



darkSky(-75.7088, 44.1545, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
