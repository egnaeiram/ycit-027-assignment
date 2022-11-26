function sumArray(array) {
        let sum = 0;     
    array.forEach(item => {
        sum += item
    });

    console.log(sum);
    return sum;
}

sumArray([3,3,3,3,3,1,0,0,0,0,1,3,1,3,1,3,1,0,0,1,3,3,1,0,0,1,3,3,1,0]);
