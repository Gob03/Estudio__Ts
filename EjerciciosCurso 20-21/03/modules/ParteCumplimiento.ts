export class ParteCumplimiento{
    private _caballeriasSinLimpiar: number
    private _caballeriasLimpias   : number

    constructor( caballeriasSinLimpiar: number, caballeriasLimpias: number){
        this._caballeriasSinLimpiar = caballeriasSinLimpiar
        this._caballeriasLimpias    = caballeriasLimpias
    }

    get caballeriasSinLimpiar(){
        return this._caballeriasSinLimpiar
    }

    get caballeriasLimpias(){
        return this._caballeriasLimpias
    }
}