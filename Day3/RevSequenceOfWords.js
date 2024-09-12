let str = "I am learning Javascript";

let arr = str.split(" ");

console.log(arr);

for(let i=arr.length-1;i>=0;i--)
{
    process.stdout.write(arr[i]+" ");
}