export class ParteResults{
    private _centralCode    : number
    private _canaMolida     : number
    private _azucarProducida: number

    constructor( centralCode: number, canaMolida: number, azucarProducida: number){
        this._centralCode     = centralCode
        this._canaMolida      = canaMolida
        this._azucarProducida = azucarProducida
    }

    get centralCode(){
        return this._centralCode
    }

    get canaMolida(){
        return this._canaMolida
    }

    get azucarProducida(){
        return this._azucarProducida
    }
}