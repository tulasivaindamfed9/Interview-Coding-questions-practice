// check if a number is a prime number or not.
const num6=29

 let isPrime=true
function findPrime(num){
    for (let i=2;i<num;i++){
      if(num % i === 0){
         isPrime = false; // We found a divisor, it is definitely NOT prime
            break;           // Stop checking immediately, no need to waste time
      }

    }


    if(isPrime){
        console.log(num+" is a prime number.");
    }else{
        console.log(num+" is not a prime number.");
    }
}
 findPrime(num6);


//  ------------------------------------------------------


// printing prime numbers up to a given limit
// The inner loop checks for factors starting from 2 up to the square root of the number (Math.sqrt(num)).
// Why square root?
//  If a number has a factor larger than its square root, it must also have a matching factor smaller than
//  its square root. 
n=5
function printPrimeNumbers(limit) {
    let count=0
  for (i=2;i<=limit;i++){
    let isPrime=true
    
    for (j=2; j<=Math.sqrt(i); j++){
        if(i %j ===0){
            isPrime=false
            break;
        }
    }
    if(isPrime){
        count++
        console.log(i);
    }
  }
  console.log("Total prime numbers are " + count);
}
printPrimeNumbers(n);


// ------------------------------------------------------
// print fibonacci series up to a given limit.
// The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones,
//  usually starting with 0 and 1
// example: 0,1,1,2,3,5,8

const limit=10
// here limit=10 tells the loop: "Keep generating numbers, but the moment the next Fibonacci number is greater than 10,
//  stop immediately."
function printFibonacci(limit){
    let a=0
    let b=1
    let fibArray=[]
    while(a<=limit){
        fibArray.push(a)
        let temp=a
        a=b
        b=temp+b
    }

    return fibArray
}
console.log(printFibonacci(limit));


// ------------------------------------------------------
// find greatest common divisor (GCD)(or HCF--highest common factor) of two numbers

// HOW IT WORKS (Euclidean Algorithm):
//  * Instead of checking every possible divisor, it uses the remainder operator (%).
//  * 1. Continually finds the remainder of 'a' divided by 'b' (a % b).
//  * 2. Shifts variables forward: 'a' takes the value of 'b', and 'b' takes the remainder.
//  * 3. Repeats this cycle until 'b' hits 0. 
//  * 4. When 'b' is 0, 'a' contains the highest common factor.
 
//  * Example: findGCD(48, 18)
//  * - Step 1: 48 % 18 = 12  ->  (a=18, b=12)
//  * - Step 2: 18 % 12 = 6   ->  (a=12, b=6)
//  * - Step 3: 12 % 6  = 0   ->  (a=6,  b=0) -> Loop stops, returns 6.
 
let a=13
let b=8
function findGCD(a,b){
    while(b !==0){
       let remainder=a % b
       a=b
       b=remainder
    }
    return a
}
console.log(findGCD(a,b));


// ------------------------------------------------------
// find the least common multiple (LCM) of two numbers
// lcm is calculated using formula
// LCM(a, b) = (a * b) / GCD(a, b)

function findLCM(a,b){
    return (a * b) / findGCD(a,b)
}
console.log(findLCM(5,10));

// there is another way to find LCM without using GCD
function findLCMWithoutGCD(a,b){
     if (a === 0 || b === 0) return 0;

    // 1. Find which number is larger to start with the best guess
    let max=a>b ? a : b
    let lcm=max

     // 2. Keep increasing the value until it is divisible by both 'a' and 'b'
    while(lcm % a !==0 || lcm % b !==0){
        lcm = lcm + max
    }
    return lcm
}
console.log(findLCMWithoutGCD(4,6));


// ------------------------------------------------------
// PERFECT NUMBER:
// if you list all the numbers that divide into it cleanly (except itself) and add them up,
//  you get the original number.
// example: 6 is a perfect number because its divisors are 1, 2, and 3, and 1 + 2 + 3 = 6.
let num7=5
function perfectNumber(num){
    let sum=0
    for(let i=1; i<num; i++){
        if(num % i ===0){
            sum=sum+i
        }
    }

    if(sum === num){
        console.log(num+" is a perfect number.");
    }else{
        console.log(num+" is not a perfect number.");
    }
}
perfectNumber(num7);


// ------------------------------------------------------
// find if a number is a strong number or not.
// A strong number is a number whose sum of the factorial of its digits is equal to the original number.
const num8=123
function strongNumber(num){
    let sum=0
    
    num=num.toString()
    for (let i=0; i<num.length; i++){
        let eachDigit=Number(num[i])
        let factorial=1
        for(let j=1; j<=eachDigit; j++){
            factorial=factorial*j
        }
        sum=sum+factorial
    }

// now check if sum of factorials is equal to the original number
    if(sum === Number(num)){
        console.log(num+" is a strong number.");
    }else{
        console.log(num+" is not a strong number.");
    }

}
strongNumber(145);


// ------------------------------------------------------
// convert decimal number to binary number
// To convert a decimal number (base 10) to a binary number (base 2), 
// you repeatedly divide the number by 2 and keep track of the remainders
/*
Step-by-Step Example: Converting 13 to Binary
13 ÷ 2 = 6 with a remainder of 1 (Least Significant Bit)
6 ÷ 2 = 3 with a remainder of 0
3 ÷ 2 = 1 with a remainder of 1
1 ÷ 2 = 0 with a remainder of 1 (Most Significant Bit) 

Reading the remainders from bottom to top gives 1101. So, 13 in decimal is 1101 in binary.
*/

const decimalNumber=13
function decimalNum(num){
    let binaryNumber=""
    while(num > 0){
        let remainder=num % 2  //gives remainder 1
        binaryNumber=remainder+binaryNumber // prepend the remainder to the binary string
        num=Math.floor(num / 2) // gives quotient 6
    }
    console.log(`Binary representation of ${decimalNumber} is ${binaryNumber}`);
}
decimalNum(decimalNumber);


// ------------------------------------------------------
// convert binary number to decimal number
// To convert a binary number (base 2) to a decimal number (base 10), 
// you multiply each bit by 2 raised to the power of its position index, starting from 0 on the right.
// example: binary 1101
// 1 * 2^3 = 8
// 1 * 2^2 = 4
// 0 * 2^1 = 0
// 1 * 2^0 = 1
// Sum = 8 + 4 + 0 + 1 = 13

const binaryNumber=1101
function binaryNum(num){
    let decimalNumber=0
    let numStr=num.toString()
    for(let i=0; i<numStr.length; i++){
        let bit=Number(numStr[numStr.length - 1 - i]) // get the bit from right to left
        decimalNumber += bit * Math.pow(2, i) // multiply by 2 raised to the power of its position index
    }
    console.log(`Decimal representation of ${binaryNumber} is ${decimalNumber}`);
}
binaryNum(binaryNumber);


// ------------------------------------------------------
// find he power of a number using recursion
// The function power(base, exponent) calculates base raised to the power of exponent recursively.
// 1. Base Case: If the exponent is 0, return 1 (since any number raised to the power of 0 is 1).
// 2. Recursive Case: Multiply the base by the result of power(base, exponent - 1).
// This continues until the exponent reaches 0, at which point the recursion unwinds and returns the final result.
const base=2
const exponent=3
// direct method
// console.log(base**exponent);
function power(base, exponent) {
    if (exponent === 0) {
        return 1; // Base case: any number raised to the power of 0 is 1
    }
    return base * power(base, exponent - 1); // Recursive case
}
console.log(` ${base} raised to the power of ${exponent} is ${power(base, exponent)}`);