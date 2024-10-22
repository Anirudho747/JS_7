let arr = [1,2,2,3,3,3,4,4,4,4,5,5,5,5,5];

let barr = [];

for(let i=0;i<arr.length;i++)
{
    if(!(barr.includes(arr[i]))){
        barr.push(arr[i]);
    }
}

for(let i=0;i<barr.length;i++)
{
console.log(barr[i]);
}