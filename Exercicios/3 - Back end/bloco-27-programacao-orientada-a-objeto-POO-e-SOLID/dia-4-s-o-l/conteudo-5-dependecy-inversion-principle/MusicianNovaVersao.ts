
// Musician.ts NOVA VERSÃO
import Flute from './Flute';

export default class Musician {
  /* Não se preocupe com problemas do eslint, estamos usando um exemplo didático */
  // Agora a flauta é recebida como parâmetro
  // Agora o parâmetro da flauta tem um valor padrão caso nenhuma seja passada
  constructor(
    public name: string,
    public flute: Flute = new Flute('Minha flauta'),
  ) { }

  play(): void {
    this.flute.play();
    console.log(
      `"${this.name}" é quem está comandando a emissão das melodias`,
    );
  }
}

const musician = new Musician('Márcia');
musician.play();