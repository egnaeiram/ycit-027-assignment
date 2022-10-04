// REDUCE

const r1 = [1,5,3,6,2];

let total = r1.reduce((acc, val) => { return acc + val; }, 0);

let largest = r1.reduce((acc, val) => { return 0;}, r1[0] )

console.log(total);

//FILTER

const inputSet = [6,7,3,67,20,4];
const smallerThanTen = inputSet.filter(w => w < 10);

console.log(smallerThanTen)

const words = ['spray', 'limit', 'elite', 'exuberant']