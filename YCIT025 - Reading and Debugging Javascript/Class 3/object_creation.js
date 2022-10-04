my_list = [1, 2, 3]; // index

my_object = { "QC": "Quebec", "ON": "Ontario", "BC": "Bristich Columbia" }; // key


console.log(my_object["QC"]);

console.log(my_object[1]);
// ^^ this is not working because it would have to be 1: potatoes to bring the word potatoes


// BEFORE XML NOT JSON, ^^ this is JSON


const a = () => ({"QC":  "Quebec", "ON": "Ontario", "BC": "Bristich Columbia" })

console.log(a());
// ^^ a defined as a function