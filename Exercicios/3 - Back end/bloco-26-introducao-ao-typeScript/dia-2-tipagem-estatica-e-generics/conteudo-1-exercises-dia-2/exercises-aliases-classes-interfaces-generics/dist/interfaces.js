"use strict";
let gato = {
    _nome: "Mingau",
    _idade: 11,
    _brinquedoFav: 'bola',
    _femea: false,
    caracteristicas() {
        return `${this._nome} tem ${this._idade} anos, é femea? ${this._femea}`;
    }
};
let guepardo = {
    _nome: "Sheeta",
    _idade: 7,
    _femea: true,
    _veloz: 'muito veloz',
    caracteristicas() {
        return `${this._nome} tem ${this._idade} anos, é femea? ${this._femea}`;
    },
    acrescimo() {
        return `${this.caracteristicas} e é ${this._veloz}`;
    }
};

console.log(guepardo);