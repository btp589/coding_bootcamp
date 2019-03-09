var connection = require("./connection.js");

var orm = {

  /* 
   *  Usage example:
   *  orm.select("party_name", "parties");
   * 
   *  will execute this query:
   *  SELECT party_name FROM parties;
   * 
   */
  select: function (whatToSelect, tableInput) {
    // TODO: implement logic to query DB
    // and console.log results
    var query = "select ?? from ??";
    connection.query(query, [whatToSelect, tableInput], function(err, result) {
      if (err) throw err;
      console.log(result);
    })
  },

  /*
   *  Usage example: 
   *  orm.selectWhere("parties", "party_type", "grown-up");
   *
   *  will execute this query:
   *  SELECT * FROM parties WHERE party_type = 'grown-up'
   * 
   */
  selectWhere: function (tableInput, colToSearch, valOfCol) {
    // TODO: implement logic to query DB
    // and console.log results
    var query = "select * from ?? where ?? = ?";
    connection.query(query, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    })
  },

  /*  
   *  Usage example: 
   *  orm.leftJoin(
   *      ["client_name", "party_name"],
   *      "clients",
   *      "parties",
   *      "id"
   *      "client_id"
   *  );
   * 
   *  will exexcute this query:
   *  SELECT client_name, part_name
   *  FROM clients as tableOne
   *  LEFT JOIN parties as tableTwo
   *  ON tableOne.id = tableTwo.clientId
   * 
   */
  leftJoin: function (
    whatToSelect, 
    tableOne, 
    tableTwo, 
    onTableOneCol, 
    onTableTwoCol) {
    // TODO: implement logic to query DB
    // and console.log results
    var query = "select ?? from ?? as tOne";
    query += " left join ?? as tTwo";
    query += " on tOne.?? = tTwo.??";

    connection.query(query, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(err, result) {
      if (err) throw err;
      console.log(result);
    })
  }
};

module.exports = orm;