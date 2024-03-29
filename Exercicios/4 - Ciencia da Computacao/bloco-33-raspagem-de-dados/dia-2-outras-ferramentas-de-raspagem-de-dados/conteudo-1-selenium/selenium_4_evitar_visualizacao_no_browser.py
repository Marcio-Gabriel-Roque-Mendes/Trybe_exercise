# Antes de partirmos para a próxima ferramenta que veremos hoje, aqui vai uma
#  última dica: é muito legal ver o navegador abrir e executar os comandos que
# definimos, porém quando não precisamos ou não queremos ver essa execução,
# podemos evitá-la utilizando as options. Basta importá-las do webdriver,
# adicionar um novo argumento com a opção que deseja e depois passá-la como
# parâmetro para a instância de navegador criada.

from selenium import webdriver
# Importa a classe 'Options' do browser
from selenium.webdriver.firefox.options import Options


firefox = webdriver.Firefox()

# Instancia um objeto da classe 'Options'
options = Options()
# Adiciona um argumento passando o parâmetro '--headless'
options.add_argument('--headless')

# Define que a instância do navegador deve usar as options definidas
firefox = webdriver.Firefox(options=options)

# firefox.get('https://books.toscrape.com/')

# ...
