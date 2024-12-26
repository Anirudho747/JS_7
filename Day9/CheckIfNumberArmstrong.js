const prompt = require('prompt-sync')();

let numb = parseInt(prompt("Enter Possibly Armstrong number "));

if((isNaN(numb)) || (numb < 1)){
    console.log("Please enter a Valid Input");
}
else
{
    let pw = numb.toString().length;
    console.log(pw);
    let sum = 0,copycat = numb;

    while(numb>0)
    {
        sum = sum+Math.pow(Math.floor(numb%10),pw);
        numb = Math.floor(numb/10);
    }

    console.log(sum)
}

