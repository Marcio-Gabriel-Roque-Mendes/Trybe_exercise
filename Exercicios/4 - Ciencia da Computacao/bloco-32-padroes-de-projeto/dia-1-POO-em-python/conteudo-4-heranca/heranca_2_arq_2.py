# Super
# Um método pode chamar um outro método já declarado na superclasse da seguinte maneira:

class A:
    def faz_algo(self, valor):
        print(valor)


class B(A):
    def faz_outra_coisa(self):
        print("Vou printar o valor pelo método criado em A")
        # Chama o método da classe A, que neste caso é a superclasse, passando
        # o `self` explicitamente
        A.faz_algo(self, valor=1)


b = B()
b.faz_outra_coisa()
# Vou printar o valor pelo método criado em A
# 1

# Uma forma de melhorar isso é acessando a superclasse de B (que neste caso é de fato A) sem chamá-la explicitamente, 
# delegando a um método que vai buscar qual que é a superclasse. Esse método é o super(). 

# O exemplo anterior pode ter a linha A.faz_algo(self, valor=1) alterada para super().faz_algo(valor=1). 

# Importante observar a remoção do self na passagem de parâmetros para a faz_algo.

# Mudar de acesso direto para super não somente não traz nenhum prejuízo como ainda traz uma melhoria: 
# Se eu mudar a classe da qual B herda de A para qualquer outra que possua o método faz_algo, tudo continua a funcionar.