/*
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).
*/


let myPow = (x, n) => {

    // time o(1)
    // space o(1)
    return x ** n;

}

myPow = (x, n) => {

    // time O(N)
    // space O(1)

    if(n == 0){
        return 1;
    }
    if(n > 0){
        return x * myPow(x, n - 1)
    }
    return (1/x) * myPow(x, n + 1)
}

let result = myPow(2, 10);
console.log(result);

result = myPow(2.1, 3);
console.log(result);

result = myPow(2.0, -2);
console.log(result);
