# DUBLES DE TESTE (fakes, mocks, stubs e spies)

# Vamos analisar dois cenários e escrever seus respectivos testes utilizando
# dublês, evitando assim a dependência externa a um arquivo real.

# Nesse primeiro cenário nós temos nossa dependência externa (o arquivo)
# sendo recebido como parâmetro.

import json


def retrieve_pokemons_by_type(type, reader):
    # lê o conteudo de reader e o transforma de json
    # para dicionário
    pokemons = json.load(reader)["results"]
    # filtra somente os pokemons do tipo escolhido
    pokemons_by_type = [
        pokemon for pokemon in pokemons if type in pokemon["type"]
    ]
    return pokemons_by_type
