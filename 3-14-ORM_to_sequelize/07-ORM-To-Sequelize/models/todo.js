// Creates a "Todo" model that matches up with DB
module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  }, {
    freezeTableName: true
  });
  return Todo;
};
