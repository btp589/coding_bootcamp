var mysql = require("mysql");

var db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "FightOn",
    database: "playlist_db"
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected at: " + db.threadId);
    readAllData();
});

function readAllData () {
    console.log("See entire table... \n");
    db.query("SELECT * FROM songs", function(err, res) {
        if (err) throw err;
        console.log(res);
        readPopData();
    });
};

function readPopData () {
    console.log("See only pop songs... \n");
    db.query("SELECT genre, COUNT(*) FROM songs GROUP BY genre", function (err, res) {
        if (err) throw err;
        console.log(res);
        db.end();
    });
};