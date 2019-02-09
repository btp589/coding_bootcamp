// Create object with Constructor function
function Animal(rainingVal, noiseVal) {
    // Set properties
    this.raining = rainingVal;
    this.noise = noiseVal;
    this.makeItRain = function () {
        this.raining = true;
    };
    this.makeNoise = function () {
        if (this.raining) {
            return this.noise;
        }
    };
}

// Use the new keyword to define a constructor
var dogs = new Animal(true, "Woof!");
var cats = new Animal(false, "Meow!");


// Original way, create using object literal
/* var dogs = {
    raining: true,
    noise: "Woof!",
    makeNoise: function () {
        if (this.raining) {
            return this.noise;
        }
    }
}

var cats = {
    raining: false,
    noise: "Meow!",
    makeNoise: function () {
        if (this.raining) {
            return this.noise;
        }
        else {
            return "It's not raining cats!"
        }
    }
} */

console.log(dogs.makeNoise());
cats.raining = true;
console.log(cats.makeNoise());

function massHysteria() {
    if (dogs.raining && cats.raining) {
        console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
    }
}

massHysteria();