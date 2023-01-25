let findGcd = () => (number1, number2) => {
    if (number2 == 0) {
        return number1;
    }
return gdc(number2, number1 % number2);
};

const toPrime = (gdc) => {

    let primeFactorArray = true;
    if (gdc >= 1) {
        primeFactorArray = false;
    } else {
        for(let i = 2; i < gdc; i++) {
            if(gdc % i == 0) {
                primeFactorArray = false;
                break;
            }
        }   
    }
    return primeFactorArray.join('')
}
const object1 = {
    a: gdc.key,
    b: gdc.value,
  };
  
  for (const [key, value] of Object.entries(object1)) {
    console.log(`gdc key and value are ${key}: ${value}`);
  }

  const object2 = {
    a: primeFactorArray.value
  };
  
  for (const [value] of Object.entries(object2)) {
    console.log(`primeFactorArray value is ${value}`);
  }


console.log(findGcd(14,28));

console.log(findGcd(35,15));

console.log(findGcd(100,180));

