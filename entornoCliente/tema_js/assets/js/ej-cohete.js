const prompt = require('prompt-sync')();

console.log('--- SISTEMA DE LANZAMIENTO NEUROMANTE ---');
let cuentaAtras = 10;
let combustible = prompt('¿Nivel de combustible (0-100)? ');

if (parseInt(combustible) >= 50) {
  console.log('Combustible suficiente. Iniciando secuencia...');

  while (cuentaAtras >= 0) {
    if (cuentaAtras === 5) {
      console.log('¡Motores encendiéndose!');
    }
    console.log(`T-minus ${cuentaAtras}...`);
    cuentaAtras--;
  }

  console.log('¡IGNICIÓN! El cohete ha despegado. 🚀');
} else {
  console.log('Error: Combustible insuficiente. Misión abortada.');
}
