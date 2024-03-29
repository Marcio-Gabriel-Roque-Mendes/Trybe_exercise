# A leitura do conteúdo de um arquivo pode ser feita utilizando a função read.
# Para experimentar, vamos escrever em um arquivo e lê-lo logo em seguida!

# escrita
file = open("arquivo1.txt", mode="w")
file.write("Trybe S2")
file.close()

# leitura
file = open("arquivo1.txt", mode="r")
content = file.read()
print(content)
file.close()  # não podemos esquecer de fechar o arquivo

# Um arquivo é também um iterável, ou seja, pode ser percorrido
# em um laço de repetição. A cada iteração, uma nova linha é retornada.
# Vamos fazer igual ao exemplo anterior, porém dessa vez vamos
# escrever mais de uma linha!

# escrita
file = open("arquivo.txt", mode="w")
LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
file.writelines(LINES)
file.close()

# leitura
file = open("arquivo.txt", mode="r")
for line in file:
    print(line)  # não esqueça que quebra de linha também é caractere da linha
file.close()  # não podemos esquecer de fechar o arquivo

# Além de arquivos textuais (como os que manipulamos até agora),
# também existem arquivos binários. Eles são arquivos que contêm
# uma série de bytes e a sua leitura pode variar de acordo com o
# arquivo. Nesse caso, devemos acrescentar um b ao parâmetro mode,
# indicando que será utilizado o modo binário.

# As operações são similares a de um arquivo textual. Porém tanto a
# escrita quanto a leitura devem ser feitas utilizando bytes.

# escrita
file = open("arquivo.dat", mode="wb")
file.write(
    b"C\xc3\xa1ssio 30"
)  # o prefixo b em uma string indica que seu valor está codificado em bytes
file.close()

# leitura
file = open("arquivo.dat", mode="rb")
content = file.read()
print(content)  # saída: b'C\xc3\xa1ssio 30'
file.close()  # não podemos esquecer de fechar o arquivo
