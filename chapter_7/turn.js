// World turn logic
World.prototype.turn = function() {
  var acted = []; 


  this.grid.forEach(function(critter, vector) {
    
    if (critter.act && acted.indexOf(critter) === -1) {
      acted.push(critter);           
      this.letAct(critter, vector);  
    }
  }, this); 
};


World.prototype.letAct = function(critter, vector) {
  var action = critter.act(new View(this, vector)); 

 
  if (action && action.type === "move") {
    var dest = this.checkDestination(action, vector);
    if (dest && this.grid.get(dest) == null) {
      this.grid.set(vector, null); 
      this.grid.set(dest, critter); 
    }
  }
};


World.prototype.checkDestination = function(action, vector) {
  if (directions.hasOwnProperty(action.direction)) {
    var dest = vector.plus(directions[action.direction]);
    if (this.grid.isInside(dest))
      return dest;
  }
};
