simpleArraySum = (ar) => {

    const sum = ar.reduce((preVal, currVal) => {
        return preVal + currVal;
    });
    return sum;
}

const result = simpleArraySum([1, 2, 3, 4, 10, 11]);

console.log(result); 

 // Time complexity : O(n)
 // Space complexity : O(n)