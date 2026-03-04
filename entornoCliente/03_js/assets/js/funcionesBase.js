/**
 * Solicita por prompt() datos al usuario.
 * Recive por parametro el texto de la pregunta que debe hacerle al usuario
 *
 * @param {*} text
 * @returns {*} answer
 */
function getAnswer(text) {
  let answer = prompt(text);
  return answer;
}
/**
 * Funcion que imprime un alert con los datos recibidos
 * @param {*} text
 * @param {*} valor
 */
function printAlert(text, valor) {
  alert(text + ' ' + valor);
}

/**
 * Devuelve un numero aleatorio entre 1 y 10
 * @returns {number}
 */
function getRandomNumber() {
  const random = Math.random();
  const multiplied = random * 10;
  const rounded = Math.floor(multiplied);
  const result = rounded + 1;
  return result;
}

/**
 * Verifica si una entrada puede ser tratada como un número válido.
 * * Esta función limpia la entrada buscando un valor flotante y confirma
 * que no sea NaN ni un valor infinito. Es ideal para validar inputs
 * mixtos como "10px" o "25.5 metros".
 *
 * @param {string|number} answer - El valor o cadena que se desea validar.
 * @returns {boolean} Devuelve true si la entrada contiene un número finito, false en caso contrario.
 */
function isNumber(answer) {
  // Convertimos a número y comprobamos si es un número real
  return !isNaN(parseFloat(answer)) && isFinite(answer);
}
