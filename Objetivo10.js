const prompt = require('prompt-sync')();


console.log('OBJETIVO 10: FUNCIONES \n');
console.log('FASE 1: USO DE UNA FUNCIÓN \n');

function Saludar(){
    console.log('Hola es tiempo de programar!')
}


Saludar()

let numero = parseInt(prompt('Numero que comprobar: '));
function esMayorQue0 (num){
   
    if ( num> 0){
        console.log('Numero mayor que 0');
    }else{
        console.log('Numero negativo')
    }
};

esMayorQue0(numero);

let sumando1 = parseInt(prompt('Esciber el primer valor de la suma: '));
let sumando2 = parseInt(prompt('Escribe el segundo valor de la suma: '));
function sumar (num1, num2){
     return num1 + num2;
    };

console.log('El resultado de la suma es:',sumar(sumando1, sumando2),'\n');

console.log('FASE 2: FUNCIONES ANIDADAS \n');

function solicitarNumero (){
    let valor = parseInt(prompt('Introduzca un numero:'));
    return valor    
}

function suma(){
    let valor1 = solicitarNumero();
    let valor2 =solicitarNumero();
    console.log('El valor de la suma es ', (valor1 + valor2));
}

suma();


