SET SQL_SAFE_UPDATES = 0;

#UPDATE sakila.store
#SET manager_staff_id = 5, address_id = 5
#WHERE store_id = 5;

#SELECT * FROM store;

#UPDATE sakila.actor
#SET first_name = 'JULES'
#WHERE first_name = 'Jules';

#select * FROM actor where first_name = 'Jules';

#UPDATE sakila.category
#SET name = 'Science Fiction'
#WHERE name = 'Sci-fi';

#SELECT * FROM category;

#UPDATE sakila.film
#SET rental_rate = 10.00
#WHERE (length BETWEEN 0 AND 100);

#UPDATE sakila.film
#SET rental_rate = 20.00
#WHERE length > 100;

#UPDATE sakila.film
#SET rental_rate = 25.00
#WHERE length > 100 AND (rating = 'G' OR rating = 'PG' OR rating = 'PG-13') 
#AND replacement_cost > 20.00

SELECT * FROM sakila.film;

