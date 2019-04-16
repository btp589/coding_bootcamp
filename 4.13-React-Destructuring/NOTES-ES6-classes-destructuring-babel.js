// Classes: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// Classes are like functions except classes are not hoisted. Classes must be declared first before they can be used.
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Destructuring: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
var a, b, rest;
[a, b] = [10, 20];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: [30,40,50]


// Babel: https://babeljs.io/
// 