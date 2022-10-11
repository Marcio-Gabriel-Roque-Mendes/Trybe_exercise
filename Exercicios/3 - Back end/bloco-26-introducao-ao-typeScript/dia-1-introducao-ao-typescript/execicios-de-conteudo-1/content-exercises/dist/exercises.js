"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circulo = exports.trapezio = exports.losango = void 0;
function losango(diagonalMaior, diagonalMenor) {
    return (diagonalMaior * diagonalMenor) / 2;
}
exports.losango = losango;
function trapezio(altura, baseMaior, baseMenor) {
    return ((baseMaior + baseMenor) * altura) / 2;
}
exports.trapezio = trapezio;
function circulo(raio) {
    return 3.14 * (raio ** 2);
}
exports.circulo = circulo;
