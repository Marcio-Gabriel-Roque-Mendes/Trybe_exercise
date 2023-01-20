# O with é a palavra reservada para gerenciamento de contexto. Este
# gerenciamento (with) é utilizado para encapsular a utilização de um
# recurso, garantindo que certas ações sejam tomadas independentemente
# se ocorreu ou não um erro naquele contexto.

# A função open retorna um objeto que se comporta como um gerenciador de
# contexto de arquivo que será responsável por abrir e fechar o mesmo. Isto
# significa que o arquivo possui mecanismos especiais que, quando invocados
# utilizando with, alocam um determinado recurso — um arquivo — e o liberam
# quando o bloco for finalizado.

# WITH

# Criamos um contexto, limitando o escopo onde o arquivo está aberto.
# O uso do "as" aqui é somente para atribuir o valor utilizado no 
# contexto à variável file

with open("arquivo.txt", "w") as file:
    file.write("Michelle 27\n")
# como estamos fora do contexto, o arquivo foi fechado
print(file.closed)
