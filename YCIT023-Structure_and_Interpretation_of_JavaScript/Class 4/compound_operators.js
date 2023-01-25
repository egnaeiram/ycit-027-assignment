//     && and
//     || or
//      | not

let x = 2;
let y = 7;

// AND
console.log(x == 2 && y == 5 );

// OR
console.log(x == 2 || y == 5 );


// NOT
console.log( !x == 2 );
// THIS IS NOT WORKING PROPERLY

// !x -> is false 
// false == 2
// 5 exist so it's considered true = truthy
// !5 forced to be false

console.log ( !0 );
// 0 is false

console.log( !-6 );
// negative numbers are true

console.log( !null );
console.log( !undefined );
// null and undefined are false

// Short Circuiting : Example student grade/undergraduate