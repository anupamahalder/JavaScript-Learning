// storing name to a variable after 3 seconds 
function sayMyName(name){
    let result;
    setTimeout(()=>{
        console.log('I am settimeout function!');
        result = name;  
    },3000);
    return result;
}
const output = sayMyName("Anupama");
console.log(output);

// we cannot store output in a variable any return value from an aysnchronous function 
// if we do so then we will get undefined as before returing from asynchronous function
// the return statement will get executed

