# Como já aprendemos a realizar requisições HTTP e buscar conteúdo,
# vamos agora analisar este conteúdo e extrair informações.

# Para ajudar na didática, vamos utilizar o site http://books.toscrape.com/.
# Ele é um site próprio para o treinamento de raspagem de dados.

# Em código, vamos baixar o conteúdo da página e criar um seletor,
# que será utilizado para realizarmos as extrações.

from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)
print(selector)
