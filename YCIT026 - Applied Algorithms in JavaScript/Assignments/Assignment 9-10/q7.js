function merge(ar1, ar2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (
        i < ar1.length
        && j < ar2.length
    ) {
        if (ar2[j] > ar1[i]) {
            results.push(ar1[i]);
            i++;
        } else {
            results.push(ar2[j])
            j++;
        }
    }
    while (i < ar1.length) {
        results.push(ar1[i])
        i++;
    }
    while (j < ar2.length) {
        results.push(ar2[j])
        j++;
    }
    return results;
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

var sortArray = (nums) => {
    //time O(n log n)
    //space O(n)
    return mergeSort(nums);
};






console.log(sortArray([5, 2, 3, 1]));

console.log(sortArray([5, 1, 1, 2, 0, 0]));
