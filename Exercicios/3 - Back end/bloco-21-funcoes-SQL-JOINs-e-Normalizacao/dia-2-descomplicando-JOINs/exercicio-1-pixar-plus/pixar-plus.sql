-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT 
    mv.title, bo.domestic_sales, bo.international_sales
FROM
    pixar.box_office AS bo
        INNER JOIN
    pixar.movies AS mv ON bo.movie_id = mv.id;

-- 🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT 
    mv.title,
    (bf.domestic_sales + bf.international_sales) AS 'Bilheteria Total'
FROM
    pixar.box_office AS bf
        INNER JOIN
    pixar.movies AS mv ON bf.movie_id = mv.id
WHERE
    bf.international_sales > bf.domestic_sales;

-- 🚀 Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT 
    mv.title AS 'Nome do Filme', bx.rating AS 'Avaliação'
FROM
    pixar.movies AS mv
        JOIN
    pixar.box_office AS bx ON mv.id = bx.movie_id
ORDER BY mv.title DESC;

-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
    *
FROM
    pixar.theater AS th
        LEFT JOIN
    pixar.movies AS mo ON th.id = mo.theater_id
    ORDER BY th.name;

-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.SELECT * FROM pixar.movies;
SELECT * FROM pixar.theater;

SELECT 
    *
FROM
    pixar.theater AS th
        RIGHT JOIN
    pixar.movies AS mo ON th.id = mo.theater_id
    ORDER BY th.name;