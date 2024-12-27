const prompt = require('prompt-sync')();

let str = prompt("Enter a string: ").trim().toLowerCase();

let str2 = str.replace(/[^a-z]/g,"");

if (str2.length < 2)
{
    console.log("Please enter a valid input with at least two characters.");
}
else {
    let charCount = {};

    for(let char of str2)
    {
        charCount[char] = (charCount[char] || 0) +1;
    }
      // Displays Object
      //   console.log(charCount);

    //Displays Keys
    // console.log(Object.keys(charCount));

    //Displays Values
    // console.log(Object.values(charCount));

    //Displays in Key Value Format
    //console.log(Object.entries(charCount));

    //Also Displays in Key Value Format in more organized way
    const charCountObj = Object.entries(charCount);
    let refinedCount = (Object.fromEntries(charCountObj));
    console.log(refinedCount);
}