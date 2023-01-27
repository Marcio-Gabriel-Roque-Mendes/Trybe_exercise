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

# SUPER
# Talvez você já conheça o super, mas vamos ver como ele pode ser útil no contexto de sobrescrita de métodos. 
# Imagine que você quer somente melhorar o método da superclasse, por exemplo mudando o valor que ele retorna.

# Não faz sentido, em diversas ocasiões, que você reescreva tudo e modifique só algumas coisas. As vezes você quer 
# reaproveitar o que já foi feito e somente dar uma incrementada. É aí que entra o super.

# Lembrando que o super é uma referência à superclasse, ou seja, a classe da qual você está herdando.

# Na verdade no caso do Python, que possui herança múltipla, é uma referência à próxima classe da MRO (Ordem de Resolução de Métodos).

# Por meio dessa referência, conseguimos você pode acessar métodos da superclasse por meio da subclasse. 
# Para isso utilizamos a notação super().método().

class Liquidificador(Eletrodomestico):
    def esta_ligado(self):
        return "Sim" if super().esta_ligado() else "Não"
    
# Neste exemplo em específico nós modificamos o tipo de retorno do método esta_ligado, retornando strings ao invés de um booleano 
# (ISSO É UMA MÁ PRÁTICA POIS FERE O PRINCÍPIO DE SUBSTITUIÇÃO DE LISKOV, mas vamos ignorar este detalhe para o exemplo continuar simples). 
# Observe que há uma chamada ao mesmo método na superclasse, de forma a não precisar recriar a lógica dele na subclasse. 
# Neste caso aqui é algo simples, pois é só o retorno de um booleano, mas Eletrodomestico.esta_ligado poderia ser um método complexo e custoso, 
# fazendo com que reaproveitá-lo seja a melhor escolha.

class Liquidificador(Eletrodomestico):
    pass

class Ventilador(Eletrodomestico):
    def __init__(self, cor, potencia, tensao, preco, quantidade_de_portas=1):
        # Chamada ao construtor da superclasse
        super().__init__(cor, potencia, tensao, preco)
        
        # Faz outras coisas específicas dessa subclasse
        self.quantidade_de_portas = quantidade_de_portas


class Pessoa:
    def __init__(self, nome, saldo_na_conta):
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.eletrodomesticos = []

    # Permite a aquisição de qualquer eletrodoméstico
    def comprar_eletrodomestico(self, eletrodomestico):
        if eletrodomestico.preco <= self.saldo_na_conta:
            self.saldo_na_conta -= eletrodomestico.preco
            self.eletrodomestico.append(eletrodomestico)