//Javascript Objects
//Object is a collection of properties
//properties can be defined as key value pair in an object
let person = {
  firstName: 'Tim',
  lastName: 'Joe',
  age: 24,
  // Note person object has a function and to access the properties in the person object use `this` keyword
  fullName: function () {
    console.log(this.firstName + this.lastName);
  }
}
console.log(person.fullName); // output not as expected ...[Function: fullName]
console.log(person.fullName()); // need to provide the brackets for the fullName function to display correctly...TimJoe
console.log(person.lastName); // Access object property with object.dot notation ...//Joe
console.log(person['lastName']); //Access via array notation using key as index == key as a string... //Joe

// Changing property at runtime
person.firstName = "Tim Dane"
console.log(person.firstName);

// Adding a new property at runtime ...this will create a new gender key and assign male as the value if it doesnt exist in the object.
person.gender = 'male';
console.log(person.gender); //male
console.log(person); // { firstName: 'Tim Dane', lastName: 'Joe', gender: 'male' }
delete person.gender; 
console.log(person); // { firstName: 'Tim Dane', lastName: 'Joe' }

//Checking if a property exist in the object? example if gender exist in the person object
console.log('gender' in person); // returns false

// To display all the values of the properties iterate over the properties in the object with a for loop 
for (let key in person) {
  console.log(person[key]);
}
  


