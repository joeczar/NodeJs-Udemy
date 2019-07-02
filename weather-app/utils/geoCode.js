/*jshint esversion: 6 */
const request = require('request');

const geoCode = (address, callback) => {
  const key = 'pk.eyJ1IjoiYXhpb21zaGlmdCIsImEiOiJjanhqYXpjeWgxY3cxM3lta2c1OW1hamV0In0.6KyJtBkWKGlgN-CEBdNvwg';
  const geoLocUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=${key}&limit=1`;
  request({ url: geoLocUrl, json: true }, (error, response) => {
      if (error) {
        callback("Couldn't reach service.", undefined);
      } else if (response.body.features.length < 1) {
        callback('No matching results', undefined);
       } else {
        callback(undefined, {
          lattitude: response.body.features[0].center[0],
          longitude: response.body.features[0].center[1],
          location: response.body.features[0].place_name
        });
     }
    });  
};
module.exports = geoCode;