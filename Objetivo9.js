const prompt = require('prompt-sync')();

console.log('OBJETIVO 9: BUCLES \n');
console.log('FASE 1: BUCLE WHILE \n');

let i = 1

while(i<=10){
    console.log(i);
    i++;
}

let valor = 0;
let fin = false; 

while (!fin){
    valor = parseInt(prompt('Escriba un valor mayor que 100:'));
    if(valor>100){
        fin = true;
    } else {
        console.log('Valor por debajo de 100 intente de nuevo');
    }
} console.log('fin del programa');

i=0;
while(i<100){
    i= parseInt(prompt('escriba > 100:'));
    if(i>100){
        console.log('fin del programa');
        break;
    }else{
        console.log('Valor por debajo de 100 intente de nuevo')
    }
}

console.log('FASE 2: BUCLE FOR \n');

for( let i = 1; i<10; i++){
    console.log(i);
};


console.log('FASE 3: BUCLE DO \n');

let valor1 = 0 

do{ valor1 = parseInt(prompt('Escriba numero >100:'));
if(valor1 < 100){
    console.log('numero menor')}
}
 while (valor1<=100);
console.log ('fin del programa')

console.log('FASE 4: BUCLES ANIDADOS \n');

for(let item1 = 0; item1 < 3; item1++){
    for( let j = 0; j< 5; j++){
        console.log ( 'item 1 : %s , item2 :%s', item1, j);
    }
}

i = 0;

while (i<3){
    for( j = 0; j<5; j++){
        console.log('Item 1 : %s Item 2: %s', i, j)
    }
    i++
}


i=0;
j=0;

while (i<3){
    while(j<5){
        console.log('Item 1 : %s Item 2: %s', i, j);
        j++;
    }i++;
}