let inputText = "The quick brown fox jumped over the lazy dog.";


// substr
// substr is deprecating -> meaning with the new updates it will disappear eventually
// substring
// slice

let word1subStr = inputText.substr(4,5);
let word1subString = inputText.substring(4,10);
let word1slice = inputText.slice(4,10);

let word2subStr = inputText.substr(inputText.indexOf('lazy', 4));
let word2subString = inputText.substring(inputText.indexOf('la'), inputText.indexOf('do'));
let word2slice = inputText.slice(inputText.length-9,inputText.length-5);

console.log(word1subStr);
console.log(word1slice);
console.log(word1subString);


console.log(word2subStr);
console.log(word2slice);
console.log(word2subString);