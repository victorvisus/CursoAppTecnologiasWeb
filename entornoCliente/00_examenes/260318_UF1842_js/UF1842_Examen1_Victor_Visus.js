// REPERTORIO 1 /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log(`\n\nREPERTORIO 1\n\n`);
/* **********************************************************************************************************************************
1. Programa una función llamda cuentaVocales que dada una cadena de texto cuente el número de vocales y consonantes (incluyendo repetidas), de modo que, por ejemplo:  
    • La cadena 'Hola Mundo' debe retornar 4 vocales y 5 consonantes.
*/
function contarLetras(cadena) {
  console.log(
    `\n-- Ejercicio 1 --------------------------------------------------------`,
  );
  let vocales = 0;
  let consonantes = 0;
  const vocalesArray = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];

  // Limpiar la cadena
  const cadenaLimpia = cadena.toLowerCase().replaceAll(' ', '');

  // Recorrer la cadena
  for (let i = 0; i < cadenaLimpia.length; i++) {
    for (let j = 0; j < vocalesArray.length; j++) {
      // Recorrer el array que incluye las vocales y lo comparo con la letra de la cadena
      if (cadenaLimpia[i] === vocalesArray[j]) {
        // Si la letra de la cadena es igual a una vocal, aumenta en 1 el contador vocales, y pone a true el flag
        vocales++;
        break;
      }
    }
    // El numero de consonantes es igual a la longitud de la cadena menos el numero de vocales
    consonantes = cadenaLimpia.length - vocales;
  }
  console.log(
    `La cadena '${cadena}' contiene ${vocales} vocales y ${consonantes} consonantes.`,
    `\n\n-- Fin Ejercicio 1 ----------------------------------------------------`,
  );
}
contarLetras('Hola Mundo');

/* **********************************************************************************************************************************
codificar hacieno uso de Object.keys(elSeniorDeLosAnillos), un bucle forEach y una Arrow Function el programa en JavaScript que para este objeto: "elSeniorDeLosAnillos"; muestre únicamente los valores asociados a sus claves, es decir, que muestre por consola lo siguiente:
El señor de los anillos: La comunidad del anillo
2001
178 minutos
Peter Jackson8.8
https://image.tmdb.org/t/p/w500/6MoC9Y089HsZj6lJvTcR63b8J5m.jpg
*/

const elSeniorDeLosAnillos = {
  titulo: 'El señor de los anillos: La comunidad del anillo',
  año: 2001,
  duracion: '178 minutos',
  director: 'Peter Jackson',
  puntuacion_imdb: 8.8,
  poster: 'https://image.tmdb.org/t/p/w500/6MoC9Y089HsZj6lJvTcR63b8J5m.jpg',
};

function mostrarClaves(_obj) {
  console.log(
    `\n-- Ejercicio 2 --------------------------------------------------------`,
  );
  Object.keys(_obj).forEach((key) => {
    console.log(_obj[key]);
  });
  console.log(
    `\n\n-- Fin Ejercicio 2 ----------------------------------------------------`,
  );
}
mostrarClaves(elSeniorDeLosAnillos);

/* **********************************************************************************************************************************
3. Construir un modelo de datos constituido por un Array de 5 objetos llamados: pelicula1,
pelicula2, pelicula3, pelicula4 y pelicula5, donde Cada uno de esos objetos tiene como atributo: id (código único de identificación IMDB ), título, director, país, año de estreno, género y calificación (por ejemplo IMDB). El año de estreno debe estar en el periodo de años consecutivos 1999, 2001, 2002, 2003 y 2004 (uno para cada objeto), dos películas deben ser del género “policíaco” y las tres restantes del género “comedia”. El orden de las películas en el Array debe ser de más antigua a más moderna por año de estreno.
Cada objeto puede contener los datos de tu elección pero siempre bajo el criterio de darles los tipos más adecuados y las restricciones mencionadas en el anterior párrafo.
*/

/**
 * Modelo de datos: Catálogo de Películas
 * Restricciones:
 * - Orden: Cronológico (1999 a 2004)
 * - Géneros: 2 Policíacas, 3 Comedias
 * - Tipos: ID (String), Año (Number), Calificación (Number)
 */

const pelicula1 = {
  id: 'tt0119137',
  titulo: 'Life is Beautiful',
  director: 'Roberto Benigni',
  pais: 'Italia',
  estreno: 1999, // Año inicial
  genero: 'comedia',
  calificacion: 8.6,
};

const pelicula2 = {
  id: 'tt0209144',
  titulo: 'Memento',
  director: 'Christopher Nolan',
  pais: 'EE.UU.',
  estreno: 2001,
  genero: 'policíaco', // Primera policíaca
  calificacion: 8.4,
};

const pelicula3 = {
  id: 'tt0232500',
  titulo: 'City of God',
  director: 'Fernando Meirelles',
  pais: 'Brasil',
  estreno: 2002,
  genero: 'policíaco', // Segunda policíaca
  calificacion: 8.6,
};

const pelicula4 = {
  id: 'tt0290334',
  titulo: 'Love Actually',
  director: 'Richard Curtis',
  pais: 'Reino Unido',
  estreno: 2003,
  genero: 'comedia', // Segunda comedia
  calificacion: 7.6,
};

const pelicula5 = {
  id: 'tt0356910',
  titulo: '50 First Dates',
  director: 'Peter Segal',
  pais: 'EE.UU.',
  estreno: 2004,
  genero: 'comedia', // Tercera comedia
  calificacion: 6.8,
};

// Construcción del Array ordenado de más antigua a más moderna
const catalogoPeliculas = [
  pelicula1,
  pelicula2,
  pelicula3,
  pelicula4,
  pelicula5,
];

// Verificación en consola
console.log('Catálogo cargado con éxito:');
console.table(catalogoPeliculas);
