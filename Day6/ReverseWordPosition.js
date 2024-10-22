let atm = "He said let there be light and there was light everywhere";
let atmArray = [];
atmArray  = atm.split(" ");

for(let i=atmArray.length-1;i>=0;i--)
{
    process.stdout.write(atmArray[i]+" ");
}