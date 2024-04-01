/**
 * OBJECTS
 */

// Creating an object
const bottle = {
    brand: 'apple',
    color: 'white',
    price: 56,
    isClean: false,
    liquidType: 'water'
}

const subject = {
    name: 'biology',
    teacher: 'abc sir',
    examDate: '30th Aug 2024',
    chapters: ['first', 'second', 'third'],
    exams: {
        name: 'Final exam',
        marks: 100
    }
}

const person = {
    name: 'anupama halder',
    age: 50,
    profession: 'developer',
    salary: 3000000000,
    isSingle: false,
    3: true
}
// dot notation
// access values of an object property
console.log(person.profession); // developer

// bracket notation (property name should be passed as a string if it is string)
console.log(person['salary']); // 3000000000
console.log(person[3]); // true

// update value of a property from an object 
person.salary = person.salary + 1000;
person['age'] = 30;
console.log(person);

// storing property name to a variable 
const prof = 'profession';
console.log(person[prof]); // developer
