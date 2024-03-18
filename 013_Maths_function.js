const score = 500;
console.log(score); // 500

// to store number type data with Number() constructor and can use methods
const balance = new Number(100);
console.log(balance); // [Number: 100]
console.log(balance.toString()); // 100
console.log(balance.toFixed(2)); // 100.00

const num = 1123.8966;
console.log(num.toPrecision(4)); // 1124 (always get priority before decimal point)

const hundreds = 10000000;
// print number with comma 
console.log(hundreds.toLocaleString()); // 10,000,000 (US- standard)
console.log(hundreds.toLocaleString('en-IN')); // 1,00,00,000 (Indian- standard)

console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.isFinite()); // false
console.log(Number.isInteger()); // false
console.log(Number.length); // 1


//--------------Maths--------------------
// max and min 
console.log(Math.min(34,56,84,9)); // 9
console.log(Math.max(34,56,84,9)); // 84
console.log((Math.random()*10).toFixed(0)); // 5 (returns number in string)
console.log(Math.floor(Math.random()*10)+1); // 7 (returns in number datatype) adding 1 to avoid 0 as minimum value 
console.log(Math); // Object [Math] {}
console.log(Math.abs(-3)); // 3
console.log(Math.round(4.3)); // 4 
console.log(Math.ceil(4.3)); // 5
console.log(Math.floor(4.3)); // 4 
console.log(Math.sqrt(25)); // 5

// genarate a number between a min and max number 
const mini = 10;
const maxi = 20;
console.log(Math.floor(Math.random()*(maxi-mini+1))+mini); // 12
