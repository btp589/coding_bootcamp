var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function (error, data) {

    if (error) {
        return console.log(error);
    }

    console.log("Raw data: " + data);

    // Split contents by commas
    var dataArr = data.split(",");

    // Display the content as an array for later use.
    console.log(dataArr);

    // Takes out extra spacces and other marks.
    dataArr.forEach(function(item, index) {
        console.log(index, item.trim());
    });

});
