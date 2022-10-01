myString = "apple pear quick pear lemon";

found = myString.indexOf("pear");
// indexOf always go to the first match 

console.log(found);

found = myString.lastIndexOf("pear");
// indexOf the last one

console.log(found);

let example = "abc123xyz";

console.log(example.startsWith("abc"));
// gives true or false starts with 
