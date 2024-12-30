const prompt = require('prompt-sync')();

let str2 = prompt("Enter a string: ").trim().toLowerCase();

if (str2.length < 2) {
    console.log("Please enter a valid input with at least two characters.");
} else {
    let strArray = str2.replace(/[^a-z]/g,'').split('');
    strArray.sort();
    console.log(strArray.join(' '));

}