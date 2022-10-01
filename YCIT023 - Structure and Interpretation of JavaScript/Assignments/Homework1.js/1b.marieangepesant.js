// YCIT023
//             Assignment 1
//                             Marie-Ange Pesant



// 1B


for (let x = 0; x < 26; x++)
{
    if (((x/3) && (x/5)) == ( 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 ))
    {
    console.log(x, "FizzBuzz");
    }
    else if  ((x/3) == ( 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 ))
    {
        console.log(x, "Fizz");
    }
    else if ((x/5) == ( 0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 ))
    {
    console.log(x, "Buzz");
    }   
    else 
    {    
    console.log(x);
    }
}

// NOT WORKING PROPERLY 