// O(N) = Time complexity
// O(1) = Space complexity

function averagePair(arr,num) {
    let leftSide = 0
    let rightSide = arr.length - 1
    while (leftSide < rightSide) {
        let average = (arr[leftSide] + arr[rightSide]) / 2
        if (average === num) {
           return true
        } else if (average > num) {
           rightSide --
        } else {
           leftSide ++
        }
     }
     return false
  };



console.log(averagePair([1,2,3],2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19],8));
console.log(averagePair([-1,0,3,4,5,6], 4.1));
console.log(averagePair([],4));