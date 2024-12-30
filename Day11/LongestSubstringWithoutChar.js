const prompt = require('prompt-sync')();

let strOrig = prompt("Enter a string: ").trim().toLowerCase();

// Remove non-alphabetic characters
let str = strOrig.replace(/[^a-z]/g, "");

if (str.length < 2) {
    console.log("Please enter a valid input with at least two characters.");
} else {
    let lastSeen = {}; // Track the last seen index of each character
    let maxLength = 0; // Maximum length of substring
    let newStr = ""; // Longest substring between repeating characters

    for (let i = 0; i < str.length; i++) {
        if (lastSeen[str[i]] !== undefined) {
            // Length between repeating characters
            let length = i - lastSeen[str[i]] - 1;
            if (length > maxLength) {
                maxLength = length;
                newStr = str.substring(lastSeen[str[i]] + 1, i);
            }
        }
        // Update the last seen index
        lastSeen[str[i]] = i;
    }

    if (newStr) {
        console.log("Longest substring between repeating characters:", newStr);
    } else {
        console.log("No repeating characters found.");
    }
}
