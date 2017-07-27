DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INT(11) NOT NULL AUTO_INCREMENT,
burger_name Varchar(200) NOT NULL,
devoured Boolean DEFAULT false, 
created_at DATETIME NOT NULL,
Primary key (id)
);

