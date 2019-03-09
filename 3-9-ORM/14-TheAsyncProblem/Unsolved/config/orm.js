var connection = require("./connection.js");

var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol, callBack) {
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) throw err;
      callBack(result);
    });
  }
};

module.exports = orm;
