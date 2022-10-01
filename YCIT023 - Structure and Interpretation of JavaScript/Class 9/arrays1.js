/*
a = [] // Start with an empty array.
a[5] = "zero"; // And add elements to it
a[7] = "one";

a.push("A");

console.log(a);
*/

a = ["A","B","C"];
delete a[1];
a[1] = "X";
console.log(a);

// to delete full array
// a = null;


// IN
console.log(1 in a); // expecting false because is the index in place 1 in a is "B" -> no it got deleted

// INCLUDES (USING VERY OFTEN)
console.log(a.includes("A")); // true because it includes the number 1  



