# Exercício 1: Inicializando a classe e adicionando elementos

# Crie uma classe chamada Conjunto;

# Escreva um construtor que defina uma lista do tamanho necessário. Inicialize todos os valores com False, uma vez que ainda não temos valores 
# adicionados;

# Crie um método add(item) que recebe um valor até 1000 e adiciona no conjunto;

# Na main (dentro de: if __name__ == "__main__":), instancie um objeto do tipo Conjunto e adicione os valores.

# [0, 10, 100, 1000]
# Solução:


class Conjunto:
    def __init__(self):
        self.set = [False] * 1001
        self.last_element = 0

    def add(self, item):
        if not self.set[item]:
            self.set[item] = True
        if item > self.last_element:
            self.last_element = item


if __name__ == "__main__":
    conj = Conjunto()

    for item in [0, 10, 100, 1000]:
        conj.add(item)


# Exercício 2: Imprimir

# Caso tenhamos que imprimir na tela o nosso objeto, o comando print(conjunto) não irá funcionar. O que será impresso é o endereço de memória onde
# o objeto está guardado, e não é isso que queremos. Para que o comando print funcione, precisamos que a nossa classe tenha um método 
# chamado __str__ e é o que faremos agora:

# Crie um método com a assinatura abaixo:

# def __str__(self):
#     # retorno: uma string que representa o seu objeto

# Exemplos de entrada e saída:
# A = {1, 2, 3}
# # saída: '{1, 2, 3}'

# B = {7, 2, 10}
# # saída: '{2, 7, 10}'

# C = {}
# # saída: '{}'
# A saída não precisa ser ordenada, até mesmo porque um conjunto não leva a ordem em consideração. A saída pode ser em qualquer ordem, 
# mas provavelmente será mais fácil retornar em ordem. 

# Teste seu método imprimindo os objetos que você criou.

# Solução:


class Conjunto:
    # ...

    def __str__(self):
        string = "{"

        for index, is_in_set in enumerate(self.set):
            if is_in_set:
                string += str(index)
                if index < self.last_element:
                    string += ", "

        string += "}"
        return string


if __name__ == "__main__":
    conj = Conjunto()
    for i in [0, 10, 100, 1000]:
        conj.add(i)
    print(conj)

    conj2 = Conjunto()
    for i in [1, 2, 3]:
        conj2.add(i)
    print(conj2)

    conj3 = Conjunto()
    for i in [7, 2, 10]:
        conj3.add(i)
    print(conj3)

    conj4 = Conjunto()
    print(conj4)

# Exercício 3: is_in

# Caso queiramos saber se um elemento faz parte ou não do conjunto usando o operador in precisamos que a nossa classe tenha um método 
# chamado __contains__ e é o que faremos agora:

# Crie um método com a assinatura abaixo:
# def __contains__(self, item):
#     # retorno: True, caso o elemento faça parte. False, caso o elemento não faça parte.

# Exemplos de entrada e saída:
# A = {1, 2, 3}

# # entrada: 1
# # saída: True

# # entrada: 0
# # saída: False

# Solução


class Conjunto:
    # ...

    def __contains__(self, item):
        return self.set[item]


if __name__ == "__main__":
    # ...

    conj = Conjunto()
    for i in [1, 2, 3]:
        conj.add(i)
    print(conj)
    print(1 in conj)
    print(0 in conj)

    # ...

# Exercício 4: União

# União: Todos os elementos que estão em A OU em B

# Crie um método com a assinatura abaixo, que recebe como parâmetro outro objeto da classe Conjunto:

# def union(self, conjuntoB):
#     # retorno: outro objeto Conjunto com união do próprio objeto com o conjuntoB
# Na main, instancie dois objetos do tipo Conjunto. Preencha o primeiro com os valores de 1 a 10, e o segundo, com valores de 10 a 20;

# Imprima na tela a união dos dois conjuntos.

# Solução


class Conjunto:
    # ...

    def union(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] or conjuntoB.set[index]:
                new_conjunto.add(index)

        return new_conjunto


if __name__ == "__main__":
    # ...

    conj1 = Conjunto()
    for i in range(1, 11):
        conj1.add(i)

    conj2 = Conjunto()
    for i in range(10, 21):
        conj2.add(i)

    conj3 = conj1.union(conj2)
    print(conj3)

# Exercício 5: Intersecção

# Intersecção: Todos os elementos que estão em A E em B

# Crie um método com a assinatura abaixo, que recebe como parâmetro outro objeto da classe Conjunto:

# def intersection(self, conjuntoB):
#     # retorno: outro objeto Conjunto com intersecção do próprio objeto com o conjuntoB

# Exemplos de entrada e saída:
# A = {1, 2, 3}
# B = {3, 4, 5}
# # saída: {3}

# C = {0, 3, 6, 9}
# B = {12, 15, 18}
# saída: {}

# Solução


class Conjunto:
    # ...

    def intersection(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and conjuntoB.set[index]:
                new_conjunto.add(index)

        return new_conjunto


if __name__ == "__main__":
    # ...

    conj1 = Conjunto()
    for i in [1, 2, 3]:
        conj1.add(i)

    conj2 = Conjunto()
    for i in [7, 2, 10]:
        conj2.add(i)

    conj3 = conj1.intersection(conj2)
    print(conj3)

    # ...
