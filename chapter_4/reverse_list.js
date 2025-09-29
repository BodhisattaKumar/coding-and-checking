function reverseList(list) {
  let newList = null;
  while (list !== null) {
    newList = { value: list.value, rest: newList };
    list = list.rest;
  }
  return newList;
}

let myList = arrayToList([1, 2, 3, 4]);
console.log(listToArray(reverseList(myList))); 
