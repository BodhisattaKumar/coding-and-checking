//function to create new function 
function greaterThan(n) {
  return function(m) {
    return m > n;
  };
}

var greaterThan10 = greaterThan(10);

console.log(greaterThan10(11)); 



//Building my Own If & Loop with Functions
function unless(test, then) {
  if (!test) then();
}

function repeat(times, body) {
  for (var i = 0; i < times; i++) body(i);
}

repeat(3, function(n) {
  unless(n % 2, function() {
    console.log(n, "is even");
  });
});
