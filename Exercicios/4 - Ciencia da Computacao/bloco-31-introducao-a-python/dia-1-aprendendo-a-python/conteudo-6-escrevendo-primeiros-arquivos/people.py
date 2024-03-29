import area


PEOPLE_PER_SQUARE_METER = 2  # numero de pessoas por metro quadrado em média
FIELD_LENGTH = 60  # em metros
FIELD_WIDTH = 45  # em metros
people_at_concert = (
    area.rectangle(FIELD_LENGTH, FIELD_WIDTH) * PEOPLE_PER_SQUARE_METER
)
print("Estão presentes no show aproximadamente", people_at_concert, "pessoas.")


def quadrado(n):
    """Recebe um número n, retorna o quadrado de n"""  # Literal de string
    return n**2


print(quadrado(4))
print(quadrado.__doc__)
