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



// ---------------------------------------------------------------------------------------
// DEBOUNCE: 
// Debounce is used in search bar api calls, to limit the no. of items displayed in a page.
//  Using this function increased the performance of our app by reducing the no. of api calls
//  made to the server.

// eg: when a user types in search bar and the timer started.
// when he interrupts the timer by typing somthing, the timer will start again. If time completes,
// then api call is made
function debounce(fn,delay){
    let timeToDelay;   //this var will store the time to delay a function or api call
    return function(...args){
        clearTimeout(timeToDelay)  //clear the previous timer

        //if user types again ,we clear the previous timer and start timer again
        //to call the function after the specified delay
        timeToDelay=setTimeout(()=>{
            fn(...args)  //call the function after the delay
        },delay)

    }
}

// function to be delayed-- the fn
function search(args){
    console.log(`Searching for ${args}`)
}

const debouncedSearch=debounce(search,5000)  //delay of 5 sec
debouncedSearch("practicing js concepts")  //this will be called after 5 sec


// ---------------------------------------------------------------
// THROTTLING
// It is a function used to call an api only after specific time
// ex: if user want to send a chat msg for the first time, then to send msg again he should wait
// for 5 sec to send the msg again. This is throttling
function throttle(fn,delay){
    let lastCalled=0

    return function(...args){
        const now=Date.now()  //get the current time in milliseconds

        // check if time elapsed since last call is greater than the delay
        if(now-lastCalled<delay){
            return
        }
        lastCalled=now  //update the last called time
        fn(...args)  //call the function
    }
}
throttleSearch=throttle(search,2000)  //delay of 2 sec
throttleSearch("throttling search")  //this will be called after 2 sec


// ---------------------------------------------------------------
// Deep Copy Object
// Create a completely new copy.
// Nested objects should also be copied.
const obj1={
    name: "Tulasi",
    details:{
        age:34,
        isMarried:true
    }
}
function deepCopy(obj){
    const newObj=structuredClone(obj)  //this method creates a deep copy of the object
    // const newArr=structuredClone(arr)  //this method creates a deep copy of the array
    newObj.details.age=35  //change the age in newObj
    newObj.name="Tulasi Sai"  //change the name in newObj
    return {obj,newObj}  //return both original and new object
}
console.log(deepCopy(obj1)) 
 //output: { obj: { name: 'Tulasi', details: { age: 34, isMarried: true } },
//   newObj: { name: 'Tulasi Sai', details: { age: 35, isMarried: true } }
// }

// in deep copy: if new obj nested changed, then old nested values don't change
// in shallow copy: if new obj nested changed, then old nested values also change

// ---------------------------------------------------------------
// Shallow copy
function shallowCopy(obj){
    const newObj={...obj}  //this method creates a shallow copy of the object
    // const newArr=[...arr]  //this method creates a shallow copy of the array
    newObj.details.age=50  //change the age in newObj
    newObj.name="vaindam"  //change the name in newObj
    return {obj,newObj}  //return both original and new object
}
console.log(shallowCopy(obj1))  
//output:{
// obj: { name: 'Tulasi', details: { age: 50, isMarried: true } },
//   newObj: { name: 'vaindam', details: { age: 50, isMarried: true } }
// }





// -------------------------------------------------------------
// Group Array Objects by Property
const employees = [
    { name: "Alice", role: "Developer" },
    { name: "Bob", role: "Designer" },
    { name: "Charlie", role: "Developer" },
    { name: "David", role: "Manager" }
];
// now we want to group the employees by their role

// modern way Object.groupBy() method 
function groupByRole(arr){
  const groupedObj=Object.groupBy(arr,emp=>emp.role)
  console.log(groupedObj)
}
groupByRole(employees)

// traditional way using reduce method
function groupByRoleTraditional(arr){
    const groupedObj=arr.reduce((acc,current)=>{
        const key=current.role
        // if key not present in accumulator, then create an array for that key
        if(!acc[key]){
            acc[key]=[]
        }
        acc[key].push(current)  //push the current employee to the array of that role
        return acc
    },{})
    console.log(groupedObj)
}
groupByRoleTraditional(employees)
// output:
/* 
{
  Developer: [
    { name: 'Alice', role: 'Developer' },
    { name: 'Charlie', role: 'Developer' }
  ],
  Designer: [ { name: 'Bob', role: 'Designer' } ],
  Manager: [ { name: 'David', role: 'Manager' } ]
}
*/


// -------------------------------------------------------------
// rest operator: collects all elements from user
function rest(...nums){
    const result=nums.reduce((acc,curr)=>{
        return acc+curr
    })
    console.log(result)
}
rest(1,45,3)
// output: 49


// ----------------------------------------------------------
// spread operator
// it spreads all elements in an array or object
const arr2=[1,2,3]
const arr3=["apple"]
function spread(arr2,arr3){
    const newArr=[...arr2,...arr3]
    return newArr
}
console.log(spread(arr2,arr3))
// output: [1, 2, 3, 'apple']

// ==------------------------------------------------------------
//Memoization: it is a technique used for performance optimization. It stores the results of 
// expensive function calls and returns the cached result when the same inputs occur again.
// Approach:
// Store previously computed results.
// Return cached value if available.
function calculate(a,b){
    const result=(a+b)*10000000
    return result
}
// if we call calculate(2,3) again and again, it will take time to compute the result each time.
// To avoid this, we can use memoization to store the result of calculate(2,3) and return it when called again.
function memoize(a,b,calculate){
    let catche={}  //object to store the cached results

    // let's define a key, so that we can check in catche obj. if same key, return the cached result
    const key=a+","+b  //key will be a string of a and b
    if(catche[key]){
        return catche[key]  
    }
    // if not in cache, compute the result and store it in cache
    const result=calculate(a,b)
    catche[key]=result  
    return result  

}

console.log(memoize(2,3,calculate))  
// output: 50000000
// here "calulate" fun is called inside "memoize" fun, so that time is saved


// -------------------------------------------------------------
// Map function
// return a new array by multiplying each ele with 7 using map fun
const arr4=[1,2,3,4,5]
function usingMap(arr){
    const newArr=arr.map((each)=>each*7)
    console.log(newArr)
}
usingMap(arr4)
// output: [ 7, 14, 21, 28, 35 ]



// -------------------------------------------------------------
// Filter function
// using filter fun  return a new array with only even numbers
const arr5=[1,2,3,4,5,6,7,8,9]
function usingFilter(arr){
    const newArr=arr.filter((each)=>each%2===0)
    console.log(newArr)
}
usingFilter(arr5)
// output: [ 2, 4, 6, 8 ]



// -------------------------------------------------------------

