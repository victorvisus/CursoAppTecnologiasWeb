// Ejercicio 10 ////////////////////////////////////////////
// Seleccionamos el botón
const btn10 = document.getElementById('btnEjecutar10');
// Añadimos el "oyente" de eventos
btn10.addEventListener('click', () => {
  const palabra = getAnswer('Introduzca una palabra o frase');
  const letra = getAnswer('Introduzca la letra a encontrar');

  // Llamamos a la lógica
  numeroDeCaracteres(palabra, letra);
});
//// 10A. abecedario //////////
// Seleccionamos el botón
const btn10a = document.getElementById('btnEjecutar10a');
// Añadimos el "oyente" de eventos
btn10a.addEventListener('click', () => {
  const palabra = getAnswer('Introduzca una palabra o frase');

  // Llamamos a la lógica
  contarAbecedario(palabra);
});

// Ejercicio 26 ////////////////////////////////////////////
// Seleccionamos el botón
const btn26 = document.getElementById('btnEjecutar26');
// Añadimos el "oyente" de eventos
btn26.addEventListener('click', () => {
  const matriz = getMatriz();

  // Llamamos a la lógica
  imprimirMatriz(matriz);
});
