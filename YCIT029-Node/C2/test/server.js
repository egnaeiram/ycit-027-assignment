// not using http in the course anymore

// const http = require("http");
// const server = http.createServer((req, res) => {
//     res.end('Hello,World!');
// });
// server.listen(3000);


// almost the same but this one is with express 
// what we'll do in the course below
const express = require('express');

const app = express();

// Middleware === function 
app.use( (req, res, next) => {

    console.log("A request was received");

    // next() is a function that allows the request to continue to the next middleware in line
    next(); // without this the request will be stuck here ~ it will break the chain
});

app.get('/taco', (req, res) => {
    res.send('Hello,World!');
} );

app.get('/smokey', (req, res) => {
    res.send('Taco was his brother');
} );

app.listen(5500, () => {
    console.log('listening on port 5500');
    });
