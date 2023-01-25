const array1 = [50, 60, 70, 80]
//  index       0,  1,   2,  3
let sum = 0;

// c style for loop

for (let c = 0; c < 4; c++ )
{
    console.log(array1[c]);
    sum += array1[c];
}

console.log(sum);


// for in (works with indexes)
for (let i in array1) { // i holds the currennt index
    sum += array1[1];
}

// for of (works with the value itself)
for (let x of array1) {
    sum += x;
}