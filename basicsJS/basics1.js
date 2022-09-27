console.log("Occam Razor")

//these are comments
/*
multi
line
comment
*/
// javascript is loosely typed
// var  (let, const) since ES6
// var a=4
let a=4
console.log(a)
console.log(typeof(a)) //method that informs the type of variable in this case a number

let b= -0.00579
console.log(typeof(b)) // this floating point is also a number

let c = "Occam Razor"
console.log(typeof(c)) // this is a string

let required = true
console.log(typeof(required)) // this is a number


let space = null
console.log(typeof(space)) // this is an object


let startTime = Date.now()
for (let i = 0; i < 10000000; i++) {
  //do something
}
console.log(Date.now() - startTime)

console.time("Loop")
for (i=0; i<10000000; i++){
  //do something
}
console.timeEnd("Loop")

//cannot redeclare variable with let c = "Occam Razor" keyword but possible with var.
//var c = a + b
//console.log(c);

console.log(!required);

//Note let c = "Occam Razor" is already declared however it can be reassinged like this
c = a * b
console.log(c);

//ES6 -> let and const Note: const variable cannot be reassigned
// let -> cannot be redeclared but can be reassigned
// var -> can be redeclared and reassigned