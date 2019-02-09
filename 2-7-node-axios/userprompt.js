// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
    .prompt([
        // Here we create a basic text prompt.
        {
            type: "input",
            message: "What is your name?",
            name: "username"
        },
        // Here we create a basic password-protected text prompt.
        {
            type: "password",
            message: "Set your password",
            name: "password"
        },
        // Here we give the user a list to choose from.
        {
            type: "list",
            message: "Which country would you like to visit?",
            choices: ["Ireland", "Scotland", "France", "Japan", "Canada"],
            name: "country"
        },

        // Here we use checkboxes
        {
            type: 'checkbox',
            message: 'Select transportation type',
            name: 'vehicle',
            choices: [
                new inquirer.Separator(' = 1-Wheeler = '),
                {
                    name: 'Unicycle'
                },
                {
                    name: 'Monocycle'
                },
                {
                    name: 'Others'
                },
                new inquirer.Separator(' = 2-Wheelers = '),
                {
                    name: 'Bicycle',
                    checked: true
                },
                {
                    name: 'Motorcycle'
                },
                {
                    name: 'Vespa'
                },
                {
                    name: 'Moped'
                },
                {
                    name: 'Dirt Bike'
                },
                new inquirer.Separator(' = 3-Wheelers ='),
                {
                    name: 'Tricycle'
                },
                {
                    name: 'Whike'
                },
                new inquirer.Separator(' = 4-Wheelers = '),
                {
                    name: 'Car'
                },
                {
                    name: 'ATV',
                    disabled: 'out of stock'
                },
                {
                    name: 'Truck'
                },
                new inquirer.Separator(' = Others = '),
                {
                    name: 'Boat'
                },
                {
                    name: 'Jet',
                    disabled: 'out of stock'
                },
                {
                    name: 'Helicopter'
                }
            ],
            validate: function (answer) {
                if (answer.length < 1) {
                    return 'You must choose at least one mode of transportation.';
                }

                return true;
            }
        },
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        }
    ])

    //https://github.com/SBoudrias/Inquirer.js/tree/master/packages/inquirer/examples
    .then(function (inquirerResponse) {
        // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
        if (inquirerResponse.confirm) {
            console.log("\nWelcome " + inquirerResponse.username);
            console.log("You want to go to " + inquirerResponse.country);
            console.log("Your " + inquirerResponse.vehicle + " is ready!\n");
        }
        else {
            console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
        }
    });
