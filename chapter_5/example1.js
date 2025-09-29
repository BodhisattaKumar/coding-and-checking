/* Write a higher-order function filter (like the built-in Array.prototype.filter).

Takes an array and a test function.

Returns a new array with only elements that pass the test.
*/

function filter(array, test) {
  let result = [];
  array.forEach(function(element) {
    if (test(element)) result.push(element);
  });
  return result;
}


console.log(filter([1,2,3,4,5,6], n => n % 2 === 0));


console.log(filter(["apple","bat","cat"], w => w.length > 3));

