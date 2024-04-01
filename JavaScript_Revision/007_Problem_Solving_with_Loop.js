/**
 * PROBLEM SOLVING WITH LOOPS
 */


// 1. Sum of n natural numbers
let sum = 0;
for(let i=1; i<=10; i++){
    sum += i;
}
console.log(sum); // 55

// 2. Decremental for loop to print n to 1 numbers
for(let i=10; i>0; i--){
    console.log(i);
}

// 3. Decremental while loop to print 20 to 10 numbers
let i = 20;
while(i >= 10){
    console.log(i);
    i--;
}

// 4. Print all odd numbers from a given range
// Way - 1
for(let i=0; i<20; i++){
    if(i%2 === 1){
        console.log(i);
    }
}
// Way - 2
for(let i=0; i<20; i++){
    if(i%2 !== 0){
        console.log(i);
    }
}
// Way - 3
for(let i=1; i<20; i+=2){
    console.log(i);
}
// Way - 4
let i = 1;
while(i < 20){
    console.log(i);
    i+=2;
}

// 5. Give me the list of numbers between 1 and 30 divisible by 5
for(let i=1;i<=30;i++){
    if(i%5 == 0){
        console.log(i);
    }
}

// 6. Give me the list of numbers between 1 and 30 divisible by 5 or divisible by 3
for(let i=1;i<=30;i++){
    if(i%5 == 0 || i%3 == 0){
        console.log(i);
    }
}

// 6. Give me the list of numbers between 1 and 30 divisible by 5 and divisible by 3
for(let i=1;i<=30;i++){
    if(i%5 == 0 && i%3 == 0){
        console.log(i);
    }
}

// 7. Give me the sum of numbers from 1 to 20 that are divisible by 3
let total = 0;
for(let i=1; i<= 20; i++){
    if(i%3 == 0){
        total += i;
    }
}
console.log('Sum of numbers that are divisible by 3: ', total);
