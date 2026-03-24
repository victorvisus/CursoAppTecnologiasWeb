/*const numeros = [1, 4, 2, 6, 8, 3]
const numerosCuadrado = numeros.map((n) => n ** 2)
console.log(`Esos son los numeros: ${numeros}`)
console.log(`Y estos sus cuadrados: ${numerosCuadrado}`)
console.log(`Y estos son los pares: ${numeros.filter((n) => n % 2 === 0)}`)
// la suma de todos los elementos de numeros
const valorInicial = 0;
const suma = numeros.reduce(
    (acumulador, valorActual) => acumulador + valorActual,
    valorInicial
);

console.log(suma);
*/
/*
Obtener solo los nombres de los productos.
Filtrar productos que cuesten menos de 100€.
Calcular el precio total de todos los productos.
Encontrar el producto más caro.
Crear un array con los nombres en mayúsculas.
Usa: map, filter, reduce, find, y funciones arrow concisas.
*/

const productos = [
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Mouse", precio: 25, categoria: "Electrónica" },
    { nombre: "Teclado", precio: 50, categoria: "Electrónica" },
    { nombre: "Monitor", precio: 200, categoria: "Electrónica" },
    { nombre: "Silla", precio: 150, categoria: "Muebles" }
];
const nombres = productos.map(p => p.nombre)
console.log(nombres)

const menos100 = productos.filter(p => p.precio<100)
console.log(menos100)

const valorInicial = 0;
const precioTotal = productos.reduce(
    (acumulador, valorActual) => acumulador + valorActual.precio,
    valorInicial
);
console.log(precioTotal)

const productoPrecioMaximo = productos.find(p => Math.max(p.precio))
console.log(productoPrecioMaximo)
const productoMasCaro = productos.find( (p,precio)=> p.precio > precio ? precio=p.precio: precio=precio)
console.log(productoMasCaro)

const nombresMayuscula = productos.map(p => p.nombre.toUpperCase())
console.log(nombresMayuscula)
