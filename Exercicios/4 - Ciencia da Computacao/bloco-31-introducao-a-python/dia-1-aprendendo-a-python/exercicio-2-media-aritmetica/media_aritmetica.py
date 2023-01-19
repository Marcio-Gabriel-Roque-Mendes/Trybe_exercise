lista_valores = [25, 98, 46, 8, 66, 41]


def media_aritmetica(lista):
    total = 0
    for number in lista:
        total = total + number
    return total / len(lista)


print(media_aritmetica(lista_valores))
