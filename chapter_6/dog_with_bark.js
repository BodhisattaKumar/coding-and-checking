// Prototype object with bark method
var dog = {
  bark: function() {
    console.log("Woof! I am a " + this.type + " dog.");
  }
};


var bulldog = Object.create(dog);
bulldog.type = "bulldog";
bulldog.bark();  


// Create pug from dog
var pug = Object.create(dog);
pug.type = "pug";
pug.bark();  

