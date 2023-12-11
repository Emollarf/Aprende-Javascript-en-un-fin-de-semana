// Fase 1. Manejo basico de las cadenas

console.log('OBJETIVO 5 \n');
console.log('FASE 1: MANEJO BASICO DE LAS CADENAS\n');

// Strings (cadenas de texto) uso de cualquier tipo de comillas

console.log("comillas dobles");
console.log('comillas simples');
console.log("comillas dobles 'dentro comillas simples'");
console.log('comillas simples "dentro comillas dobles"');

// caracter escape

console.log('comillas simples \'comillas simples\'');
console.log("comillas dobles \"comillas dobles\"\n");


//caracteres especiales con caracter escape

console.log('Barra inversa se representa \\ para poder aparecer una barra inversa ya que por si sola no aparecera');
console.log('Nueva linea se representa por el caràcter "barra inversa-n" \n nueva linea' );
console.log('retorno de carro se representa "\\-r" \r retorno de carro hace que empiece como un espacio dentro');
console.log('tabulacion vertical barra-v \v tabulacion vertical ');
console.log('Tabulacion barra-t \t aqui tabulo');
console.log('Retroceso se representa catacter b retocediendo \b ');
console.log('avance de pagina \f que sea lo que sea');

console.log('');

console.log('Esta cadena compuesta \n por dos lineas y que incluye \\ ');
console.log('');
console.log('Cadenas con dos lineas \n \t y la segunda tabulada');
console.log('');
console.log('Cadenas con dos lineas \n \v la segunda tabulada verticalmente');

console.log('');

//concatenar cadenas
 
let cadena1 = 'cadena1' + ' cadena2';
console.log(cadena1);

let cadena2 = cadena1 + ' cadena3';
console.log(cadena2);

let cadena3 = cadena1 + " " + cadena2;
console.log(cadena3);

//definir cadenas largas, escritas en varias líneas

let cadena = 'Esta es una cadena que la hemos \
dividido en varias lineas porque \
si no lo hacemos el codigo no \
se podria leer facilmente';
console.log(cadena);

console.log('');

// METODOS PROPIOS DE CADENAS

console.log ('FASE 2: METODOS PROPIOS DE CADENAS\n')

/* formato para manipular cadenas CadenaDeTexto.Método(parámetros);
metodos disponibles .length --> numero de caracteres que presenta la cadena.
                    .charAt --> devuelve el caracter que ocupa la poscion indicada como parametro
                    .charCodeAt --> devuelve el codigo ASCII del caracter que ocupa la posicion indicada como parametro
                    [] --> no es un metodo pero permitre acceder a la posicion que ocupa el caracter entre corchetes
                    indexOf --> devuelve la primera ocurrencia de la cadena pasada como parametro en la cadena. Tiene un segundo parametro opcional que permite indicar la poscion de la cadena por la cual empezar a buscar.
                    lastIndezOf --> devuelve la primera ocurrencia de la cadena pasada como parametro en la cadena empezando la busqueda desde el final. Tambiíen tiene el segundo paramentro opcional.
                    search --> mismo que indexOf pero no permite el segundo paramentro.
                    slice --> devuelve la cadena de texto a partir de la cadena original. Recibe dos parametros, primero obligatorio e indica la primera posicion de la cadena original, el segundo opcional e indica la ultima posicion de la cadena original, que sera hasta el final de la cadena si no se incluye dicho parametro. Valido introducir valores negativos.
                    substring --> mismo que slice pero no admite valores negativos.
                    substr -->devuelve una cadena de texto apartir de la cadena original, pero en el que los paranetros son el indice en el que empieza la cadena y la longitud de esta. si no se especifica el segundo paramentro se devolvera hasta el final de la cadena.
*/

let string = 'En un lugar de la mancha';
console.log(string);
console.log('Número de caracteres:', string.length);
console.log('Carácter en la posición 4:', string.charAt(4));
console.log('Caracter en la posición 8:', string.charCodeAt(8));
console.log('Carácter en la posición 19:', string[19]);
console.log('Carácter en la posición 4:', string[4]);

/*  métodos de la clase string:
   
 */

console.log('Cadena:', string);
console.log('Posicion de la cadena \'lugar\'(indexOf):', string.indexOf('lugar'));
console.log('Posicion de la cadena \'lugar\'(search):', string.search('lugar'));

console.log('')

string = '¿En qué lugar aparece la palabra "lugar"?';
console.log('Cadena:', string);
console.log('indexOf "lugar" sin segundo paramentro:', string.indexOf('lugar'));
console.log('indexOf "lugar" con segundo paramentro:', string.indexOf('lugar', 20));
console.log('lastIndexOf "lugar" sin segundo paramentro:', string.lastIndexOf('lugar'));
console.log('lastIndexOf "lugar" con segundo paramentro:', string.lastIndexOf("lugar",20));

console.log('');

string = 'coche, moto, avion, helicoptero';
console.log ('cadena:', string);
console.log('slice 7-11:', string.slice(7,11));
console.log('slice-13-final;', string.slice(13));
console.log('slice(-18) -(-13);', string.slice(-18,-13));
console.log('substring 7 - 11', string.substring(7,11));
console.log('substring 13 - final', string.substring(13));
console.log('substr 7-4', string.substr(7,4));
console.log('substr 13-final ', string.substr(13));
console.log('')

/*  toUpperCase() --> convierte todos los caracteres en mayusculas
    toLowerCase()--> todos los caracteres en minusculas 
 */

cadena = 'un lugar de la mancha';
console.log('cadena:', cadena);
console.log('cadena en mayusculas:', cadena.toUpperCase());
cadena = cadena.toUpperCase();
console.log('cadena:',cadena);
console.log('cadena en minusculas:', cadena.toLowerCase());

/*  concat --> devuelve una cadena formada por la cadeba que ejecuta en metodo unida a las cadenas pasadas como parametros
    replace --> devuelve  una cadena habiendo realizado el reemplazo de la primera cadeba de los parametros por la segunda en la cedena original. realiza el reemplazo de la primera ocurriencia de la cadena y distingue entre mayusculas y minusculas 
    */

cadena = 'uno, dos, tres';

console.log('cadena:', cadena);
cadena = cadena.concat(', cuatro, cinco');
console.log('cadena:', cadena);
cadena2 = 'seis, siete';
cadena = cadena.concat(',',cadena2);
console.log('cadena:', cadena);
cadena = cadena.replace('dos,', 'two,');
console.log('cadena reemplazada:', cadena);
cadena = cadena.replace('Uno', 'one');
console.log('cadena no reemplazada:', cadena);


/*  trim --> elimina todos los espacios en blanco al principio y al final de la cadena de texto.
    startsWith --> indica si la cadena empieza por la cadena pasada por parametros respuesta true or false
    endsWith --> devuelve si la cadena termina por la cadena pasada por parametros respuesta true or false
 */

console.log('')

cadena = ' uno, dos, tres ';
console.log('cadena:', cadena);
cadena = cadena.trim();
console.log('cadena:', cadena, '.');
cadena2 = 'seis, siete';
console.log('empieza por uno:', cadena.startsWith('uno'));
console.log('empieza por dos:', cadena.startsWith('dos'));
console.log('termina por tres', cadena.endsWith('tres'));
console.log('termina por dos', cadena.endsWith('dos'), '\n');

/*  toString --> convierte números en cadenas de texto.
 */

let numero1 = 79;
let numero2 = 4.56;
console.log('entero convertido a string', numero1.toString());
console.log('Real convertido a string', numero2.toString());

let num = parseInt(numero1.toString());
let num2 = parseFloat(numero2.toString());

console.log(num, num2)



