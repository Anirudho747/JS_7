let array1 = [2,1,2,0,1,2,2,1,0,2,1,0,0];
let validArray = true;
let temp,zeros = 0, ones = 0,twos = array1.length-1;

for(let j = 0; j < array1.length; j++)
{
    if((array1[j] !== 0) && (array1[j] !== 1) && (array1[j] !== 2))
    {
        console.log("Array must only include 0,1 or 2");
        validArray = false;
    }
    if (validArray === false)
        break;
}

if (validArray === true)
{
    while(ones <= twos)
    {
        if(array1[ones] === 0)
        {
            temp = array1[ones];
            array1[ones] = array1[zeros];
            array1[zeros] = temp;

            zeros++;
            ones++;
        }

        else if(array1[ones] === 2)
        {
            temp = array1[ones];
            array1[ones] = array1[twos];
            array1[twos] = temp;

            twos--;
        }

        else if(array1[ones] === 1)
        {
            ones++
        }
    }

    console.log(array1);
}