SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

# OBS: A palavra-chave AS pode ser omitida. Nesse caso, o alias é passado diretamente, após o nome da tabel
SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor a
INNER JOIN sakila.film_actor f
ON a.actor_id = f.actor_i;

# 1 - Monte uma query que exiba o id do ator, nome do ator e id do filme em que ele já atuou usando as tabelas actor e film_actor.
SELECT
    a.actor_id, a.first_name, f.film_id
FROM
    sakila.actor AS a
INNER JOIN
    sakila.film_actor AS f ON a.actor_id = f.actor_id;

# 2 - Use o JOIN para exibir o nome, sobrenome e endereço de cada um dos funcionários do banco. Use as tabelas staff e address.
SELECT
    s.first_name, s.last_name, a.address
FROM
    sakila.staff AS s
INNER JOIN
    sakila.address AS a ON s.address_id = a.address_id;
    
# 3 - Exiba o id, nome e email das primeiras 100 pessoas clientes, ordenados alfabeticamente pelo nome em ordem decrescente, juntamente com o id do endereço e o nome da rua onde mora. Essas informações podem ser encontradas nas tabelas customer e address
SELECT 
    cus.customer_id,
    cus.first_name,
    cus.email,
    ads.address_id,
    ads.address
FROM
    sakila.customer AS cus
        INNER JOIN
    sakila.address AS ads ON cus.address_id = ads.address_id
ORDER BY cus.first_name DESC
LIMIT 100;

# 4 - Exiba o nome, email, id do endereço, endereço e distrito dos clientes que moram no distrito da California e que contêm "rene" em seus nomes. As informações podem ser encontradas nas tabelas address e customer.
SELECT 
    c.first_name, c.email, a.address_id, a.address, a.district
FROM
    sakila.customer AS c
        JOIN
    sakila.address AS a ON c.address_id = a.address_id
WHERE
    a.district = 'California'
        AND c.first_name LIKE '%rene%';
        
# 5 - Exiba o nome e a quantidade de endereços dos clientes cadastrados. Ordene seus resultados por nomes de forma decrescente. Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer.
SELECT 
    cus.first_name, 
    COUNT(ads.address_id)
FROM
    sakila.customer AS cus
        JOIN
    sakila.address AS ads ON cus.address_id = ads.address_id
WHERE
    cus.active = 0
GROUP BY cus.customer_id
ORDER BY first_name DESC;

# 6 - Monte uma query que exiba o nome, sobrenome e a média de valor (amount) paga aos funcionários no ano de 2006. Use as tabelas payment e staff. Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT 
    CONCAT(sta.first_name, ' ', sta.last_name) AS 'Funcionário',
    ROUND(AVG(pay.amount), 3) AS 'Valor Médio Pago'
FROM
    sakila.payment AS pay
        JOIN
    sakila.staff AS sta ON pay.staff_id = sta.staff_id
WHERE
    YEAR(sta.last_update) = 2006
GROUP BY sta.staff_id;

# 7 - Monte uma query que exiba o id do ator, nome, id do filme e titulo do filme, usando as tabelas actor, film_actor e film. Dica: você precisará fazer mais de um JOIN na mesma query.
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.film;

SELECT
    act.actor_id, concat(act.first_name, ' ', act.last_name) as 'Ator/Atriz', fil.film_id, fla.title
FROM
    sakila.actor AS act
JOIN
    sakila.film_actor AS fil ON act.actor_id = fil.actor_id
join sakila.film as fla on fil.film_id = fla.film_id