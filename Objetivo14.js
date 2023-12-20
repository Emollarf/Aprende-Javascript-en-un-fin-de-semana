
console.log(' \n OBJETIVO 14: MANIPULACIÓN DE FICHERO \n');

console.log(' FASE 1: LECTURA DE FICHEROS DE TEXTO \n');

const fs = require('fs');

// datosleidos = fs.readFileSync(RutaFichero, Codificacion);

const datos = fs.readFileSync('prueba.txt', 'utf8');
console.log(datos);

try{
    fs.statSync('archivo.txt');
    console.log('El fichero existe');
    const archivo = fs.readFileSync('archivo.txt', 'utf8');
    console.log(archivo);
} catch (e){
    console.log('Error: ', e.message)
}

console.log(' FASE 2: ESCRITURA EN FICHEROS DE TEXTO \n');

//writeFileSync(RutaFichero, CadenaTexto);


let cadena = 'En un lugar de la mancha de cuyo nombre no quiero acordarme';

fs.writeFileSync('nuevotexto.txt', cadena);
console.log('El archivo creado correctamente');

const leerArchivo = fs.readFileSync ('nuevotexto.txt', 'utf8');
console.log('FICHERO LEIDO\n',leerArchivo);

fs.writeFileSync('nuevalinea.txt', 'En un lugar de la mancha,\n', {flag:'a+'});
fs.writeFileSync('nuevalinea.txt', 'de cuyo nombre no quiero acordarme\n', {flag:'a+'});
fs.writeFileSync('nuevalinea.txt', 'no ha mucho tiempo que vivia un hidalgo de los da lanza en astillero\n', {flag:'a+'});

console.log('El archivo fue creado correctamente');

const quijote = fs.readFileSync('nuevalinea.txt', 'utf8');
console.log('Fichero leido');
console.log(quijote);