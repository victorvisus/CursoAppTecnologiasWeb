function saludar(nombre) {
  //console.log('¡Hola, ' + nombre + '!');
  alert('¡Hola, ' + nombre + '!');
}

function despedir(nombre) {
  //console.log('¡Adiós, ' + nombre + '!');
  alert('¡Adiós, ' + nombre + '!');
}

// Función que recibe OTRA FUNCIÓN como parámetro
function procesarUsuario(nombre, accion) {
  accion(nombre); // Ejecutamos la función que nos pasaron
}

// Pasamos diferentes funciones como parámetros
//procesarUsuario('Ana', saludar)   // ¡Hola, Ana!
//procesarUsuario('Luis', despedir) // ¡Adiós, Luis!

//CALCULADORA FLEXIBLE
function sumar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function restar(a, b) {
  return a - b;
}

// Función que recibe una operación como parámetro
function calcular(num1, num2, operacion) {
  const resultado = operacion(num1, num2);
  alert('El resultado es: ' + resultado);
  console.log('El resultado es: ' + resultado);
  return resultado;
}

// Usamos diferentes operaciones
//calcular(5, 3, sumar); // El resultado es: 8
//calcular(5, 3, multiplicar); // El resultado es: 15
//calcular(5, 3, restar); // El resultado es: 2
