//.speak

function Rabbit(type) {
  this.type = type;
}


Rabbit.prototype.speak = function(line) {
  console.log("The " + this.type + " rabbit says '" + line + "'");
};

var whiteRabbit = new Rabbit("white");
var blackRabbit = new Rabbit("black");

whiteRabbit.speak("Hello!");


blackRabbit.speak("I'm hungry");

