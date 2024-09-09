const prompt = require('prompt-sync')();

var inputArray = [];
inputArray.size = 5;

for(let i=0;i<inputArray.size;i++)
{
    inputArray[i] = prompt("Enter number for "+i+1+" ");
}

let sum = inputArray.map(e=>parseInt(e)).reduce((sum,i)=>sum+i);
console.log(sum);