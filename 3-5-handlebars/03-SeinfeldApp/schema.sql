DROP DATABASE IF EXISTS programming_db;

CREATE DATABASE seinfeld_db;
USE seinfeld_db;

-- Created the table "actors" 
CREATE TABLE actors
(
  id int AUTO_INCREMENT,
  name VARCHAR (30) NOT NULL,
  coolness_point int NOT NULL,
  attitude VARCHAR (30) NOT NULL,
  PRIMARY KEY (id)
);

  -- Inserted a set of records into the table
  INSERT INTO actors
    (name, coolness_point, attitude)
  VALUES
    ("Robert Downey Jr", 50, "know it all"),
    ("Dwayne Johnson", 89, "badass"),
    ("Scarlett Johansson", 78, "friendly"),
    ("Adam Sandler", 99, "funny"),
    ("Stephen Ammel", 22, "badass"),
    ("Melissa Benoist", 100, "friendly");
    
select * from actors;