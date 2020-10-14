class Vehicle {

  constructor(brandValue, colourValue) {
    this.brand = brandValue;
    this.colour = colourValue;
  }

  display() {
    console.log(this.brand + " in " + this.colour);
  }
}

class Car extends Vehicle {

  constructor(brand, colour) {
    super(brand, colour);
  }

  display() {
    console.log("My car is a " + this.brand + " in " + this.colour)
  }
}

class Moto extends Vehicle {

  constructor(brand, colour) {
    super(brand, colour);
  }

  display() {
    console.log("My motorbike is a " + this.brand + " in " + this.colour)
  }
}

const honda = new Moto("Honda", "Brown");
const peugeot = new Car("Peugeot", "Orange");
honda.display();
peugeot.display();