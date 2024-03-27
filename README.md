# JavaScript Learning
I will cover JavaScript and ES6 version of JavaScript language.

## Topic:
1. String
2. Object
3. Array
4. Function
5. Number

### What is Asynchronous Programming?
1. Not existing or occuring at the same time.
2. Controlling the timing of operations by the use of pulses sent when the previous operation is completed rather than at regular intervals.

Asynchronous means that you can execute multiple things at a time and you don't have to finish executing the current thing in order to move on to next one.

### Why does JavScript Act like Asynchronous?
Because JavaScript is a single threaded language. That means, JavaScript process one task at a time. JavaScript uses two Data structure to handle variables and function calls. 
1. Heap to manage Variables
2. Stack to manage Function calls

JavaScript Engine (V8) handles Asynchronous which includes Call Stack, Web API, Event Loop, Callback Queue. JavaScript uses 4 terms (Call Stack, Web API, Event Loop, Callback Queue) to achieve asynchronous features.

#### Call Stack:
To maintain the order of functions to be called. It follows LIFO method (Last In First Out).
#### Web API: 
JavaScript engine makes it Asynchronous and this engine has some api, fecilities and some mechanism. setTimeout() is a web API.
#### Callback/Task Queue:
It is FIFO data structure (First In First Out). It is like a queue which stores callback functions in a queue.
#### Event Loop:
Event loop understands which callback functions should be executed and sends that callback function to the Call Stack.










