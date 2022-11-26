let factorial = (num) => {
    // time o(n)
    // space o(1)

    if (num <= 1) {
        return 1;
    }
    return factorial(num - 1) * num
};

let result = factorial(3);
console.log(result);



