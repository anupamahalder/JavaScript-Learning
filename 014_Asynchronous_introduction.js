// first all synchronous task will be finished then only it will go to asynchronous 
console.log("I am one 1");
// setTimeout is a webAPI function 1st parameter will be a callback function and 
// second parameter will be time which is miliseconds
// this is asychronous function so it will not be running instantly if there is 0 seconds
setTimeout(()=>{
    console.log('I have done')
  }, 2000);
setTimeout(()=>{
    console.log('I am half done');
}, 0);
console.log('I am two 2');
console.log('I am three 3');
console.log('I am four 4');
console.log('I am five 5');

// Asynchronous will be like that noone will wait for other to get executed 

// Output
/**
 *  I am one 1
    I am two 2
    I am three 3
    I am four 4
    I am five 5
    I am half done
    I have done
 */
