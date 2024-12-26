const prompt  = require ('prompt-sync')();

let str = prompt("Please enter a String with more than 1 Characters ");
let str2 = "",temp ="",str3;

let arr = str.split("");

if(arr.length < 2)
{
        console.log("Please provide String with more than 1 characters ");
}
else
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;j++)
        {
                if(arr[i]===arr[j])
                    break;
                else
                {
                    tmp =arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                    console.log(arr.toString());
                    tmp =arr[i];
                    arr[i] = arr[j];
                    arr[j] = tmp;
                }
        }
        console.log(i);
    }
}
