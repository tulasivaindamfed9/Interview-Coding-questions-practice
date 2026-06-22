// Find the Longest Word and shortest word in a Sentence
const str = "i love you";
function findLongestAndShortestWord(str) {
  str = str.split(" ");
  console.log(str); //[ 'i', 'love', 'you' ]

  let maxword = str[0];
  let minword = str[0];

  for (word of str) {
    if (maxword.length < word.length) {
      maxword = word;
    }
    if (minword.length > word.length) {
      minword = word;
    }
  }
  console.log("the biggest word is : ", maxword);
  console.log("min word : ", minword);
}

findLongestAndShortestWord(str);

// output: the biggest word is :  love
// min word :  i

// -----------------------------------------------------------
// reverse the words in a string
const str2 = "i love Coding";
function reverseWords(str) {
  return (str = str.split("").reverse().join("")); //letters are also reversed here. output: gnidoC evol i
  //  return str=str.split(" ").reverse().join(" ")  //if we add space only words are reverese
  //output: coding love i
}
console.log(reverseWords(str2));
// output:  gnidoC evol i

// -------------------------------------------------------------------
// CAPITALIZE FIRST LETTER OF EACH WORD IN A SENTENCE
const sentence = "you are great";
function firstLetterCaptial(str) {
  str = str.split(" ");
  console.log(str); //[ 'you', 'are', 'great' ]
  let newSentence = [];
  for (each of str) {
    const eachWord = each[0].toUpperCase() + each.slice(1);
    //   // word[0].toUpperCase() gets the first letter and capitalizes it
    // word.slice(1) gets the remaining letters of the word
    newSentence.push(eachWord);
  }

  // instead of using for..of , we can use map
  let newwords = str.map((each) => {
    return each[0].toUpperCase() + each.slice(1);
  });

  return { newwords, newSentence };
}

console.log(firstLetterCaptial(sentence));

// output:  {
//   newwords: [ 'You', 'Are', 'Great' ],
//   newSentence: [ 'You', 'Are', 'Great' ]
// }

// ------------------------------------------------------------
// Count Uppercase and Lowercase Characters
// to find upper and lower case lettesrs , we use regex expressions /[A-Z]/g and /[a-z]/g
const str3 = "UMbreLla";
function countLetters(str) {
  const upperLetters = str.match(/[A-Z]/g);
  const lowerLetters = str.match(/[a-z]/g);

  return {
    uppersCase: upperLetters ? upperLetters.length : 0,
    lowerCase: lowerLetters ? lowerLetters.length : 0,
  };
}

console.log(countLetters(str3));

// -----------------------------------------------------------------
// Check if String Contains Only Digits

// The regular expression /^\d+$/
// checks the string from start to finish to ensure every single character is a number

const str4 = "434";
function checkDigitsOrNot(str) {
  // ^ means start of string
  // \d means any digit (0-9)
  // + means one or more times
  // $ means end of string
  return /^\d+$/.test(str); //returns true or false as output
}
console.log(checkDigitsOrNot(str4));

// ----------------------------------------------------------------
// String Compression
// example: aaabbcc → a3b2c2
const str5 = "monna";
function strCompress(str) {
  let charCount = {};
  for (i in str) {
    charCount[str[i]] = (charCount[str[i]] ? charCount[str[i]] : 0) + 1;
  }
  console.log(charCount);  //{ m: 1, o: 1, n: 2, a: 1 }

  // now we convert to a single string like  Output: "m1o1n2a1" by using for-in method
  let finalStr=""
  for (let key in charCount){
     finalStr = finalStr + key + charCount[key]
  }
  return finalStr
}

console.log(strCompress(str5))
