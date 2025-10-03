

//fizzbuzz

for (let n = 1; n <= 100; n++) {
  if (n % 3 == 0 && n % 5 == 0) {
    console.log("FizzBuzz");
  } else if (n % 3 == 0) {
    console.log("Fizz");
  } else if (n % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(n);
  }
}







const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//Pick a number and check
rl.question("Pick a number: ", (input) => {
  const num = Number(input);

  if (!isNaN(num)) {
    console.log("Square is " + num * num);

    if (num < 10) console.log("Small");
    else if (num < 100) console.log("Medium");
    else console.log("Large");
  } else {
    console.log("That’s not a number!");
  }

  //Ask name
  rl.question("Who are you? ", (name) => {
    if (!name) name = "Stranger";
    console.log("Hello " + name);

    //Ask weather
    rl.question("What’s the weather? ", (weather) => {
      switch (weather) {
        case "rainy":
          console.log("Bring umbrella");
          break;
        case "sunny":
          console.log("Dress lightly");
          break;
        case "cloudy":
          console.log("Go outside");
          break;
        default:
          console.log("Unknown weather");
      }

      rl.close(); 
    });
  });
});



// Loops 
console.log("While loop:");
var number = 0;
while (number <= 12) {
  console.log(number);
  number += 2;
}

console.log("For loop:");
for (var number = 0; number <= 12; number += 2) {
  console.log(number);
}

console.log("Break and continue:");
for (var current = 20;; current++) {
  if (current % 7 == 0) break;
}
console.log("The number is:", current);

for (let i = 1; i <= 10; i++) {
  if (i % 2 !== 0) continue;
  console.log(i);
}


