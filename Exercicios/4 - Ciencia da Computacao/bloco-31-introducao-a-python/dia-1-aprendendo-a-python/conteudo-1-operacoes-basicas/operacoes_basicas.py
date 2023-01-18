# Confimar se esta intalado :
# python3

# Hello World em Python
import antigravity
import this


2 * 3

2 + 3

3 / 2

23 / 8 #cometanrio

2 * 3  # saída: 6

2 + 3  # saída: 5

3 / 2  # saída: 1.5

square_root = 25 ** (1/2)
print(square_root + 1)

print(square_root)

counter = 0

# Forma de incrementação errada em Python
# counter++
#   File "<stdin>", line 1
#     counter++
#              ^
# SyntaxError: invalid syntax

counter =+ 1
print(counter)

# Exercício 1: No terminal, inicialize duas variáveis a e b, sendo a = 10 e b = 5. Mostre o resultado das 7 operações básicas (soma, subtração, 
# multiplicação, divisão, divisão inteira, potenciação e módulo) envolvendo essas variáveis.

a = 10
b= 5

a + b

a- b

a/b

a * b

a // b

a ** b

a % b

# Exercício 2: Declare e inicialize uma variável: hours = 6. Quantos minutos têm em 6 horas? E quantos segundos? Declare e inicialize variáveis
#  minutes e seconds que recebem os respectivos resultados das contas. Depois, imprima cada uma delas.

hours = 6

minutes = hours / 60
print(minutes)

minutes = hours * 60
minutes

seconds = hours * 3600
print(seconds)

print(minutes, seconds)

# Exercício 4: Suponha que o preço de capa de um livro seja R$ 24,20, mas as livrarias recebem um desconto de 40%. O transporte custa 3,00 para
# o primeiro exemplar e 75 centavos para cada exemplar adicional. Qual é o custo total de atacado para 60 cópias? Escreva uma expressão que
# receba o custo total e a imprima.

percentual  = 40 / 100

valorLivros = 24.20 * 60

desconto = valorLivros * percentual

valorLivros - desconto

valorComDesconto = valorLivros - desconto

valorEntrega = 3 + (0.75 * 59)

totalCompra = valorComDesconto + valorEntrega


