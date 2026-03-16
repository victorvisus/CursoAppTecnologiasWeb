/*console.log(miValor)
let miValor = 1234 // no puede hacer hoisting
*/
/*console.log(miValor())
function miValor(){
    return 1234
}                   // sí hace hoisting
*/
/*
console.log(miExpresion)
const miExpresion = function miValor(){
    return 1234
}                   // no puede hacer hoisting, es una Función-expresión
*/
/* 
const nombre = "Ramón"
nombre = "Ana"
*/
const arrayNombres = ["Ramón", "Ana"]
const otroArrayNombre = ["Luis", "María"]
arrayNombres.unshift("Carlos") // PERMITIDA LA MODIFIACIÓN
console.log(arrayNombres)
otroArrayNombre = arrayNombres // PROHIBIDA LA REASIGNACIÓN EN ARRAYS Y OBJETOS