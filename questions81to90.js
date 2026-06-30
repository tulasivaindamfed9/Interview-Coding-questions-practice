/*
FizzBuzz
Question

Print numbers from 1 to n.

If divisible by 3, print "Fizz".
If divisible by 5, print "Buzz".
If divisible by both 3 and 5, print "FizzBuzz".
Otherwise, print the number.
*/
const n=15
function fizbuz(n){
    for(let i= 1; i<=n; i++){
        if(i%3===0 && i%5===0){
            console.log("fizzbuzz")
        }else if(i%5===0){
            console.log("buzz")
        }else if(i%3===0){
            console.log("fizz")
        }else {console.log(i)}
    }
}
fizbuz(n)


// ------------------------------------------------------------
// Find the index of a target element in a sorted array.
// our target ele is 4. find the index of it in sorted array
const arr1=[1,4,2,7,0]
function targetEleIndex(arr,x){
    arr.sort((a,b)=>a-b)
    let indexOfX=null
    for(let i=0; i<=arr.length; i++){
        if(arr[i]===x){
            indexOfX=i
        }
    }
    console.log(`index of ${x} is ${indexOfX}`)
}
targetEleIndex(arr1,4)