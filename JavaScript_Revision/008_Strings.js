const subject = 'chemistry';
const book = 'Chemistry';

// compare 
if(subject === book){
    console.log('Same!');
}
else{
    console.log('Not same!');
}

console.log(subject.toLowerCase()); // chemistry
console.log(subject.toUpperCase()); // CHEMISTRY

// compare again 
if(subject.toLowerCase() === book.toLowerCase()){
    console.log('Yes, same!');
}
else{
    console.log('No, not same!');
}


// trim: to trim whitespaces before and end of the string not middle 
const drink  = 'water';
const liquid = '    water   ';
if(drink.trim() === liquid.trim()){
    console.log('Same!');
}
else{
    console.log('Not Same!');
}

// Reverse 
const sentence = 'I am learning JavaScript.';
// way 1 
let reverseStr = '';
for(const letter of sentence){
    reverseStr = letter + reverseStr; 
}
console.log(reverseStr); // .tpircSavaJ gninrael ma I

// way 2
reverseStr = '';
for(let i=0;i<sentence.length;i++){
    reverseStr = sentence[i] + reverseStr;
}
console.log(reverseStr); // .tpircSavaJ gninrael ma I

// shortcut (split into array of character then reverse it and then join it with empty string)
const reversed = sentence.split('').reverse().join('');
console.log(reversed); // .tpircSavaJ gninrael ma I

