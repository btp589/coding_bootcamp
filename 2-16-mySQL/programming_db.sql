DROP DATABASE IF EXISTS programming_db;

CREATE DATABASE programming_db;
USE programming_db;

CREATE TABLE programming_languages (
	id INT NOT NULL AUTO_INCREMENT,
    languages varchar(100),
    rating integer(10),
    mastered boolean default true,
    PRIMARY KEY(id)
);

insert into programming_languages (languages, rating)
values ("C", 83), ("Java", 95), ("Javascript", 100);

select * from programming_languages;

update programming_languages
set languages = "Python"
where id = 2;

select * from programming_languages;

alter table programming_languages
add column difficulty int(10) after  languages;

select * from programming_languages;

update programming_languages
set difficulty = 75
where id = 1;

