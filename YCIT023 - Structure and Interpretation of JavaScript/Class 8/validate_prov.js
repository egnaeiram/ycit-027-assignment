const provinces = ["ON" , "QC" , "BC" , "NS" ];

let provinceSelected = "QC";

let validateProvince = provinces.includes(provinceSelected.toUpperCase());

console.log(validateProvince);