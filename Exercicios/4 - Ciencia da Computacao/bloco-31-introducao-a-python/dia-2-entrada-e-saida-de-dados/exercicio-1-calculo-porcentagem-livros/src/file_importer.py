import json

def importer(file_path):
    with open(file_path) as file:
        return json.load(file)
    ...
