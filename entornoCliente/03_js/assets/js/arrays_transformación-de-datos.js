/*
Transformación de Datos. Tienes un array de productos. Usa funciones arrow para:
• Obtener solo los nombres de los productos.
• Filtrar productos que cuesten menos de 100€.
• Calcular el precio total de todos los productos.
• Encontrar el producto más caro.
• Crear un array con los nombres en mayúsculas.
• Usa: map, filter, reduce, find, y funciones arrow concisas.
*/
const productos = [
  { nombre: 'Laptop', precio: 800, categoria: 'Electrónica' },
  { nombre: 'Mouse', precio: 25, categoria: 'Electrónica' },
  { nombre: 'Teclado', precio: 50, categoria: 'Electrónica' },
  { nombre: 'Monitor', precio: 200, categoria: 'Electrónica' },
  { nombre: 'Silla', precio: 150, categoria: 'Muebles' },
];

console.log(`1.- Obtener solo los nombres de los productos: `);
const nombreProductos = productos.map((producto) => producto.nombre);
console.log(nombreProductos);

console.log(`2.- Filtrar productos que cuesten menos de 100€: `);
const productosBaratos = productos.filter((producto) => producto.precio < 100);
console.log(productosBaratos);

console.log(`3.- Calcular el precio total de todos los productos`);
const totalPrecio = productos.reduce(
  (suma, producto) => suma + producto.precio,
  0,
);
console.log(totalPrecio);

console.log(`4.- Encontrar el producto más caro`);
const productoCaro = productos.find((p, maxPrecio) =>
  p.precio > maxPrecio ? (maxPrecio = p.precio) : maxPrecio,
);
console.log(productoCaro);

console.log(`5.- Crear un array con los nombres en mayúsculas`);
const nombresMayusculas = productos.map((p) => p.nombre.toUpperCase());
console.log(nombresMayusculas);
