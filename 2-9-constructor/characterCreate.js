function Character(name, profession, gender, age, strength, HP) {
  this.name = name;
  this.profession = profession;
  this.gender = gender;
  this.age = age; // Expects 1-100
  this.strength = strength; // Expects 1-100
  this.HP = HP; // Expects 1 - 999
  // Prints character stats
  this.printStats = function() {
    console.log("Your Character: \n" + this.name + "\n" + this.profession + "\n" + this.gender + "\n" + this.age + "\n" + this.strength + "\n" + this.HP + "\n");
  };
  // Prints if character is ALIVE or DEAD
  this.isAlive = function() {
    if (this.HP > 0) {
      console.log("Your " + this.profession + " is ALIVE!");
    }
    else {
      console.log("Your " + this.profession + " is DEAD!");
    }
  };
  // Attacks an opponent, subtracting the opponent's HP by the same amount as your strength
  this.attack = function(opponent) {
    var newHP = opponent.HP - this.strength;
    console.log("Your " + this.profession + " attacked " + opponent.name + " the " + opponent.profession + "!!");
    console.log(opponent.name + " has " + newHP + " health remaining.");
  

  };

}

var fighter = new Character("Joe", "Fighter", "Male", 22, 200, 500);
var mage = new Character("Sarah", "Mage", "Female", 27, 87, 200);
var healer = new Character("Ann", "Healer", "Female", 67, 9, 300);

fighter.printStats();
//mage.printStats();
//healer.printStats();

fighter.attack(mage);

fighter.isAlive();
mage.isAlive();