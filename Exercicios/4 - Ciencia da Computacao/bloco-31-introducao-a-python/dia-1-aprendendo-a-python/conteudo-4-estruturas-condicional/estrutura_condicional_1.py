# FOR

# Imagine um sistema que faça a listagem de restaurantes. Estes restaurantes possuem
# uma nota proveniente da avaliação dos seus clientes.

restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

# Quando um cliente pede a listagem de restaurantes, ele pode escolher filtrar o resultado de acordo com a nota.

filtered_restaurants = []
min_rating = 3.0
for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# Em alguns casos, podemos ainda querer percorrer uma sequência numérica, e para isto iteramos sobre a estrutura de dados RANGE.

for index in range(5):
    print(index)

# Quando uma nova lista é criada como resultado de uma iteração, podemos simplificar utilizando compreensão de listas.
# É uma maneira concisa de criação que executa uma operação em cada item da lista já existente.

min_rating = 3.0
filtered_restaurants = [
    restaurant for restaurant in restaurants if restaurant["nota"] > min_rating
]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# Poderíamos listar também somente o nome dos restaurantes, veja o exemplo abaixo:

min_rating = 3.0
filtered_restaurants = [
    restaurant["name"]  # aqui pedimos somente o nome do restaurante
    for restaurant in restaurants
    if restaurant["nota"] > min_rating
]
print(filtered_restaurants)  # imprime a lista de restaurantes, sem o B e D

# O exemplo a seguir usa uma compreensão de listas para criar uma lista com o quadrado dos números entre 1 e 10

quadrados = [x * x for x in range(11)]
print(quadrados)

# Saída
[0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

# Isto é equivalente às operações de -- MAP -- e -- FILTER -- em JavaScript.
