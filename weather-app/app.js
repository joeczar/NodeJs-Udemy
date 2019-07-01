/*jshint esversion: 6 */
const request = require("request");
const geoCode = require('./utils/geoCode');

// const url =
//   "https://api.darksky.net/forecast/cb3bd684c5147594a33daa61c14c185b/52.563873,%2013.426779?units=si&lang=de";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("unable to connect to weather service.");
//   } else if (response.body.error) {
//     console.log(response.body.error);

//   } else {
//     const dataCurrent = response.body.currently;
//     console.log(
//       `Es ist ${dataCurrent.temperature} grad, mit eine ${
//         dataCurrent.precipProbability
//       } prozent Niederschlagswarscheinlichkeit.`
//     );
//     const dataDaily = response.body.daily.data[0].summary;
//     console.log(dataDaily);
//   }
// });

//  MapBox
// const locationName = "Neukölln";
// //const key = 'pk.eyJ1IjoiYXhpb21zaGlmdCIsImEiOiJjanhqYXpjeWgxY3cxM3lta2c1OW1hamV0In0.6KyJtBkWKGlgN-CEBdNvwg';
// const key =
//   "pk.eyJ1IjoiYXhpb21zaGlmdCIsImEiOiJjanhqOTVtdWcxeHh6M25zODAwMnJobTN6In0.uwQ6n54FQh2O7L38_VMtAg";
// const geoLocUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${locationName}.json?access_token=${key}&limit=1`;

// request({ url: geoLocUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log("Couldn't reach MapBox.");
//   } else if (response.body.features.length < 1) {
//     console.log('No matching results');
//   } else {
//     const placeName = response.body.features[0].place_name;
//     const long = response.body.features[0].center[0];
//     const lat = response.body.features[0].center[1];
//     console.log(placeName, long, lat);
//   }
// });


geoCode('Prenzlauer Promenade 147', (error, data) => {
  console.log('Error!', error);
  console.log('Data:', data);
  
});