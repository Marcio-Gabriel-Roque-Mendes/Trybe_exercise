# ---- Interface ----
# Interfaces são o equivalente a classes abstratas que somente possuem métodos abstratos, ou seja, nenhum método já é implementado. 
# Em algumas linguagens de programação existe uma palavra reservada e uma sintaxe específica para a criação e uso de interfaces. 
# Em Python são apenas classes abstratas comuns que são herdadas por classes normais.

# A diferença de uma classe abstrata para uma interface é que uma classe abstrata pode possuir métodos que as subclasses irão herdar 
# e reaproveitar, enquanto que a interface é só um contrato para definir métodos que devem ser implementados.

# as classes normais devem implementar todos os métodos abstratos que herdaram das classes abstratas

def minha_func(database): # repare que o d é minúsculo
    if isinstance(database, Database):
        database.execute("query qualquer")
    else:
        print(f"{database} não é um Database válido")

db1 = MongoDatabase()
db2 = MySQLDatabase()

minha_func(db1)
minha_func(db2)
minha_func("db_inválido")

# executando query 'query qualquer' no mongo
# executando query 'query qualquer' no mysql
# db_inválido não é um Database válido

# A função isinstance retorna se um objeto é instância de uma classe ou de qualquer uma de suas subclasses.

# Pode não parecer tão impressionante, mas Python possui type hints, e as tipagens poderiam ser avaliadas em tempo de checagem estática, 
# e não de execução, como foi com o uso de isinstance:

# # repare que coloco o tipo do parâmetro, ou seja, `database` é do tipo
# # `Database`
# def minha_func(database: Database):
#     database.execute("query qualquer")
# Colocar a tipagem deixa a função mais simples, pois não será necessário confirmar em tempo de execução que database é de fato uma 
# instância de Database