//Inheritance.... class Person extends Student
//one class can inherit properties, methods of another class
//Class that inherit properties, methods from another class is known as subClass(derived class, child class)
//Class whoes properties are inherited is know as super class or parent class

const Person = require("./basics7.js");

class Pet extends Person{

  get location() { // this get method is overridden from the parent class
    return "BlueCross"
  }
  constructor(firstName, lastName) {
    //call the parent class constructor
    super(firstName, lastName)
  }
}

let pet = new Pet("toby", "mory")
pet.fullName();
console.log(pet.location) //Note: when anything is return from a get method always use console.log to display it.