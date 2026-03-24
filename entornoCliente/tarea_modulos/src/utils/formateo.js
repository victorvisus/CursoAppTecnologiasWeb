/*
Src/utils/formateo.js
•Export función formatearPrecio(precio) - devuelve "XX,00€"
•Export función formatearStock(stock) - devuelve "X unidades"
*/

export function formatearPrecio(_precio) {
  return `${_precio.toFixed(2)}€`;
}

export function formatearStock(_stock) {
  return `${_stock} unidades`;
}
