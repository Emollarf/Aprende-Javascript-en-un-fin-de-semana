
console.log('OBJETIVO 6');
console.log('FECHAS');

console.log('FASE 1: FECHAS');

/* Los meses en Js son valores de 0 a 11.
    toString()
    toUTCString() --> muestra fecha como cadena de texto omitiendo la correcion horaria y mostrar la fecha UTC.
 */

let fechaActual = new Date();
let fechaPasada = new Date(2023,8,23, 12,30,0,0);
console.log(fechaActual);
console.log('fecha actual:',fechaActual.toString());
console.log(fechaPasada)
console.log('fecha pasada:',fechaPasada.toString());
fechaPasada = new Date(2016,1,21,20,30,0);
console.log('fecha pasada 2:',fechaPasada.toString());
fechaPasada = new Date(2016,1,21,20,30);
console.log('fecha pasada 3:',fechaPasada.toString());
fechaPasada = new Date(2016,1,21,20);
console.log('fecha pasada 4:',fechaPasada.toString());
fechaPasada = new Date(2016,1,21);
console.log('fecha pasada 5:',fechaPasada.toString());
fechaPasada = new Date(2016,1);
console.log('fecha UTC:', fechaActual.toUTCString(), '\n');

/* metodos datos fecha:
    getFullYear: devuelve el valor del año como entero de 4 dígitos
    getMounth: devuelve el valor del mes del 0 al 11.
    getDate: devuelve el valor del día del 1 al 31.
    getHours: devuelve el valor de la hora en el valor del 0 al 23.
    getMinutes: devuelve el valor de los minutos en valor del 0 al 59.
    getSeconds: devuelve el valor de los segundos en valor del 0 al 59.
    getMilliseconds: devuelve el valor de los milisegundos en valor del 0 al 999.
    getDay: devuelve el valor del dia de la semana en valor de 0 al 6 (domingo valor 0).

 */


let fecha = new Date();
console.log('Fecha:', fecha);
console.log('fecha a cadena', fecha.toString());
console.log('Año:', fecha.getFullYear());
console.log('Mes:', fecha.getMonth());
console.log('Día:', fecha.getDate());
console.log('Hora', fecha.getHours());
console.log('Minutos', fecha.getMinutes());
console.log('Segundos:', fecha.getSeconds());
console.log('Milisegundos:', fecha.getMilliseconds());
console.log('Dia de la semana:', fecha.getDay());
console.log('')

/* 
metodos modificacion fecha:
    setFullYear: modifica el valor del año. Pasado en parametros 4 digitos número entero. 
    setMonth : modifica el valor del mes. Pasado como parametro valores del 0 al 11.
    setDate:
    setHours:
    setMinutes:
    setSeconds:
    setMilliseconds:

 */

console.log('fecha a cadena', fecha.toString());
fecha.setFullYear(2020);
console.log('Año:', fecha.toString());
fecha.setMonth(1);
console.log('Mes:', fecha.toString());
fecha.setDate(1);
console.log('Día:', fecha.toString());
fecha.setHours(8)
console.log('Hora', fecha.toString());
fecha.setMinutes(30);
console.log('Minutos', fecha.toString());
fecha.setSeconds(54);
console.log('Segundos:', fecha.toString());
fecha.setMilliseconds(333);
console.log('Milisegundos:', fecha.toString());
console.log('fechas:', fecha.toString());
