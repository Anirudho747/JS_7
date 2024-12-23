const prompt = require('prompt-sync')();

let num = parseInt(prompt("Enter number which you want to check    "));
let sumOfPrimenumbers = false;

    if((num<2))
    {
        console.log("Please enter a valid numeric number.");
    }
   else {
       for(let i=2;i<num/2;i++)
       {
           if((checkIfPrimeNumber(i)===true) && (checkIfPrimeNumber(num-i)===true))
               {
                   console.log(num,"is a sum of",i," and ",(num-i));
                   sumOfPrimenumbers = true;
               }
       }

        if(sumOfPrimenumbers===false)
        {
            console.log("The number is not a sum of prime numbers");
        }
    }

   function checkIfPrimeNumber(n)
   {
       if (n < 2) return false;
       isPrime = true;
       for(let i=2;i <= Math.sqrt(n);i++)
       {
           if(n%i===0)
           {
               isPrime = false;
               break;
           }
           if(isPrime === false){
               return isPrime;
           }
       }
       return isPrime;
   }