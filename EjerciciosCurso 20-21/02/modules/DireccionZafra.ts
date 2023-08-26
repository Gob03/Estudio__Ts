import { ParteResults } from "./parteResults"

export class DireccionZafra{
    private partesResultsArray: ParteResults[]

    constructor(){
        this.partesResultsArray = []
    }

    //a)
    getTotalAzucar = () => {
        return this.partesResultsArray.reduce( (sum, actual) => sum + actual.azucarProducida, 0)
    }

    //b)
    getAvgCanaMolida = () => {
        return this.partesResultsArray.reduce( (sum, actual) => sum + actual.canaMolida, 0) / this.partesResultsArray.length
    }

    //c)
    getSortProductionRelation = () => {
        interface productionRelation{
            canaMolida      : number,
            azucarProducida : number,
            relation        : [azucarPro:number, canaMol: number]
        }

        const response: productionRelation[] = []

        this.partesResultsArray.forEach( parteResult => {
            response[ response.length] = {
                canaMolida: parteResult.canaMolida,
                azucarProducida: parteResult.azucarProducida,
                relation: [ parteResult.canaMolida / parteResult.azucarProducida, 1]
            }
        })

        return response.sort( (a, b) => {
            if( a.relation[0] < b.relation[0]) return -1
            else if( a.relation[0] > b.relation[0]) return 1
            return 0
        })
    }

    //d)
    getMayorProductor = () => {
        let mayorProductor = this.partesResultsArray[0]

        this.partesResultsArray.forEach( parte => {
            if( (mayorProductor.canaMolida + mayorProductor.azucarProducida) < (parte.canaMolida + parte.azucarProducida)){
                mayorProductor = parte
            }
        })

        return mayorProductor.centralCode
    }

    //Test
    anadirParteResult = ( parteResult: ParteResults) => {
        this.partesResultsArray[ this.partesResultsArray.length] = parteResult 
    }
}