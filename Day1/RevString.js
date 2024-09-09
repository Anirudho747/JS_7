const prompt = require("prompt-sync")();

var str = prompt("Enter Your String");

console.log(str.length);

for(i=str.length-1;i>=0;i--)
{
    process.stdout.write(str[i]);
}