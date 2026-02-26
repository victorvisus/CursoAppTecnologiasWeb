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

/**
 * Comprueba la edad del usuario y muestra un mensaje
 * dependiendo de su rango de edad.
 *
 * @returns {void} No devuelve nada.
 */
function comprobarEdad() {
  let edad = parseInt(prompt('Ingrese su edad: ')); //solicita la edad forzando la conversión a int

  // comprueba que NO es un NaN (Not A Number)
  if (!isNaN(edad)) {
    // si es number entra
    if (edad < 13) {
      alert('Acceso denegado' + `\nSu edad es: ${edad}, menor de 13`);
    } else if (edad >= 13 && edad <= 17) {
      alert(
        'Acceso solo a contenido para adolescentes' +
          `\nSu edad es ${edad}, esta entre 13 y 17 años`,
      );
    } else if (edad >= 18) {
      // no es necesario que evalue si es mayor de 18
      alert(
        'Tienes acceso completo' + `\nSu edad es ${edad}, es mayor de 18 años`,
      );

      if (edad > 65) {
        alert(
          'Tienes un descuento senior' + `por tener ${edad}, y ser mayor de 65`,
        );
      }
    } else {
      alert('fin del programa');
    }
  } else {
    alert('La edad introducida no es un número válido');
  }
}
