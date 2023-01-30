import { rey } from './rey';
import { escudero } from './escudero';
import { luchador } from './luchador';

export class asesor {
  regnalYears: number;
  says: string = 'No sé por qué, pero creo que voy a morir pronto';
  personajeAsesorado: rey | luchador | escudero | asesor | escudero;

  constructor(
    regnalYears: number,
    personajeAsesorado: rey | luchador | escudero | asesor | escudero
  ) {
    this.regnalYears = regnalYears;
    this.personajeAsesorado = personajeAsesorado;
  }
}
