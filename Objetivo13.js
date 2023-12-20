console.log(' \n OBJETIVO 13 \n');
console.log(' FASE 1: CONTROLANDO EXCEPCIONES \n');

const prompt = require('prompt-sync')();

function sumar(){
    const sumando1 = parseFloat(prompt('Sumando 1: '));
    const sumando2 = parseFloat(prompt('Sumando 2: '));
    console.log('Resultado suma', (sumando1 + sumando2));
}


/* smar(); */
/* 
try {
    smar();
} catch (e){
    console.log('ERROR: $s', e.message);
} finally {
    console.log('PROGRAMA FINALIZADO')
}

 */
function solicitarNumero (){
    let numero = parseFloat(prompt('Inserte un número del 0 al 10: '));
    if(isNaN(numero)) throw 'El valor introducido no es un número';
    if(numero>10) throw 'Valor del número elevado';
    if(numero<0) throw 'Numero pequeño';
    return numero;
}

try {
    console.log('Numero introducido es: %s ', solicitarNumero() );

} catch (e){
    console.log('Error : %s', e)
} finally {
    console.log('Fin del programa')
}