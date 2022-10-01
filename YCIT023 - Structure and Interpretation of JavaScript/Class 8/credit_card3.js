let creditCard = "  4250 1234 3548 2345 ";

// creditCard = creditCard().split(" ").join("");
// trim not needed here

creditCard = creditCard.replace(/ /g, "");

let creditcardDisplay = creditCard.slice(-4).padStart(creditCard.length, "*");
console.log("Credit Card: " + creditcardDisplay);