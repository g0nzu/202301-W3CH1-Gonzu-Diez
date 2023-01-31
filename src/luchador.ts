export class Luchador {
  weapon: string;
  skill: number;
  says: string = 'Primero pego y luego pregunto';

  constructor(weapon: string, skill: number) {
    this.weapon = weapon;
    this.skill = skill;
  }
}
