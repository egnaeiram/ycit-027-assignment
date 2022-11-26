// O(n) = Time complexity
// O(1) = Space complexity

function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(0));
console.log(fib(4));
console.log(fib(10));
console.log(fib(28));
console.log(fib(35));
