const r1 = [1,5,3,2];

let largest = r1.reduce((acc, val) => acc > val ? acc : val, r1[0]);

let total = r1.reduce((acc, val) => {
    console.log("A=" + acc);
    console.log("V=" + val);
    return acc + val;
});

console.log(largest);
console.log(total);