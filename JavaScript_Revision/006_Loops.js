/**
 * FOR LOOP:
 * 
 * A for loop repeats until a specified condition evaluates to false. 
 * The JavaScript for loop is similar to the Java and C for loop.
 */
const n = 10;
for(let num=1; num<=n; num++){
    if(num==2){
        continue;
    }
    console.log(num);
    if(num==5){
        break;
    }
}

/**
 * WHILE LOOP:
 * 
 * A while statement executes its statements as long as a specified condition 
 * evaluates to true.
 */
let i = 1;
while(i <= 5){
    console.log(i*i);
    i++;
}

/**
 * DO-WHILE LOOP:
 * 
 * The do...while statement repeats until a specified condition evaluates to false.
 */
let j = 1;
do{
    console.log(j+1);
    j++;
}while(j<n);



/**
 * FOR..IN LOOP:
 * 
 * The for...in statement iterates a specified variable over all the enumerable 
 * properties of an object. For each distinct property, JavaScript executes the
 *  specified statements.
 */
const obj1 = {
    name: "abc",
    age: 34,
    email: "dummy@email.com",
    isProgrammer: true
}
for(const key in obj1){
    console.log(key, obj1[key]);
}

/**
 * FOR..OF LOOP:
 * 
 * The for...of statement creates a loop Iterating over iterable objects (including 
 * Array, Map, Set, arguments object and so on), invoking a custom iteration hook 
 * with statements to be executed for the value of each distinct property.
 */
const numbers = [12, 5, 89, 76, 45];
for(let num of numbers){
    console.log(num);
}
