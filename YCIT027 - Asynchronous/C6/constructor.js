class Animal {
// In the case of promises, arg1 is the "executor" is being passed in, when we do "new Promise(executor)"
// Some classes take no parameters in their constructor (since no inputs needed to construct the object 

constructor(arg1) {
    console.log("constructor is running", arg1);

    this.someProperty = arg1;
}

someProperty = 3;

someMethod = () => {
    console.log("HELLO", this.someProperty);
};
}

// Example ...

const obj = new Myclass(4);
const anotherObj = new Myclass(6);