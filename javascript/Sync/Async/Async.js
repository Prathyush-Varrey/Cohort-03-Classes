const fs = require('fs');

const contentInFile1 = fs.readFileSync('a.txt', 'utf-8');
console.log(contentInFile1);

const contentInFile2 = fs.readFileSync('b.txt', 'utf8');
console.log(contentInFile2);

// const contentinFile3 = fs.readFile('b.txt', 'utf-8');
// console.log(contentinFile3);

function timeout() {
     console.log(`Click`);
}

setTimeout(timeout, 1000);
console.log(`Settime out done`);

let c = 0;
for (let i = 0; i < 1000000000; i++){
     c += 1
};
 
console.log(`expensive op done`);

