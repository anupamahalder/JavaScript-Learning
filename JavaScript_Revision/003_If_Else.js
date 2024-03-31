/**
 * IF-ELSE CONDITION:
 * If 'if' condition doesn't satisfy then it will go to 'else' part
 */

var applePrice = 10;
var biriyaniPrice = 100;

if(applePrice < biriyaniPrice){
    console.log('Apple is cheaper!');
}
else if(applePrice == biriyaniPrice){
    console.log('Biriyani is same priced as Apple!');
}
else{
    console.log('Apple is cheaper!');
}

// Multiple conditions

const salary = 25000;
const isMCA = true;
const height = 165;

if((salary > 30000 && height > 130) || isMCA){
    console.log('You are selected!');
}
else if(salary > 25000 || height > 130){
    console.log('You are selected for next time!');
}
else{
    console.log('Better luck next time!');
}

// Multi level conditions

const price = 2000;
if(price >= 5000){
    // 10% discount will be applied
    const discount = price*10/100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(price >= 3000){
    // 5% discount will be applied
    const discount = price*5/100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else{
    // no discount will be applied
    console.log(price);
}

const age = 17;
if(age <= 12 || age >= 60){
    console.log('You will be get a free seat!');
}
else{
    console.log('You have to pay for a seat!');
}
