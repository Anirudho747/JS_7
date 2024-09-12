const prompt = require("prompt-sync")();

let num2 = parseInt(prompt("Enter a number : "));
let num3 = num2;

console.log(num2);

console.log(`The number is ${num2}`);

let rev=0,rem=0;


while(num2>0)
{
     rem = Math.floor(num2%10);
     rev = Math.floor(rev*10+rem);
     console.log(rev);
     num2 = Math.floor(num2/10);
}

console.log(`after operation the number is ${rev}`);

if(num3===rev)
{
    console.log("Its Palindrome");
}
else
{
    console.log("Not Palindrome");
}