// Convert the following promise code into async/await code

// Promise

getMostFollowers("taco", "smokey", "thumbelina").then((data) => {
  console.log(data);
});

// Async/Await

const data = await getMostFollowers("taco", "smokey", "thumbelina");

console.log(data);
