function checkPalindrome(str) {
   let myStr = str.match(/[a-z0-9]+/ig).join('').toLowerCase();

    let second = myStr.split('').reverse().join('');

    return myStr === second;
}




console.log(checkPalindrome("A man, a plan, a canal: Panama"));
console.log(checkPalindrome("Input: race a car"));
console.log(checkPalindrome('s = " "'));
console.log(checkPalindrome('Madam'));
console.log(checkPalindrome('Car'));
console.log(checkPalindrome('ABCba'));
console.log(checkPalindrome('1ABCba1'));
