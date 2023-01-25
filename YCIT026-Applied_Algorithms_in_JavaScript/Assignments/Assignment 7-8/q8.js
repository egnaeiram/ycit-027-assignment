// O(N^2) = Time complexity
// O(1) = Space complexity

var judgeSquareSum = function (c) {
  for (i = 1; i * i <= c; i++)
    for (j = 1; j * j <= c; j++)
      if (i * i + j * j == c) {
        return true;
      }
  return false;
};

console.log(judgeSquareSum(5));
console.log(judgeSquareSum(3));
