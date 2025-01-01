const prompt = require('prompt-sync')();

let str1 = prompt("Enter first string: ").trim().toLowerCase();
let str2 = prompt("Enter second string: ").trim().toLowerCase();
let shuffledStr = prompt("Enter shuffled string: ").trim().toLowerCase();

if (shuffledStr.length !== str1.length + str2.length) {
    console.log("Not a valid shuffled string (length mismatch).");
} else {
    let i = 0, j = 0, k = 0;

    while (k < shuffledStr.length) {
        if (i < str1.length && shuffledStr[k] === str1[i]) {
            i++; // Match with str1
        } else if (j < str2.length && shuffledStr[k] === str2[j]) {
            j++; // Match with str2
        } else {
            console.log("Not a valid shuffled string.");
            return;
        }
        k++; // Move to the next character in shuffledStr
    }

    if (i === str1.length && j === str2.length) {
        console.log("Valid shuffled string!");
    } else {
        console.log("Not a valid shuffled string.");
    }
}
