
function myFunction(str) {
    const half = Math.ceil(str.length / 2) ;

    const firstHalf = str.slice(0,half)
    const secondHalf = str.slice(half)
    const second = secondHalf.toString().split('').reverse().join('')

    if (firstHalf === second) {
        return true;
    } else {
        return false;
    }
}
console.log(myFunction('ABBA'));
console.log(myFunction('BAAB'));
console.log(myFunction('ABA'));
console.log(myFunction('ABHA'));