/*
Crear un pequeño sistema de control de acceso que:
• Solicite al usuario su edad mediante 'prompt()'
• Determine si puede acceder a diferentes secciones:
-- Si es menor de 13 años: "Acceso denegado"
-- Si tiene entre 13 y 17 años: "Acceso a contenido para adolescentes"
-- Si mayor de 18 años: "Acceso completo"
• Si tiene acceso completo, comprobar si es mayor de 65 años para ofrecer "Descuento senior"
NOTAS:
- para el uso de prompt() integrarlo el script en un html
- al usuario responderle con alert().
- Hcer una versión del ejercicio para que sea ejecutable de modo independiente.
Sugerencia:
- Integrar en principio el <script> en el doc html y una vez comprobado ponerlo como fichero .js externo.
*/

/*
 * Solicita al usuario su edad mediante 'prompt()'
 * y devuelve su valor.
 *
 * @returns {number} La edad del usuario.
 */
function solicitarEdad() {
  const prompt = require('prompt-sync')();

  // Pide al usuario su edad
  let edad = prompt('¿Cual es tu edad? ');
  console.log(`Hola, tienes ${edad}.`);

  // Devuelve la edad del usuario
  return parseInt(edad);
}
/**
 * Comprueba la edad del usuario y muestra un mensaje
 * dependiendo de su rango de edad.
 *
 * @returns {void} No devuelve nada.
 */
function comprobarEdad(edad) {
  /*   let edad;
  // Solicita la edad al usuario
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  // variables con valores dados por consola por usuario:

  rl.question('Introduzca edad: ', (respuesta) => {
    edad = respuesta; //se asigna edad
    console.log(`edad: ${edad}`);
 */
  //  //  //  //  //

  if (edad < 13) {
    console.log('Acceso denegado' + `\nSu edad es: ${edad}, menor de 13`);
  } else if (edad >= 13 && edad <= 17) {
    console.log(
      'Acceso solo a contenido para adolescentes' +
        `\nSu edad es ${edad}, esta entre 13 y 17 años`,
    );
  } else if (edad >= 18) {
    console.log(
      'Tienes acceso completo' + `\nSu edad es ${edad}, es mayor de 18 años`,
    );

    if (edad > 65) {
      console.log(
        'Tienes un descuento senior' + `por tener ${edad}, y ser mayor de 65`,
      );
    }
  } else {
    console.log('fin del programa');
  }

  /*     rl.close(); // Importante cerrar la interfaz de entrada de datos
  }); */
}
comprobarEdad(solicitarEdad());
