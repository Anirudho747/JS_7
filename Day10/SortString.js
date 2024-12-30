const prompt = require('prompt-sync')();

let str2 = prompt("Enter a string: ").trim().toLowerCase();

if (str2.length < 2) {
    console.log("Please enter a valid input with at least two characters.");
} else {
    let strArray = str2.replace(/[^a-z]/g, '').split('');

    for(let i=0;i<strArray.length;i++)
    {
        for(let j = i+1; j<strArray.length; j++)
        {
            if(strArray[i] > strArray[j])
            {
                let temp = strArray[i];
                strArray[i] = strArray[j];
                strArray[j] = temp;
            }
        }
    }

    let finalStr = strArray.join('');
    console.log(finalStr);
}