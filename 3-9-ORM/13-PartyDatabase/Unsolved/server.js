var orm = require("./config/orm.js");

// Select the "column" from "table"
orm.select("party_name", "parties");
orm.select("client_name", "clients");

// 
orm.selectWhere("parties", "party_type", "grown-up");


// 
orm.leftJoin(
  ["client_name", "party_name"],
  "clients",
  "parties",
  "id",
  "client_id"
);
