const myValue = 5;

const misc = [ "A", "B", "C" ];

console.log(misc[1]);
// answer is B , BECAUSE IT STARTS AT 0

// CONST CANNOT BE CHANGED

misc[2] = "X"; // OK
// IT DOESNT REDEFINE BUT CHANGE WHAT'S IN THE ARRAY

misc = [1,2,3] // FAILS
// CHANGING THE WHOLE VALUE DOESNT WORK


// REDEFINE MISC (STACK) - AND FREE UP LOTS OF MEMORY
// const misc [ "A" , "B" , "C"];
// misc = null;
// const misc2 = [1,2,3];