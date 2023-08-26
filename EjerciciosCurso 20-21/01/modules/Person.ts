export class Person{
    private _name       : string
    private _lastName   : string
    private _CI         : number
    private _age        : number
    private _municipality: string
    private _gender     : 'male' | 'female'

    constructor( name: string, lastName: string, CI: number, age: number, municipality: string, gender: 'male' | 'female'){
        this._name         = name,
        this._lastName     = lastName,
        this._CI           = CI,
        this._age          = age,
        this._municipality = municipality
        this._gender       = gender
    }

    get name(){
        return this._name
    }

    get lastName(){
        return this._lastName
    }

    get CI(){
        return this._CI
    }

    get age(){
        return this._age
    }

    get municipality(){
        return this._municipality
    }

    get gender(){
        return this._gender
    }
}