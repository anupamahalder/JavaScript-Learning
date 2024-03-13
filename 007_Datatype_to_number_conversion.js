// -------------convert a string of number to actual number----------- 
let myString = "33";
console.log(typeof myString); //string
console.log(typeof(myString)); //string
const myStringNumber = Number(myString);
console.log(typeof myStringNumber); // number
console.log(myStringNumber); //33

// ------------convert a string to number------------------
let score = "34bs"; 
console.log(typeof score); //string
console.log(typeof(score)); //string

let scoreNumber = Number(score); //now score is converted to Number and stored in variable
console.log(typeof scoreNumber); //number
console.log(scoreNumber); // as score has character except number so we got NaN


// ---------------null to number conversion-------------------
let myScore = null;
console.log(myScore); //null
let myScoreNumber = Number(myScore);
console.log(myScoreNumber); //0 (As conversion is not possible from null to number)


// --------------undefined to number conversion----------------
let yourScore = undefined;
console.log(yourScore); //undefined
let yourScoreNumber = Number(yourScore);
console.log(yourScoreNumber); //NaN
console.log(typeof yourScoreNumber); //number


// ----------------boolean to number conversion----------------
let ourScore = true;
console.log(typeof ourScore); //boolean
const ourScoreNumber = Number(ourScore);
console.log(ourScoreNumber); // 1
console.log(typeof ourScoreNumber); // number

/**
 * NOTE:
 * "33" => 33
 * 33abc => NaN
 * true => 1
 * false => 0
 */
