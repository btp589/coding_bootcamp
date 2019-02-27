var mysql = require("mysql");

var db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Xwryi123!",
  database: "top_songDB"
});

db.connect(function(err){
  if (err) throw(err);
  console.log("Connected at: " + db.threadId)
  findArtist();
});

function findArtist () {
  console.log("See all songs by an artist... \n");
  db.query("SELECT * FROM top5000 WHERE artist = ?", ["the beatles"], function(err, res) {
      if (err) throw err;
      console.log(res);
      //function();
  });
};