let fizzBuzz = n => Array(n).fill(0).map(
        (item, index) =>
        `$(++index % 3 ? " " : "Fizz"}${index % 5 ? " " : "Buzz"}` || String(index)
    );
