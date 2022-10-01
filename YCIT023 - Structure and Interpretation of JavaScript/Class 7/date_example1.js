const date1 = new Date(); // Correct way to create a date.
const date2 = new Date(2022, 09, 15);

console.log(date2.getMonth());

// const date_bad = Date(); // good to only display the actual date only

// console.log(date1);
// console.log(date2);

date2.setFullYear(1982);

console.log(Date.now());

const date3 = new Date(1663288305078);

//serializable means can be transfered into the web as a message