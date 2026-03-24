/*
La recursividad es una técnica de programación que consiste en que una función se llame a sí misma.
debe terminarse con una condicion base.
*/

/**
 *
 * @param {*} numero
 * @returns
 */
function cuentaAtras(numero) {
  // Condición base: Si el número que recibe es
  // menor de 0 entonces salimos de la función
  if (numero < 0) {
    return;
  }

  // Si el número era mayor o igual a 0, lo mostramos
  console.log(numero);

  // Y llamamos a la función con el número anterior
  cuentaAtras(numero - 1);
}
//cuentaAtras(10);
////////////////////////////////////////////////////////////////////////////

/*
La recursividad se usa muchas veces para solucionar algoritmos.
Por ejemplo, vamos a crear una función que calcule el factorial de un número.

El factorial de un número es el resultado de multiplicar ese número por todos los anteriores hasta llegar a 1.
Por ejemplo, el factorial de 5 es 5 _ 4 _ 3 _ 2 _ 1 = 120
*/

/**
 *
 * @param {*} n
 * @returns
 */
function factorial(n) {
  // Condición base: Si el número es 0 o 1, devolvemos 1
  // y no llamamos a la función de nuevo
  if (n === 0 || n === 1) {
    return 1;
  } else {
    console.log('traza: ' + n);
    // Si el número es mayor que 1, llamamos a la función
    return n * factorial(n - 1);
  }
}

//console.log(factorial(5)); // Resultado: 120
//console.log(factorial(3)); // Resultado: 6

/////////////////////////////////////////////////////////////////////////////////
/*
Escribe una función que calcule la suma de todos los enteros entre 1 y n, de forma recursiva.
Por ejemplo: suma(3) -> 1 + 2 + 3 = 6
*/
function sumaRecursiva(n) {
  if (n === 0) {
    return n;
  }
  return n + sumaRecursiva(n - 1);
}

console.log(sumaRecursiva(100));

/////////////////////////////////////////////////////////////////////////////////
/*
Escribe una función que calcule la sucesión de Fibonacci de forma recursiva.
La sucesión de Fibonacci es una serie de números que empieza por 0 y 1 y cada número es la suma de los dos anteriores.
Por ejemplo: fibonacci(6) -> 8 (0, 1, 1, 2, 3, 5, 8)
*/
function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}
