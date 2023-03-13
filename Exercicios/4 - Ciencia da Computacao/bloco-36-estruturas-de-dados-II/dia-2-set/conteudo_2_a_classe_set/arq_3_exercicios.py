# Exercício 6

# Continue os exercícios de fixação para terminar de implementar as operações de conjuntos:

# - difference;
# - issubset;
# - issuperset.

# Solução:

class Conjunto:
    # ...

    def difference(self, conjuntoB):
        new_conjunto = Conjunto()

        for index in range(1001):
            if self.set[index] and not conjuntoB.set[index]:
                new_conjunto.add(index)

        return new_conjunto

    def issubset(self, conjuntoB):
        for index in range(1001):
            if self.set[index] and not conjuntoB.set[index]:
                return False

        return True

    def issuperset(self, conjuntoB):
        for index in range(1001):
            if conjuntoB.set[index] and not self.set[index]:
                return False

        return True


if __name__ == "__main__":
    conj1 = Conjunto()
    for i in [1, 2, 3]:
        conj1.add(i)

    conj2 = Conjunto()
    for i in [7, 2, 10]:
       conj2.add(i)

    conj3 = Conjunto()
    conj4 = conj1.union(conj2)

    print(conj1.issubset(conj4))
    print(conj4.issuperset(conj1))
    print(conj3.issubset(conj4))

# Exercício 7

# Sua trajetória no curso foi um sucesso e agora você está trabalhando para a Trybe! Em um determinado módulo, os estudantes precisam entregar dois trabalhos para seguir adiante. Cada vez que um dos trabalhos é entregue, o nome da pessoa fica registrado. Precisamos saber como está o andamento da entrega das listas. Para isso, você tem acesso aos nomes das pessoas da turma, bem como ao log de quem já entregou qual lista. A partir das listas abaixo, utilize a classe já criada e imprima os resultados das perguntas abaixo:

# estudantes = [1, 2, 3, 4, 5, 6, 7]
# lista1_entregues = [1, 4, 7, 3]
# lista2_entregues = [3, 1, 6]

# Quem ainda não entregou a lista1?

# Quem já entregou as duas listas?

# Quem já entregou qualquer uma das duas listas?

# Quem ainda não entregou nenhuma das listas?

# Solução:

if __name__ == "__main__":
    conj_estudantes = Conjunto()
    conj_lista1 = Conjunto()
    conj_lista2 = Conjunto()

    estudantes = [1, 2, 3, 4, 5, 6, 7]
    lista1_entregues = [1, 4, 7, 3]
    lista2_entregues = [3, 1, 6]
    
    for elem in estudantes:
        conj_estudantes.add(elem)
    
    for elem in lista1_entregues:
        conj_lista1.add(elem)

    for elem in lista2_entregues:
        conj_lista2.add(elem)

    print("Não entregaram a lista 1:", conj_estudantes.difference(conj_lista1))
    print("Já entregaram as 2 listas:", conj_lista1.intersection(conj_lista2))
    print("Quem já entregou pelo menos uma lista:", conj_lista1.union(conj_lista2))
    print("Quem não entregou nenhuma:", conj_estudantes.difference(conj_lista1.union(conj_lista2)))
