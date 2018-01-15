-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns

-- Get all information about all authors
SELECT * from authors;
-- Get just the name and birth year of all authors
SELECT name, birth_year FROM authors;
-- Get all authors born in the 20th centruy or later
SELECT * from authors where birth_year >=1900;
-- Get all authors born in the USA
SELECT * from authors where nationality = 'United States of America';
-- Get all books published on 1985
SELECT * from books WHERE publication_date = 1985;
-- Get all books published before 1989
SELECT * from books WHERE publication_date < 1989;
-- Get just the title of all books.
SELECT title from books;
-- Get just the year that 'A Dance with Dragons' was published
SELECT publication_date from books where title='A Dance with Dragons';
  -- Cry when you realize how long it's been
-- :'(

-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
SELECT * from books WHERE title LIKE '%the%';
-- Add yourself as an author
INSERT INTO authors(name, nationality, birth_year) VALUES ('Karen Geerts', 'Belgium', 2000);

-- Add two books that you'd like to write (you can hard-code your id as the author id)
INSERT INTO books(title, publication_date, author_id) VALUES('I had a dream', 2016, 99);
INSERT INTO books(title, publication_date, author_id) VALUES('I had a nightmare', 2017, 99);

-- Update one of your books to have a new title
UPDATE books SET title = 'I had a pony' WHERE title = 'I had a nightmare';
-- Delete your books
DELETE FROM books WHERE author_id = 99;
-- Delete your author entry
DELETE FROM authors where name='Karen Geerts';
