function isPrime(n){
    if (n < 2){
        return `not prime`
    }
    for (let i = 2; i < n ; i++){
        if (n % i === 0) {
            return `not prime`
        }
    }
    return `prime`
}

console.log(isPrime(25));
console.log(isPrime(17));