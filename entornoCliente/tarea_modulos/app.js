/*
•Importa todo lo necesario
•Crea algunos productos
•Agrégalos al gestor
•Muestra la lista y el total
*/
import { formatearPrecio } from './src/utils/formateo.js'; // importa la funcion indicada
import GestorProducto from './src/gestor/GestorProducto.js'; // importa la clase indicada
import Producto from './src/modelos/Producto.js'; // importa la clase indicada

try {
  const miGestor = new GestorProducto();

  const p1 = new Producto('p1', 10, 5);
  const p2 = new Producto('p2', 20, 10);
  const p3 = new Producto('p3', 30, 15);

  miGestor.agregar(p1);
  miGestor.agregar(p2);
  miGestor.agregar(p3);

  console.log(miGestor.listar());
  console.log(`Suma total: ${formatearPrecio(miGestor.obtenerTotal())}`);
} catch (error) {
  console.log(`ERROR: ` + error.message + '\nFin de la ejecución');
}
