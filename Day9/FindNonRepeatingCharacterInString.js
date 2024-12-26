const prompt = require('prompt-sync')();

let str2 = prompt("Enter a string: ").trim();

if (str2.length < 2) {
    console.log("Please enter a valid input with at least two characters.");
} else {
    let str = str2.toLowerCase();
    let charCount = {};

    // First pass: Count occurrences of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Second pass: Find the first non-repeating character
    let found = false;
    for (let char of str) {
        if (charCount[char] === 1) {
            console.log(`${char} is the first non-repeating character.`);
            found = true;
            break;
        }
    }

    if (!found) {
        console.log("There are no non-repeating characters in the string.");
    }
}
