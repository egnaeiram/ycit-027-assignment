// Print a quote " "
let myQuote = "They said \"We won the game\" ";
let myQuote2 = 'They said "We won the game"';
let myQuote3 = `They said "We won the game`;

//Print a slash.
//We accept Visa \ Mastercard
let visa1 = "We accept Visa \\ Mastercard"

console.log(visa1);

let message = "An error occured \n0ut of memory.";

console.log(message);

let values = "1\t2\t3\t4";
console.log(values);

for (let x = 0; x < 20; x++)
{
    if  (x% 2 ==0)
    {
    console.log(x+" Even");
    }
    else
    {
    console.log(x+" Odd");
    }
}

// unicode emojis
console.log("\u{1F602}");