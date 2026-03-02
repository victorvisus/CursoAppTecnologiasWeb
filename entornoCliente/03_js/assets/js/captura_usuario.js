const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// variables con valores dados por consola por usuario:
let edad;
rl.question("Introduzca dato: ", (respuesta) => {
  edad = respuesta;
  console.log(`edad: ${edad}`);
  rl.close(); // Importante cerrar la interfaz de entrada de datos
});
