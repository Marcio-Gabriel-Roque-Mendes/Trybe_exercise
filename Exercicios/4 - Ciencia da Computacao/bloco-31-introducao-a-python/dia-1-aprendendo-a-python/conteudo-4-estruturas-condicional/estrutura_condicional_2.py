# WHILE

#  Com o while nós podemos executar um conjunto de declarações enquanto a condição for verdadeira. 

#  No código abaixo mostramos uma implementação da Sequência de Fibonacci, presente em diversas formas na natureza. 
# Ela é uma sequência numérica começando por 0 e 1, e cada termo subsequente corresponde à soma dos dois anteriores.

n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next

# ENUMERATE

# Em Python, um loop for geralmente é escrito como um loop sobre um objeto iterável. Isso significa que você não precisa de uma variável de 
# contagem para acessar itens no iterável.

# Porém, às vezes, pode acontecer de você querer uma variável que muda em cada iteração do loop. Para isso você pode usar enumerate() do 
# Python para obter um contador e o valor do iterável ao mesmo tempo!

languages = ['Python', 'Java', 'JavaScript']

enumerate_prime = enumerate(languages)

# converte um objeto enumerate em uma lista
print(list(enumerate_prime))

# Saída: 
# [(0, 'Python'), (1, 'Java'), (2, 'JavaScript')]

# Você também pode desestruturar (unpack) os itens da lista ou tupla:

languages = ['Python', 'Java', 'JavaScript']

for index, language in enumerate(['Python', 'Java']):
    print(f'{index} - {language}')

# Saída:
# 0 - Python
# 1 - Java

# De olho na dica: na linha 4 você deve ter reparado algo diferente neste código 
print(f'{index} - {language}')
# A letra f usada dentro do print é chamada de f-string. Ela fornece uma maneira de incorporar expressões dentro de strings literais, 
# usando uma sintaxe mínima.