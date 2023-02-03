# O que precisamos fazer é criar um seletor com a página, extrair os dados,
# buscar a nova página e repetir todo o processo, até termos navegados em
# todas as páginas.

# ...
# for product in selector.css(".product_pod"):
#     title = product.css("h3 a::attr(title)").get()
#     price = product.css(".price_color::text").get()
#     print(title, price)

# Existe uma classe next, que podemos recuperar a url
# através do seu elemento âncora

next_page_url = selector.css(".next a::attr(href)").get()
print(next_page_url)
