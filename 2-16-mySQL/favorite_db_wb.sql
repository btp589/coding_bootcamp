DROP DATABASE IF EXISTS favorite_db;

CREATE DATABASE favorite_db;
USE favorite_db;

CREATE TABLE favorite_foods (
	food varchar(50) NOT NULL,
    score integer(10)
);

insert into favorite_foods (food, score)
values ("sushi", 100), ("hamburger", 80), ("fried chicken", 75);

select * from favorite_foods;

use favorite_db;
CREATE TABLE favorite_songs (
	song varchar(100) NOT NULL,
    artist varchar(50),
    score integer(10)
);

insert into favorite_songs (song, artist, score)
values ("Song1", "Artist1", 50), ("Song2", "Artist2", 35), ("Song3", "Artist3", 67), ("Song4", "Artist4", 99);

select * from favorite_songs;

CREATE TABLE favorite_movies (
	id INT NOT NULL AUTO_INCREMENT,
    movie varchar(100) NOT NULL,
    five_times BOOLEAN DEFAULT false,
    score integer(10),
    PRIMARY KEY(id)
);

insert into favorite_movies (movie, five_times, score)
values ("Movie1", true, 66), ("Movie2", true, 12), ("Movie3", false, 89);

select * from favorite_movies;