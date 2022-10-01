const arr = [1,2,3];

console.log(arr.length);


let newSize = arr.push("X");
// push add at the end

console.log(newSize);
console.log(arr);


let member = arr.pop();
// pop removes at the end
console.log(member);

console.log(arr.length);

arr.unshift("B");
// unshift add at the front
// shift remove at the front
console.log(arr);