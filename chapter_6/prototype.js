var empty = {};
console.log(empty.toString);

console.log(empty.toString());

//Prototypes with Object.create
var protoRabbit = {
  speak: function(line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
  }
};

var killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");


//inheritance 
var animal = {
  eat: function() { console.log(this.type + " is eating"); }
};
var dog = Object.create(animal);
dog.type = "dog";
dog.eat();  
