SELECT * FROM payment WHERE payment_id IN (269, 239, 126, 399, 142) ORDER BY payment_id;

SELECT * FROM address WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou','Texas');

SELECT first_name, last_name, email FROM customer WHERE last_name IN 
('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales','kennedy') ORDER BY first_name;

SELECT email FROM customer WHERE address_id BETWEEN 172 AND 176 ORDER BY email;

SELECT COUNT(*) AS quantidade_de_pagamentos FROM payment WHERE DATE(payment_date) BETWEEN '2005-05-01' AND '2005-08-01';

SELECT title, release_year, rental_duration
FROM sakila.film WHERE rental_duration BETWEEN 3 AND 6 ORDER BY rental_duration DESC, title;

SELECT title, rating FROM sakila.film WHERE rating IN('G', 'PG', 'PG-13') LIMIT 500;