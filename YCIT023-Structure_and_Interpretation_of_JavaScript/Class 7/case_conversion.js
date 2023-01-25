let input_string = "Brendan";

console.log(input_string.toUpperCase())

console.log("Would you like to continue?");

let response = "y";

// if statement

// if (response == "Y" || response == "y")
if (response.toLocaleLowerCase === "y")
{
    console.log("OK continuing");
}
else
{
    console.log("Thanks for using the program.");
}

let sample = "Hello";
let greeting = sample.concat(" ", "Brendan", " ", "Wood");

console.log(greeting);