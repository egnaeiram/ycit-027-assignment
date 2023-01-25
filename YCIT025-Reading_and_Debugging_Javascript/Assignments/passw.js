const checks = [/[0-9]/, /[A-Z]/, /\w{8,}/ ];
let totalChecks = 0;
let passed = true;
let numPassed = 0;
let passValue = 2;

const pass = "p4ssword";
for (let r of checks) 
{
    if (!r.test(pass))
    {
        passed = false;
    }
    else{
        numPassed++;
    }
}

console.log(passed);
console.log(checks.length);
console.log(numPassed);

if (numPassed >= passValue)
passed = true;


// b
const returnVal = {totalChecks: checks.length, passed: passed, numPassed: numPassed };

console.log(returnVal);

let myPass = "abc123";

let passData = checkPass(myPass);

if (passData.passed)
{

}