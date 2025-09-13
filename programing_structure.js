



var x = 30;
console.log("The value of x is", x);

//return value 
console.log(Math.max(2, 4)); 

console.log(Math.min(10,2,3,4,5));



//condition
const prompt = require("prompt-sync")(); 


let num = Number(prompt("Pick a number: "));

if (!isNaN(num)) {
  console.log("Square is " + num * num);
} else {
  console.log("That’s not a number!");
}





var num1 = Number(prompt("Pick a number: "));

if (num1 < 10)
  console.log("Small");
else if (num1 < 100)
  console.log("Medium");
else
  console.log("Large");

//loops 

//while
var number = 0;
 while (number <= 12) {
  console.log(number);
  number = number + 2;
}


//do while
var name;
do {
  name = prompt("Who are you?");
} while (!name);
console.log("Hello " + name);


//for
for (var number = 0; number <= 12; number += 2) {
  console.log(number);
}

//break and continue
for (var current = 20; ; current++) {
  if (current % 7 == 0) break;
}
console.log("the number is: ",current);  



for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue; 
  }
  console.log(i); 
}


//switch
switch (prompt("What’s the weather?")) {
  case "rainy":
    console.log("Bring umbrella");
    break;
  case "sunny":
    console.log("Dress lightly");
  case "cloudy":
    console.log("Go outside");
    break;
  default:
    console.log("Unknown weather");
}
