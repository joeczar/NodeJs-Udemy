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

const transaction = ({ label, stock }, type ) =>{
  console.log(type, label, stock);
  
};

transaction('order', product);