let inputText = "A|B,C";

const regexSplit = /[,\|]/;

let output = inputText.split(regexSplit);

console.log(output);