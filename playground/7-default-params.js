/*jshint esversion: 6 */

const greeter = (name = 'Joe', age = 38) => {
  console.log('Sup ' + name, "You're " + age);
};

greeter();