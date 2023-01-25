// Get the 'express' module
const express = require("express");

// Create an instance of an express application
const app = express();

const todos = [];

app.listen(3000, () => {
  console.log("Server is running...");
});

app.use("/", (req, res, next) => { 
    console.log("middleware"); 

    res.currentTime = new Date();

    next();

});

// Attach all the request handlers

app.get("/", () => { console.log("get route handler"); res.end() }); // get a server resource

app.post("/", () => { console.log("get route handler", res.currentTime); res.end() }); // post a server resource

app.put("/", () => { console.log("get route handler"); res.end() }); // put a server resource

app.patch("/", () => { console.log("get route handler"); res.end() }); // patch a server resource

app.delete("/", () => { console.log("get route handler"); res.end() }); // delete a server resource

// Experiment with changing "res.end()" to res.json({ name: "taco", age: 22 })"


// Listen on port
app.listen(3000, () => {
  console.log("Server is running...");
});