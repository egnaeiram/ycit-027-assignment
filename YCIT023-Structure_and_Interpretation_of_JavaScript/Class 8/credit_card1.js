let myString = "4250 1234 3548 2345";

myString = myString.trim().split(" ").join("");

let mySlice = myString.slice(0,12);
console.log(mySlice);

let myNewString = myString.replace(mySlice , "************");

console.log("Balance for credit card " +myNewString);

//  The best one - Use the least power to run it