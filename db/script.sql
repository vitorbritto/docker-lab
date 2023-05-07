CREATE DATABASE IF NOT EXISTS dockerlab;
USE dockerlab;

CREATE TABLE IF NOT EXISTS users (
  id INT(11) AUTO_INCREMENT,
  name VARCHAR(120),
  email VARCHAR(120),
  PRIMARY KEY (id)
);

INSERT INTO users VALUE(1, 'User 1', 'user1@email.com');
INSERT INTO users VALUE(2, 'User 2', 'user2@email.com');
INSERT INTO users VALUE(3, 'User 3', 'user3@email.com');
INSERT INTO users VALUE(4, 'User 4', 'user4@email.com');
INSERT INTO users VALUE(5, 'User 5', 'user5@email.com');
