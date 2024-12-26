const prompt = require('prompt-sync')();

let str = prompt("Enter Possibly Palindrome String ");

if(str.length<2) {
    console.log("Please enter a Valid Input");
}
else {
    let str2 = str.toLowerCase();
    let arr = str2.split("");
    let isPalindrome = true;

    for (let i = 0; i < arr.length / 2; i++)
    {
            if (arr[i] !== arr[arr.length-1-i])
            {
                isPalindrome = false;
            }

        if (!(isPalindrome)) {
            break;
        }
    }

    if (isPalindrome)
        console.log("Its a Palindrome")
    else {
        console.log("Its not a Palindrome")
    }
}