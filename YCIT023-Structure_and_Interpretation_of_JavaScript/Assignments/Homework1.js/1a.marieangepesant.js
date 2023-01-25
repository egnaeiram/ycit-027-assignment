// YCIT023
//             Assignment 1
//                             Marie-Ange Pesant



// 1A



// INFOS
// GST = goods and services tax
// QST = quebec sales tax

const GST = 5;
const QST = 9.975;
let priceMealBeforeTax = 20;
let numberOfDiners = 5;
let excellentServiceLevel = 20;
let goodServiceLevel = 15;
let okServiceLevel = 10;
let badServiceLevel = 0;


// 1) Validate the input values

 // Number of diners
 console.log("Number of diners : " + numberOfDiners);

 // Price of the meal before tax
 console.log("Price of the meal before tax : " + priceMealBeforeTax + "$");

// 2) Calculate the tip amount

 // Excellent Service Level
 console.log(("Amount of tip per meal for excellent service is : " + (priceMealBeforeTax * (excellentServiceLevel/100))) + "$");

 // Good Service Level
 console.log(("Amount of tip per meal for good service is : " + (priceMealBeforeTax * (goodServiceLevel/100))) + "$");

 // Ok Service level
 console.log(("Amount of tip per meal for ok service is : " + (priceMealBeforeTax * (okServiceLevel/100))) + "$");

 // Bad Service Level
 console.log(("Amount of tip per meal for bad service is : " + (priceMealBeforeTax * (badServiceLevel/100))) + "$");

// 3)

 // Total price before tax
 let totalPriceBeforeTax = (priceMealBeforeTax * numberOfDiners);
 console.log("The total price before tax is " + totalPriceBeforeTax + "$");

 // Tip percentage dertemined
 console.log("The tip percentage determined is excellent which is equivalent to " + excellentServiceLevel + "%");

 // Amount of provincial tax
 let provincialTax = (totalPriceBeforeTax * QST/100);
 console.log("The amount of the provincial tax is " + provincialTax + "$");

 // Amount of federal tax
 let federalTax = (totalPriceBeforeTax * GST/100);
 console.log("The amount of the federal tax is " + federalTax + "$");

 // Total with tax
 let totalWithTax = (totalPriceBeforeTax + provincialTax + federalTax);
 console.log("The total with the taxes is " + totalWithTax + "$");

 // Total tip
 let totalTip = (totalPriceBeforeTax * (excellentServiceLevel/100));
 console.log("The total tip is " + totalTip + "$");

 // Total amount to pay per person
 let amountPerPerson = ((totalTip + totalWithTax)/numberOfDiners);
 console.log("Amount paid per person is " + amountPerPerson + "$");



// End




