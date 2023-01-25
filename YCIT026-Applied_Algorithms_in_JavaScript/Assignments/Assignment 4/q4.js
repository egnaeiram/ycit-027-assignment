// Time complexity : O(n)
// Space complexity : O(n)

var re = RegExp("[A-Z]");
var re2 = RegExp("[a-z]");

function findingCapitalLetter(text) {
  if (re.test(text)) {
    return "true";
  } else if (re2.test(text)) {
    return "false";
  } else {
    return text + " is not an alphabetic character";
  }
}

console.log(findingCapitalLetter("p"));
console.log(findingCapitalLetter("H"));
console.log(findingCapitalLetter("9"));
console.log(findingCapitalLetter("?"));
