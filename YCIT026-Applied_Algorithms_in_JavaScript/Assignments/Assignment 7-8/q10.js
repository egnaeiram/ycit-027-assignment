// O(N) = Time complexity
// O(1) = Space complexity

function maxSubarraySum(arr,num) {
       
    if (arr.length < num)
        {
            return 'null';
        }

        let result = 0;
        for (let i=0; i<num; i++)
        result += arr[i];
     
        let resultSum = result;
        for (let i=num; i<arr.length; i++)
        {
            resultSum += arr[i] - arr[i-num];
            result = Math.max(result, resultSum);
        }
     
        return result;
    }
     
console.log(maxSubarraySum([100,200,300,400],2));
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20],4));
console.log(maxSubarraySum([-3,4,0,-2,6,-1],2));
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2));
console.log(maxSubarraySum([2,3],3));
   