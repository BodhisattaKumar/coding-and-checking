var total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);


var array = [1, 2, 3];
for (var i = 0; i < array.length; i++) {
  var current = array[i];
  console.log(current);
}

//passing fun as parameter
function logEach(array) {
  for (var i = 0; i < array.length; i++)
    console.log(array[i]);
}


function forEach(array, action) {
  for (var i = 0; i < array.length; i++)
    action(array[i]);
}

forEach(["Wampeter", "Foma", "Granfalloon"], console.log);

//sq of each no
[1, 2, 3, 4].forEach(function(n) {
  console.log(n * n);
});

// counting vowles 
function countVowels(word) {
  let count = 0;
  word.split("").forEach(function(ch) {
    if ("aeiou".includes(ch)) count++;
  });
  return count;
}

console.log(countVowels("suman paul")); 
console.log(countVowels("bodhisatta")); 
