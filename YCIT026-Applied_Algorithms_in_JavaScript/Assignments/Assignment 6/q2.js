

 function checkPalindrome(str) {
    let second = str.toString().split('').reverse().join('')
 
     return (str.toString() === second);
 }
 

console.log(checkPalindrome('151'));
console.log(checkPalindrome('22'));
console.log(checkPalindrome('-22'));
console.log(checkPalindrome('75257'));
console.log(checkPalindrome('9257823'));
