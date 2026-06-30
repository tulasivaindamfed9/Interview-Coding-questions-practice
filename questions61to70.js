// Find a Pair from the given array with Given Sum
// ex: [1,3,5,4]   givenSum=6--->which is {1,5}
const arr1 = [1, 3, 5, 4, 2];
const givenSum = 6;
function findGivenSumNumbers(arr, sum) {
  //  lets create a set
  let seenNumbers = new Set();
  for (let i of arr) {
    const requiredNum = sum - i;
    if (seenNumbers.has(requiredNum)) {
      console.log("the pair is: ", requiredNum, i);
    }
    seenNumbers.add(i);
  }
}
findGivenSumNumbers(arr1, givenSum);
// output: the pair is:  1 5
//    the pair is:  4 2

// -------------------------------------------------------------------
// find the Maximum Difference Between Elements
const arr2 = [7, 53, 45, 3];
function findMaxDiff(arr) {
  let maxDiff = 0;
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (Math.abs(arr[j] - arr[i]) > maxDiff) {
        maxDiff = Math.abs(arr[j] - arr[i]);
      }
    }
  }
  return maxDiff;
}
console.log(findMaxDiff(arr2));
// output: 50 --->53-3

// --------------------------------------------------
// find the Kth Largest Element
const arr3 = [2, 4, 7, 10];
function findKthLargeEle(arr, k) {
  const newArr = arr.sort((a, b) => b - a);
  return newArr[k - 1];
}
console.log("2nd large element: ", findKthLargeEle(arr3, 2));

// output: 2nd large element:  7

// -------------------------------------------------------------
// Maximum Subarray Sum (Kadane's Algorithm)

//  it is dsa medium level que....solve later

// ---------------------------------------------------------------
// Check if Array is Sorted
const arr4 = [1, 6, 8, 5];
function arraySorted(arr) {
  let sorted = false;
  for (let i in arr) {
    if (arr[i] > arr[i + 1]) {
      sorted = false;
      break;
      // checking arr[i] > arr[i+1]
      // if satisfies, then break. No need to check further
    }
  }
  return sorted;
}
console.log(arraySorted(arr4));
// output: false

// --------------------------------------------------------------------------
// Leaders in an Array
// ----------------------------------------------------------
// Majority Element--- retun the ele which appeared more numeber of times in an array
const arr5 = [1, 3, 6, 5, 4, 4, 4, 3];
function majorityEle(arr) {
  let set1 = {};
  for (let i = 0; i < arr.length; i++) {
    set1[arr[i]] = (set1[arr[i]] ? set1[arr[i]] : 0) + 1;
  }
  console.log(set1); //{ '1': 1, '3': 2, '4': 3, '5': 1, '6': 1 }

  // now loop through set1 to get the max appeared ele
  // The Key: Is the loop variable i.
  // The Value: Is set1[i]
  let maximumkey = null;
  let maxcount = 0;
  for (let i in set1) {
    if (set1[i] > maxcount) {
      maximumkey = i;
      maxcount = set1[i];
    }
  }
  return maximumkey;
}
console.log(majorityEle(arr5));
// output: 4 as it appeared more number of times


// -----------------------------------------------------------
// Product of Array Except Self
// Given an array like [1, 2, 3, 4],
//  you want to replace each number with the product of all other numbers except itself
const arr6=[4,6,3,2,7]
function productOfArrExceptSelf(arr){
    let pro=1
    for( i of arr){
        pro=pro * i 
    }
    console.log(pro)
    // now we got product of all ele in arr
    // now return Product of Array Except Self
    const newArr= arr.map((each)=> 
         pro/each
    )
    console.log(newArr)
}
productOfArrExceptSelf(arr6)
// output: 
// [ 252, 168, 336, 504, 144 ]



// ---------------------------------------------------
// two sum and three sum
// to be implemented

// ---------------------------------------------------

