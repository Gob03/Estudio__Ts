import { Azcuba } from "./modules/Azcuba";
import { ParteCumplimiento } from "./modules/ParteCumplimiento";

const azcuba = new Azcuba()

const parte1 = new ParteCumplimiento(20, 180)
const parte2 = new ParteCumplimiento(23, 82)
const parte3 = new ParteCumplimiento(100, 32)

azcuba.addParteCumplimiento( parte1, 'Granma')
azcuba.addParteCumplimiento( parte2, 'Santiago')
azcuba.addParteCumplimiento( parte3, 'Holguin')

console.log('Provincia menos productiva:')
console.log( azcuba.getProvinciaMenosProductiva())

console.log('Provincias destacadas:')
console.log( azcuba.getProvinciasDestacadas())

console.log('Provincias Resagadas:')
console.log( azcuba.getProvinciasResagadas())

console.log('Porciento de cumplimiento del pais:')
console.log( azcuba.getCumplimientoAvgPais())