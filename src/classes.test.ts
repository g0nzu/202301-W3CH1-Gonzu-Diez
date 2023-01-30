import { Rey } from './rey';
import { Asesor } from './asesor';
import { Luchador } from './luchador';
import { Escudero } from './escudero';
describe('Given Asesor & king class', () => {
  describe('When we try to make a new asesor', () => {
    test('Then should create a new one with the things we want', () => {
      const reyAsesorado = new Rey(10);
      const asesorPrueba = new Asesor(5, reyAsesorado);
      expect(asesorPrueba.regnalYears).toBe(5);
      expect(asesorPrueba.personajeAsesorado).toBe(reyAsesorado);
    });
  });
});

describe('Given escudero & luchador class', () => {
  describe('When we try to make a new duo', () => {
    test('Then should create a new one with the things we want', () => {
      const luchador = new Luchador('cuchillo', 4);
      const escudero = new Escudero(10, luchador);
      expect(escudero).toBeInstanceOf(Escudero);
      expect(luchador).toBeInstanceOf(Luchador);
    });
  });
});
