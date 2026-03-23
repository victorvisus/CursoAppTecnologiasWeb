/* ********************************************************************************************************************************************
Tareas usando map():
• Extrae solo los nombres de los productos.
• Calcula el precio con IVA (21%) para cada producto.
• Crea un array de objetos con nombre y valor total en stock (precio * stock).
• Genera strings en formato: "ID-NOMBRE: PRECIO€" (ej: "1-LAPTOP: 999€").
*/
const productos = [
  { id: 1, nombre: 'Laptop', precio: 999, stock: 5 },
  { id: 2, nombre: 'Mouse', precio: 25, stock: 50 },
  { id: 3, nombre: 'Teclado', precio: 75, stock: 30 },
  { id: 4, nombre: 'Monitor', precio: 300, stock: 15 },
];

/* ********************************************************************************************************************************************
Tareas usando filter()
• Encuentra todos los usuarios mayores de edad (edad >= 18).
• Encuentra usuarios activos Y de Madrid.
• Encuentra usuarios menores de edad O no activos.
• Encuentra usuarios cuyo nombre empieza con "L".
• Encuentra usuarios de Madrid mayores de 20 años.
*/
const usuarios = [
  { id: 1, nombre: 'Ana', edad: 17, activo: true, ciudad: 'Madrid' },
  { id: 2, nombre: 'Luis', edad: 25, activo: true, ciudad: 'Barcelona' },
  { id: 3, nombre: 'María', edad: 32, activo: false, ciudad: 'Madrid' },
  { id: 4, nombre: 'Pedro', edad: 19, activo: true, ciudad: 'Valencia' },
  { id: 5, nombre: 'Laura', edad: 28, activo: true, ciudad: 'Madrid' },
];

/* ********************************************************************************************************************************************
Tareas usando reduce():
• Calcula el ingreso total (suma de cantidad * precio de todas las ventas).
• Encuentra el producto con mayor cantidad vendida.
• Cuenta cuántas veces se vendió cada producto (objeto con productos y sus cantidades totales).
• Calcula el precio promedio de todos los productos (sin repetir).
*/
const ventas = [
  { nombreProducto: 'Laptop', cantidad: 2, precio: 999 },
  { nombreProducto: 'Mouse', cantidad: 5, precio: 25 },
  { nombreProducto: 'Teclado', cantidad: 3, precio: 75 },
  { nombreProducto: 'Monitor', cantidad: 1, precio: 300 },
  { nombreProducto: 'Mouse', cantidad: 2, precio: 25 },
];

console.log(
  `// • Calcula el precio promedio de todos los productos (sin repetir). //`,
);

const noRepetidos = [];
// (precio1+....precio2)/ num productos
// obliga a 2 cosas:
// reduce con una suma y hayar el length, de un nuevo array en el que no se repitan los productos - filter() - o contar los productos que no se repitan
/* 
//A partir del array ventas, crear otro sin productos repetidos.
const noRepetidos = [];
let productoActual = ventas[0].producto;
//Calcular la suma de los precios
const sumaPrecios = 0;
//Sacar la longitud del array
const contador = noRepetidos.length;
//realizar el calculo
const promedio = 0;

return promedio; */

function estaRepetido(_nombreDeUnProducto) {
  for (let i = 0; i < noRepetidos.length; i++) {
    if (noRepetidos[i].nombreProducto === _nombreDeUnProducto) {
      return true; // El producto ya estaba en el array
    }
  }
  return false; // El producto no estaba en el array, debe ser añadido al array noRepetidos [**]
}
function crearArrayNoRepetidos() {
  // Recorrido principal en el array de productos
  for (let j = 0; j < ventas.length; j++) {
    if (!estaRepetido(ventas[j].nombreProducto)) {
      // El producto no estaba en el array
      noRepetidos.push(ventas[j]); // Añadir el producto al array noRepetidos [**]
    }
  }
  console.log(ventas);
  console.log(noRepetidos);
}
function calcularPromedio() {
  crearArrayNoRepetidos();

  console.log('Calculos pendientes de implementar');
  // seguir con la logica
}
calcularPromedio();
/* ********************************************************************************************************************************************
Tarea: DEl siguiente objeto:
• Eliminar la clave y el valor de ciudad en cada uno de los arrays
*/
const ciudades = {
  primeraCiudad: [
    { nombre: 'Ana', ciudad: 'Madrid' },
    { nombre: 'María', ciudad: 'Madrid' },
  ],
  segundaCiudad: [{ nombre: 'Luis', ciudad: 'Barcelona' }],
};

/* ********************************************************************************************************************************************
Tareas:
• Usa 'find()' para buscar el producto con código "A003".
• Usa 'find()' para encontrar el primer producto sin stock.
• Usa 'findIndex()' para obtener la posición del producto "Monitor".
• Usa 'findIndex()' para actualizar el stock del producto "A003" a 25 unidades.
• Crea una función 'buscarProducto(codigo)' que devuelva el producto o un mensaje de error.
*/
const inventario = [
  { codigo: 'A001', nombre: 'Laptop', precio: 999, stock: 5 },
  { codigo: 'A002', nombre: 'Mouse', precio: 25, stock: 50 },
  { codigo: 'A003', nombre: 'Teclado', precio: 75, stock: 0 },
  { codigo: 'A004', nombre: 'Monitor', precio: 300, stock: 15 },
  { codigo: 'A005', nombre: 'USB', precio: 10, stock: 100 },
];

/* ********************************************************************************************************************************************
Tareas con some() y every()
• Verifica si hay algún producto con defectos.
•   Verifica si todos los productos pesan entre 95 y 100 gramos.
• Ver si algún producto tiene dimensiones fuera de especificación (largo > 10 o ancho > 5).
• Verifica si todos los productos sin defectos pesan más de 99 gramos.
• Crea una función 'aprobarLote()' que devuelva true solo si todos los productos tiene 0 defectos Y pesan entre 95-110g.
*/
const lote = [
  { id: 1, peso: 100, dimensiones: { largo: 10, ancho: 5 }, defectos: 0 },
  { id: 2, peso: 105, dimensiones: { largo: 10, ancho: 5 }, defectos: 1 },
  { id: 3, peso: 98, dimensiones: { largo: 11, ancho: 5 }, defectos: 0 },
  { id: 4, peso: 103, dimensiones: { largo: 10, ancho: 6 }, defectos: 0 },
  { id: 5, peso: 101, dimensiones: { largo: 10, ancho: 5 }, defectos: 2 },
];
