// Find Missing Number in Array
const arr1 = [1, 2, 4, 5];
function findMissingNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    // If the next element is not current + 1
    if (arr[i + 1] !== arr[i] + 1) {
      return arr[i] + 1;
    }
  }
}
console.log(findMissingNumber(arr1));

// output: 3

// ----------------------------------------------------------------------
// Find Duplicate Elements
const arr2 = [1, 2, 25, 5, 5, 1];
function findDuplicates(arr) {
  let seen = new Set()
  let duplicates = new Set()
  for (let i of arr) {
    if (seen.has(i)) {
      duplicates.add(i);
    } else {
      seen.add(i);
    }
  }
  return [...duplicates]    //convert set to array
}
console.log(findDuplicates(arr2))
// output:  [ 5, 1 ]



// -------------------------------------------------------------------------
// Count Frequency of Elements
const arr3=[1,1,1,4,4,8,8,4,4]
function countFrequency(arr){
    let count={}
    // using for..in
    for(let i in arr){
        count[arr[i]]=( count[arr[i]] ?  count[arr[i]] :0) +1
    }
    
    // using for..of
    // for(let num of arr){
    //     count[num]=(count[num] ? count[num] :0) +1
    // }
    return count
}
console.log(countFrequency(arr3))
// output:    { '1': 3, '4': 4, '8': 2 }


// -----------------------------------------------------------------------------
// Merge Two Arrays
const arr4=[1,2,3]
const arr5=["apple","nano car"]
function addArrays(a,b){
    for(let i in b){
        a.push(b[i])
    }
    return a
}
console.log(addArrays(arr4,arr5))
// output:    [ 1, 2, 3, 'apple', 'nano car' ]


// --------------------------------------------------------------------------
// Find Common Elements
const arr6=[1,2,3]
const arr7=[3,5,1]
function findCommonElements(a,b){
    let arr=[]
    for(let i in a){
        if(b.includes(a[i])){
            arr.push(a[i])
        }
    }

    return arr
}
console.log(findCommonElements(arr6,arr7))

// output:  [ 1, 3 ]



// -----------------------------------------------------------------------
// Array Intersection
// Intersection: Finds only the elements that exist in both arrays 
const arr8=[1,2,5]
const arr9=[2,4,1]
function arrIntersect(a,b){
    let arr=[]
    for(let i of a){
        if(b.includes(i)){
            arr.push(i)
        }
    }
    return arr
}
console.log(arrIntersect(arr8,arr9))

// output:  [ 1, 2 ]
// finding common elements is same as intersection


// -----------------------------------------------------------------------
// Array Union
function arrUnion(a,b){
  
  for(let i in  a){
    b.push(a[i])
  }
  const newArr=new Set(b)
  return newArr
}
console.log(arrUnion(arr8,arr9))

// output:  Set(4) { 2, 4, 1, 5 }



// -----------------------------------------------------------------------
// Rotate Array Left by One Position
// Approach:  Remove first element and add it at the end.
const arr10=[1,2,3,4]
function rotateArrLeft(arr){
    const newArr=arr.slice(1)
    const leftEle=arr[0]
     newArr.push(leftEle)

     return newArr
}
console.log(rotateArrLeft(arr10))
// output:  [ 2, 3, 4, 1 ]


// --------------------------------------------------------------------
// Rotate Array Right by One Position
// take the last element and place it at the very beginning of the array.
function rotateArrRight(arr){
   const a1=[arr.at(-1),...arr.slice(0,-1)]
   // arr.at(-1) grabs the last item
  // arr.slice(0, -1) grabs everything EXCEPT the last item

   return a1
}
console.log(rotateArrRight(arr10))

// output:  [ 4, 1, 2, 3 ]


// ------------------------------------------------------
// Move Zeros to End
// first remove all 0's by using filter
// use while loop to add 0's at last of arry until it matches the len of original array
const arr11=[0,3,0,4,5,0]
function moveZeroToEnd(arr){
   const a1=arr.filter(each => each !== 0)
   
   while(a1.length < arr.length){
    a1.push(0)
   }

   return a1
}

console.log(moveZeroToEnd(arr11))

// output:  [ 3, 4, 5, 0, 0, 0 ]