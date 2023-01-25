const password = "abc123abc";

const containsNumber = /\d/;

let passwordIsComplex = containsNumber.test(password);

console.log(passwordIsComplex);


// anchor it for full match * at first and $ at the end




const password1 = "5142276151";

const containsNumber1 = /(\d{3})\d/;

let passwordIsComplex1 = containsNumber1.exec(password1);

console.log(passwordIsComplex1);

let areaCode = passwordIsComplex1[1];

console.log(areaCode);

