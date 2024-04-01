const numbers = [12, 5, 6, 78, 2, 67];
console.log(numbers); // [12, 5, 6, 78, 2, 67]

// length of array
console.log(numbers.length); // 6

// index starts from 0 and goes on
// get element value by giving index
console.log(numbers[4]); // 2

// set or update element value by index
numbers[1] = 99;
console.log(numbers); // [ 12, 99, 6, 78, 2, 67 ]

// push element at end (can push single/multiple elements)
numbers.push(44,65);
console.log(numbers); // [ 12, 50, 6, 78, 2, 67, 44, 65 ]

// pop element from last
numbers.pop();
console.log(numbers); // [ 12, 50, 6, 78, 2, 67, 44 ]


// array of string 
const friends = ["abc", "piya", "anu", 'tiya'];
console.log(friends); // [ 'abc', 'piya', 'anu', 'tiya' ]

// push element 
friends.push('rup');
console.log(friends); // [ 'abc', 'piya', 'anu', 'tiya', 'rup' ]

// to get the last element from array after delete and store it to a variable
const deletedElement = friends.pop();
console.log(deletedElement); // rup

// push Element to first place in array 
friends.unshift('riya');
console.log(friends); // [ 'riya', 'abc', 'piya', 'anu', 'tiya' ]

// delete first Element from the array 
friends.shift();
console.log(friends); // [ 'abc', 'piya', 'anu', 'tiya' ]


/**
 * NOTE
 * 1. The push() method adds new items to the end of an array
 * 2. The pop() method removes the last element from an array
 */
