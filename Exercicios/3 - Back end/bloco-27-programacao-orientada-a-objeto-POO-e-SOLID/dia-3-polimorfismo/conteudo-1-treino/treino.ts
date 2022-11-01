class Animal {
    constructor(public name: string) { }
    move() { console.log(`${this.name} está se movendo.`); }
  }
  class Bird extends Animal {
    move() { console.log(`${this.name} está voando.`); }
  }
  class Mammal extends Animal {
    move() { console.log(`${this.name} está andando.`); }
  }
  
  const a = new Animal('Tubarão');
  const b = new Bird('Papagaio');
  const m = new Mammal('Tatu');

  console.log(a, b, m);
  
  
  const myMovee = (animal: Animal) => {
    animal.move();
  }
  myMovee(a);
  myMovee(b);
  myMovee(m);
  
  /*
  Saída:
  Tubarão está se movendo.
  Papagaio está voando.
  Tatu está andando.
  */