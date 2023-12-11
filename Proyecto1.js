
const prompt = require('prompt-sync')();


console.log('***********\n CALCULADORA \n ***********\n');


console.log('MENU');
console.log('1. Sumar');
console.log('2. Restar');
console.log('3. Multiplicación');
console.log('4. División');
console.log('5. Salir');

//let operacion = parseInt(prompt('Opción: '));

 
let fin = false; 


while (!fin){
    
    let operacion = prompt('Opción: ');
    switch (operacion){
        case '1':
    
            let n1 = parseFloat(prompt('Inserte el primer sumando: '));
            let n2 = parseFloat(prompt('Inserte el segundo sumando: '));
            let resultado = n1 + n2 ;
            
            console.log( ' Resultado : %s + %s  = %s', n1, n2 , resultado);
            break;
        
        case '2':
            
            let minuendo1 = parseFloat(prompt('Inserte el primer minuendo: '));
            let minuendo2 = parseFloat(prompt('Inserte el segundo minuendo: '));
            let resultadoR = minuendo1 - minuendo2;
            
            console.log(' Resultado : %s - %s  = %s', minuendo1, minuendo2 , resultadoR);
            break;
        
        case '3' :
    
            let m1 = parseFloat(prompt('Inserte el multiplicado: '));
            let m2 = parseFloat(prompt('Inserte el multiplicador: '));
            let resultadoM = m1 * m2;
            console.log(' Resultado : %s * %s  = %s', m1, m2 , resultadoM);
            break;
    
        case '4':
            
            let d1 = parseFloat(prompt('Inserte el primer dividendo: '));
            let d2 = parseFloat(prompt('Inserte el segundo divisor: '));
            let resultadoD = d1 / d2 ;
            console.log('Resultado : %s / %s  = %s', d1, d2 , resultadoD);
            break;
    
        case '5':
            console.log('Fin del programa')
            fin = true;
             break; 
            
    }
    
}




