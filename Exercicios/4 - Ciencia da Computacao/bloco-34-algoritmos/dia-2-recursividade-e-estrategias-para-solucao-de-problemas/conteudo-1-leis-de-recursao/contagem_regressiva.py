# A função countdown abaixo tem como objetivo fazer uma contagem regressiva
# partindo de n até zero.


def countdown(n):
    if n == 0:  # caso base
        print("FIM!")
    else:
        print(n)
        countdown(n - 1)  # caso recursivo


countdown(5)
