# Vamos utilizar uma técnica onde substituiremos a abertura do nosso arquivo
# real por um objeto que possui as implementações funcionais de um arquivo
# (método read, necessário na operação de leitura). Este objeto será alocado
# na memória, “simulando” nosso arquivo real.

# Essa primeira abordagem torna o código menos acoplado a um arquivo e nos
# permite utilizar qualquer objeto (que tenha o método reader) em seu lugar.
# Assim, essa função pode ser reutilizada, por exemplo, para ler pokemons a
# partir de uma requisição web ou outra fonte.

import json
import pytest
from pokemon_arq_1 import retrieve_pokemons_by_type
from io import StringIO


# Criamos o contexto de um pokemon do tipo grama
@pytest.fixture
def grass_type_pokemon():
    return {
        "national_number": "001",
        "evolution": None,
        "name": "Bulbasaur",
        "type": ["Grass", "Poison"],
        "total": 318,
        "hp": 45,
        "attack": 49,
        "defense": 49,
        "sp_atk": 65,
        "sp_def": 65,
        "speed": 45,
    }


# Criamos o contexto de um pokemon do tipo água
@pytest.fixture
def water_type_pokemon():
    return {
        "national_number": "007",
        "evolution": None,
        "name": "Squirtle",
        "type": ["Water"],
        "total": 314,
        "hp": 44,
        "attack": 48,
        "defense": 65,
        "sp_atk": 50,
        "sp_def": 64,
        "speed": 43,
    }


def test_retrieve_pokemons_by_type(grass_type_pokemon, water_type_pokemon):
    # criamos um arquivo em memória que o seu conteúdo são os dois pokemons
    fake_file = StringIO(
        json.dumps({"results": [grass_type_pokemon, water_type_pokemon]})
    )
    # quando pesquisamos por pokemons do tipo grama,
    # o pokemon do tipo água não deve ser retornado
    assert grass_type_pokemon in retrieve_pokemons_by_type("Grass", fake_file)


# StringIO: grava na memoria e não no disco, Sendo muito útil para
# desenvolvedores Júnior, já que nem um instrutor da trybe,
# o Isaac sabia para o que servia e mesmo depois de ler a documentação,
# não encontrou uma razão muito grande para utilizá-la,
# provavelmente é o util em casos muito específicos
