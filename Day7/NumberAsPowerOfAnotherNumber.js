const prompt = require('prompt-sync')();
let num  = parseInt(prompt("Please enter a valid non-negative integer which will serve as the base number "));
let multiple=parseInt(prompt("Please enter a valid non-negative integer  which will serve as the target "));


if (isNaN(num) || num < 0 || isNaN(multiple) || multiple < 1)
{
    console.log("Please enter a valid target number.");
}

let remainder=0,copycat = multiple;
while((multiple>1) && (remainder===0))
{
    remainder = multiple%num;
    multiple = multiple/num;
}

if(remainder === 0)
{
    console.log(copycat," is a power of ",num);
}
else
{
    console.log(copycat," is not a power of ",num);
}




