/*
Exercise

Code a switch statement which takes in a month number (January = 1, December = 12), and return to you the number of days which are within that month. Months with 31 days are JAN, MAR, MAY, JUL, OCT, DEC).

Feb is 28 days BUT every leap year (when the year is divisible by 4), FEB becomes 29 days. See if you can integrate this in the switch statement.

*/

function getDaysInMonth(inputDate)
{

    let monthNumber = inputDate.getMonth();
    let year = inputDate.getFullYear();

    switch(monthNumber)
    {
        case 1: // January
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31
        case 4:
        case 6:
        case 9:
        case 11:
            return 30
        case 2:
            if (year % 4 == 0 && !(year % 100 == 0) || year % 400 == 0)
                return 29
            else
                return 28
    }
}

console.log("The month February contains " + getDaysInMonth(new Date(2022, 02, 12)) + " days" );
