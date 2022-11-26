const isPalindrome = (input) => {
   
    input = input.toLowerCase();

    input = input.replaceAll(' ', '');
    input = input.replace(/[^a-z0-9]/gi, '');

    const halfOfLength = Math.floor(input.length / 2 );
        let answer = true;

    for (let i = 0; i < halfOfLength; i++) {
    if (input[i] != input[input.length - i -1]) {
        answer = false;
        break;
    }
    }
    return answer;
}

let result = isPalindrome('A man, a plane, a canal: Panama')
console.log(result);
result = isPalindrome('race a car')
console.log(result);
result = isPalindrome(' ')
console.log(result);