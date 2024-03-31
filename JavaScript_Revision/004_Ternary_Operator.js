/**
 * TERNARY OPERATOR:
 * (condition) ? true : false;
 */

const age = 17;

age >= 18 ? console.log('You can vote!') : console.log('Wait to become 18 yrs!');

// set value to a variable 
const price = 100;
let discounted = true;

const finalPrice = discounted === true ? price-10 : price;
console.log(finalPrice); // 90

// Advance 
const newPrice = discounted === true ? (price > 100 ? price-100: price) : price;
console.log(newPrice);
