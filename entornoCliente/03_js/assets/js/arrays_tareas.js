/*
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

/*
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

/*
Tareas usando reduce():
• Calcula el ingreso total (suma de cantidad * precio de todas las ventas).
• Encuentra el producto con mayor cantidad vendida.
• Cuenta cuántas veces se vendió cada producto (objeto con productos y sus cantidades totales).
• Calcula el precio promedio de todos los productos (sin repetir).
*/
const ventas = [
  { producto: 'Laptop', cantidad: 2, precio: 999 },
  { producto: 'Mouse', cantidad: 5, precio: 25 },
  { producto: 'Teclado', cantidad: 3, precio: 75 },
  { producto: 'Monitor', cantidad: 1, precio: 300 },
  { producto: 'Mouse', cantidad: 2, precio: 25 },
];

console.log(
  `// • Calcula el precio promedio de todos los productos (sin repetir). //`,
);
// (precio1+....precio2)/ num productos
// obliga a 2 cosas:
// reduce con una suma y hayar el length, de un nuevo array en el que no se repitan los productos - filter() - o contar los productos que no se repitan
function calcPromedio() {
  //A partir del array ventas, crear otro sin productos repetidos.

  //TODO: Crear un array sin productos repetidos, revisar esto.
  const productosUnicos = [];
  let productoActual = ventas[0].producto;
  for (let i = 0; i < ventas.length; i++) {
    if (ventas[i].producto === productoActual) {
      productosUnicos.push(ventas[i].producto);
    }
    productoActual = ventas[i].producto;
  }
  //Calcular la suma de los precios
  const sumaPrecios = 0;
  //Sacar la longitud del array
  const contador = productosUnicos.length;
  //realizar el calculo
  const promedio = 0;

  return promedio;
}

/*
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
