const prompt  = require ('prompt-sync')();

var inputArray = [];
inputArray.size = 7;

for(let i=0;i<inputArray.size;i++)
{
    inputArray[i] = prompt("Enter value for "+(i+1)+" ");
}

let max = Math.max(...inputArray);

let min = Math.min(...inputArray);

console.log(max);

console.log(min);