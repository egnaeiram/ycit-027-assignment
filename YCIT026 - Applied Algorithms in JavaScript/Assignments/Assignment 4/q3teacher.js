const stringConverter = (input) => {
  
    // O(n) time
    // O(n) Space 
  
    let output = "NO";

  const lookUp = ["h", "e", "l", "l", "o"];
  let lookUpIndex = 0;

  for (let i = 0; i < input.length; i++) {
    if (lookUpIndex == lookUp.length) {
      output = "YES";
      break;
    }
    if (input[i] == lookUp[lookUpIndex]) {
      lookUpIndex++;
    }
  }
  return output;
};

let result = stringConverter("ahhellllloou");
console.log(result);
result = stringConverter("hlelo");
console.log(result);
