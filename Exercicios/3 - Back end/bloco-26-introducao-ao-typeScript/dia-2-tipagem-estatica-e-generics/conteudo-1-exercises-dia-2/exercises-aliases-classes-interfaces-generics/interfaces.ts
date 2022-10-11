interface cachorro {
    _latido: true,
    _miado: false,
    _rosnado: true,
    _familiaCaninos: true,
    _familiaFelinos: false,
}

interface Felino {
    _nome: string,
    _idade: number
    _brinquedoFav?: string,
    _femea: boolean,
    caracteristicas(): string
}

let gato: Felino = {
    _nome: "Mingau",
    _idade: 11,
    _brinquedoFav: 'bola',
    _femea: false,
    caracteristicas(): string {
        return `${this._nome} tem ${this._idade} anos, é femea? ${this._femea}`;
    }
}

interface Guepardo extends Felino {
    _nome: string,
    _idade: number
    _brinquedoFav?: string,
    _femea: boolean,
    _veloz: 'muito veloz',
    caracteristicas(): string
    acrescimo(): string
}

let guepardo: Guepardo = {
    _nome: "Sheeta",
    _idade: 7,
    _femea: true,
    _veloz: 'muito veloz',
    caracteristicas(): string {
        return `${this._nome} tem ${this._idade} anos, é femea? ${this._femea}`;
    },
    acrescimo(): string{
        return `${this.caracteristicas} e é ${this._veloz}`
    }
}