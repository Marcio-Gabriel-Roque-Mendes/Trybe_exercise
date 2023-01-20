import csv


def write_csv(file, header, rows):
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)
