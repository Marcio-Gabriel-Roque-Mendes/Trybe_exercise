# EXERCICIOS 

# Exercício 12 - O Fatorial de um número inteiro é representado pela multiplicação de todos os números predecessores maiores que 0. 
# Por exemplo, o fatorial de 5 é 120 pois 5! = 1 * 2 * 3 * 4 * 5. Escreva um código que calcule o fatorial de um número inteiro.

number = 5
counter = 1
result = 1

while counter <= number:
    result = result * counter
    counter += 1
result

# Exercício 13 - Um sistema de avaliações registra valores de 0 a 10 para cada avaliação. Após algumas mudanças estes valores precisam ser 
# ajustados para avaliações de 0 a 100. Dado uma sequência de avaliações ratings = [6, 8, 5, 9, 10]. Escreva um código capaz de gerar as 
# avaliações após a mudança. Neste caso o resultado deveria ser [60, 80, 50, 90, 100].

# MINHA RESPOSTA
ratings = [6, 8, 5, 9, 10]
result = [x * 10 for x in ratings]
print(result)

# RESPOSTA GABARITO
ratings = [6, 8, 5, 9, 10]
new_ratings = []

for rating in ratings:
    new_ratings.append(rating * 10)

new_ratings

# Exercício 14 - Percorra a lista do exercício 13 e imprima “Múltiplo de 3” se o elemento for divisível por 3.
ratings = [6, 8, 5, 9, 10]
for number in ratings: 
    if number % 3 == 0:
        print(f'{number} é múltiplo de 3')

for number in new_ratings: 
    if number % 3 == 0:
        print(f'{number} é múltiplo de 3')
