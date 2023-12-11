//const PromptSync = require("prompt-sync");
const prompt = require('prompt-sync')();

console.log('OBJETIVO 4: NÚMEROS\n')

console.log('FASE 1: NUMEROS ENTEROS Y OPERACIONES ARITMETICAS\n')

//operadores

let numero1= 8;
let numero2 = 3;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let modulo = numero1 % numero2;
let division = numero1 / numero2;
let multiplicar = numero1 * numero2;
let exponente = numero1 ** numero2;

console.log('Resultado suma', suma);
console.log('Resultado resta', resta);
console.log( 'Resultado multiplicacion',multiplicar);
console.log('Resultado modulo',modulo);
console.log('resultado division',division);
console.log('resultado exponencia', exponente);
console.log('  ')


//parseInt pasa el string del prompt a en numero 

numero1 = parseInt(prompt('Escribe un numero: '));
numero2 = parseInt(prompt('Escribe numero 2: '));
console.log('El numero 1 es:',numero1);
console.log('El número 2 es:',numero2);

suma = numero1 + numero2;
resta = numero1 - numero2;
multiplicar = numero1 * numero2;
modulo = numero1 % numero2;
division = numero1/numero2;
exponente = numero1**numero2; 

console.log('   ')
console.log('Resultado suma', suma);
console.log('Resultado resta', resta);
console.log( 'Resultado multiplicacion', multiplicar);
console.log('Resultado modulo',modulo);
console.log('resultado division',division);
console.log('resultado exponencia', exponente);

console.log('');

//incremento y decremento de variable
let variable = 7;
console.log('valor de la variable', variable)
variable ++;
console.log('valor despues del incremento', variable);
variable --;
console.log('valor despues del decremento', variable);
console.log('');

console.log('FASE 2: USO DE PARENTESIS\n')
//parentesis

numero1 = parseInt(prompt('Escribe un número: '));
numero2 = parseInt(prompt('Escribe numero 2: '));
let numero3 = parseInt(prompt('Escribe numero 3: '));
let numero4 = parseInt(prompt('Escribe numero 4: '));

let resultado1 = (numero1 * numero2) + numero3 / numero4 ;
let resultado2 = numero1 * (numero2 + numero3 / numero4);
let resultado3 = numero1 * (numero2 + numero3) / numero4;

console.log ('(%s * %s) + %s / %s = %s ',numero1, numero2, numero3, numero4, resultado1);
console.log('%s * (%s + %s / %s) = %s',numero1, numero2, numero3, numero4, resultado2 ); 
console.log('%s * (%s + %s) / %s) = %s', numero1, numero2, numero3 , numero4, resultado3);


console.log('FASE 3: OPERADORES DE ASIGNACION COMPUESTOS\n')

//asignacion compiesta

let numeroAc = 8;
let numeroAc2 = 3;

numeroAc += numeroAc2;

console.log('numeroAc += numeroAc2',numeroAc , numeroAc2);

numeroAc = 8;

numeroAc -= numeroAc2;

console.log('numeroAc -= numeroAc2',numeroAc);

numeroAc =8;
numeroAc *= numeroAc2;
console.log('numeroAc *= numeroAc2',numeroAc);

numeroAc = 8;
numeroAc /= numeroAc2;
console.log('numeroAc /= numeroAc2',numeroAc)

numeroAc = 8;
numeroAc %= numeroAc2;
console.log('numeroAc %= numeroAc2',numeroAc)

numeroAc= 8;
numeroAc **= numero2;

numeroAc = 8;
numeroAc **= numeroAc2;
console.log('numeroAc **= numeroAc2',numeroAc)
console.log('  ')
console.log('  ')


console.log('FASE 4: NUMERO CON DECIMALES')
//numero con decimales


numero1= 9.34;
numero2 = 3.1;

suma = numero1 + numero2;
resta = numero1 - numero2;
modulo = numero1 % numero2;
division = numero1 / numero2;
multiplicar = numero1 * numero2;
exponente = numero1 ** numero2;

console.log('El numero 1 es:',numero1);
console.log('El numero 2 es:',numero2);

console.log('Resultado suma', suma);
console.log('Resultado resta', resta);
console.log( 'Resultado multiplicacion',multiplicar);
console.log('Resultado modulo',modulo);
console.log('resultado division',division);
console.log('resultado exponencia', exponente);
console.log('  ')


//parseFloat pasa el string con decimales del prompt a en numero

let numeroDecimal = parseFloat(prompt('Escribe un numero decimal: '))
let numeroDecimal2 = parseFloat(prompt('Escribe el numero decimal 2: '))

console.log(numeroDecimal);
console.log(numeroDecimal2);

let resultadoSuma = numeroDecimal + numeroDecimal2;
let resultadoResta = numeroDecimal - numeroDecimal2;
let resultadoMultiplicacion = numeroDecimal * numeroDecimal2;
let resultadoDivision = numeroDecimal / numeroDecimal2;
let resultadoModulo = numeroDecimal % numeroDecimal2;
let resultadoExponencia = numeroDecimal ** numeroDecimal2;


console.log('Resultado suma', resultadoSuma);
console.log('Resultado resta', resultadoResta);
console.log( 'Resultado multiplicacion',resultadoMultiplicacion);
console.log('Resultado modulo',resultadoModulo);
console.log('resultado division',resultadoDivision);
console.log('resultado exponencia', resultadoExponencia);
console.log('  ');
