
const persona = require ('./persona');
const direccion = require ('./direccion');
const telefono = require ('./telefono');

class Contacto {
    constructor(){
       this._Persona = new Persona();
       this._Direccion =new Direccion();
       this._Telefono = new Telefono();
       this._Email = '';
    }
    
    get Email(){
        return this._Email;
    } 

    set Email(email){
        this._Email = email;
    }

    set Nombre(nombre){
        this._Persona.Nombre = nombre;
    }

    set Apellidos(apellidos){
        this._Persona.Apellidos = apellidos;
    }

    set FechaNacimiento(fechanacimiento){
        this._Persona.FechaNacimiento = fechanacimiento;
    }

    get Nombre(){
        return this._Persona.Nombre;
    }

    get Apellidos(){
        return this._Persona.Apellidos;
    }

    get FechaNacimiento(){
        return this._Persona.FechaNacimiento;
    }

    set Movil (movil){
        this._Telefono.Movil = movil;
    }

    set Fijo (fijo){
        this._Telefono.Fijo = fijo;
    }

    set Trabajo(trabajo){
        this._Telefono.Trabajo = trabajo;
    }

    get Movil(){
        return this._Telefono.Movil;
    }

    get Fijo (){
        return this._Telefono.Fijo;
    }

    get Trabajo(){
        return this._Telefono.Trabajo;
    } 
    
    set Calle(Calle){
        this._Direccion.Calle = Calle;
    }
    set Piso(Piso){
        this._Direccion.Piso = Piso;
    }
    set Ciudad(ciudad){
        this._Direccion.Ciudad = ciudad;
    }; 

    set CodigoPostal(CodigoPostal){
        this._Direccion.Calle = CodigoPostal;
    }
    get Calle(){
        return this._Direccion.Calle;
    }
    get Piso(){
        return this._Direccion.Piso;
    }
    get Ciudad (){
        return this._Direccion.Ciudad;
    }
    get CodigoPostal(){
        return this._Direccion.CodigoPostal;
    }

    Mostrar(){
        console.log('-----CONTACTO-------');
        console.log('Nombre: ', this._Persona.Nombre);
        console.log('Apellidos: ', this._Persona.Apellidos);
        console.log('Fecha de nacimiento: ', this._Persona.FechaNacimiento);
        console.log('Teléfono móvil: ', this._Telefono.Movil);
        console.log('Teléfono fijo: ', this._Telefono.Fijo);
        console.log('Telefono trabajo: ', this._Telefono.trabajo);
        console.log('Calle: ', this._Direccion.Calle);
        console.log('Piso: ', this._Direccion.Piso);
        console.log('Ciudad: ', this._Direccion.Ciudad);
        console.log('Código Postal: ', this._Direccion.CodigoPostal);
        console.log('Email: ', this._Email);
        console.log('---------------------');

    }   
    
}

module.exports = Contacto;
