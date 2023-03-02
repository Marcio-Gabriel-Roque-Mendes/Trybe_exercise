# Exercício 3: Faça um algoritmo qualquer com três loops aninhados um dentro
# do outro. Entenda como ele terá uma complexidade de O(n³)!

# Meu resultado
# def multiply_arrays(array1, array2):
#     result = []
#     number_of_iterations = 0

#     for number1 in array1:
#         print(f"Array 1: {number1}")
#         for number2 in array2:
#             print(f"Array 2: {number2}")
#             while len(result) < 20:
#                 result.append(number1 * number2)
#                 number_of_iterations += 1

#         print(f"{number_of_iterations} iterações!")
#         return result


# meu_array = [1, 2, 3, 4, 5]

# multiply_arrays(meu_array, meu_array)

# R - 00:00:00:73

# time python3 meu_programa.py

# Gabarito


def multiply_arrays(array1, array2, array3):
    result = []
    number_of_iterations = 0

    for number1 in array1:
        for number2 in array2:
            for number3 in array3:
                result.append(number1 * number2 * number3)
                number_of_iterations += 1

    print(f"{number_of_iterations} iterações!")
    return result


# Usar arrays de tamanho 1000 aqui pode ser muito lento!
meu_array = list(range(1, 100))
multiply_arrays(meu_array, meu_array, meu_array)

# 970299 iterações!

# real    0m0,086s
# user    0m0,077s
# sys     0m0,009s
