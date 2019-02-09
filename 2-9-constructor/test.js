
// Object with key: property
var person = {
    name: "John",
    age: 33,
    location: "San Diego",
    isEmployed: true,
    sayHello: function () {
        return "Hello, I'm " + this.name;
    },
    sayBye: function() {
        return "See ya";
    }
};

var key = process.argv[2]
console.log(person[key]());  //looks up property dynamically

//person['name'];
//console.log(person.sayHello());

//console.log(process.argv[2]);