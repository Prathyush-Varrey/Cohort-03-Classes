1) Initialize an empty node.js project
     npm init -y
2) Create an .js file 
     touch index.js
3) Add Express as a Dependency
     npm i express

4) Create a new POST route one for /signup and one for /signin
     const express = require("express");
     const app = express();

     app.post("/signup", (req, res)=>{

     });

     app.post("/signin", (req, res)=>{

     });
     app.listen(3000);

5) Use "express.json" as a middleware to parse the post request body.
     app.use("express.json()");

6) Create an in memory variable called users where you store the username , password and a token (we will come to where this token is created later.)

     const users = [];

7) Complete the signup endpoint to store user information in the in memory variable.

     app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username,
        password
    })
    res.send({
        message: "You have signed up"
    })
});

8) Create a function called generateToken that generates a random string for you.
     function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

9) Finish the signin endpoint. It should generate a token for the user and put it in the in memory variable for that user

     
app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = generateToken();
        user.token = token;
        res.send({
            token
        })
        console.log(users);
    } else {
        res.status(403).send({
            message: "Invalid username or password"
        })
    }
});

💡This can be improved further by
1. Adding zod for input validation
2. Making sure the same user cant sign up twice
3. Persisting data so it stays even if the process crashes
We’ll be covering all of this eventually