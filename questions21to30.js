// print the number of vowels in a string
const str1="om"
function vowelCount(str){
    let count=0
    str=str.toLowerCase()
      const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let i=0; i<str.length; i++){
         // .includes() checks for the character value, not the array index
        if(vowels.includes(str[i])){
            count=count+1
        }
    }
    return count
}

console.log(`no. of vowels in ${str1} is ${vowelCount(str1)}`);


//  ------------------------------------------------------
// count the number of consonants in a string
const str2="Ttulasi"
function consonantCount(str){
    let count=0
    str=str.toLowerCase()
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // to display consonants
    // let conso=[]  //to display all consonants, including duplicates
    // let uniqueConso=new Set()  // to display unique consonants
    for (let i=0; i<str.length; i++){
        if(!vowels.includes(str[i])){
            count=count+1
            // conso.push(str[i])
            // uniqueConso.add(str[i])
        }
    }
    return count
    // return { count, conso , uniqueConso: Array.from(uniqueConso) }  // convert Set to Array for better display
}

console.log(`no. of consonants in ${str2} is ${consonantCount(str2)}`);


//  ------------------------------------------------------
// count the number of words in a sentence

const str3="Hello World"
// trim() removes whitespace from both ends of a string, but not in between words
// // \s matches any whitespace (space, tab, newline)
// + means "one or more" so multiple spaces count as a single split
const words = str3.trim().split(/\s+/);
const wordCount = words.length;
console.log(`no. of words in "${str3}" is ${wordCount}`);


// ------------------------------------------------------
// count the number of characters in a string
const str4="aman taman" 
function countCharacters(str){
    let charcount={}
    for (i in str){
        // if str has empty spaces, we can skip them by using the following condition
        // if(str[i]===" "){
        //     continue
        // }
        charcount[str[i]]= (charcount[str[i]] ? charcount[str[i]] : 0) + 1
    }
    return charcount
}

console.log("character count in string is ", countCharacters(str4));



// ------------------------------------------------------
// "remove duplicate characters from string" OR "display only unq chars of a string"
const str5="haaram"
function removeDuplicateCharacters(str){
    return [...new Set(str)].join('');  
    //converting given str to set as sets store only unique values and 
    // using join method we are again converting set to str
}

console.log("string after removing duplicates is ", removeDuplicateCharacters(str5));


// ----------------------------------------------
// display the first non repeating character and first repeating character
const str6="taught"    //{ t: 2, a: 1, u: 1, g: 1, h: 1 }
function firstNonRepeatChar(str){
    let charCount={}
    for (i in str){
       charCount[str[i]]=(charCount[str[i]] ||0) + 1
    }
    console.log(charCount)
    // loop through each key -value pair in the charCount obj to find if any key has count 1, 
    // then break and display that char
    let firstNonRepeat=""
    let firstRepeat=""
    for (key in charCount){
        if(charCount[key]===1){
            firstNonRepeat=key
            break
        }
        if(charCount[key]===2){
            firstRepeat=key
        }
    }
    console.log("first non repeating char in given str is : ",firstNonRepeat)
    console.log("first repeating char is: ",firstRepeat)
}

firstNonRepeatChar(str6)



// ------------------------------------------------------
// check whether two strings are ANAGRAMS OR NOT
// An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// using all the original letters exactly once.

// To check if two strings are anagrams, you can split them into arrays, sort the letters alphabetically,
//  and join them back into strings to see if they match
const str7="listen"
const str8="silent"
function checkAnagram(a,b){
    a=[...a].sort().join("")
    b=[...b].sort().join("")
    if(a===b){console.log("Given strings are anagrams")}
    else{console.log("Not amagrams")}
}

checkAnagram(str7,str8)