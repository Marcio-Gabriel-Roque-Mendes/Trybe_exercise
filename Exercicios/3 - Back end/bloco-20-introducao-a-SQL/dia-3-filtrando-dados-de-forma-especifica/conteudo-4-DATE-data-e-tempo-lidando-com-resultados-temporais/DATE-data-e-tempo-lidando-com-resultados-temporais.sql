SELECT COUNT(*) FROM sakila.payment WHERE payment_date LIKE '2005-05-25%';

USE sakila;
SELECT COUNT(*) FROM payment WHERE payment_date BETWEEN '2005/07/01' AND '2005/08/22';

SELECT DATE(rental_date) AS Data,
YEAR(rental_date) AS Ano,
MONTH (rental_date) AS Mês,
DAY(rental_date) AS Dia,
HOUR(rental_date) AS Hora,
MINUTE(rental_date) AS Minutos,
SECOND(rental_date) AS Segundos
FROM rental 
WHERE rental_id = 10330;

SELECT * FROM payment WHERE payment_date BETWEEN '2005/07/28 22:00:00' AND
 '2005/07/28 23:59:59' ORDER BY payment_date;
 
 