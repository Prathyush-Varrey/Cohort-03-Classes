// Normal functions

function sum(a, b) {
     return parseInt(a) + parseInt(b);
}

let ans = sum(1, 2);
console.log(ans);

// sum of 1 - N numbers
function sumOfN(n) {
     return n * (n + 1) / 2;
}
let ans2 = sumOfN(10);
console.log(ans2);

// sum of 1-N using for loop
function sumOfNUsingFor(n) {
     let sum = 0;
     for (let i = 1; i <= n; i++){
          sum += i;
     }
     return sum
};
let ans3 = sumOfNUsingFor(20);
console.log(ans3);

// sum of 1-N using recursion
function sumOfNUsingRec(n) {
     if (n === 0) return 0;
     return n + sumOfNUsingRec(n - 1);
}

let ans4 = sumOfNUsingRec(50);
console.log(ans4);