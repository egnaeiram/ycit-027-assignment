const n =15;

const result = [];
for (let i = 0; i < n;) {
    result.push(
        (++i % 3 ? '' : 'Fizz')
        + (i % 5 ? '' : 'Buzz')
        || String(i)
    );
}
console.log(result);