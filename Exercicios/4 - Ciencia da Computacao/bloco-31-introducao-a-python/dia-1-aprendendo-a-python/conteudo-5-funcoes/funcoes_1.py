# FUNCAO

# funções são definidas através da palavra reservada def, seguida por um nome e os parâmetros entre parênteses. Como todo bloco de código em
# Python, o caractere : define o início do bloco, e a indentação define seu fim.


def soma(x, y):
    return x + y


soma(2, 2)  # os parâmetros aqui são posicionais

soma(x=2, y=2)  # aqui estamos nomeando os parâmetros

# FUNÇÃO CONSTRUIDA


def concat(*strings):
    # Equivalente a um ", ".join(strings), que concatena os elementos de um iterável em uma string utilizando um separador
    # Nesse caso a string resultante estaria separada por vírgula
    final_string = ""
    for string in strings:
        final_string += string
        if not string == strings[-1]:
            final_string += ", "
    return final_string


# pode ser chamado com 2 parâmetros
print(concat("Carlos", "Cristina"))
# saída: "Carlos, Cristina"

# pode ser chamado com um número n de parâmetros
print(concat("Carlos", "Cristina", "Maria"))
# saída: "Carlos, Cristina, Maria"

# DICT - FUNÇÃO NATIVA

# dict é uma função que já vem embutida no python
dict(
    nome="Felipe", sobrenome="Silva", idade=25
)  # cria um dicionário utilizando as chaves passadas

dict(
    nome="Ana", sobrenome="Souza", idade=21, turma=1
)  # o número de parâmetros passados para a função pode variar
