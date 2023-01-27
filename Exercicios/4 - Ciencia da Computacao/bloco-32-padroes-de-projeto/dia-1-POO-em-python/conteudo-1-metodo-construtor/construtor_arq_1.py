# Em python, esta operação é dividida em dois métodos: 

# __new__ (Construtor) 
# __init__ (Inicializador) 


# ⚠️ Importante: Apesar do método __init__ ser “apenas” o inicializador, é comum ver referências a ele como o construtor. Isso acontece 
# pois são raras as vezes que precisamos alterar o __new__ para customizar nossas classes. Como a comunidade já adotou que “o __init__ é 
# o construtor de objetos no Python“, também vamos seguir essa convenção por aqui 😉 

class Liquidificador: 

    def __init__(self, cor, potencia, tensao, preco): 

        self.preco = preco 

        self.cor = cor 

        self._potencia = potencia 

        self._tensao = tensao 

        self.__ligado = False 

        self.__velocidade = 0 

        self.__velocidade_maxima = 3 

        self.__corrente_atual_no_motor = 0 

# O primeiro parâmetro, o self, representa a instância do objeto, ou seja, tem acesso ao objeto na memória 

# De olho na dica 👀: Em muitas linguagens também é chamado de this, e como em Python é um parâmetro explícito, você pode chamá-lo como 
# quiser, mas self é uma convenção adotada pela comunidade. 

 