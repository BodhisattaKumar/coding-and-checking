// Vector constructor
function Vector(x, y) {
  this.x = x;
  this.y = y;
}

// Add another vector to this vector
Vector.prototype.plus = function(other) {
  return new Vector(this.x + other.x, this.y + other.y);
};


var position1 = new Vector(2, 3);
var position2 = new Vector(1, -1);

var newPosition = position1.plus(position2);
console.log(newPosition); 
