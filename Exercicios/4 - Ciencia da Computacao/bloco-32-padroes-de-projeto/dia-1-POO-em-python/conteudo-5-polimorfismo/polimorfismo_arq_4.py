# ---- Classe abstrata ----
# Uma classe abstrata é aquela que não pode possuir instâncias a partir dela, existindo apenas para ser herdada.

# Geralmente classes mais genéricas são abstratas, e classes mais específicas herdam delas.

# Para criar uma classe abstrata em Python, basta criar uma classe que herda de abc.ABC:

from abc import ABC


class Database(ABC):
    pass

# ---- Métodos abstratos -----
# Nas classes abstratas podemos ter (mas não temos a obrigação de ter) alguns métodos abstratos, que são métodos que não 
# possuem uma implementação, e servem para obrigar a classe normal que herda da classe abstrata a implementá-los 
# (por meio da sobrescrita de métodos).

# Para declarar um método como abstrato, utilizamos o decorador @abc.abstractmethod, e preenchemos o corpo do método com um pass, 
# com Ellipsis (...) ou com um raise NotImplementedError:

from abc import ABC, abstractmethod


class Database(ABC):
    @abstractmethod
    def execute(self, query):
        ...


class MongoDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mongo")


class MySQLDatabase(Database):
    def execute(self, query):
        print(f"executando query '{query}' no mysql")

