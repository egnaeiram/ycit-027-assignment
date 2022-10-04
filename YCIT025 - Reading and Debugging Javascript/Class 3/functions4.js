let a = 10;

function calculate();
{
    a++;
}

calculate();

console.log(a);

const x = new Function("a", "b", "return a + b;")

console.log(x(1,2));