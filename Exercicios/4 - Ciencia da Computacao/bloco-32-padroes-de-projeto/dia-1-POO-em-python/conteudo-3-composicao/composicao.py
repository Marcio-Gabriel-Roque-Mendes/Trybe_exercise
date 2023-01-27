class Pessoa: 

    def __init__(self, nome, saldo_na_conta): 
        self.nome = nome 

    self.saldo_na_conta = saldo_na_conta 

    
    def __str__(self): 
        return f"{self.nome} - possui {self.saldo_na_conta} reais em sua conta." 
    
    print(pessoa_cozinheira) 
    # retorno: Jacquin - possui 800 reais em sua conta. 