# ESTRUTURAS CONDICIONAIS

# Vamos imaginar a seguinte situação: em uma análise de dados sobre pessoas desenvolvedoras, temos uma base de dados que contém o salário delas, 
# mas não mostra a informação sobre sua senioridade.

# Para fazer um agrupamento por essa classificação de nível de experiência, precisamos criar uma nova coluna que será baseada no salário:

salary = 4657
position = ""
if salary <= 2000:
    position = "estagiário"
elif 2000 < salary <= 5800:
    position = "júnior"
elif 5800 < salary <= 7500:
    position = "pleno"
elif 7500 < salary <= 10500:
    position = "senior"
else:
    position = "líder"

# Em alguns casos, em que não seja prejudicada a legibilidade, podemos criar estruturas de mapeamento (dicts) para simplificar o aninhamento de 
# condicionais. Como o exemplo a seguir:

key = "id"
from_to = {
    "id": "identifier",
    "mail": "email",
    "lastName": "last_name",
}
from_to[key]