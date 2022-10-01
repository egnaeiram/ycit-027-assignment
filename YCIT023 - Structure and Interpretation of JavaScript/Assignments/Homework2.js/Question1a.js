// YCIT023
//             Assignment 2
//                             Marie-Ange Pesant



// QUESTION 1.a 

// Step 1
const ARRAY_ELEMENTS = 100;
let array = [];
for (let i=0 ; i < ARRAY_ELEMENTS; i++ ){
    array[i] = Math.floor(Math.random() * 100) + 1;
}

console.log(array);

// Step 2
// for of loop
let sum = 0;
let count = 0;
let lowest = 0;


// 2.1 The average of the whole group

const arr = [ 
    53, 45, 44, 86, 77, 39,  4, 76,  6, 18, 89, 32,
    54, 51,  9, 23, 26, 46, 20, 77, 30, 73, 72, 37,
     1, 74, 35, 47, 84, 84, 73, 77, 89, 68, 67, 58,
    59, 33,  8,  6, 38, 27, 24, 33,  8, 45, 97,  2,
    60,  4, 48,  3, 37, 91, 92, 93, 14,  1, 81, 88,
    49, 81, 73, 99, 23, 35, 87, 45, 87, 40, 24, 76,
    71, 89, 40, 61, 34, 86, 65, 96,  9, 32, 46, 36,
    90, 49, 90, 32, 57, 99, 33, 81, 20, 85, 19, 67,
    89, 31, 41, 16 ];

const average = arr.reduce((a, b) => a + b, 0) / arr.length;

console.log("The average is " + average);

// 2.2 The highest and the lowest

const maxMinElement = (numbers) => {
  let min = numbers[0];
  let max = min;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
    if (numbers[i] > max) max = numbers[i];
  }
  return [max, min];
};

const arrElements = maxMinElement(arr),
  arrMaxElement = arrElements[0],
  arrMinElement = arrElements[1];

console.log("The highest is " + arrMaxElement);
console.log("The lowest is " + arrMinElement);

// 2.3 How many values are even?

const even = arr.filter(number => {
  return number % 2 === 0;
});

console.log(even.length + " numbers are even");

// 2.4 How many are odd?

const odds = arr.filter(number => {
  return number % 2 !== 0;
});

console.log(odds.length + " numbers are odd");

// END 

