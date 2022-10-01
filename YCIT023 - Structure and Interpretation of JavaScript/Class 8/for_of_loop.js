// for of loop

let sum = 0;

const totals = [2, 3, 6, 1];

// for (let x = 0; x < totals.length; x++)
// {
//    sum += totals[x];
   // console.log(totals[x]);
// }
// console.log(sum);
// ^^ here x is the index, manually look at each index


for (let val of totals) { // val holds the current value
    // sum += val;
   // console.log(val);    
}
// ^^ here it was automatic to look at the index

console.log(sum);
// alert(sum);