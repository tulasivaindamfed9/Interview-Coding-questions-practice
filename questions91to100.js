// Flatten Nested Array
let arr = [1, [2, [3, 4], 5], 6];
function flatArrBuiltinMethod(arr){
    const newArr=arr.flat(Infinity)
    console.log(newArr)
}
flatArrBuiltinMethod(arr)
// output:  [ 1, 2, 3, 4, 5, 6 ]
// if we don't use infinity, and pass only flat(), then the output: [ 1, 2, [ 3, 4 ], 5, 6 ]

function flatenArr(arr){
    const newArr=[]
    for(let i of arr){
         // Check if the current item is an array
        if(Array.isArray(i)){
            // Recursively flatten the sub-array and unpack its elements
            newArr.push(...flatenArr(i))
        }
        else{
            // If it's a regular value, just add it to our result
             newArr.push(i)
        }
    }
    return newArr
}
console.log(flatenArr(arr))      //output: [ 1, 2, 3, 4, 5, 6 ]
// this is an ex of recursiion
// Recursion is a programming technique 
// where a function calls itself to solve a smaller version of the same problem.
// means instead of using for loop , we are calling flarenArr function again
