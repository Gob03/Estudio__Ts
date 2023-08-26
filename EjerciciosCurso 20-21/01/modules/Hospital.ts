import { Pacient } from "./Pacient";

export class Hospital{
    private _pacientsArray: Pacient[]

    constructor(){
        console.log("Hospital creado")
        this._pacientsArray = []
    }

    //a)
    getSortedPacients = (room: number) => {
        const pacientsRoomArray = this._pacientsArray.filter( pacient => pacient.room == room)
        return pacientsRoomArray.sort( (a, b) => {
          if( a.name > b.name) return 1
          else if( a.name < b.name) return -1
          
          return 0
        })
    }

    //b)
    getCantMalePacient = (): number => {
        return this._pacientsArray.filter( pacient => pacient.gender == 'male').length
    }

    getCantFemalePacient = (): number => {
        return this._pacientsArray.filter( pacient => pacient.gender == 'female').length
    }

    //c)
    getOlderPacients = () => {
        const agesArray = this._pacientsArray.map( pacient => pacient.age)
        const averageAge = agesArray.reduce( (sumatory, currentValue) => sumatory + currentValue, 0)
        
        return this._pacientsArray.filter( pacient => pacient.age > averageAge / this._pacientsArray.length)
    }

    //d)
    isPacient = (CI: number) => {
        const CIArray = this._pacientsArray.map( pacient => pacient.CI)
        return  CIArray.indexOf( CI) !== -1 ? true : false
    }

    //e)
    mostMunicipality = () => {
        interface pacientsByMunicipality{
            municipality: string,
            cantPacients: number
        }

        const responseArray: pacientsByMunicipality[] = []

        const municipality: string[] = []
        const cantPacients: number[] = []

        for(let i = 0; i < this._pacientsArray.length; i++){
            const municip = municipality.indexOf( this._pacientsArray[i].municipality)
            if( municip != -1) cantPacients[ municip]++
            else{
                municipality[ municipality.length] = this._pacientsArray[i].municipality
                cantPacients[ cantPacients.length] = 1
            }
        }

        for( let i = 0; i < municipality.length; i++){
            responseArray[ responseArray.length] = {
                municipality: municipality[i],
                cantPacients: cantPacients[i]
            }
        }

        console.log(responseArray.sort( (a, b) => {
            if( a.cantPacients < b.cantPacients) return 1
            else if( a.cantPacients > b.cantPacients) return -1
            return 0
        }))

        return responseArray.sort( (a, b) => {
            if( a.cantPacients < b.cantPacients) 1
            else if( a.cantPacients > b.cantPacients) -1
            return 0
        })
    }

    //Tests
    addPacient( pacient: Pacient){
        this._pacientsArray[ this._pacientsArray.length] = pacient
    }
}