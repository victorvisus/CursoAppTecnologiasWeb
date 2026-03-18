//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// con .map() obtenemos un nuevo array, con todos los elementos modificados de acuerdo a la function/callback que le pasemos
//map() responde la pregunta: "¿Cómo quiero transformar cada elemento?"
const numeros = [1, 4, 2, 6, 8, 0.45, -3];
const numerosCuadrados = numeros.map((n) => n ** 2);
console.log(`Estos son los numeros: ${numeros}`);
console.log(`y estos sus cuadrados: ${numerosCuadrados}`);

const precios = [19.99, 29.99, 9.675, 49];
const formateados = precios.map((precio) => `$${precio.toFixed(2)}`);
console.log(`Estos son los precios: ${precios}`);
console.log(`y estos con dos decimales: ${formateados}`);

//crear html
const tareas = ['Comprar pan', 'Estudiar', 'Hacer ejercicios'];
const htmlTareas = tareas.map((tarea) => `<li>${tarea}</li>`);
console.log(htmlTareas);
//añadir funcionalidad de crear un string con un <ul> y un <li> para cada tarea
const printHtml0 = `<ul>\n\t${htmlTareas.forEach((tarea) => `<li>${tarea}</li>`)}\n</ul>`;
const printHtml1 = `<ul>\n\t${htmlTareas[0]}\n\t${htmlTareas[1]}\n\t${htmlTareas[2]}\n</ul>`; //acceddiendo directamente a la posicion
const printHtml2 = `<ul>\n\t${htmlTareas.join('\n\t')}\n</ul>`; //usando join
const printHtml999 = `
<ul>\n${tareas.map((tarea) => `\t<li>${tarea}</li>\n`).join('')}</ul>`;

console.log('op 0:\n', printHtml0);
console.log('op 1:\n', printHtml1);
console.log('op 2:\n', printHtml2);
console.log('op DEFINITIVA:\n', printHtml999);

// ejemplo con .map(): doblar todos los elementos de un array
const dobles = numeros.map((n) => n * 2);
console.log(`Estos son los dobles de los numeros: ${dobles}`);
// explicacion: map() itera sobre cada elemento del array y devuelve un nuevo array con los resultados de la funcion callback que se le pasa. En este caso, estamos doblando cada elemento del array numeros y guardando el resultado en el array dobles.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// con .filter() obtenemos un nuevo array, con todos los elementos que cumplan la condicion
//filter() responde la pregunta: "¿Qué elementos quiero mantener?"
const pares = numeros.filter((n) => n % 2 === 0);
console.log(`Estos son los numeros pares: ${pares}`);

// con .filter() obtenemos un nuevo array, con todos los elementos que cumplan la condicion
const numerosMayoresACinco = numeros.filter((n) => n >= 5);
console.log(
  `Estos son los numeros mayores o iguales a 5: ${numerosMayoresACinco}`,
);
// explicacion: filter() itera sobre cada elemento del array y aplica la funcion callback que se le pasa.
// Si la funcion callback devuelve true, el elemento se agrega al nuevo array, si devuelve false se ignora.
// En este caso, la funcion callback es (n) => n >= 5, que devuelve true si el elemento es mayor o igual a 5, y false en caso contrario.

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// con .reduce() obtenemos un unico valor, con la suma de todos los elementos
const suma = numeros.reduce((acumulador, n) => acumulador + n, 0);
console.log(`La suma de todos los numeros es: ${suma}`);

const suma2345 = numeros.reduce((total, numero) => total + numero, 342);
console.log(`La suma de 342 y todos los numeros es: ${suma2345}`);
/*
 explicacion: reduce() itera sobre cada elemento del array y aplica la funcion callback que se le pasa.
 La funcion callback recibe dos argumentos: el acumulador y el elemento actual.
 En este caso, la funcion callback es (acumulador, n) => acumulador + n, que suma el elemento actual al acumulador.
 El acumulador inicial es 0, y se pasa como segundo argumento a la funcion callback.

 explicacion: la principal diferencia entre map(), filter() y reduce() es que
 map() devuelve un array con la misma longitud que el array original,
 filter() devuelve un array con la misma longitud o menor que el array original,
 y reduce() devuelve un unico valor.
 Ademas, map() y filter() itera sobre cada elemento del array, mientras que
 reduce() itera sobre cada elemento del array y sobre el acumulador.
 En resumen, map() es para transformar el array, filter() es para filtrar el array y reduce() es para reducir el array a un unico valor.
*/
// Creamos un objeto que contenga la cantidad de personas que hay en cada profesion
const personas = [
  { nombre: 'Juan', profesion: 'Ingeniero' },
  { nombre: 'Pedro', profesion: 'Abogado' },
  { nombre: 'Ana', profesion: 'Medico' },
  { nombre: 'Luis', profesion: 'Arquitecto' },
];

// Creamos un objeto vacio que sera el acumulador
// El reduce() itera sobre cada elemento del array y aplica la funcion callback que se le pasa
const resumen = personas.reduce(
  (count, persona) => {
    // Si la profesion no existe en el objeto count, se crea con un valor de 0
    // Luego se suma 1 al valor de la profesion
    count[persona.profesion] = (count[persona.profesion] || 0) + 1;

    // Se devuelve el objeto count para que sea pasado como argumento en la siguiente iteracion
    return count;
  },
  // El objeto vacio que se pasa como segundo argumento
  {},
);
console.log(resumen);

const frutas = ['manzana', 'pera', 'manzana', 'naranja', 'uva', 'pera'];
const contador = frutas.reduce((acc, fruta) => {
  // Si la fruta no existe en el objeto acc, se crea con un valor de 0
  // Luego se suma 1 al valor de la fruta
  acc[fruta] = (acc[fruta] || 0) + 1;

  // El objeto acc es el acumulador, que se pasa como argumento en la siguiente iteracion
  // El objeto acc es el que al final contend el conteo de cada fruta
  return acc;
}, {}); // El objeto vacio que se pasa como segundo argumento es el acumulador inicial
console.log(contador);
// resultado: { manzana: 2, pera: 2, naranja: 1, uva: 1 }
// { manzana: 2, pera: 2, naranja: 1, uva: 1 }

//APLANAR UN ARRAY
const array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const array1DFlat = array2D.flat();
const array1DReduce = array2D.reduce((acc, arr) => acc.concat(arr), []);
console.log('aplanar con .flta()', array1DFlat);
console.log('aplanar con .reduce()', array1DReduce);
// resultado: [1, 2, 3, 4, 5, 6, 7, 8, 9]

//AGRUPAR POR PROPIEDAD
const personas2 = [
  { nombre: 'Ana', ciudad: 'Buenos Aires' },
  { nombre: 'Luis', ciudad: 'Cordoba' },
  { nombre: 'Pedro', ciudad: 'Mendoza' },
  { nombre: 'Juan', ciudad: 'Buenos Aires' },
  { nombre: 'Mar a', ciudad: 'Buenos Aires' },
  { nombre: 'Carlos', ciudad: 'Cordoba' },
];
const porCiudad = personas2.reduce((acc, persona) => {
  const ciudad = persona.ciudad;
  if (!acc[ciudad]) acc[ciudad] = [];
  acc[ciudad].push(persona.nombre);
  return acc;
}, {});
console.log(porCiudad);

//–REDUCE para generar objetos o arrays “complejos” o estructurados

const agrupadoPorCiudad = personas2.reduce((acumulador, persona) => {
  // Obtener la ciudad actual
  const ciudad = persona.ciudad;
  // Si la ciudad no existe en el acumulador, crear un arreglo vacío
  if (!acumulador[ciudad]) {
    acumulador[ciudad] = [];
  }
  // Añadir el nombre al arreglo de la ciudad
  acumulador[ciudad].push(persona.nombre);
  return acumulador;
}, {}); // {} es el valor inicial del acumulador
console.log('Agrupado por ciudad: ', agrupadoPorCiudad);

// CON groupBy()
const groupByCiudad2 = Object.groupBy(personas2, (persona) => persona.ciudad);
console.log('Agrupado por ciudad, con groupBy: ', groupByCiudad2);
console.log('Cordoba');
console.log(groupByCiudad2.Cordoba);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// con .includes() comprobamos si un elemento esta en un array
// devuelve true si lo encuentra, false si no
const numeros99 = [1, 2, 3, 4, 5];
console.log(numeros99.includes(3)); // true
console.log(numeros99.includes(6)); // false

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// find() y findIndex() buscan el primer elemento que cumple una condición:
// find() devuelve el elemento en sí (o undefined si no lo encuentra).
// findIndex() devuelve el índice (o -1 si no lo encuentra).

// con array
const numerosFind = [1, 2, 3, 4, 5];
console.log(numerosFind.find((n) => n % 2 === 0)); // 2
console.log(numerosFind.findIndex((n) => n % 2 === 0)); // 1

// con objetos
const usuarios = [
  { id: 1, nombre: 'Ana', ciudad: 'Buenos Aires' },
  { id: 2, nombre: 'Luis', ciudad: 'Cordoba' },
  { id: 3, nombre: 'Pedro', ciudad: 'Mendoza' },
  { id: 4, nombre: 'Juan', ciudad: 'Buenos Aires' },
  { id: 5, nombre: 'Maria', ciudad: 'Buenos Aires' },
  { id: 6, nombre: 'Carlos', ciudad: 'Cordoba' },
  { id: 7, nombre: 'Sofia', ciudad: 'Mendoza' },
  { id: 8, nombre: 'Lucas', ciudad: 'Cordoba' },
];

console.log(usuarios.find((u) => u.id === 3)); // { id: 3, nombre: 'Pedro', ciudad: 'Mendoza' }
console.log(usuarios.findIndex((u) => u.id === 3)); // 2

// con findIndex()
const noExiste = usuarios.findIndex((u) => u.id === 99);
console.log('Usuario con index 99: ', noExiste); // -1

//Uso practica. Eliminar
const indice = usuarios.findIndex((u) => u.id === 2); // 1
console.log('El indice es: ', indice);
if (indice !== -1) {
  //eliminar
  usuarios.splice(indice, 1);

  //O actualizar
  usuarios[indice].nombre = 'Juan Pedro';
}
console.log(usuarios);

//Eliminar el primer  que su nombre empieze por "S"
const indexA = usuarios.findIndex((_usr) => _usr.nombre[0] === 'S'); // Coje la posición 0 del String (primera letra) y la compara === con el caracter indicado
const indexB = usuarios.findIndex((_usr) => _usr.nombre.includes('J')); // busca el caracter indicado en el string "nombre", el problema que da igual la posicion
if (indexA !== -1) {
  usuarios.splice(indexA, 1);
}
console.log('Quitando los que empiezan con "S": ', usuarios);

if (indexB !== -1) {
  usuarios.splice(indexB, 1);
}
console.log('Quitando los que contienen "J": ', usuarios);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// some() y every() evalúan una condición en sus elementos, devolviendo true o false:
// some() retorna true si AL MENOS UNO cumple la condición (como un OR lógico),
// every() retorna true solo si TODOS los elementos la cumplen (como un AND lógico).

// con array
const numerosSome = [1, 2, 3, 4, 5];
console.log(numerosSome.some((n) => n % 2 === 0)); // true
console.log(numerosSome.every((n) => n % 2 === 0)); // false

// con objetos
const usuariosSome = [
  { id: 1, nombre: 'Ana', ciudad: 'Buenos Aires' },
  { id: 2, nombre: 'Luis', ciudad: 'Cordoba' },
  { id: 3, nombre: 'Pedro', ciudad: 'Mendoza' },
  { id: 4, nombre: 'Juan', ciudad: 'Buenos Aires' },
  { id: 5, nombre: 'Maria', ciudad: 'Buenos Aires' },
  { id: 6, nombre: 'Carlos', ciudad: 'Cordoba' },
  { id: 7, nombre: 'Sofia', ciudad: 'Mendoza' },
  { id: 8, nombre: 'Lucas', ciudad: 'Cordoba' },
];

console.log(usuariosSome.some((u) => u.id === 3)); // true
console.log(usuariosSome.every((u) => u.id === 3)); // false

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Combinar metodos

const resultado1 = usuarios
  .filter((u) => u.ciudad === 'Cordoba')
  .map((u) => u.id)
  .reduce((acc, id) => acc + id, 0);
console.log('El resultado es: ', resultado1);

const cordobeses = usuarios.filter((u) => u.ciudad === 'Cordoba');
const idsCordobeses = cordobeses.map((u) => u.id);
const resultado2 = [...idsCordobeses];
console.log('El resultado es: ', resultado2);
