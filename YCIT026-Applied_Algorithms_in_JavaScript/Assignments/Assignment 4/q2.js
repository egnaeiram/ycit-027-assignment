// Time complexity : O(n log(n))
// Space complexity : O(n)

let myStr = "1+1+3+1+3+2+3";

const newStr = myStr.split("+");

newStr.sort();

const finalStr = newStr.join("+");

console.log(finalStr);
