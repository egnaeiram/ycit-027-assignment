// Time complexity: O(n)
// Space complexity: O(n)

function swap(str) {
  let letters = str.split("");

  let newArray = [];
  for (let letter of letters) {
    if (letter === letter.toUpperCase()) {
      newArray.push(letter.toLowerCase());
    } else {
      newArray.push(letter.toUpperCase());
    }
  }
  return newArray.join("");
}

console.log(swap("jASON"));
console.log(swap("Ruby"));
