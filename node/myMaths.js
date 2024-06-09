const add = (x,y) => x+y;
const subtract = (x,y) => x-y;
const multiply = (x,y) => x*y;
const divide = (x,y) => x/y;

//make them available to use anywhere

const square = (x) => x*x;
const cube = (x) => x*x*x;

module.exports = {add, subtract, multiply, divide};
