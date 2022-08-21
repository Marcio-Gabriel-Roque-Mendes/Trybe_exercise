# 1 - Insira as produções da Pixar na tabela Movies:
SELECT * FROM Pixar.Movies;

USE Pixar;
INSERT INTO Movies(title, director, `year`, length_minutes)
VALUES('Monstros SA', 'Pete Docter', 2001, 92),
('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os Incríveis', 'Brad Bird', 2004, 116),
('WALL-E', 'Pete Docter', 2008, 104);

SELECT COUNT(*) FROM Pixar.Movies;

# 2 - Insira as informações do filme Procurando Nemo tabela BoxOffice
SELECT * FROM Pixar.BoxOffice;
INSERT INTO Pixar.BoxOffice(movie_id, rating, domestic_sales, international_sales)
VALUE(9, 6.8, 450000000, 370000000);

# 3 - Corrija  o nome do diretor do filme "Procurando Nemo" utilizando o comando UPDATE.
SET SQL_SAFE_UPDATES = 0;

UPDATE Pixar.Movies 
SET director = 'Andrew Staton'
WHERE title = 'Procurando Nemo';

# 4 - Corrija o titulo e data de lançamento de Ratatouille
UPDATE Pixar.Movies
SET title = 'Ratatouille', `year` = 2007
WHERE title = 'ratatui';

# 5 - Insira as novas classificações abaixo na tabela BoxOffice
SELECT * FROM Pixar.BoxOffice;
INSERT INTO Pixar.BoxOffice(movie_id, rating, domestic_sales, international_sales)
VALUES(8, 8.5, 30000000, 250000000),
(10, 7.4, 460000000, 510000000),
(11, 9.9, 290000000, 280000000);

UPDATE Pixar.BoxOffice
SET domestic_sales = 300000000
WHERE movie_id = 8;

#6 - Exclua da tabela Movies o filme "WALL-E"
DELETE FROM Pixar.BoxOffice
WHERE movie_id = 11;

DELETE FROM Pixar.Movies
WHERE title = 'WALL-E';

DELETE FROM Pixar.BoxOffice
WHERE movie_id = 9 LIMIT 1;

# 7 - Exclua da tabela Movies todos os filmes dirigidos por "Andrew Staton
DELETE FROM Pixar.BoxOffice
WHERE movie_id IN (1, 2, 5, 6, 9);

DELETE FROM Pixar.Movies
WHERE director = 'Andrew Staton'