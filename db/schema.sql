CREATE DATABASE burgersDB;
USE burgersDB;

CREATE TABLE burgers
(
	id INT NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);