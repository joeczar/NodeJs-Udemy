/*jshint esversion: 6 */

const name = "Andrew";
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: "Philidelphia"
};

//console.log(user);

// Object destructuring

const product = {
  label: 'Red Notebook',
  price: 3,
  stock: 201,
  salePrice: undefined
};

// // const label = product.label;
// const { label:productLabel, stock, rating = 5 } = product;

// console.log('====================================');
// console.log(productLabel);
// console.log('====================================');
// console.log(stock);
// console.log('====================================');
// console.log(rating);

const transaction = (type, { label, stock = 0 } = {}) =>{
  console.log(type, label, stock);
  
};

transaction('order', product);