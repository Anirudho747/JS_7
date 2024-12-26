let array1  = [10,20,30,40,50];
let array2  = [30,40,10,50,20];

if(array1.length !== array2.length)
{
    console.log("Not Rotated arrays")
}
else {

    array1 = array1.concat(array1);
    console.log(array1);

    let str1 = array1.join(',');
    let str2 = array2.join(',');

    if(str1.includes(str2))
    {
        console.log("Rotated Array")
    }
    else
    {
        console.log("Not Rotated Array");
    }
}