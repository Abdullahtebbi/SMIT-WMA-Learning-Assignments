
//                 Write JavaScript functions to solve the following string problems:



// (a) Return the length of a given string.
// Solution :-
/*
let str = "Hellow world";

console.log(str.length);
*/

//           <-------------------------------------------------------------------------->              //

// (b) Concatenate two strings together.
// Solution :-
/*
let str1 = "Hellow";
let str2 = " world";

console.log(str1.concat(str2));
*/

//           <-------------------------------------------------------------------------->              //

// (c) Determine if a given string is empty.
// Solution :-
/*
let str = "Hellow world"
// let str = "";
let size = str.length;
if(size === ""){
    console.log("String is empty");
}else{
    console.log("String is not empty");
} 
*/

//           <-------------------------------------------------------------------------->              //

// (d) Count the number of vowels in a string.
//Solution :-
/*
let str = "The quick brown fox jumps over the lazy dog";
str = str.toLowerCase();
let count = 0;
for(let i of str){
    if(i === "a" || i === "e" || i === "i" || i === "o" || i === "u"){
       count++;
    }
}
console.log(`${count} vowels`);
*/

//           <-------------------------------------------------------------------------->              //

// (e) Reverse a given string.
// Solution :-
/*
let str = "Hello world!";
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}

console.log(`Original string: ${str}`);
console.log(`Reversed string: ${reversedStr}`);
*/

//           <-------------------------------------------------------------------------->              //

// (f) Check if a string is a palindrome.
// Solution :-
/*
let str = prompt("Enter a Palindrome");
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}

if(str == reversedStr){
    alert(`${str}This is a palindrome`)
}else{
    alert(`"${str}" This is not a palindrome`)
}
*/

//           <-------------------------------------------------------------------------->              //

// (g) Convert a string to uppercase.
//Solution :-
/*
let str = "hellow world";
console.log(str.toUpperCase());
*/

//           <-------------------------------------------------------------------------->              //

// (h) Find the first occurrence of a given character in a string.
// Solution :-
/*
let string = "hello world";
let character = "o";
let index = -1;

for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
        index = i;
        break;
    }
}

if (index !== -1) {
    console.log(`The first occurrence of ${character} in ${string} is at index ${index}`);
} else {
    console.log(`The character ${character} is not found in the string ${string}`);
}
*/


//           <-------------------------------------------------------------------------->              //


// (i) Replace all occurrences of a given character in a string with another character.
// Solution
/*
let originalString = "hello world";
let targerCharacter = "l";
let toReplaceCharacter = "x";
let modifyString = "";

for (let i = 0; i < originalString.length; i++){
    if(originalString[i] === targerCharacter){
      modifyString += toReplaceCharacter;   
    }else{
        modifyString += originalString[i];
    }
}

console.log(`original string ${originalString}`);
console.log(`modify string ${modifyString}`);
*/


//           <-------------------------------------------------------------------------->              //


// (j) Trim leading and trailing whitespace from a string.
// Solution :-
/*
let str = "             hello world               ";
console.log(str.trim());
*/

//           <-------------------------------------------------------------------------->              //


// (k) Count the number of words in a string.
// Solution :-
/*
let str = "Hello, how are you doing today?";
let  wordsStr = "";

for(let i = 0; i < str.length; i++){
    if(str[i].toLowerCase() >= "a" && str[i].toLowerCase() <= "z"){
     wordsStr += str[i];
    }
      
}

countWordsStr = wordsStr.length;
console.log(countWordsStr);
*/


//          <-------------------------------------------------------------------------->               //


// (l) Check if a string contains only numeric characters.
// Solution :-
/*
let str = "4 75937 0985937 8208028";
let containsOnlyNumeric = true; 

for (let i = 0; i < str.length; i++) {
    if (!(str[i] >= "0" && str[i] <= "9") && str[i] !== " ") {
        containsOnlyNumeric = false; 
        break; 
       }
}

console.log(containsOnlyNumeric); 
*/


//          <-------------------------------------------------------------------------->               //


// (m) Check if a string is a valid email address.
// Solution :-
/*
let email = "abdullahtebbi@gmail.com";
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (emailRegex.test(email)) {
    console.log(`${email} is a valid email address.`);
} else {
    console.log(`${email} is not a valid email address.`);
}
*/


//          <-------------------------------------------------------------------------->               //


// (n) Extract the domain name from a URL string.
// Solution 
/*
let userInput = "abdullah";
let domainStartCar = "https://www.";
let domainEndChar = ".com/page";

let finalDomain = domainStartCar.concat(userInput,domainEndChar);
console.log(finalDomain);
*/


//          <-------------------------------------------------------------------------->               //


// (o) Convert a string into title case (the first lettter of each word capitalized).
// Solution :-
/*
let inputString = "the quick brown fox jumps over the lazy dog";
let words = inputString.split(" ");

for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
}

let titleCaseString = words.join(' ');

console.log(titleCaseString); 
*/


//          <-------------------------------------------------------------------------->               //


// (p) Remove all non-alphabetic characters from a string.
// Solution :-
/*
let str = "Shjfhkj4yryjhjfha&^%(*JKJKK";
let nonAlphabeticStr = "";

for (let i = 0; i < str.length; i++) {
    if((str[i] >= "a" || str[i] >= "A") && (str[i] <= "z" || str[i] <= "Z")){
      nonAlphabeticStr += str[i];
    }
}

console.log(nonAlphabeticStr);
*/


//          <-------------------------------------------------------------------------->               //


// (q) Check if a string is a valid palindrome permutation (ignoring spaces).
// Solution :-
/*
let palindromeStr = "radar";
let reverseStr = "";

for(let i = palindromeStr.length -1; i >= 0; i--){
    reverseStr += palindromeStr[i];
}

if(reverseStr === palindromeStr){
    console.log(`${reverseStr} is a palindrome`);
}else{
    console.log(`${reverseStr} is not a palindrome`);
}
*/


//          <-------------------------------------------------------------------------->               //


// (r) Check if a string is an anagram of another string.
// Solution :-
/*
let str1 = "listen";
let str2 = "silent";

const cleanString = str => str.replace(/\s/g, "").toLowerCase();

str1 = cleanString(str1);
str2 = cleanString(str2);

if (str1.length !== str2.length) {
    console.log("Not anagrams");
} else {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    if (sortedStr1 === sortedStr2) {
        console.log("Anagrams");
    } else {
        console.log("Not anagrams");
    }
}
*/


//          <-------------------------------------------------------------------------->               //


// (s) Find the longest word in a string.
// Solution :-
/*
let str = "The quick brown fox jumps over the lazy dog";
let words = str.split(" ");
let longest = '';

for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
        longest = words[i];
    }
}

console.log(`Longest word: ${longest}`);
 */


//          <-------------------------------------------------------------------------->               //



// (t) Perform string compression by replacing repeated characters with the character followed by the count.
// Solution :-
/*
let str = "aabbbcccddd";
let compressed = '';
let count = 1;

for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
        count++;
    } else {
        compressed += str[i] + count;
        count = 1;
    }
}

let compressedString = compressed.length < str.length ? compressed : str;
console.log(`Compressed string: ${compressedString}`);
*/


//          <-------------------------------------------------------------------------->               //
