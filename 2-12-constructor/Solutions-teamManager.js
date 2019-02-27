// dependency for inquirer npm package
var inquirer = require("inquirer");

// constructor function for creating player objects
function Player(name, position, offense, defense) {
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;

  this.goodGame = function() {
    if (Math.floor(Math.random() * 2) < 1) {
      this.offense++;
      console.log(this.name + "'s offense has gone up!\n----------");
    }
    else {
      this.defense++;
      console.log(this.name + "'s defense has gone up!\n----------");
    }
  };

  this.badGame = function() {
    if (Math.floor(Math.random() * 2) < 1) {
      this.offense--;
      console.log(this.name + "'s offense has gone down!\n----------");
    }
    else {
      this.defense--;
      console.log(this.name + "'s defense has gone down!\n----------");
    }
  };

  this.printStats = function() {
    console.log("Name: " + this.name + 
      "\nPosition: " + this.position +
      "\nOffense: " + this.offense + 
      "\nDefense: " + this.defense + 
      "\n----------");
  };
}

// arrays used to contain all of our player objects
var starters = [];
var subs = [];
var team = [];

// recursive function which will allow the user to create 5 players and then will print each player's stats afterwards
var createPlayer = function() {
  // if the length of the team array is 5 or higher, no more questions will be asked
  if (starters.length + subs.length < 3) {
    console.log("\nNEW PLAYER!\n");
    inquirer.prompt([
      {
        name: "name",
        message: "Player's Name: "
      }, {
        name: "position",
        message: "Player's position: "
      }, {
        name: "offense",
        message: "Player's Offensive Ability: ",
        validate: function(value) {
          return isNaN(value) === false 
            && parseInt(value) > 0 
            && parseInt(value) <= 10;
        }
      }, {
        name: "defense",
        message: "Player's Defensive Ability: ",
        validate: function(value) {
          return isNaN(value) === false 
            && parseInt(value) > 0 
            && parseInt(value) <= 10;
        }
      }
    ]).then(function(answers) {
      // runs the constructor and places the new player object into the variable player.
      // turns the offense and defense variables into integers as well with parseInt
      var player = new Player(
        answers.name, 
        answers.position, 
        parseInt(answers.offense), 
        parseInt(answers.defense)
      );

      // adds a player to the starters array if there are less than 2 player objects in it.
      // otherwise adds the newest player object to the subs array
      if (starters.length < 2) {
        starters.push(player);
        team.push(player);
        console.log(player.name + " added to the starters");
      }
      else {
        subs.push(player);
        team.push(player);
        console.log(player.name + " added to the subs");
      }
      // runs the createPlayer function once more
      createPlayer();
    });
  }
  else {
    // loops through the team array and calls printStats() for each object it contains
    for (var i = 0; i < team.length; i++) {
      team[i].printStats();
    }
    console.log("subs: ", subs);
    console.log("starters:" , starters);
  }
};

// calls the function createPlayer() to start the code
createPlayer();