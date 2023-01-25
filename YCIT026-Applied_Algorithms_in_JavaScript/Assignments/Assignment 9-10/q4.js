// O(n) = Time complexity
// O(1) = Space complexity

function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(3));
