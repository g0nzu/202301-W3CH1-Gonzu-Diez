import { Luchador } from './luchador';

export class Escudero {
  says: string = 'No sé por qué, pero creo que voy a morir pronto';
  personajeAsesorado: Luchador | Escudero | Escudero | 'Jaime';

  constructor(personajeAsesorado: Luchador | Escudero | Escudero | 'Jaime') {
    this.personajeAsesorado = personajeAsesorado;
  }
}
