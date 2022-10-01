const a = [1,2,3];

delete a[1];

console.log(a);
// print [ 1, <1 empty item>, 3 }
// doesn't delete the space, writes 'empty item'

console.log(a.length);
// print 3


// IN AS INDEX
console.log(0 in a);
// true - IN POSITION 0 YES 1
console.log(1 in a);
// false - IN POSITION 1 NO BECAUSE WE DELETED IT
console.log(2 in a);
// true - IN POSITION 2 YES 3
console.log(3 in a);
// false
console.log(4 in a);
// false