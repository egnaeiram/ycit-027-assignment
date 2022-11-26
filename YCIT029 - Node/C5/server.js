const express = require("express");

const COUPON_CODES = ["123", "456", "789"];

// Instantiate the app
const app = express();

app.use(
    (req, res, next) => {
       res.locals.mydata = 3;
       next();
    });

app.use((req, res, next) => {
    console.log("taco", res.locals.mydata);
    next();
});