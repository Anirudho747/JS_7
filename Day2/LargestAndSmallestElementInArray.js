const prompt = require("prompt-sync")();

var inputArray = [];
var size = 5; //Maximum Array size

for(let i=0; i<size; i++) {
	//Taking Input from user
	inputArray[i] = prompt('Enter Element ' + (i+1)+' ');
}

let largest = Number.MIN_VALUE;
let smallest = Number.MAX_VALUE;

for(let i=0; i<size; i++) {
	if(inputArray[i]>largest)
      largest = inputArray[i];

    if(inputArray[i]<smallest){
        smallest = inputArray[i];
    }
}

console.log(smallest);
console.log(largest);
