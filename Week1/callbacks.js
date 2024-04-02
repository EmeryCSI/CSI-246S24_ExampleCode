//A callback function is a function that is passed as an argument
//to another function
const numbers = [1, 2, 3];
//I am creating a function and passing it as a parameter to forEach
numbers.forEach((e) => console.log(e));
//lets make two functions
const f1 = (a, b) => a + b;
const f2 = (a, b) => a - b;

//lets make another function that takes in a and b and also takes in a callback
const calculate = (a, b, callback) => callback(a, b);
//lets try it out
console.log(calculate(2, 3, f1));
//this time we use f2
console.log(calculate(2, 3, f2));
//define the callback function in line
console.log(calculate(2, 3, (a, b) => a * b));
