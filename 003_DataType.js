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

// NOTE: Based on data stored on memory, datatypes are categorized into two types
/**
 * 1. Primitive Datatype
 * 2. Non-primitive Datatypes
 * 
 * stack memory is used by primitive datatype
 * and heap memory is used by non-primitive datatype
 * 
 * Whenever stack memory is used we get the copy of the declared variable but
 * whenever heap memory is used we get the reference of original value means whatever changes will be done will reflect on the original value.
 */

/**
 * ------Primitive Datatypes----
 * 1. String
 * 2. Number
 * 3. Boolean
 * 4. null
 * 5. undefined
 * 6. symbol
 * 7. BigInt
 */

/**
 * -------Non-primitives(References) datatypes------
 * 1. Array
 * 2. Objects
 * 3. Functions
 */

let num = 100;
console.log(typeof num); //number
num = "hello";
console.log(typeof num); //srting

/**
 * q1. JavaScript is dynamic typed language?
   => Yes 
    let num = 100;
    console.log(typeof num); //number
    num = "hello";
    console.log(typeof num); //srting
---------------------------------------------
   q2. 
 */


// to get unique value we use Symbol 
// below we have given same value to Symbol but got different in return value 
const id = Symbol('123'); 
const anotherId = Symbol('123');
console.log(id === anotherId); //false

// add n to the last of number then the number will automatically converted to bigint
const bigNumber = 23456789087554321n;
console.log(typeof bigNumber); //bigint

// array 
const heros = ['abc', 'bcd', 'pqr'];
console.log(heros);

//object
const myObj = {
    name: "Anupama",
    age: 20,
    phone: 1234
}
console.log(myObj);

// function 
const myFunc = function(){
    console.log("Hello");
}
myFunc(); //calling function 

/**
 * -----Primitive datatypes got copy of the data----
 */
let user1 = "Anupama";
// copy the user1 value to user2 
let user2 = user1;
// change the value of user2 
user2 = "Abc";
console.log(user1); // Anupama
console.log(user2); // Abc


/**
 * -----Non-primitive datatypes got same reference to actual memory location----
 */
let obj1 = {
    name: "abc",
    email: "abc@gmail.com"
}
// copy the obj1 to obj2 
let obj2 = obj1;
// change the email property of obj2 
obj2.email = "pqr@gmail.com";
// both is pointing to same memory so changes is reflected on original object 
console.log(obj1); 
console.log(obj2);

