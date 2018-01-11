CREATE database yacapp;

\c yacapp;

CREATE TABLE cute_kittens (
  id SERIAL PRIMARY KEY,
  name VARCHAR(300),
  skillz VARCHAR(300),
  image_url VARCHAR(400)
);

\dt

INSERT INTO cute_kittens(name, skillz, image_url) VALUES ('Nerone','hugs','https://www.catprotection.com.au/wp-content/uploads/2018/01/20180110_131301-1305x1600.jpg');

SELECT * FROM cute_kittens;
