let a  = [1,2,2,3,3,4,4,4,5,5,5,5,6,6,6,6,6];
let a2 = [];

// for(let i=0;i<a.length;i++)
// {
// console.log(a[i]);
// }

for(let j=0;j<a.length-1;j++)
{
    if(a2.includes(a[j]))
    {
        continue;
    }
    else{
        a2.push(a[j])
    }
}

for(let i=0;i<a2.length;i++)
{
console.log(a2[i]);
}