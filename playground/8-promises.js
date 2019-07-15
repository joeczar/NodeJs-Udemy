/*jshint esversion: 6 */

// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve([8, 2, 5]);
//     reject('Nope.');
//   }, 2000);
// });

// doWorkPromise.then((result) => {
//   console.log('Success!', result);
// }).catch((error) => {
//   console.log('Error!', error);
// });

// 93. Promise Chaining

const add = (a, b) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};
// Bad Promise chaining
// add(1, 2).then((sum) => {
//   console.log(sum);
//   add(sum, 5).then((sum2) => {
//     console.log(sum2);
//   }).catch((e) => {
//     console.log(e);
//   });
  
// }).catch((e) => {
//   console.log(e);
// });
/// Promise chaining: The correct way
add(1, 1).then((sum) => {
  console.log(sum);
  return add(sum, 2);
}).then((sum2) => {
  console.log(sum2);
}).catch((e) => {
  console.log(e);
});