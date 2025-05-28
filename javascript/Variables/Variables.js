var x = 1;

if (x === 1) {
     var x = 2;
     console.log(x);
     
}

console.log(x);
// Ouput : 2 , 2. here the value of x is changed to 2 in the if
// block and it is also changed in the global scope.

console.log("===============================================");

// LET
let a = 2;
if (a === 2) {
     let a = 10;
     console.log(a);
}
console.log(a);
// Output : 10 , 2. here the value of a is changed to 10 in the if and remind same in the global scope.

console.log("===============================================");

// CONST
const my_Fav = 10;

if (my_Fav === 10) {
     const my_Fav = 20;
     console.log(my_Fav);
}
console.log(my_Fav);

const my_Obj = {
     key : "Value"
};
// my_Obj = { OtherKey: "Other Value" }; // Error

my_Obj.key = "Other Value"; // Works
console.log(my_Obj);

const arr = [];
arr.push(1); // Works
// arr = [1, 2, 3]; // Error
console.log(arr);
