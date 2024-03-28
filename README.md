# JavaScript Learning
I will cover JavaScript and ES6 version of JavaScript language.

## DataType:
### Primitive Datatype:
1. string
2. number
3. boolean
4. number
5. undefined
### Non-Primitive Datatype:
1. Object
2. Array
3. Function

## What is Asynchronous Programming?
1. Not existing or occuring at the same time.
2. Controlling the timing of operations by the use of pulses sent when the previous operation is completed rather than at regular intervals.

Asynchronous means that you can execute multiple things at a time and you don't have to finish executing the current thing in order to move on to next one.

## Why does JavScript Act like Asynchronous?
Because JavaScript is a single threaded language. That means, JavaScript process one task at a time. JavaScript uses two Data structure to handle variables and function calls. 
1. Heap to manage Variables
2. Stack to manage Function calls

JavaScript Engine (V8) handles Asynchronous which includes Call Stack, Web API, Event Loop, Callback Queue. JavaScript engine uses 4 terms (Call Stack, Web API, Event Loop, Callback Queue) to achieve asynchronous features.

#### Call Stack:
To maintain the order of functions to be called. It follows LIFO method (Last In First Out).
#### Web API: 
JavaScript engine makes it Asynchronous and this engine has some api, fecilities and some mechanism. setTimeout() is a web API.
#### Callback/Task Queue:
It is FIFO data structure (First In First Out). It is like a queue which stores callback functions in a queue.
#### Event Loop:
Event loop understands which callback functions should be executed and sends that callback function to the Call Stack.

## What is V8 Engine?
V8 is Google's open source high-performance JavaScript and Web Assembly engine, written in C++. V8 is a C++ program, which receives JavaScript code, compiles, and executes it.
### What does V8 do?
1. Compile and executes JavaScript code
2. Handling Call Stack
3. Handling Heap memory to Allocate Memory for variables
4. Collect Garbage- Release Memory which is No longer necessary
5. Provide Data Types, Operations, Objects and Functions
### What does V8 donot do?
1. Document Object Model - Don't know anything about it.
2. Multiple V8 Engine never share variables or context.
##

### There are 3 ways to handle Asynchronous program in JavaScript:
1. Callback
2. Promise
3. Async Function (Better version of Promise)
### There are 3 ways to handle Collection on Async Operation:
1. Async Iterator
2. For await of Loop
3. Async Generator

   






