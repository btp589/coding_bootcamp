// Constructor function for creating Student objects
var Student = function(name, subject, GPA) {
  this.name = name;
  this.subject = subject;
  this.GPA = GPA;
};

// Exporting our Student constructor. We will require it in constructor-Classroom.js
module.exports = Student;
