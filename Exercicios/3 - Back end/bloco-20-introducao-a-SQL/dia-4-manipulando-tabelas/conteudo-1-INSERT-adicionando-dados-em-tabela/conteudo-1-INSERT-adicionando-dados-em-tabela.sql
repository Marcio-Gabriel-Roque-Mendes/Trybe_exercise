#SELECT * FROM sakila.actor;

#INSERT INTO sakila.actor(first_name, last_name)
#VALUES ('half', 'migwary');

#INSERT INTO sakila.staff(first_name, last_name, address_id, store_id, active, username)
#VALUES('half', 'migwary', 165, 2, 1, 'half');

#INSERT INTO sakila.staff(first_name, last_name, address_id, store_id, active, username)
#VALUES('Lucius', 'Black', 198, 1, 1, 'Luc'),
#('Jasmine', 'Campbell', 71, 2, 1, 'Jasm')

#SELECT * FROM sakila.staff

#SELECT * FROM sakila.actor;
#INSERT INTO sakila.actor(first_name, last_name)
#   SELECT customer.first_name, customer.last_name 
#   FROM sakila.customer
#   LIMIT 5;
  
#SELECT * FROM sakila.actor;

#SELECT * FROM category;
#INSERT INTO category(name)
#VALUES ('Thriller'),
#('Anime'),
#('Heroes'),
#('Romance'),
#('Romantic Comedy')

#INSERT INTO store(manager_staff_id, address_id)
#VALUES (3, 3)

SELECT * FROM store;