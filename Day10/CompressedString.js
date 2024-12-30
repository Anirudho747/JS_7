const prompt = require('prompt-sync')();

let str = prompt("Enter a string: ").trim().toLowerCase();

let str2 = str.replace(/[^a-z]/g,"");

if (str2.length < 2)
{
    console.log("Please enter a valid input with at least two characters.");
}
else {
    let count = 1;
    let str3={};

    for (let char of str2)
    {
        str3[char] = (str3[char] || 0) +1;
    }

    Object.keys(str3).forEach(key => {
        const value = str3[key];
        process.stdout.write(`${key}${value}`);
    });
}