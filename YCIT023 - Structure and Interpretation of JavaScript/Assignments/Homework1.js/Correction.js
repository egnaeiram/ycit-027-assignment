// QUESTION 1 - TIP CALCULATOR

"use strict";

const NUM_DINERS = 2;
const PRICE_OF_MEAL = 100;
const GST = 0.05, PST = 0.09975;

const BAD_SERVICE = 0;
const OK_SERVICE = .10;
const GOOD_SERVICE = .15;
const GREAT_SERVICE = .20;

const SERVICE_OBTAINED = "B";
let tip_amount = 0.00;

if (SERVICE_OBTAINED === "A")
{
    tip_amount == GREAT_SERVICE;
}
if (SERVICE_OBTAINED === "B")
{
    tip_amount == GOOD_SERVICE;
}
if (SERVICE_OBTAINED === "C")
{
    tip_amount == OK_SERVICE;
}
if (SERVICE_OBTAINED === "D")
{
    tip_amount == BAD_SERVICE;
}

let totalPriceIncTax = ((PRICE_OF_MEAL * (GST + PST)) + PRICE_OF_MEAL);
let grandTotalIncTip = totalPriceIncTax * (1 + tip_amount);

let totalPerPerson = grandTotalIncTip / NUM_DINERS;

console.log("$" + totalPerPerson.toFixed(2));
// to.Fixed decimal (to.Fixed(2) would be 2 number after the . ) // to.Fixed(1) would be 1 number after .





// QUESTION 2 - FIZZBUZZ

for (let n = 0; n <=25; n++)
{
    let result = n + "\t";

    if (n % 3 == 0) 
    {
        result += "Fizz";
    }
    if (n % 5 == 0) 
    {
        result += "Buzz";
    }
   
    console.log(result);

}
console.log("outside of the loop");