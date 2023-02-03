# Estruturas de dados do tipo sequência, como listas, tuplas e strings, podem
# ter seus elementos acessados através de um índice:

# Recupera o primeiro elemento
[1, 2, 3][0]  # Saída: 1

# Podemos também definir dois índices que serão o valor inicial e final de uma
# subsequência da estrutura. Ou três valores, sendo o último o tamanho do
# passo que daremos ao percorrer a subsequência:

# Quando NÂO INCLUSO O VALOR INICIAL, iniciaremos do índice 0
# e do índice 2 em diante, os elementos não são incluídos
(1, 2, 3, 4)[:2]  # Saída: (1, 2)

# Quando OMITIMOS O VALOR FINAL
# o fatiamento ocorre até o fim da sequência
(1, 2, 3, 4)[1:]  # Saída: (2, 3, 4)

# Vá do ÍNDICE 3 A 7.
# O item no índice 7 não é incluído
"palavra"[3:7]  # Saída: "avra"

# Começando do elemento de ÍNDICE 1, vá ATÉ O ÚLTIMO,
# saltando de 2 em 2
[1, 2, 3, 4][1::2]  # Saída: [2, 4]

# Chamamos esta operação de fatiamento. Ela é muito utilizada para obtermos
# uma subsequência de uma sequência.

# À partir da versão 3.9 do Python, teremos uma função chamada removesuffix,
# que é equivalente à palavra[:-len(suffix)].
