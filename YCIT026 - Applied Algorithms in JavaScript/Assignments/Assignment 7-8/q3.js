// O(N) = Time complexity
// O(N) = Space complexity

function checkUniqueFrequency(arr) {
  let freq = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (freq.has(arr[i])) {
      freq.set(arr[i], freq.get(arr[i]) + 1);
    } else {
      freq.set(arr[i], 1);
    }
  }

  let uniqueFreq = new Set();

  for (let [key, value] of freq.entries()) {
    if (uniqueFreq.has(value)) return false;
    else uniqueFreq.add(value);
  }
  return true;
}

console.log(checkUniqueFrequency([1, 2, 2, 1, 1, 3]));
console.log(checkUniqueFrequency([1, 2]));
console.log(checkUniqueFrequency([-3, 0, 1, -3, 1, 1, 1, -3, 10, 0]));
