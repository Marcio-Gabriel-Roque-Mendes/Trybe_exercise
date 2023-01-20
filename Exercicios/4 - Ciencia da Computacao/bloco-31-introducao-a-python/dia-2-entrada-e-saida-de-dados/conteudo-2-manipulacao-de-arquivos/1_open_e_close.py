arquivo = open("arquivo.txt", mode="w")  # ao abrir um arquivo para escrita,
# um novo arquivo é criado mesmo queele já exista, sobrescrevendo o antigo.

# Para escrevermos um conteúdo em um arquivo utilizamos a função write

# file = open("arquivo.txt", mode="w")

arquivo.write("nome idade\n")
arquivo.write("Maria 45\n")
arquivo.write("Miguel 33\n")

# também podemos escrever em um arquivo através do print.

# file.write("Miguel 33\n")

# Não precisa da quebra de linha, pois esse é um comportamento padrão do print
print("Amaterasu 33", file=arquivo)

# Para escrever múltiplas linhas podemos utilizar a função writelines. Repare
# que a função espera que cada linha tenha o próprio caractere de separação(\n)

#
# print("Túlio 22", file=file)


LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
arquivo.writelines(LINES)

# Abrimos o arquivo e escrevemos seu conteúdo. Vamos então fechá-lo:

# file.writelines(LINES)

arquivo.close()
