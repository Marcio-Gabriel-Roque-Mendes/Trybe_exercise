# Uma string corresponde a um texto dentro de uma tag e esse texto fica
# armazenado na classe NavigableString

import requests
from bs4 import BeautifulSoup

url = "https://quotes.toscrape.com"
page = requests.get(url)
html_content = page.text

soup = BeautifulSoup(html_content, "html.parser")

title = soup.title
footer = soup.footer

# retorna o elemento HTML da tag
print(title)

# Acessando a string de uma tag
print(title.string)

# Verificando o tipo dessa string
print(type(title.string))
