/*jshint esversion: 6 */

const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve([8, 2, 5]);
    reject('Nope.');
  }, 2000);
});

doWorkPromise.then((result) => {
  console.log('Success!', result);
}).catch((error) => {
  console.log('Error!', error);
});