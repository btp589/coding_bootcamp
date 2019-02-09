function DigitalPal() {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;

  this.feed = function () {
    if (this.hungry) {
      console.log("That was yummy!");
      this.hungry = false;
      this.sleepy = true;
    }
    else if (!this.hungry) {
      console.log("No thanks! I'm full.");
    }
  };

  this.sleep = function () {
    if (this.sleepy) {
      console.log("Zzzzzzzz");
      this.sleepy = false;
      this.bored = true;
      this.increaseAge();
    }
    else if (!this.sleepy) {
      console.log("No way! I'm not tired.");
    }
  };

  this.play = function () {
    if (this.bored) {
      console.log("Yay! Let's play!");
      this.bored = false;
      this.hungry = true;
    }
    else if (!this.bored) {
      console.log("Not right now. Later?");
    }
  };

  this.increaseAge = function () {
    this.age++;
    console.log("Happy Birthday to me! I am " + this.age + " years old!");
  };
}

var animals = {};

animals.dog = new DigitalPal();
var dog = animals.dog;

// dog.feed();
// dog.sleep();
// dog.play();

dog.outside = false;
dog.bark = function () {
  console.log("Woof! Woof!")
};

dog.goOutside = function () {
  if (!this.outside) {
    console.log("Yay! I love the outdoors!");
    this.outside === true;
    this.bark();
  }
  else if (this.outside) {
    console.log("We're already outside though...");
  }
};

dog.goInside = function () {
  if (dog.outside) {
    console.log("Do we have to? Fine...");
    dog.outside === false;
  }
  else if (!dog.outside) {
    console.log("I'm already inside...");
  }
};

dog.goInside();


animals.cat = new DigitalPal();

cat.houseCondition = function () {
  this.houseCondition = 100;
};

console.log(cat.houseCondition);