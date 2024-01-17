
class Telefono {
    constructor()
    {
        this._Fijo = '';
        this._Movil = '';
        this._Trabajo = '';
    }

    get Fijo (){
        return this._Fijo;
    }
    get Movil (){
        return this._Movil;
    }
    get Trabajo(){
        return this._Trabajo;
    }
    set Fijo(valorFijo){
        this._Fijo = valorFijo;
    }
    set Movil(valorMovil){
        this._Movil = valorMovil;
    }
    set Trabajo(valorTrabajo){
        this._Trabajo = valorTrabajo;
    }
}

module.exports = Telefono;
