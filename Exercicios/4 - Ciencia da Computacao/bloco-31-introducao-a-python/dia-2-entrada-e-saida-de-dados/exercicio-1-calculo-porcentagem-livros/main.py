from src.write_csv import write_csv
from src.calculate_percentage_by_category import (calculate_percentage_by_category)
from src.quantity_books_by_categories import (quantity_books_by_categories)
from src.file_importer import importer
from rich import print


if __name__ == "__main__":
    # retrieve books
    books_data = importer("data/livros.json")

    # count by category
    book_count_by_category = quantity_books_by_categories(books_data)

    # calculate percentage
    number_of_books = len(books_data)
    books_percentage_rows = calculate_percentage_by_category(
        book_count_by_category, number_of_books
    )

    # write csv
    header = ["categoria", "percentagem"]
    with open("report.csv", mode="w") as file:
        write_csv(file, header, books_percentage_rows)
