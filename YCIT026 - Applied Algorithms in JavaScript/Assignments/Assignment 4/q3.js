// Time complexity : O(n)
// Space complexity : O(n)

function isRegex(text) {
  var re = RegExp(
    "[a-z]{0,}h{1}[a-z]{0,}e{1}[a-z]{0,}l{2}[a-z]{0,}o{1}[a-z]{0,}"
  );

  if (re.test(text)) {
    return "Yes";
  } else {
    return "NO";
  }
}

console.log(isRegex("ahhellllloou"));
console.log(isRegex("hlelo"));
