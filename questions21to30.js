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
