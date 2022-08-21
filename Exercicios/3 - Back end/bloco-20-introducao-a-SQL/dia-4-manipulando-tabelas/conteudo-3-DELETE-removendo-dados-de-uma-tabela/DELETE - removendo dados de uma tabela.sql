# 1 - Exclua do banco de dados o ator com o nome de "KARL".

#select * from sakila.actor where first_name = 'KARL';

#DELETE FROM sakila.film_actor
#WHERE actor_id = 12

#DELETE FROM sakila.actor
 #WHERE first_name = 'KARL'

#select * from sakila.actor where first_name = 'KARL

# 2 - Exclua do banco de dados os atores com o nome de "MATTHEW"

#SELECT * FROM sakila.actor WHERE first_name = 'MATTHEW'

#DELETE FROM sakila.film_actor
#WHERE actor_id IN (8, 103, 181)

#DELETE FROM sakila.actor
#WHERE first_name = 'MATTHEW'

#SELECT * FROM sakila.actor WHERE first_name = 'MATTHEW'

# 3 - Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
#SELECT COUNT(*) FROM sakila.film_text 
#SELECT COUNT(*) FROM sakila.film_text WHERE description LIKE '%saga%';

#DELETE FROM sakila.film_text 
#WHERE description LIKE '%saga%';

#SELECT COUNT(*) FROM sakila.film_text WHERE description LIKE '%saga%';
#SELECT * FROM sakila.film_text WHERE description LIKE '%saga%';

#4 - Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category

#TRUNCATE sakila.film_actor;
#TRUNCATE sakila.film_category;

