console.log("start program");

new Promise((resolve) => {
    console.log("start executor");
    setTimeout(() => {
        resolve("this is my answer");
}, 2000);
    console.log("end executor");
}).then((result) => {
    console.log(result);
})
console.log("end program");






