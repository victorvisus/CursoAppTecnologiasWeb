const numeros = [1, 4, 2, 6, 8, 0.45, -3];

// con .map() obtenemos un nuevo array, con todos los elementos modificados de acuerdo a la function/callback que le pasemos
const numerosCuadrados = numeros.map((n) => n ** 2);
console.log(`Estos son los numeros: ${numeros}`);
console.log(`y estos sus cuadrados: ${numerosCuadrados}`);

// ejemplo con .map(): doblar todos los elementos de un array
const dobles = numeros.map((n) => n * 2);
console.log(`Estos son los dobles de los numeros: ${dobles}`);
// explicacion: map() itera sobre cada elemento del array y devuelve un nuevo array con los resultados de la funcion callback que se le pasa. En este caso, estamos doblando cada elemento del array numeros y guardando el resultado en el array dobles.

/////////////////////////////////////////////////////////////////////
// con .filter() obtenemos un nuevo array, con todos los elementos que cumplan la condicion
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

/////////////////////////////////////////////////////////////////////
// con .reduce() obtenemos un unico valor, con la suma de todos los elementos
const suma = numeros.reduce((acumulador, n) => acumulador + n, 0);
console.log(`La suma de todos los numeros es: ${suma}`);
// explicacion: reduce() itera sobre cada elemento del array y aplica la funcion callback que se le pasa.
// La funcion callback recibe dos argumentos: el acumulador y el elemento actual.
// En este caso, la funcion callback es (acumulador, n) => acumulador + n, que suma el elemento actual al acumulador.
// El acumulador inicial es 0, y se pasa como segundo argumento a la funcion callback.

// explicacion: la principal diferencia entre map(), filter() y reduce() es que
// map() devuelve un array con la misma longitud que el array original,
// filter() devuelve un array con la misma longitud o menor que el array original,
// y reduce() devuelve un unico valor.
// Ademas, map() y filter() itera sobre cada elemento del array, mientras que
// reduce() itera sobre cada elemento del array y sobre el acumulador.
// En resumen, map() es para transformar el array, filter() es para filtrar el array y reduce() es para reducir el array a un unico valor.

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
