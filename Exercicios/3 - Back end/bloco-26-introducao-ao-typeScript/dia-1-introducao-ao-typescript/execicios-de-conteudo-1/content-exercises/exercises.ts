export function losango(diagonalMaior: number, diagonalMenor: number): number {
    return (diagonalMaior * diagonalMenor) / 2
}

export function trapezio(altura: number, baseMaior: number, baseMenor: number): number {
    return ((baseMaior + baseMenor) * altura )/ 2
}

export function circulo(raio: number): number {
    return 3.14 * (raio ** 2)
}