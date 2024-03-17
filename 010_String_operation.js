// --------------String operations -----------
const firstName = "Anupama";
const lastName = " Halder";

const fullName = firstName+lastName;
console.log(fullName);

// string conversion 
console.log(1+'a'); // 1a
console.log(1+'2'); //12
console.log('1'+2+2); //122 (if first is string then entire output will be string)
console.log(1+2+'2'); //32 (if first is not string then addtion will perform untill we got a string)

console.log(+true); // 1 (increment by + so we get 1 as output)
// console.log(true+); //error
console.log(+""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 2+2;

let counter = 100;
++counter; //prefix
counter++; //postfix
console.log(counter); //102

