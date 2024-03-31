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
