// O(1) = Time complexity
// O(1) = Space complexity

var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n > 0) return pow(x, n);
  if (n < 0) return 1 / pow(x, -n);
};

var pow = function (x, n) {
  if (n === 1) return x;
  var num = pow(x, Math.floor(n / 2));
  if (n % 2 === 0) {
    return num * num;
  } else {
    return x * num * num;
  }
};

console.log(myPow(2.0, 10).toFixed(5));
console.log(myPow(2.1, 3).toFixed(5));
console.log(myPow(2.0, -2).toFixed(5));
