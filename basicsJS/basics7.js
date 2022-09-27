// To export a class perfix it with module.exports = class Person{}
// To import a module use const Person = require('./basics7)


module.exports = class Person {
  age = 25; //this are class variables
  //Note: Property can be represented as a getter method
  // using get before the method name then it is treated as a property and not a method
  get location() {
    return "Canada"
  }
  // Constructer is method which executes by default when you create object of the class
  constructor(_firstName, _lastName) { // these are like instance variable, everytime the object is created a new instance variable is created.
    this.firstName = _firstName //pass the parameter to the current class object
    this.lastName = _lastName
  }

  // This is a method not a property because there is no get prefix
  fullName() {
    console.log(this.firstName + this.lastName);
  }

  lastfirstName() {
    console.log(`${this.lastName} ${ this.firstName}`);

  }
}

/* // To create a new Person object
let person = new Person("Tim", "Joseph") // At runtime the arguments are sent to the parameter of the constructor
let person1 = new Person("Occam", "Razor")
console.log(person.age); // To access the property on the person class object use dot notation
console.log(person.location); // Access the getter like a property Note: no brackets required like this person.//////location()
console.log(person.fullName()); // TimJoseph 
console.log(person1.fullName()); // OccamRazor
console.log(person1.lastfirstName()); //RazorOccam */