 //    "regex here"
 const checks = [/[0-9]/, /[A-Z]/, /[a-z]/, /\w{8,30}/, /[#@$%^&!]/ ];
 
 let totalChecks = 0;
 let passed = true;
 let numPassed = 0;
 let passValue = 5;
 
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

 console.log(passed);
 console.log(checks.length);
 console.log(numPassed);
 
 if (numPassed >= passValue)
 passed = true;