/* Table de multiplicar del 1 al 10 */

let x = 1;
let y = 1;
let resul;

while (x <= 10) {
  console.log(`\n---Tabla del ${x}---`);
  while (y <= 10) {
    // mientras y sea menor de 10 se queda en este while
    resul = x * y; // multiplica x por y para establecer el resul
    console.log(`${x} x ${y} = ${x * y}`);
    y++; // aumenta en 1 el valor de y
    //console.log('numero y = ' + y);
  }
  y = 1; // resetea y a 1, para que vuelva a entrar al while de vuelta
  x++; // aumenta en 1 el valor de x
  //console.log('numero x = ' + x + ' numero y = ' + y);
}
