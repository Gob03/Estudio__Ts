import { ParteCumplimiento } from "./ParteCumplimiento";
interface AzcubaParteCumplimiento{
    caballeriasSinLimpiar: number,
    caballeriasLimpias: number,
    provincia: string
}  

export class Azcuba{
    private parteCumplimientoArray: AzcubaParteCumplimiento[]

    constructor(){
        this.parteCumplimientoArray = []
    }

    //a)
    getProvinciaMenosProductiva = () => {
        let provinciaMenosProductiva = this.parteCumplimientoArray[0]

        this.parteCumplimientoArray.forEach( parte => {
            if( provinciaMenosProductiva.caballeriasLimpias > parte.caballeriasLimpias){
                provinciaMenosProductiva = parte
            }
        })

        return provinciaMenosProductiva
    }

    //b)
    getProvinciasDestacadas = () => {
        const provinciasDestacadas: AzcubaParteCumplimiento[] = []

        this.parteCumplimientoArray.forEach( parte => {
            const porcent = (parte.caballeriasLimpias * 100) / (parte.caballeriasLimpias + parte.caballeriasSinLimpiar)
            if( porcent >= 90){
                provinciasDestacadas[ provinciasDestacadas.length] = parte
            }
        })

        return provinciasDestacadas
    }

    //c)
    getProvinciasResagadas = () => {
        const provinciasResagadas: AzcubaParteCumplimiento[] = []

        this.parteCumplimientoArray.forEach( parte => {
            const porcent = (parte.caballeriasLimpias * 100) / (parte.caballeriasLimpias + parte.caballeriasSinLimpiar)
            if( porcent <= 70){
                provinciasResagadas[ provinciasResagadas.length] = parte
            }
        })

        return provinciasResagadas
    }

    //d)
    getCumplimientoAvgPais = () => {
        let total   : number = 0
        let cumplido: number = 0

        this.parteCumplimientoArray.forEach( parte => {
            total    += parte.caballeriasLimpias + parte.caballeriasSinLimpiar
            cumplido += parte.caballeriasLimpias
        })

        return (cumplido * 100) / total
    }

    //Test
    addParteCumplimiento = ( parteCumplimiento: ParteCumplimiento, provincia: string) => {
        this.parteCumplimientoArray[ this.parteCumplimientoArray.length] = {
            caballeriasLimpias   : parteCumplimiento.caballeriasLimpias,
            caballeriasSinLimpiar: parteCumplimiento.caballeriasSinLimpiar,
            provincia            : provincia
        }
    }
}