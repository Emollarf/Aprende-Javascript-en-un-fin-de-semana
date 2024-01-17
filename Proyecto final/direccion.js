
class Direccion {
    constructor(){
        this._Calle = '';
        this._Piso = '';
        this._Ciudad = '' ;
        this._CodigoPostal = '';
    }

    get Calle(){
        return this._Calle;
        
    }
    get Piso(){
        return this._Piso;
    }
    get Ciduad(){
        return this._Ciudad
    }
    get CodigoPostal(){
        return this._CodigoPostal
    }
    
    set Calle(valorCalle){
        this._Calle= valorCalle;
        
    }
   set Piso(valorPiso){
     this._Piso = valorPiso;
    }
    set Ciduad( valorCiudad){
        this._Ciudad = valorCiudad;
    }
    set CodigoPostal(valorCodigoPostal){
        this._CodigoPostal = valorCodigoPostal;
    }
}

module.exports = Direccion