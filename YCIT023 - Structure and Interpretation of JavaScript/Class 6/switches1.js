let x = "QC";
let province = "";

switch(x)
{
    case "QC":
        province = "Quebec";
        break;
    case "ON" :
        province = "Ontario";
        break;
    case "BC" :
        province = "British Columbia";
        break; //useless there 
    default :
        province = "Unknown"
}


console.log(province);