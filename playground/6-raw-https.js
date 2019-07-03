/*jshint esversion: 6 */
const https = require('https');

const url = 'https://1.bvg.transport.rest/stations/nearby?latitude=52.52725&longitude=13.4123';

const request = https.request(url, (response) => {
  let data = '';
  
  response.on('data', (chunk) => {
    data = data + chunk.toString();
    
  });

  response.on('end', () => {
    const body = JSON.parse(data);
    console.log(body);
    
  }); 

});
request.on('error', (error) => {
  if (error) {
    return console.log('Error: ', error); 
  }
  
  
});
request.end();