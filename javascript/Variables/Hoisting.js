// Hoisting

// Hoisting is JavaScript's default behavior of moving declarations to the top.

// In JavaScript, a variable can be declared after it has been used.

// In other words; a variable can be used before it has been declared.

// Example 1
x = 5; // Assign 5 to x
console.log(x);
var x; // Declare x

// Example 2
greet();
function greet() {
     console.log("Hello World!");
     
};

// greet2();
// let greet2 = () => {
//      console.log("Hello World!");
// } ReferenceError: Cannot access 'greet2' before initialization

// Example 3
// console.log(num); // undefined
// var num = 6;
// console.log(num); // 6