// --------Comparison operators----------
// NOTE: Whenever we will compare we have to make sure same datatype

console.log("2" > 1); //true
console.log("02" > 1); //true

// comparison converts to number 
console.log(null == 0); // false
console.log(null < 0); // false
console.log(null > 0); // false
console.log(null <= 0); // true
console.log(null >= 0); // true
console.log(null != 0); // true

// comparisons with undefined always gives false as output 
console.log(undefined == 0); //false
console.log(undefined < 0); //false
console.log(undefined > 0); //false
console.log(undefined <= 0); //false
console.log(undefined >= 0); //false

// === (checks with datatype as well)
console.log("2" == 2); // true
console.log("2" === 2); //false
