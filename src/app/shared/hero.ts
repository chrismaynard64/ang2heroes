

export enum HeroClass {
    Warrior = 1,
    Mage,
    Cleric,
    Paladin
}

export class Hero {

    strength: number = 0;
    dexterity: number = 0;
    constitution: number = 0;
    intelligence: number = 0;
    magicAttack: number = 0;
    magicDefense: number = 0;
    meleeAttack: number = 0;
    meleeDefense: number = 0;
    rangedAttack: number = 0;


    constructor(public id: number, public name: string, public imagePath: string, public heroClass: HeroClass = 1) {

       this.strength  = 8 + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6);
       this.dexterity  = 8 + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6);
       this.constitution  = 8 + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6);
       this.intelligence  = 8 + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6);
       this.magicAttack  = 8 + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6);
       this.magicDefense  = 8 + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6);
       this.meleeAttack  = 8 + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6);
       this.meleeDefense  = 8 + Math.floor(Math.random() * 6 + Math.floor(Math.random() * 6));
       this.rangedAttack  = 8 + Math.floor(Math.random() * 6) + Math.floor(Math.random() * 6);
       this.heroClass  = 1 + Math.floor(Math.random() * 4);

    }

}