// new Promise --> create a new object (a promise object)
// whenever we construct a new object, something called a "constructor" is called
// you can **optionally** pass an argument to the constructor
// in this case, we are passing a function statement called an "executor"

console.log("start of program"); // happens 1st

new Promise((resolve) => {
    console.log("start of executor"); // happens 2nd
    setTimeout(() => {
            resolve("this is the answer"); // doesn't happen without then
        }, 2000);
        console.log("end of executor"); // happens 3rd
    }).then( (result) => {
        console.log(result);  // makes the resolve happen after 2 sec 
    })


console.log("end of program"); // happens 4th