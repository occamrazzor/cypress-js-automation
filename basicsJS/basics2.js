const flag = 2;

if (!flag) {
  console.log("condition satisfied");
} else {
  console.log(flag);
  console.log("condition NOT satisfied");
}

// This loop will never run
let i = 0;
while (i > 10) {
  count = i++;
  console.log(`NOT infinite loop ${count}`);
  console.log(i);
}

// This loop will atleast run once and will output 1.
do {
  i++;
} while (i > 10);
console.log(i);

for (let k = 0; k < 10; k++) {
  console.log(k);
}

// This while will print true one time
let required = true;
while (required) {
  console.log(required);
  required = false;
}


let n = 0
console.log("**************");
//from 1 to 100 give me common multiple values of 2 and 5 
// Nested if condition with break will exit the loop when the break condition is met
for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0 && i % 5 == 0) {
    n++
    console.log(i);
    if (n == 7)
      break;
  }
}

let r = 0;
for (let x = 0; x < 100; x++) {
  if (x % 8 == 0 && x % 16 == 0) {
    r++
    console.log(x);
    if (r == 6) {
      break;
    }
  }
  
}