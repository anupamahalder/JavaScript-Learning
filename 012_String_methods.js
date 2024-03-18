// --------String-------------

const myName = "Anupama";
const roll = 13;
// using backtick we achieve string interpolation
console.log(`Hello, i am ${myName.toUpperCase()}, my roll number is ${roll}`);

// declare string object with string constructor
const mystr = new String("Hello World!");
console.log(mystr[0]); // H

// to find character at an index 
console.log(myName.charAt(3)); // p

// to find index of a character
console.log(myName.indexOf('a')); // 4

// make a substring 
const newStr = myName.substring(0, 3); //last index is not included
console.log(newStr); // Anu

// with slice we can make substring which can take negative index 
console.log(myName.slice(-6, 4)); // nup

// trim method to remove white spaces from start and end of the string
const nameWithSpace = "        Home     ";
console.log(nameWithSpace); //      Home
console.log(nameWithSpace.trim()); // Home

// replace in string 
const url = "www.facebook.com/all%20india";
console.log(url.replace('%20', '-'));

// convert string into array based on any delimeter 
console.log(url.split('.'));
