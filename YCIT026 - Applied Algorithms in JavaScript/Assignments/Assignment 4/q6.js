// Time complexity: O(n)
// Space complexity: O(n)

function Count(str) {
  var upper = 0,
    lower = 0;

  for (var i = 0; i < str.length; i++) {
    if (str[i] >= "A" && str[i] <= "Z") upper++;
    else if (str[i] >= "a" && str[i] <= "z") lower++;
    else return;
  }
  const halfString = str.length / 2;
  const strUpper = str.toUpperCase();
  const strLower = str.toLowerCase();
  if (upper > halfString) {
    return strUpper;
  } else if (lower >= halfString) {
    return strLower;
  }
}

console.log(Count("CONGraTUlatION"));
console.log(Count("DOCument"));
console.log(Count("strING"));
