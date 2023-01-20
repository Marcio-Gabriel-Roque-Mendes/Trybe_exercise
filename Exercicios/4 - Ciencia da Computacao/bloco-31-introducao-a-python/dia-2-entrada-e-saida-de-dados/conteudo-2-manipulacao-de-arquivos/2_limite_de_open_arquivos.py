# Mas por que devemos sempre fechar um arquivo? A resposta vem do sistema
# operacional: temos uma quantidade limite de arquivos que podemos abrir de
# uma só vez e um erro é retornado quando atingimos esse limite. Vamos ver um
# código para demonstrar a ocorrência de um erro ao abrir muitos arquivos ao
# mesmo tempo:

# arquivos = []
# for index in range(10240):
#     arquivos.append(open(f"arquivo{index}.txt", "w"))

# Comentario Marcio - Não roda esse codigo, ele esta aqui para testar o
# limite de arquivos abertos

# O número que o programa irá falhar pode variar, pois o sistema operacional
# mantém alguns arquivos abertos para seu próprio uso.

# Outro motivo importante para se fechar os arquivos é que normalmente a
# manipulação de arquivos é feita através de buffers. Ou seja, a escrita em
# disco pode não ser imediata. Quando fechamos o arquivo, garantimos que tudo
# aquilo que ainda não está escrito seja persistido.
