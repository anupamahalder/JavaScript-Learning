// Using operator we can perform some operations 
// Operator perform operations of operand(operands)
// result = 23 + 5 (Here, result,23,5 are operands and =,+ are operators)

/**
 *  Types of operators---
 *  1. Arithmetic Operator =>
 *           Addition(+),   
 *           Subtraction(-), 
 *           Multiplication(*), 
 *           Division(/),
 *           Modulus(%)
 * 
 *  2. Assignment Oprator => 
 *           Equal(=),
 *           Plus Equal(+=),
 *           Minus Equal(-=),
 *           Into Equal(*=),
 *           Division Equal(/=),
 *           Modulus Equal(%=),
 *  
 *  3. Relational Oprator => (Defines a relationship between operands, the relationship can either be true or false)
 *           Greater Than(>),
 *           Less Than(<),
 *           Greater Than or Equal(>=),
 *           Less Than or Equal(<=),
 *           Equal To(==),
 *           Not Equal(!=),
 *           
 *  4. Logical Oprator => (The result always returns either true or false working with conditons and gives final output using truth table)
 *           And(&&),
 *           Or(||),
 *           Not(!)
 *           
 *  5. Increment Decrement Operator =>
 *           Increment(++)=>
 *              1. Preincrement,
 *              2. Postincrement
 *           Decrement(--)=>
 *              1. Predecrement,
 *              2. Postdecrement
 *  6. Bitwise Operator => or(|), and(&), not(!)
 *  
*/

// Arithmetic Operator 
const a = 5 + 4; // 9
const b = 5 - 4; // 1
const c = 5 * 4; // 20
const d = 5 / 4; // 1.25
const e = 5 % 4; // 1

// Assignment operator 
let A = 10; // 10
A += 5; // 15
A -= 4; // 11
A *= 6; // 66
A /= 5; // 6.19999999999
A %= 7; // 6.19999999999

// Relational operator
let res = (5 > 6); // false
res = (4 < 7); //true
res = (43 >= 7); // true
res = (10 <= 10); // true
res = (7 != 9); // true
res = (3 == 3); // true
console.log(res);

// Logical operator 
// Logical AND (True/False && True/False) (both conditons have to true to get end result as true)
console.log((10 > 9) && (20 == 20)); // true
console.log((10 < 9) && (20 == 20)); // false
console.log((10 > 9) && (20 != 20)); // false
console.log((10 < 9) && (20 != 20)); // false

// Logical OR (True/False || True/False) (any one conditon has to be true to get end result as true)
console.log((10 > 9) || (20 == 20)); // true
console.log((10 < 9) || (20 == 20)); // true
console.log((10 > 9) || (20 != 20)); // true
console.log((10 < 9) || (20 != 20)); // false

// Logical NOT (! True / False) (changed false to true and true to false)
console.log(!true); // false
console.log(!false); // true

// Increment Operator 
let num = 5;
++num; // 6
num++; // 6

// Decrement Operator
let ans = 7;
--ans; // 6
ans--; // 6 