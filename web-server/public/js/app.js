/*jshint esversion: 6 */
console.log('Bring the JS to ya');

fetch('http://localhost:3000/weather?location=!').then((response) => {
  response.json().then((data) => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.location);
      console.log(data.forecast);
      
    }
    
  });
});
