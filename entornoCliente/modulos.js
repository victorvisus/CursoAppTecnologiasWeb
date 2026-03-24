/* ********************************************************************************************************************************************
Crea una aplicación: Src/modelos/Producto.js
•Exporta clase Producto
•Constructor: nombre, precio, stock
•Métodos: toString(), estaDisponible()

Src/utils/validaciones.js
•Export función validarPrecio(precio) - debe ser > 0
•Export función validarStock(stock) - debe ser => 0

Src/utils/formateo.js
•Export función formatearPrecio(precio) - devuelve "XX,00€"
•Export función formatearStock(stock) - devuelve "X unidades"

Src/gestor/GestorProducto.js
•Exporta clase GestorProducto
•Propiedad: array de productos
•Método: agregar(producto) - valida antes de agregar
•Método: listar() - devuelve strings formateados
•Método: obtenerTotal() - suma de precio * stock de todos

Src/utils/formateo.js
•Importa todo lo necesario
•Crea algunos productos
•Agrégalos al gestor
•Muestra la lista y el total
*/
