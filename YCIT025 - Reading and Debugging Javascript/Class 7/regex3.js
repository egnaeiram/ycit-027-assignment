var re = /([0-9]+)[a-z]+/;
var match = re.exec("foo123bar");
console.log(match);


/* 

LIST CONTENTS when using ".exec" with regex :
    First(0): Full match
    2nd/3rd/etc...(1,2,3) : Every capture group in order.
    Position of the full match, zero based
    The original text scanned

    0: 123bar
    1: 123
    2: 3
    3: foo123bar

*/
