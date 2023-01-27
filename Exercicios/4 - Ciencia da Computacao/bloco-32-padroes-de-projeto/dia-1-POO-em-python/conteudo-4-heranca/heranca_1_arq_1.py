# Pensando em eletrônicos, alguns deles possuem características em comum, não é mesmo? Exemplos: tensão, potência, ligado ou desligado 
# e cor. Com isso, podemos perceber que para o construtor de ventilador, televisão e liquidificador, sempre teremos atributos idênticos.

# Sim! E a boa notícia é que podemos evitar essa repetição com o conceito de herança, criando assim uma classe Eletrodomestico.

class Eletrodomestico:
    def __init__(self, cor, potencia, tensao, preco):
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade):
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado

    @property
    def cor(self):
        return self.__cor.upper()

    @cor.setter
    def cor(self, nova_cor):
        self.__cor = nova_cor

# Vamos ver um exemplo de como podemos fazer um Liquidificador herdar de Eletrodomestico:

class Liquidificador(Eletrodomestico):
    pass

# Só por herdar de Eletrodomestico, Liquidificador já possui acesso a todos os métodos e atributos (públicos e protegidos) definidos em 
# Eletrodomestico. Simples assim. Podemos criar novos métodos e atributos que não existem na superclasse a vontade. Novos métodos só precisam 
# ter sua definição, mas novos atributos (declarados no __init__) exigirão o uso de polimorfismo.