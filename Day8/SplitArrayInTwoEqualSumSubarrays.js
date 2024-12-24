let array1  = [1, 2, 3, 5, 5, 6];

let sum=0
array1.map(element => {sum+=element});

console.log(sum);

if(sum%2 !== 0) console.log("Array Can't be split")
else
{
    let target = sum/2;
    let runningSum = 0;
    // Build the two subarrays manually
    let subarray1 = [];
    let subarray2 = [];

    // Traverse the array to find the split point
    for (let i = 0; i < array1.length; i++)
    {
        runningSum = runningSum+array1[i];

        if (runningSum === target) {

            for (let j = 0; j <= i; j++) {
                subarray1.push(array1[j]);
            }

            for (let k = i + 1; k < array1.length; k++) {
                subarray2.push(array1[k]);
            }

            console.log("Subarray 1:", subarray1);
            console.log("Subarray 2:", subarray2);
        }
    }
}