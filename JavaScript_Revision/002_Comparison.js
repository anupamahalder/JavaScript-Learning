/**
 * COMPARISON:
 * 1. bigger: >
 * 2. less: <
 * 3. equal: ==
 * 4. greater than or equal: >=
 * 5. less than or equal: <=
 * 6. not eqaul: !=
 * 
 * -----------------------
 * 7. and: &&
 * 8. or: ||
 */

console.log(5 > 10); // false
console.log(10 == 10); // true
console.log(10 >= 10); // true
console.log(5 >= 10); // false
console.log(5 <= 10); // true
console.log(5 == '5'); // true
console.log(5 === '5'); // false
console.log(9 != '9'); // false (only value cheked but value same but we are try to check not equal)
console.log(9 !== '9'); // true (here type is checked and both type is not same)

/**
 * NOTE:
 * '==' checks only value
 * '===' checks value as well as datatype
 */

