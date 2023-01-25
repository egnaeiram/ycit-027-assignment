let reverse = (str) => {

    //time o(n)
    //space o(n)
    const arr = str.split('');
    arr.reverse();
    return arr.join('');
}

reverse = (str) => {

    // time o(n)
    // space o(n)

    if(str.length <=1) {
        return str;
    }
    return reverse(str.slice(1)) + str[0]
}

let result = reverse('awesome');
console.log(result);
result = reverse('rithmschool');
console.log(result);
