import { luchador } from './luchador';

export class escudero {
  regnalYears: number;
  says: string = 'No sé por qué, pero creo que voy a morir pronto';
  personajeAsesorado: luchador;

  constructor(regnalYears: number, personajeAsesorado: luchador) {
    this.regnalYears = regnalYears;
    this.personajeAsesorado = personajeAsesorado;
  }
}
