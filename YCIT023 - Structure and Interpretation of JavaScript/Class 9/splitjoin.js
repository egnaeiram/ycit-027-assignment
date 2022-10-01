var a = "red|blue|green";

var b = a.split('|');

// b will be ("red","blue","green")

var d = b.join(', ');
// d will be "red, blue, green"

console.log(b);
console.log(d);

// split (strind to array)
source = "a|b|c"

let result = source.split("|");
console.log(result);

/*
source = "a b c"

let result = source.split(" ");
console.log(result);
*/




// join (array to string)
arraySource = [20, 30, 10, 11]

let newString = arraySource.join(", ");
console.log(newString);
