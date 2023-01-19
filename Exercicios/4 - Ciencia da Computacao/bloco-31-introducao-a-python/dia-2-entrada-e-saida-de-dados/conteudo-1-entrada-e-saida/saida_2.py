# SAIDA DDE ERROS

# Já sabemos que erros podem acontecer e o sistema operacional normalmente espera que um programa escreva seus erros na saída de erros.

# Existe um parâmetro que nos permite modificar a saída padrão para a saída de erros:

import sys


err = "Arquivo não encontrado"
print(f"Erro aconteceu: {err}", file=sys.stderr)

# F-STRING (f-string)

x = 5
y = 3
print(f"{x} / {y} = {x / y:.2f}")  # saída: 5 / 3 = 1.67
# {x} é substituído por 5
# {y} é substituído por 3
# {x / y:.2f} O que vem após os dois pontos são formatadores, como nesse exemplo, duas casas decimais (.2f).
print(f"{x:.^3}")  # saída: ".5."
# . é o caractere utilizado para preencher
# ^ indica que o valor será centralizado
# 3 são o número de caracteres exibidos