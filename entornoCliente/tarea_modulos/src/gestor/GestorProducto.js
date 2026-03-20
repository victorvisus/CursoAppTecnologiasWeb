/*
•Exporta clase GestorProducto
•Propiedad: array de productos
•Método: agregar(producto) - valida antes de agregar
•Método: listar() - devuelve strings formateados
•Método: obtenerTotal() - suma de precio * stock de todos
*/
import { formatearPrecio, formatearStock } from '../utils/formateo.js';
import { validarPrecio, validarStock } from '../utils/validaciones.js';

export default class GestorProducto {
  constructor() {
    this.productos = [];
  }
  agregar(_producto) {
    if (!validarPrecio(_producto.precio) || !validarStock(_producto.stock))
      throw new Error('Producto no valido');
    this.productos.push(_producto);
  }
  listar() {
    let listado = '';
    console.log('LISTANDO PRODUCTOS');
    for (let i = 0; i < this.productos.length; i++) {
      listado = listado.concat(
        '\nProducto: ' +
          this.productos[i].nombre +
          ' -------------------' +
          '\n· Precio: ' +
          formatearPrecio(this.productos[i].precio) +
          '\n· Stock: ' +
          formatearStock(this.productos[i].stock) +
          ' \n',
      );
    }
    return listado;
  }
  obtenerTotal() {
    let total = 0;
    for (let i = 0; i < this.productos.length; i++) {
      total += this.productos[i].precio * this.productos[i].stock;
    }
    return total;
  }
}
