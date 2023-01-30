import { Rey } from './rey';
import { Asesor } from './asesor';
import { Luchador } from './luchador';
import { Escudero } from './escudero';

export let characters = [
  { name: 'Joffrey Baratheon', role: new Rey(9) },
  { name: 'Jaime Lannister', role: new Luchador('cuchillo', 7) },
  { name: 'Daenerys Targaryen', role: new Luchador('navaja', 9) },
  { name: 'Tyrion Lannister ', role: new Asesor('Daenerys') },
  { name: 'Bronn', role: new Escudero('Jaime') },
];
