/**
 *     <ul>Convierte la nota a letra según:
<li>90-100: A</li>
<li>80-89: B</li>
<li>70-79: C</li>
<li>60-69: D</li>
<li>0-59: F</li>
*/
let calif;

/**
 * @param {number} dato
 */
function notaSwitch(dato) {
  switch (true) {
    case dato >= 90 && dato <= 100:
      calif = 'A';
      break;
    case dato >= 80 && dato <= 89:
      calif = 'B';
      break;
    case dato >= 70 && dato <= 79:
      calif = 'C';
      break;
    case dato >= 60 && dato <= 69:
      calif = 'D';
      break;
    default:
      calif = 'F';
  }
  alert(`Tu calificacion es ${calif}`);
}

/**
 *
 * @param {number} dato
 */
function notaTernario(dato) {
  calif =
    dato >= 90 && dato <= 100
      ? 'A'
      : dato >= 80 && dato <= 89
        ? 'B'
        : dato >= 70 && dato <= 79
          ? 'C'
          : dato >= 60 && dato <= 69
            ? 'D'
            : 'F';

  alert(`Tu calificacion es ${calif}`);
}

/**
 *
 * @returns {number}
 */
function solicitarDato() {
  let dato = parseInt(prompt('¿Cual es la nota numérica (0-100)? '));
  alert(`El valor introducido es: ${dato}.`);

  while (isNaN(dato)) {
    dato = parseInt(prompt('Introduce un valor númerico entre 0 y 100 VALIDO'));
  }

  // Devuelve la edad del usuario
  return parseInt(dato);
}
