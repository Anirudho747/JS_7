let arr = [21,31,51,41,11,91,71];

let max = Math.max(...arr);

let min = Math.min(...arr);

console.log(max, min);

let max2 = Number.MIN_VALUE;
let min2 = Number.MAX_VALUE;


for(let i=0;i<arr.length;i++)
{
    if(arr[i]>max2)
    {
        max2 = arr[i];
    }

    if(arr[i]<min2)
    {
        min2 = arr[i];
    }
}

console.log(max2, min2);