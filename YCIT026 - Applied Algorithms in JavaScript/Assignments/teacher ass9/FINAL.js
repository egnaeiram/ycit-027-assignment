

let findTargetFromUniqueSortedArray = function (arr, target) {
    let uniqueArr = [...new Set(arr)];
    return uniqueArr
}

let middleIndex = Math.ceil(uniqueArr.length/2);
let arr1 = uniqueArr.splice(0,middleIndex);
let arr2 = uniqueArr.splice(-middleIndex);

function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (
        i < arr1.length
        && j < arr2.length
    ) {
        if (arr2[j] > arr1[i]) {
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while (i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while (j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

function mergeSort(uniqueArr) {
    if (uniqueArr.length <= 1) return uniqueArr;
    let mid = Math.floor(uniqueArr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}



function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (sortedArray[middle] === key) {
    
            return middle;
        } else if (sortedArray[middle] < key) {
         
            start = middle + 1;
        } else {
          
            end = middle - 1;
        }
    }
    return -1;
}



    let result = findTargetFromUniqueSortedArray([1, 2, 5, 2, 3], 2);

    console.log(result);
    
    result = findTargetFromUniqueSortedArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12], 9);
    
    console.log(result);
    
    result = findTargetFromUniqueSortedArray([101.25, 78, 97, 1.123, 1859, 468, 322, 697.77, 5999.9], 697.77);
    
    console.log(result);