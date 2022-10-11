"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Exercicios = __importStar(require("./exercises"));
console.log(`calculo da area de um losango com diagonal
 maior de 32cm² e diagonal menor 18cm²: ${Exercicios.losango(32, 18)} cm²`);
console.log(`calculo da area de um losango com diagonal
maior de 200cm² e diagonal menor 50cm²: ${Exercicios.losango(200, 50)} cm²`);
console.log(`calculo da area de um losango com diagonal
maior de 75cm² e diagonal menor 25cm²: ${Exercicios.losango(75, 25)} cm²`);
console.log(`calculo da area de um trapezio com altura de 100cm², base
maior de 70cm² e base menor 50cm²: ${Exercicios.trapezio(100, 70, 50)} cm²`);
console.log(`calculo da area de um trapezio com altura de 75cm², base
maior de 50cm² e base menor 35cm²: ${Exercicios.trapezio(75, 50, 35)} cm²`);
console.log(`calculo da area de um trapezio com altura de 150cm², base
maior de 120cm² e base menor 80cm²: ${Exercicios.trapezio(150, 120, 80)} cm²`);
console.log(`calculo da área de um círculo de raio igual 25cm²: ${Exercicios.circulo(25)} cm²`);
console.log(`calculo da área de um círculo de raio igual 100cm²: ${Exercicios.circulo(100)} cm²`);
console.log(`calculo da área de um círculo de raio igual 12,5cm²: ${Exercicios.circulo(12.5)} cm²`);
