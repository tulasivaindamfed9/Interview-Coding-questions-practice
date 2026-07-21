// Largest Element and smallest element in Array
const arr1 = [1, 2, 8, 4];
function findLargest(arr) {
  let larger = arr[0];
  let smaller = arr[0];
  for (let i of arr) {
    if (arr[i] > larger) {
      larger = arr[i];
    }
    if (arr[i] < smaller) {
      smaller = arr[i];
    }
  }

  return { larger, smaller };
}

console.log(findLargest(arr1));

// output: { larger: 8, smaller: 1 }

// ---------------------------------------------------------------------------
// Second Largest Element and second smallest element
const arr2 = [8, 4, 38, 9];
function secondLargestSecondSmallest(arr) {
  const sortedArr = arr.sort((a, b) => b - a);
  //  descending: .sort((a,b)=>b-a)     ascending: .sort((a,b)=>a-b)
  // if only sort fun is used without any arguments, then it converts numbers to strings and
  // gives wrong output  ex: .sort()     ---->  [ 38, 9, 8, 4 ]
  const secondElement = sortedArr[1];

  const secondSmallest = sortedArr[sortedArr.length - 2];
  return {
    large: secondElement,
    small: secondSmallest,
  };
}
console.log(secondLargestSecondSmallest(arr2));
// output:  { large: 9, small: 8 }

// ----------------------------------------------------------------------
// Sum of Array Elements
const arr3 = [9, 5, 97, 9823];
function sumOfElements(arr) {
  let sum = 0;
  // .forEach() takes a function inside its parentheses
  // we can also loop using for..of
  // for(each of arr){
  //     sum += ele
  // }
  // can use reduce() method also
  // const nsum=arr.reduce((accumulator,current)=>{
  //     return accumulator+current
  // },0)
  arr.forEach((ele) => {
    sum += ele;
  });
  return sum;
}

console.log(sumOfElements(arr3));
// output:  9934

// --------------------------------------------------------------
// Average of Array Elements
const arr4 = [8, 3, 53, 242];
function avgOfElements(arr, sumOfElements) {
  const avg = sumOfElements(arr) / arr.length;
  console.log(avg);
}
avgOfElements(arr4, sumOfElements);

// output:  76.5
/* 
 Terminology Breakdown:
 sumOfElements (The Callback Function): This is the function being passed into the other 
 function as an argument. It waits to be executed later.

  avgOfElements (The Higher-Order Function): Any function that accepts another function as an argument,
   or returns a function, is called a Higher-Order Function.
*/

// -------------------------------------------------------------------------------
// Reverse an Array
const arr5 = [9, 7, 0, 4];
function reverseArr(arr) {
  const newarr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newarr.push(arr[i]);
  }
  return newarr;
}

console.log(reverseArr(arr5));
// output:  [ 4, 0, 7, 9 ]

// --------------------------------------------------------------------
// Sort Array Ascending and descending
const arr6 = [8, 3, 54, 65, 22];
function sortingAscDes(arr) {
  // [...arr] creates a brand new copy of the array before sorting it
  const ascArr = [...arr].sort((a, b) => a - b);
  const desArr = [...arr].sort((a, b) => b - a);

  return { ascArr, desArr };
}
console.log(sortingAscDes(arr6));

// output:  { ascArr: [ 3, 8, 22, 54, 65 ], desArr: [ 65, 54, 22, 8, 3 ] }

// -----------------------------------------------
// Remove Duplicates from Array
const arr7 = [2, 2, 4, 4, 7, 5];
function removeDuplicates(arr) {
  // 1. Create a Set from the array to instantly filter out duplicates
  // 2. Use the spread operator [...] to turn it back into a normal array
  const newarr = [...new Set(arr)];
  console.log(newarr);
}
removeDuplicates(arr7);
// output:  [ 2, 4, 7, 5 ]

// ====================================================
// find the middile number
const num = "342832";
function printnum(num) {
  const quo = num.length / 2;
  const rem = num.length % 2;
  const n = Math.floor(quo);
  if (rem === 0) {
    console.log("no num");
  } else {
    console.log(" middle num is ", num[n]);
  }
}
printnum(num);

// ========================================================
// Group arr of objs by property
const inventory = [
  { name: "asparagus", type: "vegetables" },
  { name: "banana", type: "fruit" },
  { name: "goat", type: "meat" },
  { name: "cherries", type: "fruit" },
];

function groups(arr, type) {
  const result = {};
  arr.forEach((item) => {
    const key = item.type;
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  });
  console.log(result);
}
groups(inventory, "type");

// output:
/* 
{
  vegetables: [ { name: 'asparagus', type: 'vegetables' } ],
  fruit: [
    { name: 'banana', type: 'fruit' },
    { name: 'cherries', type: 'fruit' }
  ],
  meat: [ { name: 'goat', type: 'meat' } ]
}
*/

// =====================================================================
// Group elements in array by their type like str,special char,number

const arrx = [1, 2, 3, "tulasi", "$"];
function converting(arr1) {
  let nums = [];
  let strs = [];
  let specials = [];
  const sp = /[^a-zA-Z0-9]/;
  for (i of arr1) {
    if (typeof i == "number") {
      nums.push(i);
    } else if (typeof i == "string") {
      if (sp.test(i)) {
        specials.push(i);
      }
      else{strs.push(i)}
    } else {
      ("nothing");
    }
  }
  console.log(nums, specials, strs);
}
converting(arrx);
