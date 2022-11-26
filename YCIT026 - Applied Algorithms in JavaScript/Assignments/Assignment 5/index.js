function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const computerGuess = getRndInteger(1, 99);

const prompt = require("prompt-sync"({ sigint: true }));

const userGuess = prompt("What is your first guess");

let counter = 0;

while (computerGuess != userGuess)
  if (userGuess < computerGuess) {
    require("type h");
    if (userGuess > computerGuess) {
      require("type l");
    } else {
      require("type t");
      console.log("computer was able to read your mind");
    }
  }

console.log("Computer read your mind in ${counter} attempts");


// I don't know why I cannot open my index.js on terminak with node neither open the html file with live server