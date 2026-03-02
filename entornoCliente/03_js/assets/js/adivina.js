// Importamos la librería para pedir datos por consola
const prompt = require('prompt-sync')();

// El PC genera un número aleatorio entre 1 y 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento;
let acertado = false;

console.log('--- BIENVENIDO AL JUEGO DEL NÚMERO SECRETO (1 al 10) ---');

// Bucle WHILE: Mientras no acierte, seguimos pidiendo
while (!acertado) {
  intento = parseInt(prompt('Introduce un número: '));

  // CONDICIONALES para dar pistas
  if (intento === numeroSecreto) {
    console.log('¡BRUTAL! Lo has adivinado.');
    acertado = true; // Esto rompe el bucle
  } else if (intento < numeroSecreto) {
    console.log('Demasiado bajo... ¡Sigue intentándolo!');
  } else if (intento > numeroSecreto) {
    console.log('Te has pasado... ¡Prueba otra vez!');
  } else {
    console.log('Eso no parece un número válido.');
  }
}

console.log('Fin del programa. Gracias por jugar en Neuromante.');
