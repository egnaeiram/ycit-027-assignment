// 0(N) = Time complexity
// O(N) = Space complexity

function isAnagram(a, b) {
    let isA = a.length;
    let isB = b.length;
    if(isA !== isB){
       console.log('Not Anagram');
    }
    let strA = a.split('').sort().join('');
    let strB = b.split('').sort().join('');
    if(strA === strB){
       console.log("Anagram");
    } else { 
       console.log("Not Anagram");
    }
 };

console.log(isAnagram("abc","bca"));
