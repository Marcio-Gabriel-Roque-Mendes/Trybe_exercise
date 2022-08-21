-- Usando a coluna replacement_cost (valor de substituição), vamos encontrar:
SELECT AVG(replacement_cost) FROM sakila.film; -- 19.984000 (Média entre todos registros)
SELECT MIN(replacement_cost) FROM sakila.film; -- 9.99 (Menor valor encontrado)
SELECT MAX(replacement_cost) FROM sakila.film; -- 29.99 (Maior valor encontrado)
SELECT SUM(replacement_cost) FROM sakila.film; -- 19984.00 (Soma de todos registros)
SELECT COUNT(replacement_cost) FROM sakila.film; -- 1000 registros encontrados (Quantidade)

# 1 - Monte um query que exiba a média de duração dos filmes e dê o nome da coluna de 'Média de Duração';
SELECT CEIL(AVG(length)) AS 'Média de duração dos filmes' FROM sakila.film;

# 2 - Monte um query que exiba a duração mínima dos filmes como 'Duração Mínima'
SELECT MIN(length) AS 'Duração Mínima' FROM sakila.film