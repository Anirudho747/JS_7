let a  = [1,2,2,3,3,4,4,4,5,5,5,5,6,6,6,6,6]; 
let a2 = [];
let cnt=1;

for(let i=0;i<a.length;i++)
{
    for(let j=i+1;j<a.length;j++)
    {
        if((a[i]===a[j]) && (!(a[j]===-987654321)))
        {
            cnt++;
        }
        a[j] = -98654321;
    }
    if((a[i]===-987654321))
    {
        continue;
    }
    else
    { console.log(`${a[i]} occurs ${cnt} number of times `); }
    cnt=1;
}