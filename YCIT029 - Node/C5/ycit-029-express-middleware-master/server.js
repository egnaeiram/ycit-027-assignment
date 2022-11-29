const express = require("express");

const COUPON_CODES = ["123", "456", "789"];

// Instantiate the app
const app = express();

app.use((req, res, next) => {
    if (req.method === "POST") {
        res.status(400).send("POSTS NOT ALLOWED!!!"); // Bad request
        return;
    }
    
    console.log(`Received a request ${req.method} ${req.url}`);
    next();
});

// Add static files middleware
app.use(express.static("public"));

// JSON body parser middleware
// app.use(express.json()); // I'm commenting this out because we don't need it for this example

// Middleware to extract the form data from the request body
app.use(
    express.urlencoded({
        extended: true,
        type: "application/x-www-form-urlencoded",
    })
);

const session = require("express-session");

app.use(
    session({
        secret: "keyboard cat",
        resave: true,
        saveUninitialized: false,
        cookie: { secure: false },
    })
);

// POST http://localhost:3000/login
app.post("/login",  (req, res) => {
    console.log("arrived at the login route handler");
    
    const coupon = COUPON_CODES.pop();

    req.session.user = {
        name: req.body.username,
        coupon: coupon,
    };

    res.send(coupon);
});

// Begin listening for requests
app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
