// dependency for inquirer npm package
var inquirer = require("inquirer");

// Constructor to create player objects
function Player(name, position, offense, defense) {
  this.name = name;
  this.position = position;
  this.isStarter = true;
  this.offense = parseInt(offense);
  this.defense = parseInt(defense);
};

// Creates the printStats method and applies it to all player objects
Player.prototype.printStats = function() {
  console.log("Name: " + this.name + 
    "\nPosition: " + this.position +
    "\nOffense: " + this.offense + 
    "\nDefense: " + this.defense + 
    "\n----------");
};

// Creates the goodGame method which increases either the player's offense or defense property based upon a coinflip and applies it to all player objects
Player.prototype.goodGame = function() {
  //increases player's offensive value by 1
  if (offOrDef() < 1) {
    this.offense++;
    console.log(this.name + "'s offense has gone up!\n-------");
  }
  //increases player's defensive value by 1
  else {
    this.defense++;
    console.log(this.name + "'s defense has gone up!\n-------");
  }
};

// Creates the badGame method which decreases either the player's offense or defense property based upon a coinflip and applies it to all player objects
Player.prototype.badGame = function() {
  //increases player's offensive value by 1
  if (offOrDef() < 1) {
    this.offense--;
    console.log(this.name + "'s defense has gone down!\n-------");
  }
  //increases player's defensive value by 1
  else {
    this.defense--;
    console.log(this.name + "'s defense has gone down!\n-------");
  }
};

// Randomly selects a number between 0 < 2
function offOrDef() {
  return Math.floor(Math.random() * 2);
}

// variable we will use to count how many times our questions have been asked
var count = 0;
// array in which we will store each of our new player objects
var team = [];


var createPlayer = function() {
  // if statement to ensure that our questions are only asked five times
  if (count < 3) {
    console.log("\nNEW Player!");

    /* // Adds validator to validate input data
    inquirer.registerPrompt('confirm-validated', require('inquirer-confirm-validated')); */

    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.prompt([
      {
        name: "name",
        message: "What is the player's name?"
      }, {
        name: "position",
        message: "What is the player's position?"
      }, {
        name: "offense",
        message: "What is the player's offensive value (1-10)?",
        validate: function(value) {
          return isNaN(value) === false
          && parseInt(value) > 0
          && parseInt(value) <= 10;
        }
      }, {
        name: "defense",
        message: "What is the player's defensive value (1-10)?",
        validate: function(value) {
          return isNaN(value) === false
          && parseInt(value) > 0
          && parseInt(value) <= 10;
        }
      }
    ]).then(function(answers) {
      // initializes the variable newPlayer to be a player object which will
      // take in all of the user's answers to the questions above
      var newPlayer = new Player(
        answers.name,
        answers.position,
        answers.offense,
        answers.defense);

      // pushes newPlayer object into the team array as a Starter
      if (count < 1) {
        team.push(newPlayer);
        console.log(player.name + " added to the Starters.")
      }

      // pushes the 3rd player object into the team array as a Sub
      else if (count > 1) {
        newPlayer.isStarter = false;
        team.push(newPlayer);
        console.log(player.name + " added to the Subs.")
      }

      // add one to count to increment our recursive loop by one
      count++;
      // run the createPlayer function again so as to either end the loop or ask the questions again
      createPlayer();
    });
    // else statement which runs a for loop that will execute .printStats() for each object inside of our array
  }
  else {
    for (var x = 0; x < team.length; x++) {
      team[x].printStats();
    }

  }
};

// call createPlayer to run our code
createPlayer();

var playGame = function () {

  // Plays the game 5 times
  if (count < 5) {
    console.log("-----------------");
    console.log("Let's PLAY GAME!!");


  }

};