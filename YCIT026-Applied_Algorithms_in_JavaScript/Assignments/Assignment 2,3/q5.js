const arr = [
    767,
    665,
    999,
    895,
    907,
    796,
    561,
    914,
    719,
    819,
    555,
    529,
    672,
    933,
    882,
    869,
    801,
    660,
    879,
    985,
    ];


const maxDivisors = (arr) => {
    let highest = 0;
    let numberOfDivisors = 0;
    let count = 0;

arr.forEach((item) => {
    for (let i = 0; i <= item; i++) {
        if (item % i === 0) {
            count++;
        }
}
    
        if (count > numberOfDivisors) {
            numberOfDivisors = count;
            highest = item;
        }
        count = 0;
});

return [highest, numberOfDivisors]
};

console.log(maxDivisors(arr));

  
// O(n^2) time complexity
// O(n) space complexity


