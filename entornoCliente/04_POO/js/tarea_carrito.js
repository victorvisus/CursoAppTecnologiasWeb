/* ********************************************************************************************************************************************
Crea una clase CarritoCompra que:
• Tenga un array de productos vacío al inicio.
• Tenga método agregarProducto(producto) que añade al array.
• Tenga método eliminarProducto(nombreProducto) que lo quita.
• Tenga método calcularTotal() que suma los precios.
• Tenga método aplicarDescuento(porcentaje) al total.
• Tenga método mostrarProductos() que lista todo.
Extra ----------------------------------------------------------
• Tenga método vaciar() que vacia el array de productos.
• Comprobar el tiempo de vida del carrito
*/
import { Utilidades } from './Utilidades.js';

//Estructura de producto:
const producto = { nombre: 'Laptop', precio: 999, cantidad: 1 };
const producto2 = { nombre: 'tablet', precio: 399, cantidad: 1 };
const producto3 = { nombre: 'Teclado', precio: 99, cantidad: 2 };
const producto4 = { nombre: 'Pantalla', precio: 199, cantidad: 3 };

class CarritoCompra {
  constructor() {
    this.PK_carritoCompra = Utilidades.generarId();
    //this.PK_carritoCompra = 2;
    this.productos = [];
  }

  static crearCarrito() {
    return new CarritoCompra();
  }
  agregarProducto(producto) {
    console.log(`agregar producto normal`);
    //recibe un producto, que compruebe si ya existe ( find ) en el array y si existe lo suma y si no existe lo agrega
    this.productos.push(producto);
  }
  agregarProducto(...producto) {
    console.log(`agregar productos por spread`);
    //recibe un producto, que compruebe si ya existe ( find ) en el array y si existe lo suma y si no existe lo agrega
    this.productos.push(...producto);
  }
  eliminarProducto(_producto) {
    //recibe un producto, lo tiene que buscar ( find ) en el array y eliminarlo
    console.log(`Eliminar Pendiente de implementar`);
  }
  calcularTotal() {
    return this.productos.reduce((sum, producto) => sum + producto.precio, 0);
  }
  aplicarDescuento(_dto) {
    //recibe un porcentaje de descuento y lo aplica al total del carrito
    _dto = _dto.replace('%', ''); //quita el simbolo %
    return this.calcularTotal() - (this.calcularTotal() * _dto) / 100;
  }
  mostrarProductos() {
    console.log(this.productos);
  }
}
//CarritoCompra.crearCarrito();

const carrito = new CarritoCompra();
carrito.agregarProducto(producto);

carrito.agregarProducto(producto2, producto3, producto4);
carrito.mostrarProductos();
carrito.eliminarProducto(producto4);
console.log(carrito.calcularTotal());
console.log(carrito.aplicarDescuento('10'));
