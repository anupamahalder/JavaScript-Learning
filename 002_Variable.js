const accountId = 234212;
let accountEmail = "xyz@gmail.com";
var accountPassword = "12345";
accountCity = "Kolkata";
let accountState;

// modify the variables 
// accountId = 2;
accountEmail = "abc@gmail.com";
accountPassword = "1234555";
accountCity = "Bangaluru";

// to see maultiple values of varibles in tabular format 
console.table([accountId,accountEmail,accountPassword,accountCity, accountState]);


/**
 * Note: Prefer not to use var
 */

console.log("10+15 = " + (10+15)) //10+15 = 25 

//Variable needs a data type but JS is a high level data type so we donot have to mention the type of variable, compiler automatically understands it

// To declare a varibale var keyword are used before but nowadays we donot use var 
var a = 5
//Nowadays we use let to declare a variable
let b = 3
let c = 5
console.log("b+c="+ (b+c)) //b+c= 8

//const to declare a constant variable whose value will not be updated after initialization
const PI = 3.14

// NOTE 
//Variable is used to resuable data/value
// let: if infuture we want to change the value of the variable
// const: if we don't want to chnage the value of the variable
