"use strict";
// interface cachorro {
//     _latido: true,
//     _miado: false,
//     _rosnado: true,
//     _familiaCaninos: true,
//     _familiaFelinos: false,
// }
class Cachorro {
    constructor(nome, porte, sexo, idade, filhotes) {
        this._nome = nome;
        this._porte = porte;
        this._sexo = sexo;
        this._idade = idade;
        this._filhotes = filhotes;
    }
    sexoCao() {
        return `O cachorro(a) ${this._nome} é do sexo ${this._sexo}`;
    }
    porteCao() {
        return `${this._nome} é de porte ${this._porte} e tem ${this._idade} anos`;
    }
    filhotesCao() {
        return `Os filhotes de ${this._nome} são ${this._filhotes}`;
    }
}
const caozinho1 = new Cachorro('Maggie', 'médio', 'femea', 6, ['nenhum por enquanto']);
const caozinho2 = new Cachorro('Bud', 'pequeno', 'macho', 3, ['Lecie', 'Thor', 'Princesa']);
console.log(caozinho1.sexoCao());
console.log(caozinho1.porteCao());
console.log(caozinho1.filhotesCao());
console.log(caozinho2.sexoCao());
console.log(caozinho2.porteCao());
console.log(caozinho2.filhotesCao());
