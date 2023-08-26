import {Pacient} from "./modules/Pacient";
import { Hospital } from "./modules/hospital";

const Pablo = new Pacient('Pablo', 'Torres', 123432142, 23, 'Bayamo', 'male', 3, 12)
const Carla = new Pacient('Carla', 'Benitez', 1234123456, 30, 'Manzanillo', 'female', 3, 4)
const Alan = new Pacient('Alan', 'Blanco', 9876543210, 52, 'Manzanillo', 'male', 3, 6)

const hospital = new Hospital()

hospital.addPacient(Pablo)
hospital.addPacient(Carla)
hospital.addPacient(Alan)

/*console.log(hospital.getSortedPacients(3))
console.log(hospital.getCantMalePacient())
console.log(hospital.getCantFemalePacient())
console.log(hospital.getOlderPacients())*/
console.log(hospital.mostMunicipality())


