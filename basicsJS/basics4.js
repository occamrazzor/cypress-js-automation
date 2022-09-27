//block of code executed together that can be wrapped into a module call function
//var - if declared at Global level -> Scope is Global level
//var - if declared at Function level -> Scope is function level... var can be redeclared
//let - if declared at Global level -> Scope is Global
//let - if let is declared at block level ie. scope is within {} ... let cannot be redeclared
//let and var can be reinitialized.
//const is like let but cannot be reinitialized

let greet = "Good Evening"

if (1 == 1) { // Note: this is not a function as such the greet is at global level
  
  let greet = "Afternoon"
}
// Note : this will start will "Good Evening" and after the if block the greet is replaced with "Afternoon"

function add(a, b) {
  var greet = "Morning"
  return a + b
}

console.log(add(2, 3));
//ReferenceError: greet is not defined
//console.log(greet) Note: calling this variable outside the scope of add function will throw an error because it is in the function scope 
console.log(greet); //Note this greet will print because the scope is Global...Good Evening


// Anonymous function ...functions without names ....Function expression
// Note: Only Anonymous functions can be assigned to variables

let sumofIntegers = function(c, d) {
  return c + d
}

// Funtion using arrow notation
let sumofNumbers = (c, d) => (c + d)
console.log(sumofNumbers(3, 4));



