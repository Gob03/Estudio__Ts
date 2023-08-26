import { Person } from "./Person";

export class Pacient extends Person {
    private _room: number
    private _bed : number

    constructor( name: string, lastName: string, CI: number, age: number, municipality: string, gender: 'male' | 'female', room: number, bed: number ){
        super( name, lastName, CI, age, municipality, gender)
        this._room = room
        this._bed  = bed 
    }

    get room(){
        return this._room
    }

    set room( room){
        this._room = room
    }

    get bed(){
        return this._bed
    }

    set bed( bed){
        this._bed = bed
    }
}