const ARRAY_ELEMENTS = 100;
let array = [];
for (let i=0 ; i < ARRAY_ELEMENTS; i++ ){
    array[i] = Math.floor(Math.random() * 100) + 1;
}

console.log(array);

const arr = [];

for (let i=0; i < 100; i++) {

}


/* Other way

const randomArray = Array(150).fill().map(() => Math.floor(50 * Math.random()));
console.log(randomArray);

*/
