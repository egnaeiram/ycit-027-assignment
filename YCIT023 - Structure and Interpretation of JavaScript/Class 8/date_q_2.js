let msec = Date.parse("March21,2012")

console.log(msec);



// PRINT IN A STRING FORMAT
const d12 = new Date(msec)

console.log("d12: "+ d12);

// Wed Mar 21 2012 00:00:00 M=GMT-0:400 (Eastern Daylight Time)
// Why is it not millisecond?
// Because it's a string