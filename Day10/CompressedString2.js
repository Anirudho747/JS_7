const prompt = require('prompt-sync')();

let str = prompt("Enter a string: ").trim().toLowerCase();

if (str.length < 2) {
    console.log("Please enter a valid input with at least two characters.");
} else {
    let compressed = '';
    let count = 1;

    for (let i = 1; i <= str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            compressed += str[i - 1] + count;
            count = 1; // Reset count for the next character
        }
    }

    console.log("Compressed string:", compressed);
}
