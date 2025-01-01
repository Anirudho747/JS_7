const prompt = require('prompt-sync')();

let str1 = prompt("Enter first string: ").trim().toLowerCase();
let str2 = prompt("Enter second string: ").trim().toLowerCase();
let shuffledStr = prompt("Enter Shuffled string: ").trim().toLowerCase();

let strCombined  = str1+str2;
console.log(strCombined);

if (strCombined.length < 2) {
    console.log("Please enter a valid input with at least two characters.");
} else {

    if(strCombined.length !== shuffledStr.length) {
        console.log("Not the Exact Shuffled String")
    }

    let sortedCombinedString = strCombined.split('').sort();

    let sortedShuffledString = shuffledStr.split('').sort();

    if(sortedCombinedString.join('') === sortedShuffledString.join(''))
    {
        console.log("Shuffled String")
    }
    else
    {
        console.log("Not the Exact Shuffled String")
    }
}