// find the middle digit of a number
function findMiddleDigit(n) {
    const strOfn = n.toString();
    const lengthofn = strOfn.length;
    const middlenum=Math.floor(lengthofn/2);
    if(lengthofn % 2 ===0){
        console.log("The number has no middle digit.");
    }
    else{
        console.log("middle digit is : "+strOfn[middlenum]);
    }

}


const number = 12345
findMiddleDigit(number);

// ____________________________________

// reverse a string.
// if we want to reverse a number then do "word.toString()" and pass it to the function.
const word="Tulasi"
function reverseString(str) {
    let reversed = '';
     for (let i =str.length-1;i>=0;i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString(word));


// ------------------------------------------------------
// check if a string is a palindrome or not.
const str1 = "madam";
function isPalindrome(str) {
    // const reversedStr=[...str].reverse().join('')
    let reversedStr=""
    for (let i=str.length-1;i>=0;i--){
        reversedStr=reversedStr+str[i]
    }

    if(str === reversedStr){
        console.log(str+" is a palindrome.");
    }else{
        console.log(str+" is not a palindrome.");
    }

}
isPalindrome(str1);


// ------------------------------------------------------
// sum of digits of a number.
const num1=12345;
function sumOfDigits(num){
    let sum=0
    num=num.toString()
    for (let i=0; i<num.length;i++){
        sum=sum + Number(num.toString()[i])
    }
    return sum;
}
console.log(sumOfDigits(num1));

// ------------------------------------------------------
// find the product of digits of a number.
 const num2=123
 function productOfDigits(num){
    let product=1
    num=num.toString()
    for (let i=0; i<num.length;i++){
        product= product *Number(num[i])

    }
    return product
 }

 console.log(productOfDigits(num2));



//  ------------------------------------------------------
// count the number of digits in a number.
 const num3=97674
 function countDigits(num){
    let count=0
    num=num.toString()
    for (let i=0; i<num.length; i++){
        count=count+1
    }
    return count
 }
 console.log(countDigits(num3));


//  ------------------------------------------------------
// find the largest digit in a number.
// find smalest digit in a number.
const num4=3876
function findLargestSmallest(num){
    let largest=0
    let smallest=9 // as 9 is the largest single digit .
    num=num.toString()
    for (let i=0; i<num.length; i++){
        if(num[i]>largest){
            largest=num[i]
        }
        if(num[i]<smallest){
            smallest=num[i]
        }
    }
    return { largest, smallest };
}
console.log(findLargestSmallest(num4));


// ------------------------------------------------------
// check if a number is an Armstrong number or not.

// 3-Digit Example (371):It has 3 digits.
// Raise each digit to the power of 3: 3³ + 7³ + 1³
// Calculate: 27 + 343 + 1 = 371
// Result: It matches the original number, so 371 is an Armstrong number
 const num5=987
 function findArmstrong(num){
    let sum=0
    num=num.toString()  // convert number to string to get the length of the number.
    for (let i=0; i<num.length; i++){
        addNum=Number(num[i])  // convert string to number to perform the power operation.
        sum=sum + addNum**num.length
    }
    if(sum === Number(num)){
        console.log(num+" is an Armstrong number.");
    }else{
        console.log(num+" is not an Armstrong number.");
    }
 }

 findArmstrong(num5);
