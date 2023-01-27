# Exercício de fixação 1

# Além do liquidificador, podemos modelar inúmeros eletrodomésticos, tais como: ventilador, batedeira, secador, máquina de lavar e etc.

# Para fixar crie uma objeto da classe Ventilador, semelhante ao exemplo do liquidificador.

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

    def __str__(self): 
        return f"A cor do meu ventilador é {self.cor}, custa {self.preco}, e voltagem é {self._tensao}." 

meu_ventilador = Ventilador('preto', 200, 110, 165)

print(meu_ventilador)


