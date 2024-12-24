let a = [1,2,3,5,7,9];

let b = [2,4,6,7,10];

let intersection =[],union=[];

intersection = a.filter(i=>(b.includes(i) && !(intersection.includes(i))));

for(let i=0;i<b.length;i++)
{
    if(!(union.includes(b[i]))) union.push(b[i]);
}
for(let i=0;i<a.length;i++)
{
    if(!(union.includes(a[i]))) union.push(a[i]);
}

console.log(intersection);
console.log(union);

