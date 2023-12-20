
console.log('OBJETIVO 12: PROGRAMACIÓN ORIENTADA A OBJETOS \n');
console.log('FASE 1: CLASES SIMPLES \n');
/* 
class Punto {
    constructor(x,y)
    {
        this.x = y
        this.y = y
    }
};

let punto = new Punto (3,3);
console.log(punto);
 */
class Punto {
    constructor(x,y)
    {
        this._x = x
        this._y = y
    }
    mostrarPunto(){
        console.log('El punto es (%s, %s)', this._x, this._y);
    }
    get x() {
        return this._x;
        
    }
    set x(nuevaX){
        this._x = nuevaX;
    }
    get y(){
        return this._y
    }
    set y(nuevaY){
        this._y = nuevaY;
    }
};

let punto = new Punto (3,3);
punto.mostrarPunto();
console.log('Cordenada x: %s',punto.x );
console.log('Cordenada y: %s', punto.y );
console.log('---Punto modificado---');
punto.x = 7;
punto.y = 5;
punto.mostrarPunto();
console.log('Cordenada X: %s', punto.x );
console.log('Cordenada y: %s', punto.y );


/* let punto2 = new Punto (8,7);
punto2.mostrarPunto();
 */
console.log(' \n FASE 2: COMPOSICIÓN \n');

class Punto1 {
    constructor (x,y){
        this._x = x
        this._y = y
    }
    mostrarPunto1(){
        console.log('El punto es (%s, %s)', this._x, this._y)
    }
    get x (){
        return this._x
    }
    set x(nuevaX){
        this._x=nuevaX
    }
    get y(){
        return this._y
    }
    set y (nuevaY){
        this._y = nuevaY
    }
}

class Triangulo {
    /* prop _puntox: string {get; set;} */

    constructor (a,b,c){
        this._puntoX = a;
        this._puntoY = b;
        this._puntoZ = c;
    }
    get puntoX(){
        return this._puntoX;
    }
    set puntoX(value){
        this._puntoX = value;
    }
    get puntoY(){
        return this._puntoY;
    }
    set puntoY (value){
        this._puntoY = value;
    }
    get puntoZ(){
        return this._puntoZ;
    }
    set puntoZ(value){
        this._puntoZ = value
    }
    mostrarTriangulo() {
        console.log('---TRIANGULO------');
        this._puntoX.mostrarPunto1();
        this._puntoY.mostrarPunto1();
        this._puntoZ.mostrarPunto1();
        console.log('------------------\n');
    }
}
/* 
let nPunto = new Punto1 (2,2);
nPunto.mostrarPunto1() */

let p1 = new Punto1 (3,4);
let p2 = new Punto1 (6,8);
let p3 = new Punto1 (9,2);

let triangulo = new Triangulo (p1,p2,p3);
triangulo.mostrarTriangulo();


p1.x = 4;
p2.y = 1;
p3.x = 5;
p3.y = 5;

triangulo.mostrarTriangulo();


console.log(' \n FASE 2: HERENCIA \n');

class Electrodomestico {
    constructor(){
        this._Encendido = false;
        this._Tension = 220;
    }
    Encender(){
        this._Encendido = true;
    }
    Apagar(){
        this._Encendido = false;
    }
    EstaEncendido(){
        return this._Encendido;
    }
    get Tension(){
        return this._Tension
    }
    set Tension(tension){
        this._Tension = tension;

    }
}

class Lavadora extends Electrodomestico {
    constructor(){
        super();
        this._RPM = 0;
        this._Kilos = 0;
    }
    get RPM() {
        return this._RPM;
    }
    set RPM(rpm){
        this._RPM = rpm;
    }
    get Kilos(){
        return this._Kilos;
    }
    set Kilos(kilos){
        this._Kilos = kilos;
    }
    Mostrar(){
        console.log('-----LAVADORA-----');
        console.log ('RPM:', this._RPM);
        console.log('Kilos:', this._Kilos);
        console.log('Tension:', this._Tension);
        if (this.EstaEncendido()){
            console.log('La lavadora está encendida');   
        } else {
            console.log('La lavadora está apagada')
        }
        console.log('---------------\n');

    }
};

let l = new Lavadora();
l.Mostrar();
l.Encender();
l.Kilos = 7;
l.RPM = 1200;
l.Tension = 125;
l.Mostrar();