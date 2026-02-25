const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('¿Cuál es tu lenguaje de programación favorito?', (respuesta) => {
  console.log(`¡Qué interesante! ${respuesta} es genial.`);
  rl.close(); // Importante cerrar la interfaz de entrada de datos
});
