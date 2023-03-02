# Número passado por parâmetro à função: 4

# Execução: 4 + 3 + 2 + 1

# Resultado: 10


def sum(n):
    if n == 0:  # caso base
        return 0
    else:
        return n + sum(n - 1)  # caso recursivo # caso recursivo


print(sum(4))
