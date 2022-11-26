const stringConverter = (input) => {

    let output = '';

    input = input.toLowerCase();

    input = input.replaceAll('a', '');
    input = input.replaceAll('e', '');
    input = input.replaceAll('i', '');
    input = input.replaceAll('o', '');
    input = input.replaceAll('u', '');

    // or with regex to replace the input above
    // input = input.replace(/[aeiou]/gi, '');

    for (let i = 0; i < input.length; i++) {
        output += '.' + input[i];
    }

    return output;
};

let result = stringConverter('aBAcAba');
console.log(result);
