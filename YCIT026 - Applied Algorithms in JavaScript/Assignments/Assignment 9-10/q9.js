    // Time( log n)
    // Space O(n)


var search = function(nums, target) {

    return binarySearch(nums, target)
};

function binarySearch(sortArray, key){
    let start = 0;
    let end = sortArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortArray[middle] === key) {
    
            return middle;
        } else if (sortArray[middle] < key) {

            start = middle + 1;
        } else {

            end = middle - 1;
        }
    }

    return -1;
}


console.log(search([-1,0,3,5,9,12], 9));

console.log(search([-1,0,3,5,9,12], 2));