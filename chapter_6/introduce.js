// .introduce Student constructor
function Student(name, course) {
  this.name = name;
  this.course = course;
}


Student.prototype.introduce = function() {
  console.log("Hi, I am " + this.name + " and I study " + this.course + ".");
};


var student1 = new Student("bodhisatta", "Physics");
var student2 = new Student("chandrachur", "Computer Science");


student1.introduce();


student2.introduce();

