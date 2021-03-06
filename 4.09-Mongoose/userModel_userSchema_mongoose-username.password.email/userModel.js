var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var UserSchema = new Schema({
  /* TODO:
   * Add four entries into our schema. These should be:
   *
  */
 
  //1: username: A string that will be be required, and also trimmed.
  username: {
    type: String,
    trim: true,
    required: "String is Required"
  },
  //2: password: A string that will be required, trimmed, and at least 6 characters.
  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [
      function(input) {
        return input.length >= 6;
      },
      //Error Message
      "Password should be at least 6 characters long"
    ]
  },
  //3: email: A string that must be a valid email address and unique in our collection.
  email: {
    type: String,
    unique: true,
    //TIP: The regex for checking if a string is an email 
    //is: /.+\@.+\..+/
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },
  //4: userCreated: A date that will default to the current date.
  userCreated: {
    type: Date,
    default: Date.now
  }
});

// This creates our model from the above schema, using mongoose's model method
var User = mongoose.model("User", UserSchema);

// Export the User model
module.exports = User;
