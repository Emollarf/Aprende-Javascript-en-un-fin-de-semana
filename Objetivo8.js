
console.log('OBJETIVO 8: CONTROL DE FLUJO \n');
console.log('FASE 1:SENTENCIAS IF \n');

const prompt = require('prompt-sync')();

let num1 = parseInt(prompt('Escribe un numero menor que 10: '));
let num2 = parseInt(prompt('Escriba un segundo número: '));

/* if (num1 >= 10){
    console.log('¡El numero escrito es mayor que 10!');
} else {
    console.log('El número es menor que 10')
} */

if (num1>=10){
    console.log('¡El numero escrito es mayor o igual que 10!');
} else{
    console.log('El número es menor que 10');
}console.log('El numero es: ',num1, '\n');

if(num1>num2)
{ console.log('Numero 1 es mayor que número 2')
}else{
    if(num1<num2){
        console.log('Número 1 es menor que número 2')}
    else{
        if(num1 == num2){
            console.log('Número uno tiene el mismo valor que numero dos ')
        }
    }
};
    

console.log('FASE 2:SWITCH \n');

console.log('Códigos promocionales: ORO, PLATA, PLATINIUM O BRONCE ')
let codigo = prompt('Escriba su código promocional para saber su descuento: ');

switch(codigo){
    case 'ORO':
        console.log('su descuento promocional 40%');
        break;
    case 'PLATA':
        console.log('descuento del 20%');
        break;
    case 'PLATINIUM':
        console.log('Descuento promocional 50%');
        break;
    case 'BRONCE':
        console.log('15% de descuento');
        break;
    default:
        console.log('codigo no valido');
        break;
};

/* switch(codigo){
    case 1:
        console.log('su descuento promocional 40%');
        break;
    case 2:
        console.log('descuento del 20%');
        break;
    case 3:
        console.log('Descuento promocional 50%');
        break;
    case 4:
        console.log('15% de descuento');
        break;
    default:
        console.log('codigo no valido');
        break;
};
 */


if(codigo == 'ORO'){
    console.log('descuento oro');
}else if(codigo == 'plata'){
        console.log('descuento plata');
    }else if(codigo == 'platinium'){
            console.log('descuento platinium');
        }else if(codigo == 'bronce'){
                console.log('descuento bronce');
            }else{
                console.log('no hay codigo');
            };


// las comillas del codigo de case en caso de que busques un string si es por nummero case 1: