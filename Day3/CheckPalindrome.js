const prompt = require("prompt-sync")();

let str = prompt('Enter a string to check for palindromes ');
console.log(str);

str2 = str.toLowerCase();

let flag =1;

for(let i=0;i<str2.length/2;i++)
{
        if(str2[i]!==str2[str2.length-1-i])
        flag = 0;
        break;
    
}

if(flag==0)
process.stdout.write("Not a Palindrome");
else
console.log("Its a Palindrome");
