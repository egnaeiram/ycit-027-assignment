/*
let totalChecks: number = 0;
let passed: boolean = true;
let numPassed:number = 0;
let passValue:number = 5;

const returnVal:number = {totalChecks: checks.length, passed: passed, numPassed: numPassed };

console.log(returnVal);

let myPass = "P4$$word";

let passData = checkPass(myPass);

if (passData.passed){
    alert('Password entered is valid')
}
else {
    alert('Password entered is invalid')

}

function validation(){
    const checks = (/[0-9]/ && /[A-Z]/ && /[a-z]/ && /\w{8,30}/ && /[#@$%^&!]/);

}


let pass = {};
function validatePassword() {
   for (let r of checks) 
{
    if (!r.test(pass))
    {
        passed = false;
        throw 'Password invalid'
    }
    else
    
        numPassed++;
    };

    try {
       validatePassword == false;
   }   catch (err) {
   console.log('Password should include a number, a capital letter, a lowercase letter, a symbol #@$%^&!, have at least 8 characters and maximum 30 characters');
   }
}
const validatePassword = {totalChecks: checks.length, passed: passed, numPassed: numPassed };
console.log(passed);
console.log(checks.length);
console.log(numPassed);

if (numPassed >= passValue)
passed = true;

*/