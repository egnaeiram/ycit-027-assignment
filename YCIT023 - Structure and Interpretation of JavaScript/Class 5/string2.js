let myString = "Hello";

console.log(myString.lenght);

let longString = "The quick brown fox jumped over the lazy dog.";

console.log(longString.slice(5,15));

let string2 = "ABCDEF";

console.log(string2.slice(2,4));

// ABCDEF
// 012345

//BCDE
console.log(string2.slice(1,5));

//BCD
console.log(string2.slice(1,-2));

//E
console.log(string2.slice(-2,-1));

//LAST CHARACTER OF STRING (F)
console.log(string2.slice(-1,));


