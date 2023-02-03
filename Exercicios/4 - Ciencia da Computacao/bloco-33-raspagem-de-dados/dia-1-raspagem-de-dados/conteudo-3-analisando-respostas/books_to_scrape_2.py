import requests
from parsel import Selector

# Ok, que tal extrairmos todos os livros desta primeira página e
# buscar seus títulos e preços?

# Para conseguirmos extrair essas informações precisamos, primeiro, inspecionar
# cada um dos elementos, buscando algo que os identifique de forma única na
# página.

# ...


response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)

# O título está no atributo title em um elemento âncora (<a>)
# Dentro de um h3 em elementos que possuem classe product_pod
titles = selector.css(".product_pod h3 a::attr(title)").getall()
# Estamos utilizando a::attr(title) para capturar somente
# o valor contido no texto do seletor

# Os preços estão no texto de uma classe price_color
# Que se encontra dentro da classe .product_price
prices = selector.css(".product_price .price_color::text").getall()

# Combinando tudo podemos buscar os produtos
# em em seguida buscar os valores individualmente
for product in selector.css(".product_pod"):
    title = product.css("h3 a::attr(title)").get()
    price = product.css(".price_color::text").get()
    print(title, price)

# O seletor principal que contém todo o conteúdo da página pode ser utilizado
# em uma busca para encontrar seletores mais específicos. Podemos fazer isto
# utilizando a função css. Ela recebe um seletor CSS como parâmetro, embora
# podemos passar um tipo especial de seletor quando queremos algum valor bem
# específico como o texto ou um atributo.

# Após definir o seletor, podemos utilizar a função get para buscar o primeiro
# seletor/valor que satisfaça aquela busca. A função getall é similar, porém
# traz todos os valores que satisfaçam aquele seletor.
