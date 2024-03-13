// -----------number to boolean conversion-------------
let isLoggin = 1;
console.log(typeof isLoggin); //number
let booleanIsLoggin = Boolean(isLoggin);
console.log(typeof booleanIsLoggin); //boolean
console.log(booleanIsLoggin); //true

// -----------string to boolean conversion-------------
let myString = "anupama";
console.log(typeof myString); // string 
let booleanMyString = Boolean(myString);
console.log(typeof booleanMyString); // boolean
console.log(booleanMyString); // true

// ---------empty string to boolean conversion---------
let emptyString = "";
let booleanEmptyString = Boolean(emptyString);
console.log(booleanEmptyString); // false

// -----------undefined to boolean conversion-------------
let myUndefined = undefined;
console.log(typeof isLoggin); //undefined
let booleanMyUndefined = Boolean(myUndefined);
console.log(typeof booleanMyUndefined); //boolean
console.log(booleanMyUndefined); //false

// -----------null to boolean conversion-------------
let myNull = null;
console.log(typeof myNull); // object 
let booleanMyNull = Boolean(myNull);
console.log(typeof booleanMyNull); // boolean
console.log(booleanMyNull); // false

/**
 * NOTE:
 * 1 => true
 * 0 => false
 * "anupama" => true
 * "" => false
 * undefined => false
 * null => false
 */
