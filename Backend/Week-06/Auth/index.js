const express = require("express");
const jwt = require('jsonwebtoken');
const JWT_SECRET = "ram123";
const app = express();

app.use(express.json());

let users = []

app.post("/signup", (req, res) => {
     const username = req.body.username;
     const password = req.body.password;

     users.push({ username, password });
     // note we should check if a user with this username already exists
     res.status(200).json({
          message : `You have signed up`
     })
 });

app.post("/signin", (req, res) => { 
     const username = req.body.username;
     const password = req.body.password;

     const foundUser = users.find(user => user.username === username && user.password === password);

     if (!foundUser) {
          res.json({
               message : `Wrong Credentials`
          })
          return
     } else {
          const token = jwt.sign({ username }, JWT_SECRET);
          res.json({
               token
          })
     }
});

app.get("/me", (req, res) => {
     const token = req.headers.token;

     const decodedData = jwt.verify(token, JWT_SECRET);

     if (decodedData.username) {
          const foundUser = users.find(user => user.username === decodedData.username);
          res.json({
               message : `Hey welcome`
          })
     } else {
          res.json({
               message : `User doesn't exist`
          })
     }
});
 
app.listen(3000);