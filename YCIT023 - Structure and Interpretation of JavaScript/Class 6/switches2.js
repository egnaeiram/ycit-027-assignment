let employeeType = "B";

let bonus = 0.00;

switch(employeeType)
{
    case "A" :
        bonus += 100;

    case "B" :
        bonus += 200;

    case "C" :
        bonus += 100;       
}

console.log(bonus);
