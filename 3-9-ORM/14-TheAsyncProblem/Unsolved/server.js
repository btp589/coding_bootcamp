var orm = require("./config/orm.js");

/* orm.selectWhere("parties", "party_type", "grown-up", function(arg) {
  console.log(arg);
}); */

//console.log(data); // Data is undefined. Why?

// OR

function handleResults(results) {
  console.log(results);
}

orm.selectWhere("parties", "party_type", "grown-up", handleResults);