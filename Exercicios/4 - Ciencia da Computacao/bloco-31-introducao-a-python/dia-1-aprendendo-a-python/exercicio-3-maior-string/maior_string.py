# 🚀 Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome
# com a maior quantidade de caracteres. Por exemplo, para
# ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda".

nomes = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]


def maior_nome(names):
    maiorAtual = names[0]
    for nome in names:
        if len(nome) > len(maiorAtual):
            maiorAtual = nome
    return maiorAtual


print(maior_nome(nomes))
