const express = require('express');

const app = express();

// Add static middleware

app.use(express.static('public'));

// Get the mock shopping list

app.get("/shopping-list", (req, res) => {
    res.json([
        {
            id: 1,
            name: "apples",
        },
        {
            id: 2,
            name: "oranges",
        },
        {
            id: 3,
            name: "milk",
        },
        ])
});

app.listen("3000");