// Strings and its methods in javascript
// Note : most of the string operations is like array operations

let day = 'tuesday '
console.log(day.length); //provides the length of string ...8

//get a substring 
let subday = (day.slice(0, 5));
console.log(subday); //tuesd
console.log(day[1]); // u
//Spliting the string array
// tue day
let splitday = day.split("s")
console.log(splitday); //[ 'tue', 'day ' ]
console.log(splitday[1].length)
console.log(splitday[1].trim().length); // note 'day ' has a space that can be trimmed

// When int data is in string format, the string data needs to be converted to integer
let date = '23'
let nextdate = '27'
let diff = parseInt(nextdate) - parseInt(date)
console.log(`${diff} elapsed days`);
diff.toString()

//concatenate

let newQuote = day + "is Funday day"
console.log(newQuote);

//indexof
let val1 = newQuote.indexOf("day") //this will show 4th position where day starts in the string array
let val2 = newQuote.indexOf("day",5) //this will show 14th position where the 2nd day string starts in the string array.
console.log(val1); // 4
console.log(val2); //14
//tuesday is Funday.. to find both occurance of the 'day' in the string array
// IMPORTANT TO REVISE
let count = 0
let val3 = newQuote.indexOf("day")
while (val3 !== -1) {
  count++
  val3 = newQuote.indexOf("day", val3 + 1)
}
console.log(count);