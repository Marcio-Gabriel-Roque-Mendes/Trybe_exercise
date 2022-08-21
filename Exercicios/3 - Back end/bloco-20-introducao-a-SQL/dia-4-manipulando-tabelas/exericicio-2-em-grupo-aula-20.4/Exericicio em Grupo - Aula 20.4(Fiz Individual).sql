# 1 - Adicione os dois principais atores filme Matrix na tabela actor
SELECT * FROM sakila.actor;

INSERT INTO sakila.actor(first_name, last_name)
VALUES ('KEANU', 'REEVES');

INSERT INTO sakila.actor(first_name, last_name)
VALUES ('CARRIE-ANNE', 'MOSS');

# 2 - Adicione o filme Matrix 4 na tabela film

SELECT * FROM sakila.film;

INSERT INTO sakila.film (title, release_year, rental_duration, rental_rate, length, replacement_cost, rating, special_features, language_id, `description`)
VALUES('MATRIX 4', 2021, 4, 4.99, 158, 28.99, 'G', 'Behind the Scenes', 1,
'The synopsis indicates the world is still divided into two realities and Neo aka Thomas Anderson is back (for a seventh time?) to fight a new and improved Matrix. What this means exactly, we’ll have to wait and see.');

# 3 - Faça a ligação na tabela film_actor destes registros inseridos anteriormente
INSERT INTO sakila.film_actor(actor_id, film_id)
VALUES(201, 1001),
(202, 1001);

# 4 - Insira na tabela inventory um registro com o id deste filme para a loja com id igual a 1
INSERT INTO sakila.inventory(film_id, store_id)
VALUES(1001, 1);

# 5 - Crie você como pessoa usuária na tabela customer (faça a associação do seu cadastro com um registro já existente na tabela address)
SELECT * FROM sakila.customer;
INSERT INTO sakila.customer(store_id, first_name, last_name, email, address_id, `active`)
VALUES(2, 'MARCIO GABRIEL', 'ROQUE', 'marcio123@gmail.com', 78, 1);

# 6 - Insira os dados de aluguel na tabela rental deste filme, como sendo realizado a retirada do filme no dia 09/08/2022;
INSERT INTO sakila.rental(rental_date, inventory_id, customer_id, staff_id)
VALUES('2022-08-09 16:30:00', 4582, 600, 2);

# 7 - Faça a atualização com a devolução do filme no dia de hoje (09/08/2022) na tabela rental, no registro que foi inserido anteriormente (return_date)
SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.rental
SET return_date = '2022-08-10 14:01:19'
WHERE rental_id = 16050;

# 8 - Faça o delete lógico (update) do seu usuário na tabela customer (mudar o status de active para 0);
SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.customer
SET `active` = 0;

# 9 - Bônus: deletar todos registros inseridos anteriormente;