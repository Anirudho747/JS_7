const prompt = require('prompt-sync')();

let strOrig = prompt("Enter a string: ").trim().toLowerCase();

// Remove non-alphabetic characters
let str = strOrig.replace(/[^a-z]/g, "");

if (str.length < 2) {
    console.log("Please enter a valid input with at least two characters.");
} else {
    let strFinal = "";

    for(let i=0;i<str.length;i++)
    {
        if(!(strFinal.includes(str[i]))){
            strFinal = strFinal+str[i];
        }
    }

    console.log(strFinal);

}