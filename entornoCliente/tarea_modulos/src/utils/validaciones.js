/*
Src/utils/validaciones.js
•Export función validarPrecio(precio) - debe ser > 0
•Export función validarStock(stock) - debe ser => 0
*/

export function validarPrecio(_precio) {
  return _precio > 0;
}

export function validarStock(_stock) {
  return _stock >= 0;
}
