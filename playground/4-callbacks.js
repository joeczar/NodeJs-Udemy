/*jshint esversion: 6 */

// setTimeout(() => {
//   console.log('wait a sec bitch!');
// }, 1000);

// const names = ['Joe', 'Ronja', 'Marc', 'Laura'];
// const shortNames = names.filter((name) => {
//   return name.length <= 4;
// });

// const geoCode = (address, callback) => {
//   setTimeout(() => {const data = {
//     lat: 0,
//     long: 0
//   };
//   callback(data);
// }, 2000);
// };

// geoCode('Berlin', (data) => {
//   console.log(data);
  
// });

// const add = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a + b);
//   }, 2000);
// };

// add(1, 4, (sum) => {
//   console.log(sum);// Should print: 5
// });

/// 8 promises
const doWorkCallback = (callback) => {
  setTimeout(() => {
    //callback('This is my error.', undefined);
    callback(undefined, ['P', 1, 'Visceral']);
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }
  console.log(result);
  
});
