function getRndInteger(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
} // IMPURE FUNCTION BECAUSE WE CANNOT PREDICT

const computerGuess = getRndInteger(1, 100);

const prompt = require('prompt-sync')({ sigint: true });

const userName = prompt('Welcome to game!, what is your name?');

const userGuess = prompt('What is your first guess');

let counter = 0;

while (userGuess != computerGuess){
    console.log('your ${userGuess} answer is wrong');
    if(userGuess > computerGuess){
        console.log('Your answer is higher, please add lower value');
    } else {
        console.log('Your answer is lower, please add higher value');
    } 
    
    userGuess = prompt('try another attempt ? ');
    counter++;
}


console.log('Congratulations ${userName}, You won after ${couter} attemps and correct answer was ${computerGuess}!');