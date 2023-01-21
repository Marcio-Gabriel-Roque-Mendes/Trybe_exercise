# O módulo csv, contém duas principais funções:

# Um leitor (reader) que nos ajuda a ler o conteúdo, já fazendo as
# transformações dos valores para Python;

# E um escritor (writer) para facilitar a escrita nesse formato.

import csv

with open("graduacao_unb.csv", encoding="utf-8") as file:
    graduacao_reader = csv.reader(file, delimiter=",", quotechar='"')
    # Usando o conceito de desempacotamento
    header, *data = graduacao_reader

print(data)
