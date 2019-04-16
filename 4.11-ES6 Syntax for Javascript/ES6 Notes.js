//ES6(EcmaScript) also known as ES2015

//Arrow functions
function add(a, b) {
  return a+b;
}
//or
var add = function(a, b) {
  return a+b;
}
//-------------------arrow function version
var add = (a, b) => {
  return a+b;
}
//arrow function does not need braces if all you do is return value (short version)
var add = (a ,b) => a+b;
//arrow function if 1 parameter. No need for parantheses.
var addFive = (num) => num +5;
//arrow function without parameters
var sayHello = () => "hello";
//To call add function. Same way.
add(3,5)

//the object below will not work when trying to console.log
var person = {
  name: "Hodor",
  saySomething: function() {
    console.log(this.name + " is thinking...");
    // var self = this; step is needed as a "hack" to make the console.log below log out person.name.
    setTimeout(function() {
      console.log(this.name + "!");
    }, 2000)
  }
};
//arrow function below WILL work for setTimeout, or some other event handlers.
//arrow function uses LEXICAL scope
var person = {
  name: "Hodor",
  saySomething: function() {
    console.log(this.name + " is thinking...");
    setTimeout(() => {
      console.log(this.name + "!");
    }, 2000)
  }
};

//method of an object works with regular function
var obj = {
  value: 123,
  doIt: function() {
    console.log("value:", this.value);
  }
}
obj.doIt()
//value: 123

//method of an object will not work with arrow function due to lexical scoping
var obj = {
  value: 123,
  doIt: () => {
    console.log("value:", this.value);
  }
}
obj.doIt()
//window


//------------------let and const to declare variables
//when using var, that variable gets brought to the top of that scope (hoisted). That variable becomes part of the global scope.
for(var i=0; i<5; i++) {
  console.log("i: ", i);
}


//using let will contain the defined variable to the scope of the for loop
for(let i=0; i<5; i++) {
  console.log("i: ", i);
}

//example of var hoisting
console.log("test reference", test); //the variable test gets hoisted to the very top of the block
var test = function() {
  console.log("Hello");
}
//example of let not hoisted
console.log("test reference", test); //undefined because variable test is not yet created
let test = function() {
  console.log("Hello");
}

//let and const will NOT let you redefine a variable!!!!


//const will not allow reassignment
const x = 456,
x = 456; //will not work: assignment to constant variable
x++; //will also not work

//const
const obj = {name: "Bao"};
const obj = {}; //error
obj = {}; //error
obj.name = "NEW"; //WILL WORK because it is still mutable






//------------------------------------Ternary operators uses ? and :
var port = typeof(obj.port) !== 'undefined' ? obj.port : 3000;
//or
var port = obj.port ? obj.port : 3000; 


//------------------------------------Functional array methods
//array of objects
let students = [
  {name: "Jim", age: 20, grade: "A"},
  {name: "Jane", age: 30, grade: "F"},
  {name: "Beau", age: 80, grade: "F+"},
  {name: "James", age: 22, grade: "C"}
];
//loops through each object in the students array and console.log it
students.forEach(console.log);
//MAP traverses an array and plucks out values from that array
//return students grades in the array
let grades = students.map(s => s.grade);
//return students names in the array
students.map(s => s.name);







//ES6 classes instead of constructors

//Destructuring