const a = { "ON": "Ontario", "QC": "Quebec" };

const animal1 = { name: "Fido", colour: "Brown"};

const person1 = {
    firstName: 'Brendan',
    lastName: 'Wood',
    age: 20,
    // properties of the object ^^
    x: (a, b) => a + b,
    y: function() { return this.age + a + b },
    // function of the object ^^
    fullName: function() { return `${this.firstName} ${this.lastName}`; }
};



console.log(person1.x(4,5));





const car = {
    brand: "Honda",
    model: "CRV",
    age: 4,
    odometer: 23456,
    x: (odometer, age) => odometer / age,
    kmPerYear: function() {return this.odometer / this.age},
  };

  console.log(kmPerYear);

  


