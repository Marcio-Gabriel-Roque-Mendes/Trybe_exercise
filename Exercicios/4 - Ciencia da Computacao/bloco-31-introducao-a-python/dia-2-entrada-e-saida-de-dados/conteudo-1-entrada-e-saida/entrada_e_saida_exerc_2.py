entradas = input("Insira valores aqui, separados por espaço: ")

entradas_array = entradas.split(" ")

somados = 0

for item in entradas_array:
    if not item.isdigit():
        print(f"Erro ao somar valores, {item} é um valor inválido")
    else:
        somados = somados + int(item)


print(f"A soma dos valores válidos é: {somados}")
