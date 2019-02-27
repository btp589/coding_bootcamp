DROP DATABASE IF EXISTS top_albumsDB;
CREATE DATABASE top_albumsDB;
USE top_albumsDB;

CREATE TABLE albums (
  position INT NOT NULL PRIMARY KEY,
  artist VARCHAR(50) NOT NULL,
  album VARCHAR(50) NOT NULL,
  year INT NOT NULL,
  overall_score DECIMAL(10,3),
  us_score DECIMAL(10,3),
  uk_score DECIMAL(10,3),
  eu_score DECIMAL(10,3),
  other_score DECIMAL(10,3)
);

select * from albums;