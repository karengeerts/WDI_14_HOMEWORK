CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR(300),
  director VARCHAR(400),
  actors VARCHAR(500),
  plot VARCHAR(2000),
  poster VARCHAR(400),
  imdbID VARCHAR(15)
);
