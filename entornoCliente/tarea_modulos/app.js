/*
•Importa todo lo necesario
•Crea algunos productos
•Agrégalos al gestor
•Muestra la lista y el total
*/
import GestorProducto from './src/gestor/GestorProducto.js';
import Producto from './src/modelos/Producto.js';

try {
  const miGestor = new GestorProducto();

  const p1 = new Producto('p1', 10, 5);
  const p2 = new Producto('p2', 20, 10);
  const p3 = new Producto('p3', 30, 15);

  miGestor.agregar(p1);
  miGestor.agregar(p2);
  miGestor.agregar(p3);

  console.log(miGestor.listar());
  console.log(miGestor.obtenerTotal());
} catch (error) {
  console.log(`ERROR: ` + error.message + '\nFin de la ejecución');
}
