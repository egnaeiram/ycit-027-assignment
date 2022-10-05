let BreakException = {};

try {
 [1,2,3,4,5].forEach(function (e1) {
   console.log(e1);
   if (e1 === 3) throw BreakException;
 });
} catch (e) {
    if (e !== BreakException) throw e;
    }