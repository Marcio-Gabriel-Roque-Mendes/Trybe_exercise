# Em seguida faça com que a pessoa tenha um ventilador como atributo através da composição.


class Ventilador:
    def __init__(self, cor, potencia, tensao, preco):

        self.preco = preco

        self.cor = cor

        self._potencia = potencia

        self._tensao = tensao

        self.__ligado = False

        self.__velocidade = 0

        self.__velocidade_maxima = 3

        self.__corrente_atual_no_motor = 0

class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.ventilador = None

    def comprar_ventilador(self, ventilador):
        if ventilador.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= ventilador.preco
            self.ventilador = ventilador

    def __str__(self):
        if(self.ventilador):
            return f'{self.nome} possui um ventilador'
        return f'{self.nome} não possui um ventilado :( '
            # return f"{self.nome} - possui {self.saldo_na_conta} reais em sua conta. E quer comprar um  ventilador da cor {self.cor}, que custa {self.preco}, sua voltagem é {self._tensao}."

ventilador = Ventilador("Cinza", potencia=110, tensao=127,preco=301)
pessoa_calorenta = Pessoa("Carla", saldo_na_conta=378)

pessoa_calorenta.comprar_ventilador(ventilador) # <---- COMO IMPRIMIR ISSO?

print(pessoa_calorenta)


# Crie também um método comprar_ventilador.

# Faça com que o print (__str__) de Pessoa informe se sua instância possui ou não um ventilador.
