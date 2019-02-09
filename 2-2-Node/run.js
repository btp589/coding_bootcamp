var bandList = require("./bands.js");

//console.log(required);

for (var key in bandList) {
    console.log("A " + key + " band is " + bandList[key] + ".")
}