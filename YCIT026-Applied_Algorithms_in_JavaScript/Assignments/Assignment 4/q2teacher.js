const stringConverter = (input) => {

// O(n log n) time
// O(n) space

    input = input.replaceAll('+', '');
    const sampleArr = input.split('');

    sampleArr.sort();

    const result = sampleArr.join('+');
   
    return result;
};

let result = stringConverter('1+1+3+1+3+2+3');
console.log(result);
