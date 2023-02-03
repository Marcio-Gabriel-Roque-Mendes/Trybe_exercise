# Agora que estamos coletando todos os livros, que tal coletarmos também
# a descrição de cada livro?

# O problema é que a descrição só pode ser acessada navegando até
# a página específica de cada livro.

from parsel import Selector
import requests

URL_BASE = "http://books.toscrape.com/catalogue/"

# Vamos testar com a primeira página
response = requests.get(URL_BASE + "page-1.html")
selector = Selector(text=response.text)

# Recupera o atributo href do primeiro elemento que combine com o seletor
href = selector.css(".product_pod h3 a::attr(href)").get()
print(href)

# Para obter a url completa, basta adicionar a nossa URL_BASE
print(URL_BASE + href)
detail_page_url = URL_BASE + href

# ▶️ A descrição do produto está uma tag p, “irmã” de uma tag com id
# product_description. Isto pode ser expresso através do seletor a.

# No código, precisamos realizar uma nova requisição à página de detalhes
# e depois analisaremos seu conteúdo em busca da descrição do produto.
# Para isso, vamos alterar todo o conteúdo novamente, porém dessa vez

# baixa o conteúdo da página de detalhes
detail_response = requests.get(detail_page_url)
detail_selector = Selector(text=detail_response.text)

# recupera a descrição do produto
# ~ significa a tag irmã
description = detail_selector.css("#product_description ~ p::text").get()
print(description)
