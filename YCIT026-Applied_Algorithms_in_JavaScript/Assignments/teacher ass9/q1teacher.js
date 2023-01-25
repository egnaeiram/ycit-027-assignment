// fibonacci

// time o(n)
// space o(1)

const fib = (n) => {

    if (n == 0) {
    return 0;
    }

    if (n <= 2) {
    return 1;
    }
    return fib(n - 1) + fib(n - 2);
};



let result = fib(0)
console.log(result);
result = fib(4)
console.log(result);
result = fib(10)
console.log(result);
result = fib(28)
console.log(result);
result = fib(35)
