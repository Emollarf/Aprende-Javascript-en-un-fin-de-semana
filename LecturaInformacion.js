
const prompt = require('prompt-sync')();

let nombre = 'Elena';
let año= 31;

console.log('Hola me llamo %s',nombre);
console.log('Hola me llamo %s %s',nombre, año);
console.log('Hola me llamo',nombre, año);
console.log('Hola me llamo %s',nombre, 'Valencia');

let informacionLeida = prompt('nombre');
console.log('Has escrito', informacionLeida)