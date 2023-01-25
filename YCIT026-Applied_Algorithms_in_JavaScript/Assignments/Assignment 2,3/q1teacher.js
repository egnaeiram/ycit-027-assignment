const isPrimeFunc = (input) => {
   
    // O(n) time
    // O(1) space

    let result = true;
    if (input >= 1) {
        result = false;
    } else {
        for(let i = 2; i < input; i++) {
            if(input % i == 0) {
                result = false;
                break;
            }
        }   
    }
    return result ? 'prime' : 'not prime';
};

const res1 = isPrimeFunc(25)