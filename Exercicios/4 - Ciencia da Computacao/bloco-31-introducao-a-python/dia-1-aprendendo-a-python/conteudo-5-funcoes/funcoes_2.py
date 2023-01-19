# Em alguns casos, podemos querer limitar um parâmetro em nomeado ou posicional
# para evitar ambiguidades e/ou aumentar legibilidade.

# Função len
len([1, 2, 3, 4])  # função len não aceita argumentos nomeados

len(obj=[1, 2, 3, 4])  # este código irá falhar

# Função print
print("Coin", "Rodrigo", ", ")  # imprime Coin Rodrigo ,

print("Coin", "Rodrigo", sep=", ")
# nomeando o terceiro parâmetro, agora temos a saída: Coin, Rodrigo

lista = [1, 2, 3]
