# Métodos com prefixos get_ e set_ costumam, em Python, ser substituídos por uma forma de acesso mais transparente, para que possam 
# ser utilizados como se fossem atributos públicos. Para isso são utilizados os decoradores (decorators) @property e @propriedade.setter,
# como no exemplo abaixo: 

 

class Liquidificador: 
    # Getter 
    @property 
    def cor(self): 
        return self.__cor.upper() 
    
    @cor.setter # Repare que é @cor.setter, e não @property.setter 
    def cor(self, nova_cor): 
        nova_cor.lower() == "turquesa":
        raise ValueError("Não existe liquidificador turquesa") 
    
    self.__cor = nova_cor 
    
    def __init__(self, cor, potencia, tensao, preco): 
    # Observe que usamos o setter para já validarmos o primeiro valor: 
    # usamos self.cor, que chama o setter, e não self.__cor que manipula 
    # o atributo diretamente 
        self.cor = cor 
    

    # Demais variáveis omitidas para este exemplo 
    
    
    liquidificador = Liquidificador("Rosa", "110", "127", "200") 
    
    print(liquidificador.cor) # ROSA 
    liquidificador.cor = "Vermelho" 
    print(liquidificador.cor) # VERMELHO 