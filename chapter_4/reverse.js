// 1. Pure function does not modify original

function reverseArray(arr) {
  let newArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

console.log(reverseArray([1, 2, 3, 4])); 

// 2. In-place function modifies same array

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

let numbers = [1, 2, 3, 4];
reverseArrayInPlace(numbers);
console.log(numbers); 
