import { DireccionZafra } from "./modules/direccionZafra";
import { ParteResults } from "./modules/parteResults";

const Cn1 = new ParteResults( 123, 150, 40)
const Cn2 = new ParteResults( 124, 200, 75)
const Cn3 = new ParteResults( 125, 100, 50)

const direccion = new DireccionZafra()
direccion.anadirParteResult( Cn1)
direccion.anadirParteResult( Cn2)
direccion.anadirParteResult( Cn3)


console.log('Total de Azucar Producida: ')
console.log( direccion.getTotalAzucar())

console.log('Promedio de cana molida por los centrales: ')
console.log( direccion.getAvgCanaMolida())

console.log('La relación tonelada de caña molida por tonelada de azúcar producida en cada central:')
console.log( direccion.getSortProductionRelation())

console.log('El código del central con mayor cantidad de toneladas producidas:')
console.log( direccion.getMayorProductor())