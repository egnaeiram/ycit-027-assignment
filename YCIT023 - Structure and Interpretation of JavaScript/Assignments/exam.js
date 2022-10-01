let serviceLevel = 8
let bonus = 0.00

switch (serviceLevel)
{
   case (serviceLevel > 6) :
        bonus =+ 500.00;

   case (serviceLevel < 6) :
        bonus =+ 100.00;
}



console.log(bonus);