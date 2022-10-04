function convertTemp(value, unit)
{
    if (isNaN(value))
    {
        console.log("Value must be a number.");
        return NaN;
    }


    let tempResult = 0.00;

    switch(unit)
    {
        case "C":
            tempResult = convertCF(value);
            break;

        case "F":
            tempResult = convertFC(value);
            break;
    }
    return tempResult;
}

function convertCF(value)
{
    return (9/5) * (value + 32);
}

function convertFC(value)
{
    return (5/9)(value - 32);
}