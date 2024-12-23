const prompt  = require('prompt-sync')();

let num  = parseInt(prompt("Enter number for which you want Factorial "));
let factorial = 1;

    if (isNaN(num) || num < 0)
    {
    console.log("Please enter a valid non-negative integer.");
    }
    else {
        while (num > 1) {
            factorial = factorial * num;
            num--;
        }
    }
console.log(factorial);