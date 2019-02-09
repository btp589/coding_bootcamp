var fs = require("fs");

var action = process.argv[2];
var value = process.argv[3];

switch (action) {
    case 'deposit':
    deposit();
    break;
    
    case 'withdraw':
    withdraw();
    break;

    case 'total':
    total();
    break;

    case 'lotto':
    
    break;
}

function deposit() {
    fs.appendFile("bank.txt", value + "\n", function (error) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Bank Account Updated! Deposited: " + value);
        }
    });
}

function withdraw() {
    fs.appendFile("bank.txt", "-" + value + "\n", function (error) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Bank Account Updated! Withdrew: " + value);
        }
    });
}

function total() {
    //call fs.readfile
    fs.readFile("bank.txt", "utf8", function (error, data) {
        if (error) {
            return console.log(error);
        }
        //split it by \n
        var dataArr = data.split("\n");
        var sum = 0;

        //for loop to add up balance in file
        for (var i=0; i< dataArr.length; i++) {
            if (parseFloat(dataArr[i])) {
                sum += parseFloat(dataArr[i]);
            }
        }

        console.log("You have a total of: " + sum.toFixed(2));

    });
}
