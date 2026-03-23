function callbackMostrar(num) {
  document.getElementById('resultado').value = num;
}

function sumar(num1, num2) {
  return num1 + num2;
}
function restar(num1, num2) {
  return num1 - num2;
}
function multiplicar(num1, num2) {
  return num1 * num2;
}
function dividir(num1, num2) {
  return num1 / num2;
}

// 1. Corregimos calcular para que reciba la función de operación y la de mostrar
function calcular(num1, num2, operacion, callbackMostrar) {
  const resultado = operacion(num1, num2); // Ejecuta la función (suma, resta...)
  callbackMostrar(resultado); // Ejecuta la función para pintar el resultado
}

// 2. En el evento, definimos qué operación usar según el valor del input
const btnCalcular = document.getElementById('btn-calcular');
btnCalcular.addEventListener('click', () => {
  let num1 = parseInt(document.getElementById('num1').value);
  let num2 = parseInt(document.getElementById('num2').value);
  let opStr = document.getElementById('operacion').value; // Ej: '+'

  let operacionSeleccionada;

  // El switch decide QUÉ FUNCIÓN inyectar
  switch (opStr) {
    case '+':
      operacionSeleccionada = sumar;
      break;
    case '-':
      operacionSeleccionada = restar;
      break;
    case '*':
      operacionSeleccionada = multiplicar;
      break;
    case '/':
      operacionSeleccionada = dividir;
      break;
  }

  // 3. Llamamos a calcular pasándole los datos y los callbacks
  calcular(num1, num2, operacionSeleccionada, callbackMostrar);
});
