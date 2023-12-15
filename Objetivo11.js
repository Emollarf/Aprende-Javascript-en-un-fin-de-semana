
console.log('OBJETIVO 11: ARRAYS \n');
console.log('FASE 1: ARRAYS BÁSICO \n');

let animales = [
    'perezoso',
    'cacatua',
    'pingüino',
];

let equipos = new Array ('Barcelona', 'Valencia', 'Madrid');

console.log(animales);
console.log(equipos);

console.log(animales[0]);
console.log(animales[1]);
console.log(animales[2]);

animales[2] = 'canguro';
animales[0] = 'cangrejo';

console.log(animales,'\n');

console.log('FASE 2: MÉTODOS PROPIOS \n');

let animales1 = [
    'Perro',
    'Gato',
    'Periquito',
    'Conejo',
];

console.log(animales1);
console.log('Número de animales:', animales1.length);
console.log( animales1.sort());
animales1 = animales1.sort();
console.log(animales1);
animales1.push('Caballo');
console.log('Número de elementos:',animales1.length);
console.log(animales1);
let eliminado = animales1.pop();
console.log('Elemento eliminado:', eliminado);
console.log('Número de elementos:', animales1.length);
console.log(animales1);
console.log(animales1.toString());
console.log(animales1.join(' | '));
let eliminadoP = animales1.shift();
console.log('Animal eliminado:', eliminadoP);
console.log(animales1);
console.log('Número de elementos:', animales1.length);
//console.log(animales1.unshift('Caballo'));
animales1.unshift('caballo');
console.log(animales1);

animales1 = [
    'Perro',
    'Gato',
    'Periquito',
    'Conejo',
];

animales1.pop();
console.log(animales1);
animales1.splice(1,0,'Caballo','Pez');
console.log(animales1);
animales1.splice(2,1,'Rana', 'Tiburon');
console.log(animales1);
animales1.splice(1,3);
console.log(animales1);

let animales2 = new Array ('Caballo', 'Pez');
let animales3 = new Array ('Rana', 'Conejo');
console.log(animales1);
console.log(animales2);
console.log(animales3);

let animalesUnion = animales1.concat(animales2);
console.log(animalesUnion);
let animalesUnion2 = animales1.concat(animales2,animales3);
console.log(animalesUnion2);
let animalesUnion3 = animales2.concat('Ballena');
console.log(animalesUnion3);

animales = animalesUnion2;
console.log(animales);
console.log(animales.reverse());
let subanimales = animales.slice(2,5);
console.log(subanimales);
let subanimales2 = animales.slice(4);
console.log(subanimales2);

console.log('\n FASE 3: ITERANDO ARRAYS \n');


for ( let i = 0; i<animales.length; i++ ){
    console.log(animales[i])

}

console.log('');

for (i in animales){
    console.log( i, ':', animales[i]);
}

console.log(''); 

for (animal of animales){
    console.log(animal);
}