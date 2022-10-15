let names: string[] = [ 'John', 'Jane', 'Peter', 'David', 'Mary'];

let n2 = [2, 3, 4, "hello", true] // JS Syntax-OK but bad practice 



const greeting = function (name: string) {
    return `Hi ${name}`;
};

console.log(greeting("B"));

let greeting1 = (name: string) => `Hi2 ${name}`;

console.log(greeting1("B"));