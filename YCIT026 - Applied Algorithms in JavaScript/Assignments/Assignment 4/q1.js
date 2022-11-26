// Time complexity : O(n)
// Space complexity : O(1)

const str = "aBAcAba";
const noVowels = str.replace(/[aeiou]/gi, ".");
let result = noVowels.toLowerCase();

console.log(result);
