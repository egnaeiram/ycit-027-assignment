//Array
const ARRAY_ELEMENTS = 100;
const ARRAY = [];
const MAX_VAL = 100;

let sum = 0;
let count = ARRAY_ELEMENTS;
let even = 0;
let odd = 0;

for (let x = 0 ; x < ARRAY_ELEMENTS; x++)
{
    ARRAY[x] = Math.floor(Math.random() * MAX_VAL ) + 1;
}

let lowest = ARRAY[0];
let highest = ARRAY[0];

console.log(ARRAY);

// isEven function
function isEven(n) 
{
    return n % 2 == 0;
}

//forLoop
for (let x of ARRAY)
{
    sum += x;

    if (x > highest)
    {
        highest = x;
    } 
    
    if (x < lowest)
    {
        lowest = x;
    }

    isEven(x) ? even++ : odd++;

    // if(isEven(x))
    // {
    //     even++;
    // }
    // else 
    // {
    //     odd++;
    // }
}

let av = sum / count;

console.log(av + " - The average of the whole group");
console.log(highest + " - The highest number");
console.log(lowest + " - The lowest number");
console.log(even + " - This many are even");
console.log(odd + " - This many are odd");