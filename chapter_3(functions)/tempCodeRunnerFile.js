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


function power(base, exponent) {
  if (exponent == 0)
    return 1;               
  else
    return base * power(base, exponent - 1); 
}

console.log(power(2, 3));



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
