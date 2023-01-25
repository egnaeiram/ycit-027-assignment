//NOT IN THE SLIDES

let a = 16;

switch (true)
{
    case a < 10:
        console.log("<10");
        break;
    
    case a < 20:
        console.log("<20");
        break; //UNECESSARY BUT IMPORTANT IF ADDING A NEW BREAK

    default:
            console.log("your number is 20 or more.")
}