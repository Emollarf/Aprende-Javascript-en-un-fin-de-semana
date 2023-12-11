
const prompt = require('prompt-sync')();

function sumar (){
    let num1 = parseInt(prompt('Escribe el primer sumando: '));
    let num2 =parseInt(prompt('Escribe el segundo sumando: '));
    return  num1 + num2;
};

function restar (){
    let r1 = parseInt(prompt('Escribe el minuendo: '));
    let r2 =parseInt(prompt('Escribe el sustraendo: '));
    return  r1 - r2;
};


function dividir (){
    let num1 = parseInt(prompt('Escribe el dividendo: '));
    let num2 =parseInt(prompt('Escribe el divisor: ' ));
    return  num1 / num2;
};

function multiplicar (){
    let num1 = parseInt(prompt('Escribe el multiplicando: '));
    let num2 =parseInt(prompt('Escribe el multiplicador: '));
    return  num1 * num2;
}

function calculadora (){
    let fin = false;
    while(!fin){
        let opcion = parseInt(prompt('Opción : '));
        switch(opcion){
            case 1:
                console.log('El resultado de la suma es : ', sumar());
                break;

            case 2:
                console.log('El resultado de la resta es : ', restar());
                break;
            case 3:
                console.log('El resultado de la multiplicacion es : ', multiplicar());
                break;
            case 4:
                console.log('El resultado de la division es : ', dividir());
                break;
            case 5:
                fin = true;
                break;
        }
    }
    console.log('fin del programa')
}


console.log('***********\n CALCULADORA \n ***********\n');


console.log('MENU');
console.log('1. Sumar');
console.log('2. Restar');
console.log('3. Multiplicación');
console.log('4. División');
console.log('5. Salir');


calculadora();