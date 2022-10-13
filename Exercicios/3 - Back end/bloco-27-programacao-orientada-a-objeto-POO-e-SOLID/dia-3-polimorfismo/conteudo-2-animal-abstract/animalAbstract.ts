/*
Dicionário en-pt:
- fish: peixe
*/
abstract class Animal2 {
    constructor(public name: string) { }
    abstract move(): void
  }
  class Bird2 extends Animal2 {
    move() { console.log(`${this.name} está voando.`); }
  }
  class Mammal2 extends Animal2 {
    move() { console.log(`${this.name} está andando.`); }
  }
  class Fish extends Animal2 {
    move() { console.log(`${this.name} está nadando.`); }
  }
  const A = new Fish('Tubarão');
  const B = new Bird2('Papagaio');
  const M = new Mammal2('Tatu');
  const myMovee = (animal: Animal2) => {
    animal.move();
  }
  myMove(A);
  myMove(B);
  myMove(M);
  /*
  Saída:
  Tubarão está nadando.
  Papagaio está voando.
  Tatu está andando.
  */