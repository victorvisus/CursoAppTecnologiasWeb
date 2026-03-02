function pregunta() {
  let respuesta;
  do {
    respuesta = confirm('Te gusta javascript');
  } while (!respuesta);
}

function tablaMultiplicarFor() {
  for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
      const resultado = i * j;
      console.log(i + ' x ' + j + ' = ' + resultado);
    }
  }
}
