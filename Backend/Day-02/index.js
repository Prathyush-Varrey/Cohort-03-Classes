const express = require('express');

const app = express();

function sumOfN(n) {
     let sum = 0;
     for (let i = 0; i <= n; i++){
          sum += i;
     };
     return sum;
}


app.get("/",(req, res)=> {
     const n = req.query.n;
     const result = sumOfN(n);
     res.send(`The sum of numbers given number ${n} is ${result}`);
})

app.listen(3000)