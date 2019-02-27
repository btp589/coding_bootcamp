// Requiring our Student constructor function we exported from constructor-Student.js
var Student = require("./constructor-Student");

// Constructor function for creating Classroom objects
var Classroom = function(profName, roomNum) {
  // this.cast will hold all of our CastMember objects
  this.students = [];
  this.profName = profName;
  this.roomNum = roomNum;

  // This method that creates a Student object from the constructor function we required and pushes it to the `this.student` array
  this.addStudent = function(name, subject, GPA) {
    this.students.push(new Student(name, subject, GPA));
  };

  this.studentCount = function() {
    return this.students.length;
  };
};

// Exporting the Movie constructor which we will use in main.js
module.exports = Classroom;
