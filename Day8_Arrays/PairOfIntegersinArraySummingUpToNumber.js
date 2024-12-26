let arr = [1,3,5,7,9,11,13,15,17,19];

let target = 16;
let numbersFound = false;


for(let i=0;i<arr.length;i++)
{
    //numbersFound = false;
    for(let j = i+1; j<arr.length;j++)
    {
        if(arr[i]+arr[j]===target)
        {
            console.log(arr[i]," and ", arr[j]," combine to make ",target);
            numbersFound = true;
           // break;
        }
    }
    //if(numbersFound) break;
}
if(!numbersFound)
    console.log("No combination found");