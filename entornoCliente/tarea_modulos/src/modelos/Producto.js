/*
•Constructor: nombre, precio, stock
•Métodos: toString(), estaDisponible()
*/

export default class Producto {
  constructor(_nombre, _precio, _stock) {
    this.nombre = _nombre;
    this.precio = _precio;
    this.stock = _stock;
  }
  toString() {
    return `El producto ${this.nombre} tiene ${this.stock} unidades a ${this.precio}€ cada una.`;
  }
  estaDisponible() {
    return this.stock > 0 ? true : false;
  }
}
