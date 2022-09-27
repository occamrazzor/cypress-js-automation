//Array is a collection of elements in a container
//Marks is a variable that will hold 6 elements
let marks1 = Array(6)

//initilizing an Array with values

var marks = new Array(20, 40, 35, 12, 37, 100)
var marks = [20, 40, 35, 12, 37, 100]

//creating a sub-array from the main array
subMarks = (marks.slice(2, 5));
console.log(subMarks);

console.log(marks[2]);
//to alter the value=12 of index [3] to 140 
marks[3] = 140
console.log(marks); //[ 20, 40, 35, 140, 37, 100 ]
console.log(marks.length);
marks.push(65); // Appends to the last element of the array
console.log(marks); //[  20,  40, 35, 140, 37, 100, 65]
console.log(marks.length); // 7
console.log(marks.pop()); //Removes the last element from an array and returns it ...65
console.log(marks.unshift(12)); //7 Appends value to the beginning of the array
console.log(marks); // [  12, 20,  40, 35, 140, 37, 100]

console.log(marks.indexOf(100)); // 6 th position

// To verify if element is present in the array
console.log(marks.includes(120));

//creating a sub-array from the main array
console.log(marks.slice(2, 5));

var sum = 0
for (let i = 0; i < marks.length; i++) {
  
  console.log(marks[i]);
  sum = sum + marks[i];
 
}
console.log(sum);

//reduce filter map
console.time("Test1")
let total = marks.reduce((sum, mark) => sum + mark, 0)
console.log(`total of all the element in the array ${total}`);
console.timeEnd("Test1")

console.time("Test2")
let result = marks.reduce((totalSum, numOfElem) => {
  return totalSum += numOfElem
}, 0)
console.log(result);
console.timeEnd("Test2")


console.log("****************");

var scores = [12, 13, 14, 16];
// To create new array using Filter method with even numbers of the scores array like [12, 14, 16]
var evenScores = [];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] % 2 == 0) {
    evenScores.push(scores[i]);
  }
}
console.log(evenScores);
console.log("***************");

// Filter function 
let newEvenNumFilterArray = scores.filter(score => score % 2 == 0)
console.log(` New Array Filtered ${newEvenNumFilterArray}`);

console.log("###############");

// Map method modify each element value in the array to a new value
//newEvenNumFilterArray * 3 .... [12,14,16] * 3 -> [36, 52, 48]
let mappedArray = newEvenNumFilterArray.map(times3 => times3 * 3)
console.log(mappedArray);
// sum up the mappedArray using reduce method

let totalresult = mappedArray.reduce((total, n) => total += n);
 
console.log(`Total result from the map function of the mappedArray ${totalresult}`);

console.log("@@@@@@@@@@@@@@@@@@@@@@@@");
//Chaining filter().map().reduce()
//Note: filter() creates a new array...map() will modify the elements in the array... reduce() will resolve to a single value.

let sumValue = scores.filter(score => score % 2 == 0).map(times3 => times3 * 3).reduce((total, n) => total += n);
console.log(sumValue);
console.log("*************Sorting*************");
// Sorting any array with numbers need custom logic to sort properly 
// Sorting an array with strings
var fruits = ["Banana", "Mango", "Pomegrante", "Apple"]
console.log(fruits.sort());
console.log(fruits.reverse());


var scores1 = [12, 003, 19, 16, 14];
scores1.sort();
console.log(scores1); // this will produce wrong answer [ 12, 14, 16, 19, 3 ]

console.log(scores1.sort((a, b) => a - b)); // this is the right answer [ 3, 12, 14, 16, 19 ]
