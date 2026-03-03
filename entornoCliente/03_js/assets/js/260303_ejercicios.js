/**
 * Solicita por prompt() datos al usuario. y devuelve la respuesta
 * @param {*} text
 * @returns
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
 * Escribir una función llamada contrasenaValida que reciba un string y
 *  retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9".
 * De lo contrario debe retornar false.
 */
function comprobarPass(pass) {
  let flag;

  pass === '2Fj(jjbFsuj' || pass === 'eoZiugBf&g9'
    ? (flag = true)
    : (flag = false);

  printAlert('La contraseña introducida es: ', flag);
}
function comprobarPassword(pass) {
  const password = ['2Fj(jjbFsuj', 'eoZiugBf&g9'];

  let flag = password.includes(pass);
  printAlert('La contraseña introducida es: ', flag);
}

/**
 * 3. IMC (ïndice de masa corporal)
 * El índice de masa corporal (IMC), o BMI por sus siglas en inglés,
 * es un valor que determina la cantidad de grasa de una persona.
 *
 * El BMI se calcula con la siguiente formula: peso / altura^2
 * Escribir una función llamada bmi que reciba dos argumentos:
 * peso y altura, y retorne un string con las siguientes posibilidades:
 *
 * "Bajo de peso" si el BMI < 18.5
 * "Normal" si está entre 18.5 y 24.9
 * "Sobrepeso" si está entre 25 y 29.9
 * "Obeso" si es igual o mayor a 30
 */
let imc = (peso, altura) => peso / altura ** 2; //funcion flecha para calcular el coeficiente imc

function comprobarImc(peso, altura) {
  imc = imc(peso, altura);
  console.log(imc);
  let estado =
    imc < 18.5
      ? 'Bajo peso'
      : imc > 18.5 && imc < 24.9
        ? 'Normal'
        : imc > 25 && imc < 29.9
          ? 'Sobrepeso'
          : 'Obeso';

  printAlert('El estado es: ', estado);
}

/**
 * 8. Sumar rango de números
 * Escribir una función llamada sumarRango que reciba dos argumentos: número inicial y número final.
 * La función debe retornar la suma de los números en ese rango (incluyéndolos).
 *
 * Nota: puedes asumir que el número inicial va a ser menor o igual que el número final.
 */
function sumarRango(x, y) {
  console.log(x, y);
  let sum = 0;
  x = parseInt(x);
  y = parseInt(y);

  if (x > y) {
    printAlert('El numero inicial debe ser menor o igual que el numero final');
    x = getAnswer(
      `Por favor introduce un numero inicial valido, inferior de ${y}`,
    );
    sumarRango(x, y);
  } else {
    for (let i = x; i <= y; i++) {
      sum += i;
      console.log('La suma interior es: ' + sum);
    }
  }
  printAlert('La suma es: ', sum);
}

/**
 * 10. Número de caracteres
 * Escribir una función llamada numeroDeCaracteres que reciba un string y un caracter (un string de un caracter).
 * La función debe retornar el número de veces que aparece el caracter en el string.
 */
function numeroDeCaracteres(texto, char) {
  let res = 0;
  texto = texto.toLowerCase();
  char = char.toLowerCase();

  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === char) {
      res++;
    }
  }
  //printAlert('El numero de veces que aparece el caracter es: ', res);
  return res;
}
/**
 * Mejora para que cuente el numero de repeticiones de cada letra del abecedario que aparece en el texto pasado por parámetro,
 *  sin distinguir entre mayusculas y inusculas.
 */
function contarAbecedario(texto) {
  let abc = 'abcdefghijklmnopqrstuvwxyz';
  let res = 0;
  texto = texto.toLowerCase();

  for (let i = 0; i < abc.length; i++) {
    let char = abc[i];
    res = numeroDeCaracteres(texto, char);
    if (res !== 0) {
      console.log(
        'El numero de veces que aparece la letra ' + char + ' es: ',
        res,
      );
    }
  }
}

/**
 * Mejora: acceder al texto de un fichero dentro de la misma carpeta
 *
 * const fs = require('fs');
 * const contenido = fs.readFileSync('datos.txt', 'utf8');
 * console.log(contenido);
 */
function leerFichero(nombreFichero) {
  const fs = require('fs');
  const path = require('path'); // Importante para manejar rutas
  // Construimos la ruta absoluta: Carpeta_Actual + nombre_archivo
  const rutaAbsoluta = path.join(__dirname, nombreFichero);
  console.log(__dirname);
  console.log('Intentando leer en:', rutaAbsoluta);

  const contenido = fs.readFileSync(nombreFichero, 'utf-8', 'r');
  console.log('Contenido leído con éxito');

  console.log(contenido);
}
leerFichero('datos.txt');
