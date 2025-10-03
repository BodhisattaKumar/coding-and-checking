// Grid class as given
function Grid(width, height) {
  this.space = new Array(width * height);
  this.width = width;
  this.height = height;
}

Grid.prototype.isInside = function(v) {
  return v.x >= 0 && v.x < this.width && v.y >= 0 && v.y < this.height;
};

Grid.prototype.get = function(v) {
  return this.space[v.x + v.y * this.width];
};

Grid.prototype.set = function(v, value) {
  this.space[v.x + v.y * this.width] = value;
};



//Create a 5x4 grid
let grid = new Grid(5, 4);

//Fill the grid with numbers (row-major order)
for (let y = 0; y < grid.height; y++) {
  for (let x = 0; x < grid.width; x++) {
    grid.set({x: x, y: y}, x + y * grid.width); // simple numbers
  }
}

//Print the grid row by row
for (let y = 0; y < grid.height; y++) {
  let row = [];
  for (let x = 0; x < grid.width; x++) {
    row.push(grid.get({x: x, y: y}));
  }
  console.log(row.join(" "));
}

//Example usage of isInside
console.log("Is (2,3) inside?", grid.isInside({x: 2, y: 3})); // true
console.log("Is (5,0) inside?", grid.isInside({x: 5, y: 0})); // false
