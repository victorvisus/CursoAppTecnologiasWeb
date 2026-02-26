function solicitaDatos(texto) {
  let dato = prompt(texto);
  return dato;
}

///////////////////////

function sumaDiezNums() {
  console.log('Ejemplo 1: Sumar números del 1 al 10');
  let suma = 0;
  for (let i = 1; i <= 10; i++) {
    suma += i; // Equivalente a: suma = suma + i;
    console.log('La suma interior es: ' + suma);
  }
  alert('La suma es: ' + suma);
}

////////////////////////

function sumaPares() {
  console.log('Ejemplo 2: Sumar los pares entre 0 y 100');
  suma = 0;
  for (i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      suma += i;
    }
  }
  alert('La suma es: ' + suma);
}

////////////////////////

function adivina() {
  // Ejemplo: Adivinar un número
  const numeroSecreto = 7;
  let intentos = 0;
  let adivinado = false;
  let intento;
  while (!adivinado) {
    do {
      intento = parseInt(solicitaDatos('Adivina el número (1-10):'));
    } while (isNaN(intento));
    intentos++;

    if (intento === numeroSecreto) {
      alert(`¡Correcto! Lo has adivinado en ${intentos} intentos.`);
      adivinado = true; // Termina el bucle
    } else {
      alert('Incorrecto. Inténtalo de nuevo.');
    }
  }
}
