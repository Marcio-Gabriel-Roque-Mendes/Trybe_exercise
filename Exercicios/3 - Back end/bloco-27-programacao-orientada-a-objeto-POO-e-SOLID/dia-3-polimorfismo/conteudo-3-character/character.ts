  abstract class Character {
    abstract talk(): void;
    abstract specialMove(): void;
  }

  class MeeleeCharacter extends Character {
    constructor(private _name: string, private _specialMoveName: string) {
      super();
    }
  
    talk(): void {
      /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
      console.log(`Hi, I'm ${this._name}. I attack at close range.`);
    }
  
    specialMove(): void {
      /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
      console.log(this._specialMoveName);
    }
  }

  class LongRangeCharacter extends Character {
    constructor(private _name: string, private _specialMoveName: string) {
      super();
    }
  
    talk(): void {
      /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
      console.log(`Hi, I'm ${this._name}. I can attack from a long range. `);
    }
  
    specialMove(): void {
      /* Entra aqui uma implementação exclusiva para os personagens de curto alcance */
      console.log(this._specialMoveName);
    }
    }

    const characterPresentation = (character: Character) => {
        character.talk();
        character.specialMove()
    }

    const yoshi = new MeeleeCharacter('Yoshi', 'golpeia')
    const hummer = new LongRangeCharacter('Hummer', 'salta')

    characterPresentation(yoshi)
    characterPresentation(hummer)