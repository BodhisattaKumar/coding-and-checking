function greet(who) {
  console.log("Hello " + who);
}

greet("Harry");
console.log("Bye");


function power(base, exponent) {
  if (exponent == undefined) 
    exponent = 2; 
  var result = 1;
  for (var count = 0; count < exponent; count++)
    result *= base;
  return result;
}

console.log(power(4));     
console.log(power(4, 3));  



function multiply(a, b) {
  if (b === undefined) b = 1;
  return a * b;
}

console.log(multiply(5));    
console.log(multiply(5, 3)); 



function a() 
{ 
    console.log("a start"); 
    b();
    console.log("a end"); }

function b() 
    { 
        console.log("b start"); 
        console.log("b end"); 
    }

a();



function wrapValue(n) {
  var localVariable = n;
  return function() { 
    return localVariable; 
  };
}

var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);

console.log(wrap1()); 
console.log(wrap2()); 


function recursivepower(base, exponent) {
  if (exponent == 0)
    return 1;               
  else
    return base * recursivepower(base, exponent - 1); 
}

console.log(recursivepower(2, 3));



function printFarmInventory(cows, chickens) {
  var cowString = String(cows);
  while (cowString.length < 3)
    cowString = "0" + cowString;
  console.log(cowString + " Cows");

  var chickenString = String(chickens);
  while (chickenString.length < 3)
    chickenString = "0" + chickenString;
  console.log(chickenString + " Chickens");
}

printFarmInventory(7, 11);


//adding pigs
function printZeroPaddedWithLabel(number, label) {
  var numberString = String(number);
  while (numberString.length < 3)
    numberString = "0" + numberString;
  console.log(numberString + " " + label);
}

function printFarmInventory(cows, chickens, pigs) {
  printZeroPaddedWithLabel(cows, "Cows");
  printZeroPaddedWithLabel(chickens, "Chickens");
  printZeroPaddedWithLabel(pigs, "Pigs");
}

printFarmInventory(7, 11, 3);



function min(a, b) {
  return a < b ? a : b;
}

console.log(min(5, 10)); 
console.log(min(-2, -7)); 


function isEven(n) {
  if (n < 0) return isEven(-n); 
  if (n === 0) return true;
  if (n === 1) return false;
  if (n > 1)
  return isEven(n - 2);
}

console.log(isEven(50)); 
console.log(isEven(75)); 
console.log(isEven(-1)); 


console.log("hi");
