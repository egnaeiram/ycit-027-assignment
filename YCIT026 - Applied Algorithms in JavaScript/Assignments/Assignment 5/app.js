function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

(() => {
  const computerGuess = getRndInteger(1, 99);
  console.log(computerGuess);

  const userGuess = prompt("What is your first guess");

  let counter = 0;

  while (computerGuess != userGuess) {
    alert("The computer haven't read your mind yet");
    if (computerGuess > userGuess) {
      alert("Please type h");
    } else if (computerGuess < userGuess) {
      alert("Please type l");
    } else {
      alert("Please type t");
    }
    counter++;
  }

  setTimeout(() => {
    const game_code_html = document.getElementById["game_code_html"];
    game_code_html.innerHTML = "Computer read your mind in ${counter} attempts";
  }, 2000);
})();


