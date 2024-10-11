let a = [8,2,2,3,5,1,2,3,9,4,7,6];

let temp;

for(let i = 0;i<a.length;i++)
{
    for(let j=i+1;j<a.length;j++)
    {
        if(a[i]<a[j])
    {
        temp = a[i];
        a[i] = a[j];
        a[j] = temp;
    }
}
}

for(let i =0;i<a.length;i++)
{
        console.log(a[i]);
}