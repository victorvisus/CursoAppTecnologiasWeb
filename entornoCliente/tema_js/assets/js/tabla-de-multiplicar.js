/* Table de multiplicar del 1 al 10 */

function tablaMultiplicar() {
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

    // con este if nos saltamos las tablas pares, con el continue
    if (x % 2 === 0) {
      console.log('nos saltamos la tabla del ' + x);
      x++; //Incremento extraordinario para el incremento x++, para que sea 9
      continue;
    }
    //console.log('numero x = ' + x + ' numero y = ' + y);
  }
}
