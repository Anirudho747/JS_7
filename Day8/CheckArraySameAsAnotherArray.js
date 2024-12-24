let array1  = [10,20,30,40,50];
let array2  = [40,50,30,10,20];
let sameArray = true;

if(array1.length !== array2.length)
{
    sameArray = false;
    console.log("Not Same arrays")
}
else {
    array1.sort((a, b) => {
        return a - b
    });
    console.log(array1);
    array2.sort((a, b) => {
        return a - b
    });
    console.log(array2);

    for (let i = 0; i < array1.length; i++)
    {
        if(!(array1[i] === array2[i]))
        {
            sameArray = false;
        }
        if(sameArray === false) break;
    }


    if(sameArray === true)
    {
        console.log("Same Arrays")
    }
    else
    {
        console.log("Not Same Arrays")
    }


}