const prompt  = require('prompt-sync')();

console.log('OBJETIVO 7: BOOLEANOS \n');
console.log('FASE 1:BOOLEANOS \n');

let verdadero = true;
let falso = false; 
console.log('valor verdadero:', verdadero);
console.log('valor falso:', false);
console.log('valor verdadero a string:', verdadero.toString());
console.log('valor falso a string:', falso.toString());
verdadero = new Boolean(true);
falso = new Boolean(false);
console.log('valor verdadero:', verdadero);
console.log('valor falso:', falso);
console.log('valor verdadero a string:', verdadero.toString());
console.log('valor falso a string:', falso.toString(), '\n');


console.log('FASE 2:OPERADORES RELACIONALES \n');

/* AND -->&& */

let valorTrue = true;
let valorFalse = false;
console.log('valor true AND true:', (valorTrue&&valorTrue).toString());
console.log('valor true AND false:', (valorTrue&&valorFalse).toString());
console.log('valor false AND false:', (valorFalse&&valorFalse).toString());

// OR--> || (CONTROL ALT GR 1)

console.log('valor true OR true:', (valorTrue || valorTrue).toString());
console.log('valor true OR false:', (valorTrue || valorFalse).toString());
console.log('valor false OR false:', (valorFalse || valorFalse).toString());

// NOT --> !

console.log('NOT true:', (!valorTrue).toString());
console.log('NOT false:', (!valorFalse).toString());

console.log('');

console.log('FASE 3:OPERADORES LÓGICOS \n');

let num1 = parseInt(prompt('Escriba el primer número: '));
let num2 = parseInt(prompt('Escriba el segundo número: '));

console.log('Resultado (', num1, '>', num2, '):', (num1>num2));
console.log('Resultado (', num1, '<', num2, '):', (num1<num2));
console.log('Resultado (', num1, '=', num2, '):', (num1==num2));
console.log('Resultado (', num1, '!=', num2, '):', (num1!=num2));
console.log('Resultado (', num1, '>=', num2, '):', (num1>=num2));
console.log('Resultado (', num1, '<=', num2, '):', (num1<=num2));