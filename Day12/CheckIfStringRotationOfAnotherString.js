const prompt = require('prompt-sync')();


let str1 = prompt("Enter first string: ").trim().toLowerCase();
let str2 = prompt("Enter second string: ").trim().toLowerCase();


if ((str2.length < 2) || (str1.length < 2))
{
    console.log("Please enter a valid input with at least two characters.");
}
else {

    if(str1.length !== str2.length)
    {
        console.log("Please enter a valid input with at least two characters.");
    }

    combinedString = str1.concat(str1);

    if(combinedString.includes(str2)){
        console.log("They are rotation of each other")
    }
    else {
        console.log("Not rotation of each other")
    }

}
