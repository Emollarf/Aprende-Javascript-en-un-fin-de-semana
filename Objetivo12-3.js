
class Electrodomestico{
    constructor(encendido, tension){
        this._Encendido = encendido;
        this._Tension = tension;
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
    constructor(rpm, kilos, encendido, tension){
        super(encendido, tension)
        this._RPM = rpm;
        this._Kilos = kilos;

    }
    get RPM(){
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
        console.log('RMP: ', this._RPM);
        console.log('Kilos: ', this._Kilos);
        console.log('Tensión: ', this._Tension);
        if(this.EstaEncendido()){
            console.log('Está encendida la lavadora')
        } else {
            console.log('Está apagada la lavadora')
        }
        console.log('------------------\n');
    }
}

let l = new Lavadora(1200, 7, false, 125);
l.Mostrar();
l.Encender();
l.Kilos = 8;
l.RPM = 1500;
l.Tension = 220;
l.Mostrar();

class Microondas extends Electrodomestico {
    constructor(potenciaMaxima, grill, encendido, tension){
        super(encendido, tension);
        this._PotenciaMaxima = potenciaMaxima;
        this._Grill = grill;
    }
    get PotenciaMaxima(){
        return this._PotenciaMaxima;
    }
    set PotenciaMaxima(potenciaMaxima){
        this._PotenciaMaxima = potenciaMaxima;
    }
    get Grill(){
        return this._Grill
    }
    set Grill(grill){
        this._Grill = grill;

    }
    Mostrar(){
        console.log('-----MICROONDAS-----');
        console.log('Potencia máxima: ', this._PotenciaMaxima);
        console.log('Tiene grill: ', this._Grill);
        console.log('Tensión: ', this._Tension);
        if(this.EstaEncendido()){
            console.log('El microondas está encendido')
        }else{
            console.log('El microondas está apagado');
        }
        console.log('--------------------');
    }
}

let l1 = new Lavadora (1200,7,false,125);
l1.Mostrar();
let m = new Microondas (800,true,false, 220);
m.Mostrar();