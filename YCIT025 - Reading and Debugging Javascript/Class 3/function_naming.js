// DESIGN PATTERN
// STRATEGY PATTERN


const add = (n1, n2) => n1 + n2;

const multiply = (n1, n2) => n1 * n2;

const divide = (n1, n2) => n1 / n;

function calculate(n1, n2, f)
{
    return f(n1, n2);
}

console.log(calculate(2, 4, multiply));

// customSort( dataToSort , sortMethod )
// filter ( dataToFilter, filter )
// lofInfo ("log message", method)