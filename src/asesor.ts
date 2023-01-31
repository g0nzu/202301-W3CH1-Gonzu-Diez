import { Rey } from './rey';
import { Escudero } from './escudero';
import { Luchador } from './luchador';

export class Asesor {
  says: string = 'No sé por qué, pero creo que voy a morir pronto';
  personajeAsesorado:
    | Rey
    | Luchador
    | Escudero
    | Asesor
    | Escudero
    | 'Daenerys';

  constructor(
    personajeAsesorado:
      | Rey
      | Luchador
      | Escudero
      | Asesor
      | Escudero
      | 'Daenerys'
  ) {
    this.personajeAsesorado = personajeAsesorado;
  }
}
