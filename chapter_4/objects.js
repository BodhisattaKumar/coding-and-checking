
//mutability

let obj1 = {value: 10};
let obj2 = obj1;   
let obj3 = {value: 10}; 
console.log(obj1 == obj2); 
console.log(obj1 == obj3); 

obj1.value = 15;
console.log(obj2.value); 
console.log(obj3.value); 


let name = "hello";
let upper = name.toUpperCase();

console.log(name);  
console.log(upper); 


let journal = [];

function addEntry(events, squirrel) {
  journal.push({events: events, squirrel: squirrel});
}

addEntry(["work", "touched tree", "pizza", "running"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

console.log(journal);



function phi(table) {
  return (table[3] * table[0] - table[2] * table[1]) /
         Math.sqrt((table[2] + table[3]) *
                   (table[0] + table[1]) *
                   (table[1] + table[3]) *
                   (table[0] + table[2]));
}

console.log(phi([76, 9, 4, 1])); 


