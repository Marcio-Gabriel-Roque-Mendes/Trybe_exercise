# Exercício 1: Qual é a Ordem de Complexidade (complexidade de tempo) do
# algoritmo abaixo? E a complexidade de espaço?


def multiply_array(numbers):
    result = 1
    for number in numbers:
        result *= number

    return result


# R - Ordem de Complexidade de tempo é 0n e
# Ordem de complexidade de espaço também é 0n

# Gabarito

# Sobre a complexidade de tempo: Independentemente do tamanho da entrada
# (numbers) o nosso laço for irá percorrer cada elemento do array de tamanho n.
# Por isso, sua complexidade de tempo é O(n).

# Sobre a complexidade espacial, iremos operar sobre um número constante de
# variáveis que, por sua vez, armazenam um único elemento em memória. A
# variável result será responsável por armazenar o resultado numérico de nossa
# operação de multiplicação. Por isso, nossa complexidade espacial é O(1).
