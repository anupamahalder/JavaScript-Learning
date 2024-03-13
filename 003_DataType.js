// What is data type ?
// --> In JavaScript there are mainly three types of data -- Text, number and Boolean 

// We don't have to tell the datatype when we declare a variable in JS but behind there is used datatype by the complier to know what kind of data compiler is getting

let a = 10; 
let b = 10.5;
let c = "hello";
let d = true;
let e = 'hello';
let f;
let g = null;

// To know the datatype of a variable we will use typeof operator
//These are all datatypes in javascript
console.log(typeof a); //number
console.log(typeof b); //number
console.log(typeof c); //string
console.log(typeof d); //boolean
console.log(typeof e); //number
console.log(typeof f); //undefined
console.log(typeof g); //object


/**
 * NOTE:
 * 1. When a varible is declared but not initialized or put value in it then this type of variable is known as undefined 
 * 
 * 2. When we don't know what kind of data a variable will have then we can initialize with null. and the type of this variable is object as it is mainly used for objects. And it one of the concept of Object-Oriented Programming (OOP).
 * */  

"use strict"; //treat all JS code as newer version of JS

// alert("Hello"); //Here we are getting error bcz we use node js not browser to run alert

let name = "Anupama"
let age = 20

/**  -------------Primitive Datatypes------------
 * number => 2 to power 53
 * bigint
 * string => ""
 * boolean => true/false
 * null => standalone value
 * undefined => value not provided
 * symbol => unique
*/

/** -------------Non-Primitives Datatypes---------
 * Object
 */

console.log(typeof "Hello"); //string
console.log(typeof age); //number
console.log(typeof null); //object
console.log(typeof undefined); //undefined
