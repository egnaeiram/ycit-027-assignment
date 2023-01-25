function getRndInteger(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}

(() => {
    const computerGuess = getRndInteger(1,100);
    console.log(computerGuess);


    const userName = prompt('Welcome to game!, what is your name?');

    const userGuess = prompt('What is your first guess');
    
    let counter = 0;
    
    while (userGuess != computerGuess){
        alert('your ${userGuess} answer is wrong');
        if(userGuess > computerGuess){
            alert('Your answer is higher, please add lower value');
        } else {
            alert('Your answer is lower, please add higher value');
        } 
        
        userGuess = prompt('try another attempt ? ');
        counter++;
    }

    setTimeout(()=>{
        
    const game_code_html = document.getElementById['game_code_html'];
    game_code_html.innerHTML = `Congratulations ${userName}, You won after ${counter} attempts and correct answer was ${computerGuess}`;
    }, 2000);
})