
const prompt = require ('prompt-sync')();

class Persona {
    constructor (){
        this._Nombre = '';
        this._Apellidos = '';
        this._FechaNacimiento = '';
    }
    get Nombre (){
        return this._Nombre;
    }
    get Apellidos (){
        return this._Apellidos;
    }
    get FechaNacimiento (){
        return this._FechaNacimiento;
    }
    set Nombre(nuevoNombre){
        this._Nombre = nuevoNombre;
    }
    set Apellidos (nuevosApellidos){
        this._Apellidos = nuevosApellidos;
    }
    set FechaNacimiento(nuevaFecha){
        this._FechaNacimiento = nuevaFecha;
    }
}

module.exports = Persona;