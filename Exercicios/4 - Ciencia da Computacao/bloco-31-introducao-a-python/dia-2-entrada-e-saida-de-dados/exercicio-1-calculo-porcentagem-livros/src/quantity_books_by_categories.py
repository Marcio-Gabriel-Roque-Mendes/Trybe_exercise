def quantity_books_by_categories(dados_dos_livros):
    dict_categories = {}

    for book in dados_dos_livros:
        for categorie in book["categories"]:
            if not dict_categories.get(categorie):
                dict_categories[categorie] = 0
            dict_categories[categorie] += 1

    return dict_categories
